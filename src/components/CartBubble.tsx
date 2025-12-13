import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartBubble = () => {
    const { itemCount } = useCart();

    return (
        <AnimatePresence>
            {itemCount > 0 && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed bottom-24 right-4 z-50 pointer-events-auto"
                >
                    <Link to="/cart">
                        <button className="bg-brand-600 text-white p-4 rounded-full shadow-xl shadow-brand-600/30 flex items-center justify-center relative hover:bg-brand-700 transition-colors">
                            <ShoppingBasket className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                {itemCount}
                            </span>
                        </button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
