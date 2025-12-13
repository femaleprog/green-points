import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Recipe } from '@/data/mockData';

export interface CartItem {
    recipe: Recipe;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (recipe: Recipe) => void;
    removeFromCart: (recipeId: string) => void;
    clearCart: () => void;
    itemCount: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (recipe: Recipe) => {
        setItems(prev => {
            const existing = prev.find(item => item.recipe.id === recipe.id);
            if (existing) {
                return prev.map(item =>
                    item.recipe.id === recipe.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { recipe, quantity: 1 }];
        });
    };

    const removeFromCart = (recipeId: string) => {
        setItems(prev => prev.filter(item => item.recipe.id !== recipeId));
    };

    const clearCart = () => setItems([]);

    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, itemCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
