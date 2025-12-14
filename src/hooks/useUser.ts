import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UserProfile, Store } from '@/lib/types';
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
    }
};

// Simulate API call
const fetchUser = async (): Promise<UserProfile> => {
    // In real app: const docSnap = await getDoc(doc(db, 'users', auth.currentUser.uid));
    const stored = localStorage.getItem('vp_user');
    if (stored) return JSON.parse(stored);
    return MOCK_USER;
};

export const useUser = () => {
    const queryClient = useQueryClient();

    const { data: user, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
        staleTime: Infinity // Keep it simple for MVP
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
            localStorage.setItem('vp_user', JSON.stringify(updatedUser)); // Persist locally for demo
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

            const pointsToAdd = newPurchases.reduce((acc, p) => acc + p.totalPoints, 0);

            const currentUser = queryClient.getQueryData<UserProfile>(['user']) || MOCK_USER;
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

    return {
        user,
        isLoading,
        linkStore: linkStoreMutation.mutateAsync,
        isLinking: linkStoreMutation.isPending,
        syncPurchases: syncPurchasesMutation.mutateAsync,
        isSyncing: syncPurchasesMutation.isPending
    };
};
