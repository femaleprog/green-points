import { useCart } from '@/contexts/CartContext';
import { useUser } from '@/hooks/useUser';
import { AnimatedButton } from '@/components/AnimatedButton';
import { Trash, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const CartPage = () => {
    const { items, removeFromCart, clearCart } = useCart();
    const { user } = useUser(); // In real app, used to credit points
    const navigate = useNavigate();

    const totalPoints = items.reduce((acc, item) => acc + (item.recipe.pointsEarned * item.quantity), 0);
    const totalCarbon = items.reduce((acc, item) => acc + (item.recipe.carbonSavedKg * item.quantity), 0);

    const handleValidate = () => {
        // Mock validation
        if (confirm(`Validate cart and earn ${totalPoints} VP?`)) {
            clearCart();
            alert(`Great choice! You just saved ${totalCarbon.toFixed(1)}kg of CO2!`);
            navigate('/');
        }
    };

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 animate-fade-in">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <Leaf className="w-10 h-10 text-slate-400" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
                <p className="text-slate-500 mb-6">Find eco-friendly recipes to cook!</p>
                <AnimatedButton onClick={() => navigate('/search')}>
                    Find Recipes
                </AnimatedButton>
            </div>
        );
    }

    return (
        <div className="pb-32 pt-6 px-4 space-y-6 animate-fade-in">
            <h1 className="text-2xl font-bold text-slate-900">Your Green Cart</h1>

            <div className="space-y-4">
                <AnimatePresence>
                    {items.map(({ recipe, quantity }) => (
                        <motion.div
                            key={recipe.id}
                            layout
                            exit={{ opacity: 0, x: -50 }}
                            className="bg-white p-4 rounded-2xl flex gap-4 shadow-sm border border-slate-100"
                        >
                            <img src={recipe.imageUrl} className="w-20 h-20 rounded-xl object-cover" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-slate-900">{recipe.name}</h3>
                                    <button
                                        onClick={() => removeFromCart(recipe.id)}
                                        className="text-slate-400 hover:text-red-500 p-1"
                                    >
                                        <Trash className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                                    <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-semibold">Qty: {quantity}</span>
                                    <span className="text-brand-600 font-bold">+{recipe.pointsEarned * quantity} VP</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Summary Footer */}
            <div className="fixed bottom-20 left-4 right-4 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 z-30 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <div className="text-xs text-slate-500 uppercase font-semibold">Total Impact</div>
                        <div className="text-brand-600 font-bold text-lg">
                            -{totalCarbon.toFixed(1)}kg CO2
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-slate-500 uppercase font-semibold">Total Points</div>
                        <div className="font-black text-2xl text-brand-600">
                            {totalPoints} VP
                        </div>
                    </div>
                </div>
                <AnimatedButton onClick={handleValidate} className="w-full justify-center py-4 text-lg">
                    Validate & Cook <ArrowRight className="ml-2 w-5 h-5" />
                </AnimatedButton>
            </div>
        </div>
    );
};
