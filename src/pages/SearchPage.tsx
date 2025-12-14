import { useState } from 'react';
import { AgentResult, LinkRecipeCard } from '@/components/LinkRecipeCard';
import { PriceRangeSlider } from '@/components/PriceRangeSlider';
import { Search as SearchIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<AgentResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
    const [priceBounds, setPriceBounds] = useState<[number, number]>([0, 50]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

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

        } catch (err) {
            console.error(err);
            setError('Failed to connect to the Green Agent. Is the backend running?');
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div className="pb-24 pt-6 px-4 min-h-screen relative animate-fade-in bg-slate-50">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Green Chef AI</h1>

            <form onSubmit={handleSearch} className="mb-8 relative">
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

            <div className="space-y-6">
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
                                        if (!link.price) return true; // Keep unknown prices? Or filter? Let's keep.
                                        // Price is string "X.XX €" or "X.XX" or similar.
                                        // Need to parse standard float.
                                        const cleanPrice = parseFloat(link.price.replace(/[^\d.,]/g, '').replace(',', '.'));
                                        if (isNaN(cleanPrice)) return true;
                                        return cleanPrice >= priceRange[0] && cleanPrice <= priceRange[1];
                                    })
                                })).filter(item => item.links.length > 0) // Hide ingredients with 0 matches after filter? Or show empty? 
                                // User said "afficher que les ingrédients compris dans cette tranche".
                                // If an ingredient has 0 alternatives in range, maybe hide it or show empty state.
                                // Let's keep it but links will be empty, LinkRecipeCard handles empty links.
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
