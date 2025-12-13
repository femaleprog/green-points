import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatPoints = (points: number) => {
    return new Intl.NumberFormat('en-US').format(points);
};
