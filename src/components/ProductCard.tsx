import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    product: Product;
    onClick?: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden min-w-[160px] max-w-[160px] flex-shrink-0"
        >
            <div className="aspect-square relative bg-slate-100">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                {product.multiplier > 1 && (
                    <div className="absolute top-2 right-2 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        ×{product.multiplier}
                    </div>
                )}
            </div>
            <div className="p-3">
                <div className="text-xs text-slate-500 mb-0.5">{product.brand}</div>
                <h3 className="text-sm font-semibold text-slate-900 leading-tight line-clamp-2 h-10">{product.name}</h3>

                <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">
                        +{product.basePoints * product.multiplier} pts
                    </span>
                    <button className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-500 hover:text-white transition-colors">
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
