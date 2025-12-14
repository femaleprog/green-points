import { useEffect, useState } from 'react';
import { useUser } from '@/features/auth/hooks/useUser';
import { MOCK_COMPANIES } from '@/data/mockData';
import { ProductCard } from '@/features/products/components/ProductCard';
import { CompanyCard } from '@/features/companies/components/CompanyCard';
import { ArrowRight, ChevronRight, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '@/types';

export const Dashboard = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const res = await fetch('http://localhost:3000/products/featured');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();

                const mapped = data.map((p: any, i: number) => ({
                    id: `fp-${i}`,
                    name: p.name,
                    brand: p.store,
                    imageUrl: p.image || 'https://via.placeholder.com/400',
                    isVegan: true,
                    basePoints: Math.floor(parseFloat(p.price || '0') * 10),
                    price: parseFloat(p.price?.replace(/[^\d.,]/g, '').replace(',', '.') || '0'), // Parse price
                    multiplier: 1,
                    category: 'Featured'
                }));
                setFeaturedProducts(mapped);
            } catch (err) {
                console.error("Failed to fetch featured products", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeatured();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    if (!user) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="pb-24 pt-4 px-4 space-y-8 animate-fade-in text-slate-900">

            {/* Points & CTA Hero */}
            <section className="bg-brand-600 rounded-3xl p-6 text-white shadow-xl shadow-brand-500/20 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-brand-100 text-sm font-medium mb-1">Your Balance</h2>
                    <div className="text-4xl font-bold mb-4">{new Intl.NumberFormat('en-US').format(user.points)} <span className="text-2xl opacity-80">VP</span></div>

                    <Link to="/rewards" className="inline-flex items-center bg-white text-brand-700 font-semibold px-4 py-2 rounded-xl text-sm hover:bg-brand-50 transition-colors">
                        Redeem Rewards
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                {/* Background Patterns */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-400/20 rounded-full blur-xl -ml-5 -mb-5" />
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-400/20 rounded-full blur-xl -ml-5 -mb-5" />
            </section>

            {/* Main Search Bar */}
            <form onSubmit={handleSearch} className="relative">
                <input
                    type="text"
                    placeholder="Search for vegan alternatives..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-brand-100 text-brand-700 px-4 rounded-xl font-medium text-sm hover:bg-brand-200 transition-colors"
                >
                    Go
                </button>
            </form>

            {/* Weekly Spotlight from Real Data */}
            <section>
                <div className="flex items-center justify-between mb-4 px-1">
                    <h2 className="font-bold text-lg text-slate-900">Product of the Week (From Database)</h2>
                    <Link to="/search" className="text-brand-600 text-sm font-medium flex items-center hover:text-brand-700">
                        See all <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                {isLoading ? (
                    <div className="text-center py-4 text-slate-500">Loading recommendations...</div>
                ) : (
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x">
                        {featuredProducts.length > 0 ? featuredProducts.map((product) => (
                            <div key={product.id} className="snap-start">
                                <ProductCard product={product} />
                            </div>
                        )) : (
                            <div className="px-4 text-slate-500">No products found via API.</div>
                        )}
                    </div>
                )}
            </section>

            {/* Companies of Month */}
            <section>
                <h2 className="font-bold text-lg text-slate-900 mb-4 px-1">Companies of the Month</h2>
                <div className="space-y-4">
                    {MOCK_COMPANIES.map((company) => (
                        <CompanyCard key={company.id} company={company} />
                    ))}
                </div>
            </section>

        </div>
    );
};
