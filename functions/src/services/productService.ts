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
                    // Pandas CSV format: Name(maybe quoted),"Price",Store,URL,Image,Rating,ReviewCount
                    // Regex assumes Price is always quoted (e.g. "12,99 €")
                    const match = line.match(/^(.*),"([^"]+)",([^,]*),([^,]*),([^,]*),([^,]*),([^,]*)$/);
                    if (match) {
                        let name = match[1].replace(/^"|"$/g, ''); // Remove potential quotes from name
                        let url = match[4];
                        if (url.startsWith('https://www.carrefour.frhttps://www.carrefour.fr')) {
                            url = url.replace('https://www.carrefour.frhttps://www.carrefour.fr', 'https://www.carrefour.fr');
                        }

                        let image = match[5];
                        if (image.includes('Carrefour_files') || image.startsWith('./')) {
                            const filename = image.split('/').pop();
                            if (filename) image = `https://media.carrefour.fr/medias/${filename}`;
                        }

                        // Read Ratings from CSV
                        const rating = parseFloat(match[6]);
                        const reviewCount = parseInt(match[7]);

                        return {
                            name,
                            price: match[2],
                            store: match[3],
                            url,
                            image,
                            rating: isNaN(rating) ? 0 : rating,
                            reviewCount: isNaN(reviewCount) ? 0 : reviewCount
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
        .sort((a, b) => {
            // Text match score first
            if (b.score !== a.score) return b.score - a.score;
            // Then by Rating (High to Low)
            return (b.product.rating || 0) - (a.product.rating || 0);
        })
        .map(match => match.product);
};

export const getFeaturedProducts = (limit: number = 5): Product[] => {
    // Sort by rating (High to Low)
    const sorted = [...PRODUCT_DB].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit);
};
