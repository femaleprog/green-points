import { cn, formatPoints } from '@/utils';
import { Leaf } from 'lucide-react';

interface PointsBadgeProps {
    points: number;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const PointsBadge = ({ points, size = 'md', className }: PointsBadgeProps) => {
    const sizes = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
    };

    return (
        <div className={cn("inline-flex items-center gap-1.5 rounded-full bg-brand-100 font-bold text-brand-700", sizes[size], className)}>
            <Leaf className={cn("fill-current", size === 'sm' ? "w-3 h-3" : "w-4 h-4")} />
            <span>{formatPoints(points)} VP</span>
        </div>
    );
};
