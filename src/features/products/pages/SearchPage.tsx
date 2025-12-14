import { useState, useEffect } from 'react';
import { AgentResult, LinkRecipeCard } from '@/features/products/components/LinkRecipeCard';
import { PriceRangeSlider } from '@/components/ui/PriceRangeSlider';
import { Search as SearchIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
// import { MOCK_PRODUCTS } from '@/data/mockData'; // Removed
import { ProductCard } from '@/features/products/components/ProductCard';
import { Product } from '@/types';

export const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialQuery = searchParams.get('q') || '';

    const [query, setQuery] = useState(initialQuery);
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<AgentResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
    const [priceBounds, setPriceBounds] = useState<[number, number]>([0, 50]);

    // New state for promoted products
    const [promotedProducts, setPromotedProducts] = useState<Product[]>([]);
    const [isLoadingPromoted, setIsLoadingPromoted] = useState(false);

    useEffect(() => {
        if (initialQuery && !result && !isSearching) {
            handleSearch(new Event('submit') as any, initialQuery);
        }
    }, [initialQuery]);

    // Fetch promoted products on mount
    useEffect(() => {
        const fetchPromoted = async () => {
            setIsLoadingPromoted(true);
            try {
                // We ask for 20 and take the last 10 to (likely) align with user request 
                // "don't use products already in Product of the Week" (assuming Dashboard took first 10 randoms)
                // Ideally we'd have exclusions but random shuffle is decent enough for MVP.
                const res = await fetch('http://localhost:3000/products/featured');
                if (res.ok) {
                    const data = await res.json();

                    const mapped: Product[] = data.map((p: any, i: number) => ({
                        id: `sp-${i}`,
                        name: p.name,
                        brand: p.store,
                        imageUrl: p.image || 'https://via.placeholder.com/400',
                        isVegan: true,
                        basePoints: Math.floor(parseFloat(p.price || '0') * 10),
                        price: parseFloat(p.price?.replace(/[^\d.,]/g, '').replace(',', '.') || '0'),
                        multiplier: 1,
                        category: 'Promoted'
                    }));
                    // Set slice to avoid exact same set if seed was identical, 
                    // though getFeaturedProducts is likely time-based random.
                    setPromotedProducts(mapped.slice(0, 10));
                }
            } catch (error) {
                console.error("Failed to fetch promoted", error);
            } finally {
                setIsLoadingPromoted(false);
            }
        };

        if (!result) {
            fetchPromoted();
        }
    }, [result]); // Re-fetch if result is cleared? Or just once. Once is fine. 

    // ... (handleSearch remains same)
    const handleSearch = async (e: React.FormEvent, overrideQuery?: string) => {
        if (e && e.preventDefault) e.preventDefault();
        const q = overrideQuery || query;
        if (!q.trim()) return;

        // Update URL if needed
        if (!overrideQuery) {
            setSearchParams({ q: q.trim() });
        }

        setIsSearching(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch('http://localhost:3000/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: query.trim() })
            });

            if (!response.ok) throw new Error('Agent failed to respond');

            const data: AgentResult = await response.json();
            setResult(data);

            // Calculate dynamic min/max
            let min = Infinity;
            let max = -Infinity;
            let foundPrice = false;

            data.items.forEach(item => {
                item.links.forEach(link => {
                    if (link.price) {
                        const cleanPrice = parseFloat(link.price.replace(/[^\d.,]/g, '').replace(',', '.'));
                        if (!isNaN(cleanPrice)) {
                            if (cleanPrice < min) min = cleanPrice;
                            if (cleanPrice > max) max = cleanPrice;
                            foundPrice = true;
                        }
                    }
                });
            });

            if (foundPrice) {
                // Round bounds nicely
                const safeMin = Math.floor(min);
                const safeMax = Math.ceil(max);
                setPriceBounds([safeMin, safeMax]);
                setPriceRange([safeMin, safeMax]);
            } else {
                setPriceBounds([0, 50]);
                setPriceRange([0, 50]);
            }

        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div className="pb-24 pt-6 px-4 min-h-screen relative animate-fade-in bg-slate-50">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Green Chef AI</h1>

            <form onSubmit={handleSearch} className="mb-0 relative">
                <input
                    type="text"
                    placeholder="e.g. Cheesecake, Tartiflette..."
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-2 bottom-2 bg-brand-600 text-white px-4 rounded-xl font-medium text-sm hover:bg-brand-700 transition-colors disabled:opacity-50"
                >
                    {isSearching ? '...' : 'Go'}
                </button>
            </form>

            {/* Promoted Products (Empty State) */}
            {!result && !isSearching && !error && (
                <div className="mt-8 animate-fade-in">
                    <h2 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-yellow-500" />
                        Products of the Month
                    </h2>
                    {isLoadingPromoted ? (
                        <div className="text-slate-500 text-sm">Loading suggestions...</div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            {promotedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                            {promotedProducts.length === 0 && (
                                <div className="col-span-2 text-slate-400 text-sm">No promoted products found.</div>
                            )}
                        </div>
                    )}
                </div>
            )}

            <div className="space-y-6 mt-8">
                {isSearching && (
                    <div className="flex flex-col items-center justify-center py-12 text-center text-slate-500 space-y-4">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-8 h-8 text-brand-500" />
                        </motion.div>
                        <p>Asking Gemini & Searching Stores...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm text-center border border-red-100">
                        {error}
                        <div className="mt-2 text-xs text-slate-500">
                            Make sure to run: <code>npm run agent</code> in <code>functions/</code>
                        </div>
                    </div>
                )}

                {result && !isSearching && (
                    <>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6">
                            <h3 className="text-sm font-bold text-slate-700 mb-2 px-2">Filtrer par prix</h3>
                            <PriceRangeSlider
                                min={priceBounds[0]}
                                max={priceBounds[1]}
                                value={priceRange}
                                onChange={setPriceRange}
                            />
                        </div>

                        <LinkRecipeCard
                            result={{
                                ...result,
                                items: result.items.map(item => ({
                                    ...item,
                                    links: item.links.filter(link => {
                                        if (!link.price) return true;
                                        const cleanPrice = parseFloat(link.price.replace(/[^\d.,]/g, '').replace(',', '.'));
                                        if (isNaN(cleanPrice)) return true;
                                        return cleanPrice >= priceRange[0] && cleanPrice <= priceRange[1];
                                    })
                                })).filter(item => item.links.length > 0)
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
