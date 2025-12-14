import * as fs from 'fs';
import * as path from 'path';
import { Product } from '../models/Product';

let PRODUCT_DB: Product[] = [];

export const loadDb = () => {
    try {
        const csvPath = path.join(__dirname, '../data/products.csv');
        if (fs.existsSync(csvPath)) {
            const content = fs.readFileSync(csvPath, 'utf-8');
            const lines = content.split('\n').slice(1); // Skip header
            PRODUCT_DB = lines
                .filter(l => l.trim())
                .map(line => {
                    const match = line.match(/^"(.*?)","(.*?)",(.*),(.*),(.*)$/);
                    if (match) {
                        return {
                            name: match[1],
                            price: match[2],
                            store: match[3],
                            url: match[4],
                            image: match[5]
                        };
                    }
                    return null;
                })
                .filter(p => p !== null) as Product[];
            console.log(`📦 Loaded ${PRODUCT_DB.length} products from CSV.`);
        } else {
            console.warn("⚠️ No products.csv found. Run 'npm run seed' first.");
        }
    } catch (e) {
        console.error("Failed to load DB", e);
    }
};

// ... existing code ...

export const searchLocalDb = (query: string): Product[] => {
    // ... existing search logic ...
    const qParts = query.toLowerCase().split(' ').filter(p => p.length > 2);

    return PRODUCT_DB
        .map(p => {
            const nameLower = p.name.toLowerCase();
            let score = 0;
            for (const part of qParts) {
                if (nameLower.includes(part)) score++;
            }
            return { product: p, score };
        })
        .filter(match => match.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(match => match.product);
};

export const getFeaturedProducts = (limit: number = 5): Product[] => {
    // Shuffle and pick
    const shuffled = [...PRODUCT_DB].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
};
