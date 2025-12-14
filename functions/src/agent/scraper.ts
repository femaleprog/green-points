import { Browser } from 'puppeteer';

interface SearchResult {
    name: string;
    url: string;
    price?: string;
    image?: string;
    store: 'Auchan' | 'Carrefour' | 'Monoprix' | 'OfficialVeganShop';
}

// Helper to clean text
const clean = (text: string) => text.replace(/\s+/g, ' ').trim();

const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    'Referer': 'https://www.google.com/'
};

export const scrapeAuchan = async (query: string): Promise<SearchResult[]> => {
    console.log(`  [Scraper] Searching Auchan for: ${query}...`);
    try {
        const searchUrl = `https://www.auchan.fr/recherche?text=${encodeURIComponent(query)}`;
        const { data } = await axios.get(searchUrl, { headers: HEADERS, timeout: 8000 });
        const $ = cheerio.load(data);
        const results: SearchResult[] = [];

        $('article.product-card, .product-item, .list-product__item').each((_, el) => {
            if (results.length >= 5) return;
            const name = clean($(el).find('.product-card__title, .product-item__title').text());
            const link = $(el).find('a').attr('href');
            const price = clean($(el).find('.product-price, .product-card__price').text());
            const image = $(el).find('img').attr('src');

            if (name && link) {
                results.push({
                    name,
                    url: link.startsWith('http') ? link : `https://www.auchan.fr${link}`,
                    price,
                    image,
                    store: 'Auchan'
                });
            }
        });

        console.log(`  [Scraper] Auchan found ${results.length} results.`);
        return results;
    } catch (e: any) {
        console.error(`  [Scraper] Auchan error: ${e.message}`);
        return [];
    }
};

export const scrapeCarrefour = async (query: string): Promise<SearchResult[]> => {
    console.log(`  [Scraper] Searching Carrefour for: ${query}...`);
    try {
        const searchUrl = `https://www.carrefour.fr/s?q=${encodeURIComponent(query)}`;
        const { data } = await axios.get(searchUrl, { headers: HEADERS, timeout: 8000 });
        const $ = cheerio.load(data);
        const results: SearchResult[] = [];

        $('article, .product-card').each((_, el) => {
            if (results.length >= 5) return;
            const name = clean($(el).find('h2, .product-title').text());
            const link = $(el).find('a').attr('href');
            const price = clean($(el).find('.product-price').text());
            const image = $(el).find('img').attr('data-src') || $(el).find('img').attr('src');

            if (name && link) {
                results.push({
                    name,
                    url: link.startsWith('http') ? link : `https://www.carrefour.fr${link}`,
                    price,
                    image,
                    store: 'Carrefour'
                });
            }
        });
        console.log(`  [Scraper] Carrefour found ${results.length} results.`);
        return results;
    } catch (e: any) {
        console.error(`  [Scraper] Carrefour error: ${e.message}`);
        return [];
    }
};

export const scrapeMonoprix = async (query: string): Promise<SearchResult[]> => {
    console.log(`  [Scraper] Searching Monoprix for: ${query}...`);
    try {
        const searchUrl = `https://www.monoprix.fr/recherche?q=${encodeURIComponent(query)}`;
        const { data } = await axios.get(searchUrl, { headers: HEADERS, timeout: 8000 });
        const $ = cheerio.load(data);
        const results: SearchResult[] = [];

        $('.product-item, div[data-testid="product-item"]').each((_, el) => {
            if (results.length >= 5) return;
            const name = clean($(el).find('[data-testid="product-label"], .product-title').text());
            const link = $(el).find('a').attr('href');
            const price = clean($(el).find('.price').text());
            const image = $(el).find('img').attr('src');

            if (name && link) {
                results.push({
                    name,
                    url: link.startsWith('http') ? link : `https://www.monoprix.fr${link}`,
                    price,
                    image,
                    store: 'Monoprix'
                });
            }
        });
        console.log(`  [Scraper] Monoprix found ${results.length} results.`);
        return results;
    } catch (e: any) {
        console.error(`  [Scraper] Monoprix error: ${e.message}`);
        return [];
    }
};

export const scrapeOfficialVeganShop = async (query: string): Promise<SearchResult[]> => {
    console.log(`  [Scraper] Searching OVS for: ${query}...`);
    try {
        const searchUrl = `https://www.officialveganshop.com/recherche?s=${encodeURIComponent(query)}`;
        const { data } = await axios.get(searchUrl, { headers: HEADERS, timeout: 8000 });
        const $ = cheerio.load(data);
        const results: SearchResult[] = [];

        $('.product-miniature, .js-product-miniature').each((_, el) => {
            if (results.length >= 5) return;
            const name = clean($(el).find('.product-title a, h3.product-title').text());
            const link = $(el).find('.product-title a').attr('href');
            const price = clean($(el).find('.price, .product-price-and-shipping .price').text());
            const image = $(el).find('img').attr('src');

            if (name && link) {
                results.push({
                    name,
                    url: link,
                    price,
                    image,
                    store: 'OfficialVeganShop'
                });
            }
        });
        console.log(`  [Scraper] OVS found ${results.length} results.`);
        return results;
    } catch (e: any) {
        console.error(`  [Scraper] OVS error: ${e.message}`);
        return [];
    }
};

// No longer exporting aggregateSearch for the server as server uses CSV now. 
// If specific file needs it, we can keep a dummy or remove it.
