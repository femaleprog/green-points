import * as fs from 'fs';
import * as path from 'path';
import { scrapeAuchan, scrapeCarrefour, scrapeMonoprix, scrapeOfficialVeganShop } from '../agent/scraper';

// Define the "Vegan Basket" keywords to crawl
const CRAWL_KEYWORDS = [
    "Fromage raclette vegan", "Fromage rappé vegan", "Tofu fumé", "Seitan",
    "Lait d'avoine", "Lait de soja", "Crème de soja",
    "Yaourt soja nature", "Yaourt coco",
    "Steak végétal", "Lardons végétaux", "Saucisses végétales",
    "Mozzarella vegan", "Faux-mage", "Végétal"
];

// Helper to delay requests (be polite)
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const runSeed = async () => {
    console.log("🌱 STARTING SEED CRAWLER (AXIOS - FALLBACK MODE) 🌱");
    console.log(`Targeting: [${CRAWL_KEYWORDS.join(', ')}]`);

    let allProducts: any[] = [];

    // No browser launch, pure requests

    try {
        for (const keyword of CRAWL_KEYWORDS) {
            console.log(`\n🔎 Crawling for: "${keyword}"`);

            // Crawl Sequentially or Semi-Parallel to avoid blocking
            const results = await Promise.all([
                scrapeOfficialVeganShop(keyword),
                scrapeAuchan(keyword),
                scrapeCarrefour(keyword),
                scrapeMonoprix(keyword)
            ]);

            const flatResults = results.flat();
            console.log(`✅ Found ${flatResults.length} items for "${keyword}"`);
            allProducts = [...allProducts, ...flatResults];

            await sleep(1500); // Polite pause
        }
    } catch (e) {
        console.error("Crawl Loop Error:", e);
    }

    // Deduplicate by URL
    const uniqueProducts = Array.from(new Map(allProducts.map(item => [item.url, item])).values());

    console.log(`\n📦 Total Unique Products Scraped: ${uniqueProducts.length}`);

    // CSV Header
    const csvHeader = 'name,price,store,url,image\n';
    const csvRows = uniqueProducts.map(p => {
        // Escape quotes
        const safeName = `"${(p.name || '').replace(/"/g, '""')}"`;
        const safePrice = `"${(p.price || '').replace(/"/g, '""')}"`;
        const safeUrl = p.url || '';
        const safeImage = p.image || '';
        return `${safeName},${safePrice},${p.store},${safeUrl},${safeImage}`;
    });

    const csvContent = csvHeader + csvRows.join('\n');

    // Save
    const dataDir = path.join(__dirname, '../data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const filePath = path.join(dataDir, 'products.csv');
    fs.writeFileSync(filePath, csvContent);

    console.log(`💾 Database saved to: ${filePath}`);
    process.exit(0);
};

runSeed();
