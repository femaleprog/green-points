import { useUser } from '@/hooks/useUser';
import { MOCK_PRODUCTS, MOCK_COMPANIES } from '@/data/mockData';
import { ProductCard } from '@/components/ProductCard';
import { CompanyCard } from '@/components/CompanyCard';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const { user } = useUser();

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
            </section>

            {/* Weekly Spotlight */}
            <section>
                <div className="flex items-center justify-between mb-4 px-1">
                    <h2 className="font-bold text-lg text-slate-900">Product of the Week</h2>
                    <button className="text-brand-600 text-sm font-medium flex items-center">
                        See all <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x">
                    {MOCK_PRODUCTS.map((product) => (
                        <div key={product.id} className="snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
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
