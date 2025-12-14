import { MOCK_RECIPES, Recipe } from '@/data/mockData';
import { REAL_PRODUCTS, RealProduct } from '@/data/realProducts';

export const searchRecipes = (query: string): Recipe[] => {
    if (!query) return [];
    const q = query.toLowerCase().trim();

    return MOCK_RECIPES.filter(recipe =>
        recipe.name.toLowerCase().includes(q) ||
        recipe.originalName.toLowerCase().includes(q)
    );
};

export const findProductSubstitutes = (ingredientName: string): RealProduct[] => {
    const q = ingredientName.toLowerCase();

    // Split ingredient name into keywords to improve matching (e.g. "Smoked Tofu" -> "tofu")
    // This is a naive heuristic; for production we'd want vector search or better categorization.
    const keywords = q.split(' ').filter(k => k.length > 2);

    return REAL_PRODUCTS.filter(product => {
        const pName = product.name.toLowerCase();
        // Match if product contains the full ingredient name OR significant keywords
        return pName.includes(q) || keywords.some(k => pName.includes(k));
    }).slice(0, 10); // Limit to top 10 matches
};
