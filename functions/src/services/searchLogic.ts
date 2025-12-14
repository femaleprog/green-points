import { CULINARY_KNOWLEDGE } from '../data/culinary_knowledge';
import axios from 'axios';

interface SearchAnalysis {
    isDish: boolean;
    originalName: string;
    ingredients: {
        original: string;
        veganAlternative: string;
    }[];
}

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

// 1. Retrieval Step
const retrieveContext = (query: string): string | null => {
    const q = query.toLowerCase();
    const doc = CULINARY_KNOWLEDGE.find(d => d.keywords.some(k => q.includes(k)));
    return doc ? doc.content : null;
};

// 2. Generation Step (RAG)
export const analyzeQuery = async (userQuery: string): Promise<SearchAnalysis> => {
    const context = retrieveContext(userQuery);

    if (context) {
        try {
            // Attempt to call Mistral API if Key is present
            // In a real scenario, we would use process.env.MISTRAL_API_KEY
            // For now, we wrap in try/catch to fallback gracefully if no key/net
            if (process.env.MISTRAL_API_KEY) {
                console.log("Calling Mistral API for RAG...");
                const prompt = `
               Context: ${context}
               
               Based on the text above, identify the traditional ingredients of the dish "${userQuery}" and their vegan alternatives mentioned.
               Return ONLY valid JSON in this format:
               {
                 "isDish": true,
                 "originalName": "Dish Name",
                 "ingredients": [
                   {"original": "Ingredient 1", "veganAlternative": "Alternative 1"}
                 ]
               }
               `;

                const response = await axios.post(
                    'https://api.mistral.ai/v1/chat/completions',
                    {
                        model: "mistral-large-latest",
                        messages: [{ role: "user", content: prompt }],
                        response_format: { type: "json_object" }
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
                        },
                        timeout: 5000 // 5s timeout to not block too long
                    }
                );

                const content = response.data.choices[0].message.content;
                return JSON.parse(content);
            } else {
                throw new Error("No Mistral Key provided");
            }

        } catch (e: any) {
            console.error("LLM Generation Error Details:", e.message);
            if (e.response) {
                console.error("API Response Status:", e.response.status);
                console.error("API Response Data:", JSON.stringify(e.response.data));
            }
            console.log("Falling back to parsing simulation.");
            // Fallback: Deterministic parsing of the context (The "Simulation")
            // This ensures the demo works 100% even without the API key
            return simulateSmartParsing(userQuery, context);
        }
    }

    // Fallback if no context found (Standard Search)
    const ingredientKey = Object.keys(INGREDIENT_MAP).find(k => userQuery.toLowerCase().includes(k));
    if (ingredientKey) {
        return {
            isDish: false,
            originalName: userQuery,
            ingredients: [{ original: userQuery, veganAlternative: INGREDIENT_MAP[ingredientKey] }]
        };
    }

    return {
        isDish: false,
        originalName: userQuery,
        ingredients: [{ original: userQuery, veganAlternative: userQuery }]
    };
};

// Deterministic simulation allowing the demo to work without live API
function simulateSmartParsing(query: string, context: string): SearchAnalysis {
    const isRaclette = query.toLowerCase().includes('raclette');

    if (isRaclette) {
        // Regex extraction (Simulating "Smart" extraction from text)
        const fromageMatch = context.match(/remplacez le (fromage.*?) par du \*\*(.*?)\*\*/i);
        const charcuterieMatch = context.match(/et la (charcuterie.*?) par des \*\*(.*?)\*\*/i);

        return {
            isDish: true,
            originalName: 'Raclette',
            ingredients: [
                {
                    original: fromageMatch ? fromageMatch[1].trim() : 'Fromage à raclette',
                    veganAlternative: fromageMatch ? fromageMatch[2].trim() : 'Fromage Raclette Végétal'
                },
                {
                    original: charcuterieMatch ? charcuterieMatch[1].trim() : 'Charcuterie',
                    veganAlternative: charcuterieMatch ? charcuterieMatch[2].trim() : 'Tranches Végétales'
                },
                { original: 'Pommes de terre', veganAlternative: 'Pommes de terre' }
            ]
        };
    }

    // Default return if context matches but simulation logic misses
    return {
        isDish: true,
        originalName: query,
        ingredients: []
    };
}

