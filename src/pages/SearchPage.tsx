import { useState } from 'react';
import { MOCK_RECIPES, Recipe } from '@/data/mockData';
import { RecipeCard } from '@/components/RecipeCard';
import { Search as SearchIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { CartBubble } from '@/components/CartBubble';

export const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState<Recipe[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsSearching(true);
        setHasSearched(true);
        setResults([]);

        // Mock AI Delay
        setTimeout(() => {
            // Simple mock matching logic
            const found = MOCK_RECIPES.filter(r =>
                r.name.toLowerCase().includes(query.toLowerCase()) ||
                r.originalName.toLowerCase().includes(query.toLowerCase()) ||
                r.ingredients.original.some(i => i.toLowerCase().includes(query.toLowerCase()))
            );
            setResults(found);
            setIsSearching(false);
        }, 1500);
    };

    return (
        <div className="pb-24 pt-6 px-4 min-h-screen relative animate-fade-in">
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
                    className="absolute right-2 top-2 bottom-2 bg-brand-600 text-white px-4 rounded-xl font-medium text-sm hover:bg-brand-700 transition-colors"
                >
                    Go
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
                        <p>Analyzing ingredients & finding eco-swaps...</p>
                    </div>
                )}

                {!isSearching && hasSearched && results.length === 0 && (
                    <div className="text-center py-12 text-slate-500">
                        <p>No green version found yet for this recipe.</p>
                        <p className="text-sm">Try "Cheesecake" or "Tartiflette"</p>
                    </div>
                )}

                {results.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            <CartBubble />
        </div>
    );
};
