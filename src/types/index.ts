export interface UserProfile {
    uid: string;
    email: string | null;
    displayName: string | null;
    points: number;
    linkedStores: string[]; // Store IDs
    impactStats?: {
        co2Saved: number; // kg
        waterSaved: number; // liters
        landSaved: number; // m2
    };
    persona?: UserPersona;
}

export interface UserPersona {
    type: 'chicken'; // future: 'cow', 'pig' etc
    stage: 'egg' | 'chick' | 'teen' | 'adult' | 'glowup';
    xp: number;
    unlockedItems: string[]; // item IDs
    equippedItems: string[]; // item IDs
}

export interface ShopItem {
    id: string;
    name: string;
    type: 'hat' | 'glasses' | 'accessory';
    cost: number;
    imageUrl: string;
}

export interface Store {
    id: string;
    name: 'Auchan' | 'Carrefour' | 'Monoprix' | string;
    logoUrl?: string;
    isConnected: boolean;
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    imageUrl: string;
    isVegan: boolean;
    basePoints: number; // default 10
    multiplier: number; // default 1
    category?: string;
    price?: number;
    url?: string;
    rating?: number;
    reviewCount?: number;
}

export interface CompanySpotlight {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    promoText: string;
    websiteUrl: string;
}

export interface Reward {
    id: string;
    title: string;
    cost: number;
    description: string;
    emoji: string;
    code?: string; // e.g. promo code
}

export interface PurchaseItem {
    productId: string;
    quantity: number;
    price: number;
    pointsEarned: number;
    productName: string;
}

export interface Purchase {
    id: string;
    userId: string;
    storeId: string;
    date: string; // ISO string
    items: PurchaseItem[];
    totalPoints: number;
}

export interface Restaurant {
    id: string;
    name: string;
    rating: number;
    deliveryTime: string;
    deliveryFee: string;
    imageUrl: string;
    tags: string[];
    lat: number;
    lng: number;
    rewardsCount?: number;
    inventory?: string[];
}

export interface GroceryStore {
    id: string;
    name: string;
    image: string;
    distance: string;
    offers: string[];
    lat: number;
    lng: number;
    rewardsCount?: number;
    inventory?: string[];
}

