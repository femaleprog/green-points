interface SearchAnalysis {
    isDish: boolean;
    originalName: string;
    ingredients: {
        original: string;
        veganAlternative: string;
    }[];
}

const KNOWLEDGE_BASE: Record<string, SearchAnalysis> = {
    'raclette': {
        isDish: true,
        originalName: 'Raclette',
        ingredients: [
            { original: 'Fromage à raclette', veganAlternative: 'Fromage' },
            { original: 'Charcuterie', veganAlternative: 'Tofu Fumé' },
            { original: 'Lait (pour les patates)', veganAlternative: 'Boisson Soja' }
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

export const analyzeQuery = async (userQuery: string): Promise<SearchAnalysis> => {
    // strict matching logic without agent logs
    const q = userQuery.toLowerCase().trim();

    // 1. Check Exact Dish Match
    if (KNOWLEDGE_BASE[q]) {
        return KNOWLEDGE_BASE[q];
    }

    // 2. Check Partial Dish Match
    const dishKey = Object.keys(KNOWLEDGE_BASE).find(k => q.includes(k));
    if (dishKey) {
        return KNOWLEDGE_BASE[dishKey];
    }

    // 3. Check Ingredient Map
    const ingredientKey = Object.keys(INGREDIENT_MAP).find(k => q.includes(k));
    if (ingredientKey) {
        return {
            isDish: false,
            originalName: userQuery,
            ingredients: [{ original: userQuery, veganAlternative: INGREDIENT_MAP[ingredientKey] }]
        };
    }

    // 4. Fallback (Simple Search)
    return {
        isDish: false,
        originalName: userQuery,
        ingredients: [
            { original: userQuery, veganAlternative: userQuery } // Just search what they typed, simplistic
        ]
    };
};
