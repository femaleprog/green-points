import { useState } from 'react';
import { useUser } from '@/features/auth/hooks/useUser';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Info, ShoppingBag, Star, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils';
import { ShopItem } from '@/types';

// Assets
import eggImg from '@/assets/persona/egg.png';
import chickImg from '@/assets/persona/chick.png';
import adultImg from '@/assets/persona/adult.png';
import glowupImg from '@/assets/persona/glowup.png';
import hatImg from '@/assets/persona/item_hat.png';
import glassesImg from '@/assets/persona/item_glasses.png';
import bowtieImg from '@/assets/persona/item_bowtie.png';

const STAGES = {
    egg: { img: eggImg, label: 'Egg', next: 'chick', threshold: 100 },
    chick: { img: chickImg, label: 'Chick', next: 'adult', threshold: 300 }, // Skipping teen for MVP assets simplicity if needed, but I have it logically
    teen: { img: adultImg, label: 'Teen', next: 'adult', threshold: 600 }, // Re-using adult img or placeholder if missing
    adult: { img: adultImg, label: 'Adult', next: 'glowup', threshold: 1000 },
    glowup: { img: glowupImg, label: 'Glow Up!', next: null, threshold: Infinity }
};

const SHOP_ITEMS: ShopItem[] = [
    { id: 'hat_red', name: 'Red Cap', type: 'hat', cost: 50, imageUrl: hatImg },
    { id: 'glasses_cool', name: 'Cool Shades', type: 'glasses', cost: 100, imageUrl: glassesImg },
    { id: 'bowtie_red', name: 'Dapper Bowtie', type: 'accessory', cost: 75, imageUrl: bowtieImg }
];

export const PersonaDashboard = () => {
    const { user, updatePersona, updateUser } = useUser();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'status' | 'shop'>('status');

    if (!user || !user.persona) return null;

    const { stage, xp, unlockedItems = [], equippedItems = [] } = user.persona;
    const currentStage = STAGES[stage as keyof typeof STAGES] || STAGES.egg;
    const nextThreshold = currentStage.threshold;
    const progress = Math.min(100, (xp / nextThreshold) * 100);

    const handleBuy = async (item: ShopItem) => {
        if (user.points < item.cost) {
            alert("Not enough points!");
            return;
        }

        await updatePersona({
            unlockedItems: [...unlockedItems, item.id]
        });
        await updateUser({
            points: user.points - item.cost
        });
        alert(`You bought ${item.name}!`);
    };

    const handleEquip = async (itemId: string) => {
        const isEquipped = equippedItems.includes(itemId);
        let newEquipped = [...equippedItems];

        if (isEquipped) {
            newEquipped = newEquipped.filter(id => id !== itemId);
        } else {
            // Simple logic: allow one per type? For now allow all.
            newEquipped.push(itemId);
        }
        updatePersona({ equippedItems: newEquipped });
    };

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header */}
            <div className="p-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur z-10 border-b border-slate-100">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full">
                    <ChevronLeft className="w-6 h-6 text-slate-600" />
                </button>
                <div className="flex items-center gap-2 bg-brand-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-brand-500 fill-brand-500" />
                    <span className="font-bold text-brand-700">{user.points} pts</span>
                </div>
            </div>

            {/* Persona Display */}
            <div className="py-8 flex flex-col items-center justify-center relative bg-gradient-to-b from-blue-50 to-white">
                <div className="relative w-48 h-48">
                    <motion.img
                        key={stage}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={currentStage.img}
                        alt="Persona"
                        className="w-full h-full object-contain drop-shadow-xl z-0 relative"
                    />

                    {/* Equipped Items Layering - minimalistic implementation */}
                    {equippedItems.includes('hat_red') && (
                        <img src={hatImg} className="absolute -top-4 left-10 w-28 drop-shadow-md z-10" alt="hat" />
                    )}
                    {equippedItems.includes('glasses_cool') && (
                        <img src={glassesImg} className="absolute top-14 left-10 w-28 drop-shadow-md z-10" alt="glasses" />
                    )}
                    {equippedItems.includes('bowtie_red') && (
                        <img src={bowtieImg} className="absolute top-32 left-16 w-16 drop-shadow-md z-10" alt="bowtie" />
                    )}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-slate-800">{currentStage.label}</h2>
                <div className="text-sm text-slate-500 font-medium">Stage {Object.keys(STAGES).indexOf(stage) + 1}</div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100 mb-6">
                <button
                    onClick={() => setActiveTab('status')}
                    className={cn(
                        "flex-1 py-3 text-sm font-medium border-b-2 transition-colors",
                        activeTab === 'status' ? "border-brand-500 text-brand-600" : "border-transparent text-slate-500"
                    )}
                >
                    Status & XP
                </button>
                <button
                    onClick={() => setActiveTab('shop')}
                    className={cn(
                        "flex-1 py-3 text-sm font-medium border-b-2 transition-colors",
                        activeTab === 'shop' ? "border-brand-500 text-brand-600" : "border-transparent text-slate-500"
                    )}
                >
                    Shop & Decor
                </button>
            </div>

            {/* Content */}
            <div className="px-4">
                <AnimatePresence mode="wait">
                    {activeTab === 'status' ? (
                        <motion.div
                            key="status"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-6"
                        >
                            {/* XP Bar */}
                            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-slate-700">Experience</span>
                                    <span className="text-xs text-slate-500">{xp} / {nextThreshold} XP</span>
                                </div>
                                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-brand-400 to-brand-500 transition-all duration-1000 ease-out"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <p className="text-xs text-slate-400 mt-2">Earn XP by identifying items and making sustainable choices.</p>
                            </div>

                            {/* Milestones */}
                            <div className="space-y-3">
                                <h3 className="font-bold text-slate-900">Evolution Path</h3>
                                {Object.entries(STAGES).map(([key, data], idx) => {
                                    const isUnlocked = Object.keys(STAGES).indexOf(stage) >= idx;
                                    return (
                                        <div key={key} className={cn(
                                            "flex items-center gap-4 p-3 rounded-xl border",
                                            isUnlocked ? "bg-brand-50/50 border-brand-100" : "bg-slate-50 border-slate-100 opacity-60"
                                        )}>
                                            <div className="w-10 h-10 bg-white rounded-full p-1 border border-slate-100 flex items-center justify-center">
                                                {isUnlocked ? (
                                                    <img src={data.img} className="w-full h-full object-contain" />
                                                ) : <Lock className="w-4 h-4 text-slate-300" />}
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm text-slate-800">{data.label}</div>
                                                <div className="text-xs text-slate-500">{data.threshold === Infinity ? 'Max Level' : `${data.threshold} XP required`}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </motion.div>
                    ) : (
                        <motion.div
                            key="shop"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {SHOP_ITEMS.map((item) => {
                                const isUnlocked = unlockedItems.includes(item.id);
                                const isEquipped = equippedItems.includes(item.id);

                                return (
                                    <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center text-center">
                                        <div className="w-20 h-20 mb-2 relative">
                                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain" />
                                        </div>
                                        <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                                        <div className="flex items-center gap-1 text-xs font-bold text-brand-600 mb-3">
                                            {item.cost} pts
                                        </div>

                                        {isUnlocked ? (
                                            <button
                                                onClick={() => handleEquip(item.id)}
                                                className={cn(
                                                    "w-full py-2 rounded-lg text-xs font-bold transition-colors",
                                                    isEquipped ? "bg-brand-100 text-brand-700 border border-brand-200" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                                )}
                                            >
                                                {isEquipped ? 'Equipped' : 'Equip'}
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleBuy(item)}
                                                className="w-full bg-slate-900 text-white py-2 rounded-lg text-xs font-bold hover:bg-slate-800 flex items-center justify-center gap-2"
                                            >
                                                Buy <ShoppingBag className="w-3 h-3" />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
