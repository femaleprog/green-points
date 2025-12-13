import { Purchase, PurchaseItem } from '@/lib/types';
import { MOCK_PRODUCTS } from '@/data/mockData';

// Simulate fetching last 30 days of purchases
export const syncPurchases = async (userId: string): Promise<Purchase[]> => {
    console.log(`Syncing Auchan purchases for ${userId}...`);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate some random purchases based on mock products
    const randomProduct = MOCK_PRODUCTS[0];
    const randomProduct2 = MOCK_PRODUCTS[2];

    const newPurchase: Purchase = {
        id: `auchan-${Date.now()}`,
        userId,
        storeId: 'auchan',
        date: new Date().toISOString(),
        totalPoints: 0,
        items: [
            {
                productId: randomProduct.id,
                productName: randomProduct.name,
                quantity: 2,
                price: 3.50,
                pointsEarned: randomProduct.basePoints * randomProduct.multiplier * 2
            },
            {
                productId: randomProduct2.id,
                productName: randomProduct2.name,
                quantity: 1,
                price: 2.20,
                pointsEarned: randomProduct2.basePoints * randomProduct2.multiplier * 1
            }
        ]
    };

    newPurchase.totalPoints = newPurchase.items.reduce((acc, item) => acc + item.pointsEarned, 0);

    return [newPurchase];
};
