import { Restaurant, GroceryStore } from '@/lib/types';

export const RESTAURANTS: Restaurant[] = [
    // Base Data (moved from mockData.ts)
    {
        id: 'res1',
        name: 'Green Burger Kitchen',
        rating: 4.8,
        deliveryTime: '20-30 min',
        deliveryFee: '2.99€',
        imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400',
        tags: ['Vegan', 'Burgers', 'American'],
        lat: 48.8566,
        lng: 2.3522
    },
    {
        id: 'res2',
        name: 'Veggie Bowl',
        rating: 4.6,
        deliveryTime: '15-25 min',
        deliveryFee: '1.49€',
        imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
        tags: ['Healthy', 'Bowls', 'Organic'],
        lat: 48.8606,
        lng: 2.3376
    },
    // Extended Data
    {
        id: 'res3',
        name: 'Pizza Verde',
        rating: 4.5,
        deliveryTime: '30-45 min',
        deliveryFee: 'Free',
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400',
        tags: ['Italian', 'Pizza', 'Vegan Cheese'],
        lat: 48.8530,
        lng: 2.3499
    },
    {
        id: 'res4',
        name: 'Le Potager de Charlotte',
        rating: 4.9,
        deliveryTime: '40-50 min',
        deliveryFee: '3.50€',
        imageUrl: 'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400',
        tags: ['French', 'Gourmet', 'Organic'],
        lat: 48.8755,
        lng: 2.3450
    },
    {
        id: 'res5',
        name: 'Wild & The Moon',
        rating: 4.7,
        deliveryTime: '15-25 min',
        deliveryFee: '1.99€',
        imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400',
        tags: ['Juice', 'Gluten-Free', 'Healthy'],
        lat: 48.8655,
        lng: 2.3550
    },
    {
        id: 'res6',
        name: 'Jah Jah by Le Tricycle',
        rating: 4.6,
        deliveryTime: '25-35 min',
        deliveryFee: '2.50€',
        imageUrl: 'https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400',
        tags: ['Caribbean', 'Vegan-Hotdogs', 'Spicy'],
        lat: 48.8710,
        lng: 2.3530
    },
    {
        id: 'res7',
        name: 'Hank Burger',
        rating: 4.8,
        deliveryTime: '20-30 min',
        deliveryFee: '2.00€',
        imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400',
        tags: ['Burgers', 'Fast Food', 'Paris Favorite'],
        lat: 48.8630,
        lng: 2.3600
    },
    {
        id: 'res8',
        name: 'Soya',
        rating: 4.5,
        deliveryTime: '35-45 min',
        deliveryFee: 'Free',
        imageUrl: 'https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400',
        tags: ['Fusion', 'Organic', 'Chic'],
        lat: 48.8680,
        lng: 2.3700
    }
];

export const GROCERY_STORES: GroceryStore[] = [
    // Base Data
    {
        id: 'gs1',
        name: 'Bio c\' Bon',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400',
        distance: '0.4 km',
        offers: ['20% off Organic Apples', 'Buy 1 Get 1 Tofu'],
        lat: 48.8566,
        lng: 2.3522
    },
    {
        id: 'gs2',
        name: 'Naturalia',
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400',
        distance: '0.8 km',
        offers: ['3€ off on Bulk items', 'Free reusable bag'],
        lat: 48.864716,
        lng: 2.349014
    },
    // Extended Data
    {
        id: 'gs3',
        name: 'Carrefour Bio',
        image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400',
        distance: '1.2 km',
        offers: ['15% off Plant-based Milk'],
        lat: 48.8590,
        lng: 2.3400
    },
    {
        id: 'gs4',
        name: 'Biocoop',
        image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400',
        distance: '0.6 km',
        offers: ['10% Student Discount', 'Local Veggies'],
        lat: 48.8490,
        lng: 2.3500
    },
    {
        id: 'gs5',
        name: 'La Vie Claire',
        image: 'https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400',
        distance: '0.9 km',
        offers: ['Bulk Grains Sale', 'GF Options'],
        lat: 48.8620,
        lng: 2.3350
    },
    {
        id: 'gs6',
        name: 'Naturalia Vegan',
        image: 'https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400',
        distance: '1.5 km',
        offers: ['Free Tofu', 'Vegan Cheese Promo'],
        lat: 48.8730,
        lng: 2.3420
    }
];
