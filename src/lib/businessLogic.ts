import { PurchaseItem } from './types';

export const calculatePointsForItem = (item: PurchaseItem, isVeganProduct: boolean, multiplier: number = 1): number => {
    if (!isVeganProduct) return 0;

    const baseRate = 10; // 10 points per item
    return baseRate * item.quantity * multiplier;
};

export const calculateTotalPoints = (items: PurchaseItem[]): number => {
    return items.reduce((total, item) => total + item.pointsEarned, 0);
};
