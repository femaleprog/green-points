import { Purchase } from '@/lib/types';
import { MOCK_PRODUCTS } from '@/data/mockData';

export const syncPurchases = async (userId: string): Promise<Purchase[]> => {
    console.log(`Syncing Carrefour purchases for ${userId}...`);
    await new Promise(resolve => setTimeout(resolve, 1200));

    const p1 = MOCK_PRODUCTS[1]; // Beyond Burger (x2 points!)

    const newPurchase: Purchase = {
        id: `carrefour-${Date.now()}`,
        userId,
        storeId: 'carrefour',
        date: new Date().toISOString(),
        totalPoints: 0,
        items: [
            {
                productId: p1.id,
                productName: p1.name,
                quantity: 1,
                price: 5.99,
                pointsEarned: p1.basePoints * p1.multiplier // 50 * 2 = 100 pts
            }
        ]
    };

    newPurchase.totalPoints = newPurchase.items.reduce((acc, item) => acc + item.pointsEarned, 0);

    return [newPurchase];
};
