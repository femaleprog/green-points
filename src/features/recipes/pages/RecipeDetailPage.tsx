import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_RECIPES } from '@/data/mockData';
import { findProductSubstitutes } from '@/services/recipeService';
import { useState } from 'react';
import { ChevronLeft, Info, ExternalLink, Leaf, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RealProduct } from '@/data/realProducts';

export const RecipeDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const recipe = MOCK_RECIPES.find(r => r.id === id);

    const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
    const [substitutes, setSubstitutes] = useState<RealProduct[]>([]);

    if (!recipe) return <div className="p-8 text-center">Recipe not found</div>;

    const handleIngredientClick = (altName: string) => {
        const found = findProductSubstitutes(altName);
        setSubstitutes(found);
        setSelectedIngredient(altName);
    };

    return (
        <div className="pb-24 bg-white min-h-full">
            {/* Header Image */}
            <div className="relative h-64 w-full">
                <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-full object-cover" />
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-slate-700" />
                </button>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                    <h1 className="text-2xl font-bold text-white">{recipe.name}</h1>
                    <p className="text-white/80 text-sm">Original: {recipe.originalName}</p>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Stats */}
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex-shrink-0 bg-green-50 px-4 py-2 rounded-xl flex flex-col items-center">
                        <span className="text-xl font-bold text-green-700">+{recipe.pointsEarned}</span>
                        <span className="text-xs text-green-600 font-medium">Points</span>
                    </div>
                    <div className="flex-shrink-0 bg-blue-50 px-4 py-2 rounded-xl flex flex-col items-center">
                        <span className="text-xl font-bold text-blue-700">{recipe.carbonSavedKg}kg</span>
                        <span className="text-xs text-blue-600 font-medium">CO2 Saved</span>
                    </div>
                    <div className="flex-shrink-0 bg-amber-50 px-4 py-2 rounded-xl flex flex-col items-center">
                        <span className="text-xl font-bold text-amber-700">{recipe.animalsSaved}</span>
                        <span className="text-xs text-amber-600 font-medium">Animals</span>
                    </div>
                </div>

                <p className="text-slate-600 leading-relaxed">{recipe.description}</p>

                {/* Ingredients */}
                <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-600" />
                        Vegan Swaps
                    </h2>
                    <div className="space-y-3">
                        {recipe.ingredients.original.map((orig, idx) => {
                            const alt = recipe.ingredients.alternatives[idx];
                            const isSelected = selectedIngredient === alt?.name;

                            return (
                                <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-slate-500 line-through text-sm">{orig}</span>
                                        <span className="text-slate-300">→</span>
                                        <span className="font-semibold text-green-700">{alt?.name}</span>
                                    </div>

                                    <button
                                        onClick={() => handleIngredientClick(alt?.name)}
                                        className="w-full mt-2 py-2 px-3 bg-white border border-green-200 rounded-lg text-sm font-medium text-green-700 flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
                                    >
                                        <ShoppingBag size={14} />
                                        Find Products
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Substitutes Modal / Bottom Sheet */}
            <AnimatePresence>
                {selectedIngredient && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedIngredient(null)}
                            className="fixed inset-0 bg-black/40 z-40"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 p-6 max-h-[80vh] overflow-y-auto max-w-md mx-auto"
                        >
                            <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">Products for "{selectedIngredient}"</h3>

                            {substitutes.length === 0 ? (
                                <div className="text-center py-8 text-slate-500">
                                    No direct product matches found in store.
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {substitutes.map(prod => (
                                        <a
                                            key={prod.id}
                                            href={prod.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:border-green-200 hover:shadow-sm transition-all"
                                        >
                                            <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                                                {prod.image ? (
                                                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-slate-400">?</div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-slate-900 text-sm line-clamp-2">{prod.name}</h4>
                                                <div className="flex items-center justify-between mt-1">
                                                    <span className="text-green-600 font-bold">{prod.price}</span>
                                                    <span className="text-xs text-slate-500 px-2 py-1 bg-slate-100 rounded-full">{prod.store}</span>
                                                </div>
                                            </div>
                                            <ExternalLink size={16} className="text-slate-400" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
