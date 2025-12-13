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
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
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
                image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800',
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
                image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800'
            },
            {
                id: 'i6',
                name: 'Imported Lamb Chops',
                price: 15.90,
                isVegan: false,
                image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800',
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
                image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=800',
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
                image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800'
            }
        ]
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
