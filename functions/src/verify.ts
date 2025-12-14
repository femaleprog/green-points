import { planQuery } from './agent/planner';
import { aggregateSearch } from './agent/scraper';

const verify = async () => {
    const query = process.argv[2] || 'Raclette';
    console.log(`Testing Agent with query: "${query}"`);

    console.log('--- Step 1: Planning (Gemini/Mock) ---');
    const plan = await planQuery(query);
    console.log(JSON.stringify(plan, null, 2));

    console.log('\n--- Step 2: Scraping (Real Web) ---');
    for (const ing of plan.ingredients) {
        console.log(`Searching for: ${ing.veganAlternative}`);
        const results = await aggregateSearch(ing.veganAlternative);
        console.log(`Found ${results.length} results:`);
        results.forEach(r => console.log(`- [${r.store}] ${r.name} (${r.price}) -> ${r.url}`));
    }
};

verify().catch(console.error);
