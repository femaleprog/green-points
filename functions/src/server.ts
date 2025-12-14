import express, { Request, Response } from 'express';
import cors from 'cors';
import * as fs from 'fs';
import * as path from 'path';
import { planQuery } from './agent/planner';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// --- Load Database ---
interface Product {
    name: string;
    price: string;
    store: string;
    url: string;
    image: string;
}

let PRODUCT_DB: Product[] = [];

const loadDb = () => {
    try {
        const csvPath = path.join(__dirname, 'data/products.csv');
        if (fs.existsSync(csvPath)) {
            const content = fs.readFileSync(csvPath, 'utf-8');
            const lines = content.split('\n').slice(1); // Skip header
            PRODUCT_DB = lines
                .filter(l => l.trim())
                .map(line => {
                    // Simple CSV parse handling quotes roughly
                    // For robust parsing, we'd use a library, but for this specific generated CSV, a regex split is okay-ish
                    // Or just use the seed logic: name,price,store,url,image. 
                    // Let's assume no commas in fields for MVP or simple split
                    // Actually, simpler: just split by comma if we generated it carefully, but seed uses quotes.
                    // Let's do a reliable manual parse since we wrote it.
                    // Name and Price are quoted.

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

loadDb();

const searchLocalDb = (query: string): Product[] => {
    const qParts = query.toLowerCase().split(' ').filter(p => p.length > 2); // Split into keywords, ignore small words

    return PRODUCT_DB
        .map(p => {
            const nameLower = p.name.toLowerCase();
            // Count how many keywords match
            let score = 0;
            for (const part of qParts) {
                if (nameLower.includes(part)) score++;
            }
            return { product: p, score };
        })
        .filter(match => match.score > 0) // Must match at least one keyword
        .sort((a, b) => b.score - a.score) // Sort by best match
        .map(match => match.product);
};

app.post('/search', async (req: Request, res: Response) => {
    const { query } = req.body;
    if (!query) {
        res.status(400).send({ error: 'Query required' });
        return;
    }

    try {
        console.log(`Analyzing query: ${query}`);
        const plan = await planQuery(query);
        console.log('Plan:', plan);

        const results = await Promise.all(plan.ingredients.map(async (ing) => {
            console.log(`Database Lookup for: ${ing.veganAlternative}`);
            // Use the fallback/heuristic alternative or just the original if map fails
            const links = searchLocalDb(ing.veganAlternative);

            // If strictly 0 results, try broader terms?
            // For now, return what we have.

            return {
                original: ing.original,
                alternative: ing.veganAlternative,
                links: links.map(l => ({ ...l, store: l.store as any }))
            };
        }));

        res.json({
            isDish: plan.isDish,
            name: plan.originalName,
            items: results
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Agent Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Agent Server running on port ${PORT}`);
});
