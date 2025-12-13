import { describe, it, expect, vi } from 'vitest';
import { MOCK_RECIPES } from '@/data/mockData';

describe('Cart Business Logic', () => {
    it('should calculate points correctly for cart', () => {
        const cartItems = [
            { recipe: MOCK_RECIPES[0], quantity: 2 }, // 45 * 2 = 90
            { recipe: MOCK_RECIPES[1], quantity: 1 }  // 80 * 1 = 80
        ];

        const totalPoints = cartItems.reduce((acc, item) => acc + (item.recipe.pointsEarned * item.quantity), 0);
        expect(totalPoints).toBe(170);
    });

    it('should calculate carbon savings correctly', () => {
        const cartItems = [
            { recipe: MOCK_RECIPES[0], quantity: 10 } // 2.5 * 10 = 25kg
        ];

        const carbon = cartItems.reduce((acc, item) => acc + (item.recipe.carbonSavedKg * item.quantity), 0);
        expect(carbon).toBe(25);
    });
});
