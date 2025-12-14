import { Product, CompanySpotlight, Reward, Store } from '@/types';

import AuchanLogo from '@/assets/logos/auchan.png';
import CarrefourLogo from '@/assets/logos/carrefour.png';
import MonoprixLogo from '@/assets/logos/monoprix.png';
import HummusImg from '@/assets/products/hummus.png';

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'Oat Barista Blend',
        brand: 'Oatly',
        imageUrl: 'https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVegan: true,
        basePoints: 15,
        multiplier: 1,
        category: 'Dairy Alternative'
    },
    {
        id: 'p2',
        name: 'Beyond Burger 2-Pack',
        brand: 'Beyond Meat',
        imageUrl: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVegan: true,
        basePoints: 50,
        multiplier: 2, // Featured
        category: 'Meat Alternative'
    },
    {
        id: 'p3',
        name: 'Alpro Soy Yogurt',
        brand: 'Alpro',
        imageUrl: 'https://images.pexels.com/photos/414675/pexels-photo-414675.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVegan: true,
        basePoints: 10,
        multiplier: 1,
        category: 'Dairy Alternative'
    },
    {
        id: 'p4',
        name: 'Hummus Classique',
        brand: 'Atelier V',
        imageUrl: HummusImg,
        isVegan: true,
        basePoints: 12,
        multiplier: 1,
        category: 'Dips'
    },
    {
        id: 'p5',
        name: 'Tofu Nature',
        brand: 'Bjorg',
        imageUrl: 'https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVegan: true,
        basePoints: 20,
        multiplier: 1,
        category: 'Protein'
    },
    {
        id: 'p6',
        name: 'Dark Chocolate 70%',
        brand: 'Lindt',
        imageUrl: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVegan: true,
        basePoints: 25,
        multiplier: 1,
        category: 'Snacks'
    }
];

export const PAST_PURCHASES = [
    {
        id: 'p1',
        date: '2025-12-10',
        storeName: 'Auchan',
        totalAmount: 45.20,
        items: [
            {
                id: 'i1',
                name: 'Beef Burger Patties',
                price: 8.50,
                isVegan: false,
                image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=400',
                substitute: {
                    name: 'Beyond Burger',
                    pointsGain: 50,
                    footprintSavings: '2.5kg CO2',
                    price: 5.99
                }
            },
            {
                id: 'i2',
                name: 'Cow Milk 1L',
                price: 1.20,
                isVegan: false,
                image: 'https://images.pexels.com/photos/5946716/pexels-photo-5946716.jpeg?auto=compress&cs=tinysrgb&w=400',
                substitute: {
                    name: 'Oat Milk Barista',
                    pointsGain: 25,
                    footprintSavings: '0.8kg CO2',
                    price: 2.50
                }
            },
            {
                id: 'i3',
                name: 'Bananas',
                price: 2.10,
                isVegan: true,
                image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
                id: 'i6',
                name: 'Imported Lamb Chops',
                price: 15.90,
                isVegan: false,
                image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400',
                substitute: {
                    name: 'Seitan Steaks',
                    pointsGain: 150,
                    footprintSavings: '12.5kg CO2',
                    price: 12.50
                }
            }
        ]
    },
    {
        id: 'p2',
        date: '2025-12-05',
        storeName: 'Carrefour',
        totalAmount: 22.15,
        items: [
            {
                id: 'i4',
                name: 'Chicken Breast',
                price: 12.50,
                isVegan: false,
                image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400',
                substitute: {
                    name: 'Vegan Chicken Pieces',
                    pointsGain: 40,
                    footprintSavings: '3.1kg CO2',
                    price: 9.99
                }
            },
            {
                id: 'i5',
                name: 'Rice',
                price: 3.50,
                isVegan: true,
                image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
        ]
    }
];

export const MOCK_COMPANIES: CompanySpotlight[] = [
    {
        id: 'c1',
        name: 'La Vie',
        description: 'Makers of the finest plant-based bacon that actually sizzles. Join the revolution!',
        imageUrl: 'https://images.pexels.com/photos/1930760/pexels-photo-1930760.jpeg?auto=compress&cs=tinysrgb&w=400',
        promoText: '20% off your first order',
        websiteUrl: 'https://laviefoods.com'
    },
    {
        id: 'c2',
        name: 'HappyVore',
        description: 'Delicious French plant-based meat alternatives made with love and local pea protein.',
        imageUrl: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    { id: 'auchan', name: 'Auchan', isConnected: false, logoUrl: AuchanLogo },
    { id: 'carrefour', name: 'Carrefour', isConnected: false, logoUrl: CarrefourLogo },
    { id: 'monoprix', name: 'Monoprix', isConnected: false, logoUrl: MonoprixLogo }
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
        imageUrl: 'https://images.pexels.com/photos/4099234/pexels-photo-4099234.jpeg?auto=compress&cs=tinysrgb&w=400',
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
        imageUrl: 'https://images.pexels.com/photos/13463372/pexels-photo-13463372.jpeg?auto=compress&cs=tinysrgb&w=400',
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
        imageUrl: 'https://images.pexels.com/photos/3334632/pexels-photo-3334632.jpeg?auto=compress&cs=tinysrgb&w=400',
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
