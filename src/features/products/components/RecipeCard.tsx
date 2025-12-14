import { Recipe } from '@/data/mockData';
import { useCart } from '@/features/cart/context/CartContext';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { motion } from 'framer-motion';
import { Leaf, Plus, Droplets, ChefHat } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
        >
            <div className="relative h-48">
                <ImageWithFallback
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    className="w-full h-full"
                    fallbackIcon={ChefHat}
                    fallbackGradient="from-orange-100 to-orange-200"
                />
                <div className="absolute top-3 right-3 bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Leaf className="w-3 h-3 fill-current" />
                    +{recipe.pointsEarned} VP
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{recipe.name}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{recipe.description}</p>

                {/* Ingredient Swaps */}
                <div className="bg-brand-50/50 rounded-xl p-3 mb-4 space-y-2 border border-brand-100">
                    <h4 className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Droplets className="w-3 h-3" /> Smart Swaps
                    </h4>
                    <div className="grid gap-2">
                        {recipe.ingredients.alternatives.map((alt, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm">
                                <span className="text-slate-400 line-through decoration-slate-300">{recipe.ingredients.original[idx]}</span>
                                <span className="text-slate-300 mx-1">→</span>
                                <span className="font-semibold text-brand-700">{alt.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Stats */}
                <div className="flex gap-2 mb-5">
                    <div className="flex-1 bg-slate-50 rounded-lg p-2 text-center border border-slate-100">
                        <div className="text-lg font-bold text-brand-600">-{recipe.carbonSavedKg}</div>
                        <div className="text-[10px] text-slate-500 uppercase font-medium">kg CO2</div>
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-lg p-2 text-center border border-slate-100">
                        <div className="text-lg font-bold text-brand-600">{recipe.animalsSaved}</div>
                        <div className="text-[10px] text-slate-500 uppercase font-medium">Animals</div>
                    </div>
                </div>

                <AnimatedButton onClick={() => addToCart(recipe)} className="w-full justify-center gap-2">
                    <Plus className="w-4 h-4" /> Add to Cart
                </AnimatedButton>
            </div>
        </motion.div>
    );
};
