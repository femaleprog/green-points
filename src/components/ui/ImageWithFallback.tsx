import { useState } from 'react';
import { LucideIcon, ImageOff } from 'lucide-react';
import { cn } from '@/utils';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackIcon?: LucideIcon;
    fallbackGradient?: string;
}

export const ImageWithFallback = ({
    src,
    alt,
    className,
    fallbackIcon: Icon = ImageOff,
    fallbackGradient = 'from-slate-100 to-slate-200',
    ...props
}: ImageWithFallbackProps) => {
    const [error, setError] = useState(false);

    if (error || !src) {
        return (
            <div className={cn(
                "flex items-center justify-center bg-gradient-to-br",
                fallbackGradient,
                className
            )}>
                <Icon className="w-1/3 h-1/3 text-slate-400/50" />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setError(true)}
            className={cn("object-cover", className)}
            {...props}
        />
    );
};
