import { useState } from 'react';
import { MOCK_REWARDS } from '@/data/mockData';
import { RESTAURANTS, GROCERY_STORES } from '@/data/mapData';
import { useUser } from '@/features/auth/hooks/useUser';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { PointsBadge } from '@/components/ui/PointsBadge';
import { MapComponent } from '@/components/MapComponent';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, ShoppingBasket, Flame, ArrowLeft, MapPin, Star, Tag } from 'lucide-react';

type ViewState = 'home' | 'restaurants' | 'groceries';

export const Rewards = () => {
    const { user } = useUser();
    const [view, setView] = useState<ViewState>('home');

    // Map Data
    const allRestaurants = RESTAURANTS;
    const allGroceries = GROCERY_STORES;

    if (!user) return null;

    const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
        <header className="mb-6 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-1">{title}</h1>
                <p className="text-slate-500 text-sm">{subtitle}</p>
            </div>
            <PointsBadge points={user.points} size="lg" />
        </header>
    );

    const pageTransition = {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
        transition: { duration: 0.2, ease: "easeInOut" }
    };

    return (
        <div className="pb-24 pt-6 px-4 space-y-6 animate-fade-in min-h-screen bg-white">
            <AnimatePresence mode="wait" initial={false}>
                {view === 'home' && (
                    <motion.div
                        key="home"
                        {...pageTransition}
                        className="space-y-8"
                    >
                        <Header title="Rewards" subtitle="Treat yourself with your points." />

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setView('restaurants')}
                                className="bg-orange-50 hover:bg-orange-100 active:scale-95 transition-all p-4 rounded-3xl flex flex-col items-center justify-center gap-3 h-40 border border-orange-100"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">
                                    <UtensilsCrossed size={24} />
                                </div>
                                <span className="font-bold text-slate-900 text-sm">Restaurant Rewards</span>
                            </button>

                            <button
                                onClick={() => setView('groceries')}
                                className="bg-green-50 hover:bg-green-100 active:scale-95 transition-all p-4 rounded-3xl flex flex-col items-center justify-center gap-3 h-40 border border-green-100"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600">
                                    <ShoppingBasket size={24} />
                                </div>
                                <span className="font-bold text-slate-900 text-sm">Grocery Rewards</span>
                            </button>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-red-100 p-1.5 rounded-lg text-red-500">
                                    <Flame size={18} fill="currentColor" />
                                </div>
                                <h2 className="text-lg font-bold text-slate-900">Popular Rewards</h2>
                            </div>

                            <div className="space-y-4">
                                {MOCK_REWARDS.map((reward) => {
                                    const canAfford = user.points >= reward.cost;
                                    return (
                                        <div key={reward.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4">
                                            <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-3xl shrink-0">
                                                {reward.emoji}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-slate-900 text-sm mb-1">{reward.title}</h3>
                                                        <p className="text-xs text-slate-500 line-clamp-1">{reward.description}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-3 flex items-center justify-between">
                                                    <span className="font-bold text-brand-600 text-sm">{reward.cost} VP</span>
                                                    <AnimatedButton
                                                        variant={canAfford ? 'primary' : 'secondary'}
                                                        disabled={!canAfford}
                                                        className="py-1 px-3 text-xs h-8"
                                                    >
                                                        Redeem
                                                    </AnimatedButton>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}

                {view === 'restaurants' && (
                    <motion.div
                        key="restaurants"
                        {...pageTransition}
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <button onClick={() => setView('home')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full">
                                <ArrowLeft size={24} className="text-slate-900" />
                            </button>
                            <h2 className="text-xl font-bold text-slate-900">Restaurants</h2>
                        </div>

                        <MapComponent items={allRestaurants} />

                        <div className="space-y-6">
                            {allRestaurants.map((restaurant) => (
                                <div key={restaurant.id} className="group cursor-pointer">
                                    <div className="relative h-40 mb-3 overflow-hidden rounded-2xl">
                                        <img
                                            src={restaurant.imageUrl}
                                            alt={restaurant.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                                            <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                            {restaurant.rating}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-slate-900 text-lg">{restaurant.name}</h3>
                                        <div className="bg-slate-100 px-2 py-1 rounded-full text-xs font-medium text-slate-600">
                                            {restaurant.deliveryTime}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                                        <span>{restaurant.deliveryFee} delivery</span>
                                        <span>•</span>
                                        <span className="truncate">{restaurant.tags.join(', ')}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {view === 'groceries' && (
                    <motion.div
                        key="groceries"
                        {...pageTransition}
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <button onClick={() => setView('home')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full">
                                <ArrowLeft size={24} className="text-slate-900" />
                            </button>
                            <h2 className="text-xl font-bold text-slate-900">Groceries</h2>
                        </div>

                        <MapComponent items={allGroceries} />

                        <div className="space-y-6">
                            {allGroceries.map((store) => (
                                <div key={store.id} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                                    <div className="flex gap-4 mb-4">
                                        <img src={store.image} alt={store.name} className="w-16 h-16 rounded-xl object-cover bg-slate-50" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-0.5">{store.name}</h3>
                                            <div className="flex items-center gap-1 text-slate-500 text-sm">
                                                <MapPin size={14} />
                                                <span>{store.distance}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {store.offers.map((offer, idx) => (
                                            <div key={idx} className="bg-green-50 text-green-800 text-sm py-2 px-3 rounded-lg flex items-center gap-2">
                                                <Tag size={16} className="shrink-0" />
                                                <span className="font-medium">{offer}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

