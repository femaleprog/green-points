interface PlannerResult {
    isDish: boolean;
    originalName: string;
    ingredients: {
        original: string;
        veganAlternative: string;
    }[];
}

const KNOWLEDGE_BASE: Record<string, PlannerResult> = {
    'raclette': {
        isDish: true,
        originalName: 'Raclette',
        ingredients: [
            { original: 'Fromage à raclette', veganAlternative: 'Fromage' }, // Broad term to hit 'Faux-mage', 'Boursin', etc.
            { original: 'Charcuterie', veganAlternative: 'Tofu Fumé' },
            { original: 'Lait (pour les patates)', veganAlternative: 'Boisson Soja' } // 'Lait' often not found due to regulations
        ]
    },
    'tartiflette': {
        isDish: true,
        originalName: 'Tartiflette',
        ingredients: [
            { original: 'Reblochon', veganAlternative: 'Fromage' },
            { original: 'Lardons', veganAlternative: 'Lardons' },
            { original: 'Crème fraîche', veganAlternative: 'Crème Soja' }
        ]
    },
    'cheesecake': {
        isDish: true,
        originalName: 'Cheesecake',
        ingredients: [
            { original: 'Cream Cheese', veganAlternative: 'Tartinable' },
            { original: 'Beurre', veganAlternative: 'Margarine' },
            { original: 'Oeufs', veganAlternative: 'Yaourt Soja' }
        ]
    },
    'crêpes': {
        isDish: true,
        originalName: 'Pâte à crêpes',
        ingredients: [
            { original: 'Lait', veganAlternative: 'Boisson Avoine' },
            { original: 'Oeufs', veganAlternative: 'Fécule' },
            { original: 'Beurre', veganAlternative: 'Huile Coco' }
        ]
    },
    'pizza': {
        isDish: true,
        originalName: 'Pizza',
        ingredients: [
            { original: 'Mozzarella', veganAlternative: 'Mozzarella' },
            { original: 'Jambon', veganAlternative: 'Jambon Végétal' }
        ]
    }
};

const INGREDIENT_MAP: Record<string, string> = {
    'lait': 'Lait d\'avoine',
    'beurre': 'Beurre végétal',
    'oeuf': 'Substitut d\'oeuf',
    'oeufs': 'Substitut d\'oeuf',
    'crème': 'Crème de soja',
    'viande': 'Haché végétal',
    'poulet': 'Aiguillettes végétales',
    'fromage': 'Faux-mage',
    'miel': 'Sirop d\'agave'
};

export const planQuery = async (userQuery: string): Promise<PlannerResult> => {
    console.log(`[Heuristic Planner] Analyzing: "${userQuery}"`);
    const q = userQuery.toLowerCase().trim();

    // 1. Check Exact Dish Match
    if (KNOWLEDGE_BASE[q]) {
        console.log(`[Heuristic Planner] Found Dish: ${q}`);
        return KNOWLEDGE_BASE[q];
    }

    // 2. Check Partial Dish Match
    const dishKey = Object.keys(KNOWLEDGE_BASE).find(k => q.includes(k));
    if (dishKey) {
        console.log(`[Heuristic Planner] Matched known dish: ${dishKey}`);
        return KNOWLEDGE_BASE[dishKey];
    }

    // 3. Check Ingredient Map
    const ingredientKey = Object.keys(INGREDIENT_MAP).find(k => q.includes(k));
    if (ingredientKey) {
        console.log(`[Heuristic Planner] Found Ingredient: ${ingredientKey}`);
        return {
            isDish: false,
            originalName: userQuery,
            ingredients: [{ original: userQuery, veganAlternative: INGREDIENT_MAP[ingredientKey] }]
        };
    }

    // 4. Fallback (Auto-Veganize)
    console.log(`[Heuristic Planner] Fallback mode`);
    return {
        isDish: false,
        originalName: userQuery,
        ingredients: [
            { original: userQuery, veganAlternative: `Vegan ${userQuery}` }
        ]
    };
};
