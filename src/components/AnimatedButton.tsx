import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    isLoading?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    className,
    variant = 'primary',
    isLoading,
    disabled,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/50 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

    const variants = {
        primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/25",
        secondary: "bg-brand-100 text-brand-700 hover:bg-brand-200",
        outline: "border-2 border-brand-200 text-brand-700 hover:bg-brand-50",
        ghost: "bg-transparent text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            className={cn(baseStyles, variants[variant], className)}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </motion.button>
    );
};
