import { Request, Response } from 'express';
import { analyzeQuery } from '../services/searchLogic';
import { searchLocalDb } from '../services/productService';

export const searchController = async (req: Request, res: Response) => {
    console.log("Search Controller Hit!", req.body);
    const { query } = req.body;
    if (!query) {
        res.status(400).send({ error: 'Query required' });
        return;
    }

    try {
        // Simplified Logic: Direct analysis
        const analysis = await analyzeQuery(query);
        // console.log('Analysis:', analysis);

        const results = await Promise.all(analysis.ingredients.map(async (ing) => {
            // console.log(`Database Lookup for: ${ing.veganAlternative}`);
            const links = searchLocalDb(ing.veganAlternative);

            return {
                original: ing.original,
                alternative: ing.veganAlternative,
                links: links.map(l => ({ ...l, store: l.store as any }))
            };
        }));

        res.json({
            isDish: analysis.isDish,
            name: analysis.originalName,
            items: results
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Agent Error' });
    }
};
