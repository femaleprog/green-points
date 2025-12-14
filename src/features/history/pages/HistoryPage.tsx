import { useState } from 'react';
import { PAST_PURCHASES } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, Leaf, ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '@/utils';

export const HistoryPage = () => {
    const [selectedPurchase, setSelectedPurchase] = useState<string | null>(null);

    return (
        <div className="p-6 pb-24 space-y-6">
            <header>
                <h1 className="text-2xl font-bold text-slate-900">Purchase History</h1>
                <p className="text-slate-500">Analyze your impact and find better choices.</p>
            </header>

            <div className="space-y-4">
                {PAST_PURCHASES.map((purchase, index) => (
                    <motion.div
                        key={purchase.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                    >
                        <div
                            className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                            onClick={() => setSelectedPurchase(selectedPurchase === purchase.id ? null : purchase.id)}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-lg">
                                    {purchase.storeName[0]}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">{purchase.storeName}</h3>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {purchase.date}</span>
                                        <span>•</span>
                                        <span>€{purchase.totalAmount.toFixed(2)}</span>
                                    </div>
                                    {purchase.items.reduce((acc, item) => acc + (item.substitute?.pointsGain || 0), 0) > 0 && (
                                        <div className="mt-1 text-xs font-medium text-brand-600 flex items-center gap-1">
                                            <TrendingUp size={12} />
                                            Missed Opportunity: +{purchase.items.reduce((acc, item) => acc + (item.substitute?.pointsGain || 0), 0)} pts
                                        </div>
                                    )}
                                </div>
                            </div>
                            <ChevronRight
                                size={20}
                                className={cn("text-slate-400 transition-transform", selectedPurchase === purchase.id && "rotate-90")}
                            />
                        </div>

                        <AnimatePresence>
                            {selectedPurchase === purchase.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-slate-100 bg-slate-50/50"
                                >
                                    <div className="p-4 space-y-4">
                                        <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Analysis</h4>

                                        {purchase.items.map(item => (
                                            <div key={item.id} className="bg-white p-3 rounded-xl border border-slate-100">
                                                <div className="flex items-start gap-3 mb-3">
                                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex justify-between">
                                                            <h5 className="font-medium text-slate-900">{item.name}</h5>
                                                            <span className="text-sm text-slate-500">€{item.price.toFixed(2)}</span>
                                                        </div>
                                                        {!item.isVegan && (
                                                            <span className="inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full mt-1">
                                                                Non-Vegan
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {item.substitute && (
                                                    <div className="bg-brand-50/50 rounded-lg p-3 border border-brand-100">
                                                        <div className="flex items-center gap-2 mb-2 text-brand-700 text-sm font-medium">
                                                            <Leaf size={14} />
                                                            <span>Better Choice Available</span>
                                                        </div>
                                                        <div className="flex items-center justify-between gap-2">
                                                            <div className="text-sm text-slate-700">
                                                                Switch to <strong>{item.substitute.name}</strong>
                                                            </div>
                                                            <ArrowRight size={14} className="text-brand-400" />
                                                        </div>
                                                        <div className="mt-2 flex gap-2">
                                                            <div className="flex items-center gap-1 text-xs bg-white px-2 py-1 rounded border border-brand-100 text-brand-700">
                                                                <TrendingUp size={12} />
                                                                +{item.substitute.pointsGain} pts
                                                            </div>
                                                            <div className="flex items-center gap-1 text-xs bg-white px-2 py-1 rounded border border-brand-100 text-brand-700">
                                                                <Leaf size={12} />
                                                                Save {item.substitute.footprintSavings}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
