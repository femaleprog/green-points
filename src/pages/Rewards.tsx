import { MOCK_REWARDS } from '@/data/mockData';
import { useUser } from '@/hooks/useUser';
import { AnimatedButton } from '@/components/AnimatedButton';
import { PointsBadge } from '@/components/PointsBadge';
import { motion } from 'framer-motion';

export const Rewards = () => {
    const { user } = useUser();

    if (!user) return null;

    return (
        <div className="pb-24 pt-6 px-4 space-y-6 animate-fade-in">
            <header className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">Rewards</h1>
                    <p className="text-slate-500 text-sm">Treat yourself with your points.</p>
                </div>
                <PointsBadge points={user.points} size="lg" />
            </header>

            <div className="grid grid-cols-1 gap-4">
                {MOCK_REWARDS.map((reward) => {
                    const canAfford = user.points >= reward.cost;

                    return (
                        <motion.div
                            key={reward.id}
                            layout
                            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4"
                        >
                            <div className="w-20 h-20 bg-slate-50 rounded-xl flex items-center justify-center text-4xl shrink-0">
                                {reward.emoji}
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-900 leading-tight mb-1">{reward.title}</h3>
                                    <p className="text-xs text-slate-500 line-clamp-2">{reward.description}</p>
                                </div>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="font-bold text-brand-600 text-sm">{reward.cost} VP</span>
                                    <AnimatedButton
                                        variant={canAfford ? 'primary' : 'secondary'}
                                        disabled={!canAfford}
                                        className="py-1.5 px-3 text-xs h-auto"
                                    >
                                        Redeem
                                    </AnimatedButton>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
