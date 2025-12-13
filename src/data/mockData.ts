import { Product, CompanySpotlight, Reward, Store } from '@/lib/types';

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'Oat Barista Blend',
        brand: 'Oatly',
        imageUrl: 'https://images.unsplash.com/photo-1638176066666-ff60e530278b?auto=format&fit=crop&q=80&w=200',
        isVegan: true,
        basePoints: 15,
        multiplier: 1,
        category: 'Dairy Alternative'
    },
    {
        id: 'p2',
        name: 'Beyond Burger 2-Pack',
        brand: 'Beyond Meat',
        imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=200',
        isVegan: true,
        basePoints: 50,
        multiplier: 2, // Featured
        category: 'Meat Alternative'
    },
    {
        id: 'p3',
        name: 'Alpro Soy Yogurt',
        brand: 'Alpro',
        imageUrl: 'https://images.unsplash.com/photo-1636138676059-4ae39f8df57b?auto=format&fit=crop&q=80&w=200',
        isVegan: true,
        basePoints: 10,
        multiplier: 1,
        category: 'Dairy Alternative'
    },
    {
        id: 'p4',
        name: 'Hummus Classique',
        brand: 'Atelier V',
        imageUrl: 'https://images.unsplash.com/photo-1637361874052-19e34279743c?auto=format&fit=crop&q=80&w=200',
        isVegan: true,
        basePoints: 12,
        multiplier: 1,
        category: 'Dips'
    },
    {
        id: 'p5',
        name: 'Tofu Nature',
        brand: 'Bjorg',
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200',
        isVegan: true,
        basePoints: 20,
        multiplier: 1,
        category: 'Protein'
    },
    {
        id: 'p6',
        name: 'Dark Chocolate 70%',
        brand: 'Lindt',
        imageUrl: 'https://images.unsplash.com/photo-1549417272-3b0f9a86d871?auto=format&fit=crop&q=80&w=200',
        isVegan: true,
        basePoints: 25,
        multiplier: 1,
        category: 'Snacks'
    }
];

export const MOCK_COMPANIES: CompanySpotlight[] = [
    {
        id: 'c1',
        name: 'La Vie',
        description: 'Makers of the finest plant-based bacon that actually sizzles. Join the revolution!',
        imageUrl: 'https://images.unsplash.com/photo-1612733924771-4713da41c594?auto=format&fit=crop&q=80&w=200',
        promoText: '20% off your first order',
        websiteUrl: 'https://laviefoods.com'
    },
    {
        id: 'c2',
        name: 'HappyVore',
        description: 'Delicious French plant-based meat alternatives made with love and local pea protein.',
        imageUrl: 'https://images.unsplash.com/photo-1613524673898-96791986422d?auto=format&fit=crop&q=80&w=200',
        promoText: 'Double points on all Nuggets',
        websiteUrl: 'https://happyvore.com'
    }
];

export const MOCK_REWARDS: Reward[] = [
    {
        id: 'r1',
        title: '5€ Voucher at Naturalia',
        cost: 500,
        description: 'Get 5€ off your next purchase at any Naturalia store.',
        emoji: '🥦'
    },
    {
        id: 'r2',
        title: 'Free Oatly Barista',
        cost: 300,
        description: 'Redeem for one carton of Oatly Barista at partner cafes.',
        emoji: '☕'
    },
    {
        id: 'r3',
        title: '10% off GreenWeez',
        cost: 150,
        description: '10% discount code valid on the entire GreenWeez catalog.',
        emoji: '🌿'
    },
    {
        id: 'r4',
        title: 'Plant a Tree',
        cost: 100,
        description: 'We will donate to plant a tree in your name.',
        emoji: '🌳'
    }
];

export const AVAILABLE_STORES: Store[] = [
    { id: 'auchan', name: 'Auchan', isConnected: false, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Auchan_%282015%29_logo.svg/300px-Auchan_%282015%29_logo.svg.png' },
    { id: 'carrefour', name: 'Carrefour', isConnected: false, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/300px-Carrefour_logo.svg.png' },
    { id: 'monoprix', name: 'Monoprix', isConnected: false, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Monoprix_2013_logo.svg' }
];

export interface Recipe {
    id: string;
    name: string;
    originalName: string;
    description: string;
    imageUrl: string;
    carbonSavedKg: number;
    animalsSaved: number;
    pointsEarned: number;
    ingredients: {
        original: string[];
        alternatives: { name: string; brand?: string }[];
    };
}

export const MOCK_RECIPES: Recipe[] = [
    {
        id: 'r1',
        name: 'Vegan Lemon Tart',
        originalName: 'Lemon Tart',
        description: 'A zesty, creamy delight without any eggs or dairy. 100% plant-based pleasure.',
        imageUrl: 'https://images.unsplash.com/photo-1519915093-69a69d421731?auto=format&fit=crop&q=80&w=400',
        carbonSavedKg: 2.5,
        animalsSaved: 0.5,
        pointsEarned: 45,
        ingredients: {
            original: ['Eggs', 'Butter', 'Heavy Cream'],
            alternatives: [
                { name: 'Agar Agar', brand: 'Nat-Ali' },
                { name: 'Plant Butter', brand: 'Flora' },
                { name: 'Coconut Cream', brand: 'Kara' }
            ]
        }
    },
    {
        id: 'r2',
        name: 'No-Bacon Tartiflette',
        originalName: 'Tartiflette',
        description: 'The french classic reinvented with smoked tofu and cashew cream.',
        imageUrl: 'https://images.unsplash.com/photo-1647169493979-37059fb86a3d?auto=format&fit=crop&q=80&w=400',
        carbonSavedKg: 5.2,
        animalsSaved: 1.0,
        pointsEarned: 80,
        ingredients: {
            original: ['Lardons', 'Reblochon', 'Crème Fraîche'],
            alternatives: [
                { name: 'Smoked Tofu', brand: 'Taifun' },
                { name: 'Vegan Melting Cheese', brand: 'Violife' },
                { name: 'Soy Cream', brand: 'Alpro' }
            ]
        }
    },
    {
        id: 'r3',
        name: 'Strawberry Cheesecake',
        originalName: 'Cheesecake',
        description: 'Creamy, dreamy, and totally dairy-free.',
        imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400',
        carbonSavedKg: 3.8,
        animalsSaved: 0.8,
        pointsEarned: 60,
        ingredients: {
            original: ['Cream Cheese', 'Butter', 'Eggs'],
            alternatives: [
                { name: 'Vegan Cream Cheese', brand: 'Violife' },
                { name: 'Margarine', brand: 'St Hubert' },
                { name: 'Silken Tofu', brand: 'Clearspring' }
            ]
        }
    }
];
