import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UserProfile, Store } from '@/types';
import * as auchanAdapter from '@/mockAdapters/auchan';
import * as carrefourAdapter from '@/mockAdapters/carrefour';

// Mock initial user
const MOCK_USER: UserProfile = {
    uid: 'user_123',
    email: 'alice@example.com',
    displayName: 'Alice Green',
    points: 1240,
    linkedStores: [],
    impactStats: {
        co2Saved: 12.5,
        waterSaved: 450,
        landSaved: 8.2
    },
    persona: {
        type: 'chicken',
        stage: 'chick',
        xp: 120,
        unlockedItems: [],
        equippedItems: []
    }
};

// Simulate API call
const fetchUser = async (): Promise<UserProfile | null> => {
    // Check localStorage for persisted user
    const stored = localStorage.getItem('vp_user');
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            // Merge with MOCK_USER structure to safely handle schema updates while preserving data
            // But if stored is valid, use it. MOCK_USER is only for the "fresh login" state.
            return { ...MOCK_USER, ...parsed };
        } catch (e) {
            console.error("Failed to parse user", e);
            return null;
        }
    }
    return null; // Default to logged out
};

export const useUser = () => {
    const queryClient = useQueryClient();

    const { data: user, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
        staleTime: Infinity
    });

    const loginMutation = useMutation({
        mutationFn: async () => {
            // Simulate API delay
            await new Promise(r => setTimeout(r, 800));
            // Set MOCK_USER into storage
            localStorage.setItem('vp_user', JSON.stringify(MOCK_USER));
            return MOCK_USER;
        },
        onSuccess: (newUser) => {
            queryClient.setQueryData(['user'], newUser);
        }
    });

    const logoutMutation = useMutation({
        mutationFn: async () => {
            localStorage.removeItem('vp_user');
            return null;
        },
        onSuccess: () => {
            queryClient.setQueryData(['user'], null);
            queryClient.removeQueries({ queryKey: ['user'] });
        }
    });

    const linkStoreMutation = useMutation({
        mutationFn: async (storeId: string) => {
            // Simulate API delay
            await new Promise(r => setTimeout(r, 1000));

            const currentUser = queryClient.getQueryData<UserProfile>(['user']) || MOCK_USER;
            const updatedUser = {
                ...currentUser,
                linkedStores: [...currentUser.linkedStores, storeId]
            };
            localStorage.setItem('vp_user', JSON.stringify(updatedUser));
            return updatedUser;
        },
        onSuccess: (newUser) => {
            queryClient.setQueryData(['user'], newUser);
        }
    });

    const syncPurchasesMutation = useMutation({
        mutationFn: async (storeId: string) => {
            console.log('Syncing...', storeId);
            // Call mock adapter
            let newPurchases = [];
            if (storeId === 'auchan') newPurchases = await auchanAdapter.syncPurchases('user_123');
            if (storeId === 'carrefour') newPurchases = await carrefourAdapter.syncPurchases('user_123');

            const pointsToAdd = newPurchases.reduce((acc: any, p: any) => acc + p.totalPoints, 0);

            const currentUser = queryClient.getQueryData<UserProfile>(['user']);
            if (!currentUser) throw new Error("No user");

            const updatedUser = {
                ...currentUser,
                points: currentUser.points + pointsToAdd
            };

            localStorage.setItem('vp_user', JSON.stringify(updatedUser));
            return { purchases: newPurchases, pointsAdded: pointsToAdd };
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            alert(`Synced! Found ${data.purchases.length} purchases. +${data.pointsAdded} Points!`);
        }
    });

    const updatePersonaMutation = useMutation({
        mutationFn: async (updates: Partial<UserProfile['persona']>) => {
            const currentUser = queryClient.getQueryData<UserProfile>(['user']);
            if (!currentUser) throw new Error("No user");

            if (!currentUser.persona) {
                // Initialize if missing
                const newPersona = { type: 'chicken', stage: 'egg', xp: 0, unlockedItems: [], equippedItems: [], ...updates };
                const updatedUser = { ...currentUser, persona: newPersona };
                localStorage.setItem('vp_user', JSON.stringify(updatedUser));
                return updatedUser;
            }

            const updatedUser = {
                ...currentUser,
                persona: { ...currentUser.persona, ...updates }
            };
            localStorage.setItem('vp_user', JSON.stringify(updatedUser));
            return updatedUser;
        },
        onSuccess: (newUser) => {
            queryClient.setQueryData(['user'], newUser);
        }
    });

    const updateUserMutation = useMutation({
        mutationFn: async (updates: Partial<UserProfile>) => {
            const currentUser = queryClient.getQueryData<UserProfile>(['user']);
            if (!currentUser) throw new Error("No user");

            const updatedUser = { ...currentUser, ...updates };
            localStorage.setItem('vp_user', JSON.stringify(updatedUser));
            return updatedUser;
        },
        onSuccess: (newUser) => {
            queryClient.setQueryData(['user'], newUser);
        }
    });

    return {
        user,
        isLoading,
        login: loginMutation.mutateAsync,
        isLoggingIn: loginMutation.isPending,
        logout: logoutMutation.mutateAsync,
        linkStore: linkStoreMutation.mutateAsync,
        isLinking: linkStoreMutation.isPending,
        syncPurchases: syncPurchasesMutation.mutateAsync,
        isSyncing: syncPurchasesMutation.isPending,
        updatePersona: updatePersonaMutation.mutateAsync,
        updateUser: updateUserMutation.mutateAsync
    };
};
