import { describe, it, expect } from 'vitest';
import { calculatePointsForItem, calculateTotalPoints } from './businessLogic';
import { PurchaseItem } from './types';

describe('Points Calculation', () => {
    it('should calculate points correctly for a vegan item', () => {
        const item: PurchaseItem = {
            productId: '1',
            productName: 'Tofu',
            quantity: 2,
            price: 3.00,
            pointsEarned: 0 // to be calculated
        };

        // 10 base * 2 qty * 1 multiplier = 20
        const points = calculatePointsForItem(item, true, 1);
        expect(points).toBe(20);
    });

    it('should apply multiplier correctly', () => {
        const item: PurchaseItem = {
            productId: '2',
            productName: 'Featured Burger',
            quantity: 1,
            price: 5.00,
            pointsEarned: 0
        };

        // 10 base * 1 qty * 2 multiplier = 20
        const points = calculatePointsForItem(item, true, 2);
        expect(points).toBe(20);
    });

    it('should return 0 for non-vegan items', () => {
        const item: PurchaseItem = {
            productId: '3',
            productName: 'Steak',
            quantity: 1,
            price: 10.00,
            pointsEarned: 0
        };
        const points = calculatePointsForItem(item, false, 1);
        expect(points).toBe(0);
    });
});
