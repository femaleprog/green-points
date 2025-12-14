import { motion } from 'framer-motion';
import { Product } from '@/types';
import { Package } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

interface ProductCardProps {
    product: Product;
    onClick?: () => void;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const handleCardClick = () => {
        if (product.url) {
            window.open(product.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden min-w-[160px] max-w-[160px] flex-shrink-0 ${product.url ? 'cursor-pointer' : ''}`}
            onClick={handleCardClick}
        >
            <div className="aspect-square relative bg-slate-100">
                <ImageWithFallback
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full"
                    loading="lazy"
                    fallbackIcon={Package}
                    fallbackGradient="from-blue-50 to-blue-100"
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
                    <span className="text-sm font-bold text-slate-900">
                        {product.price ? `${product.price.toFixed(2)}€` : '--'}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
