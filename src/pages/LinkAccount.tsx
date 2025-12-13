import { AVAILABLE_STORES } from '@/data/mockData';
import { useUser } from '@/hooks/useUser';
import { AnimatedButton } from '@/components/AnimatedButton';
import { Check, RefreshCw, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const LinkAccount = () => {
    const { user, linkStore, isLinking, syncPurchases, isSyncing } = useUser();

    if (!user) return null;

    return (
        <div className="pb-24 pt-6 px-4 space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Link your accounts</h1>
                <p className="text-slate-500">Connect your loyalty cards to automatically earn VeganPoints on every purchase.</p>
            </header>

            <div className="space-y-4">
                {AVAILABLE_STORES.map((store) => {
                    const isConnected = user.linkedStores.includes(store.id);

                    return (
                        <motion.div
                            layout
                            key={store.id}
                            className={cn(
                                "bg-white rounded-2xl p-4 border transition-colors shadow-sm",
                                isConnected ? "border-brand-200 bg-brand-50/30" : "border-slate-100"
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 border border-slate-100">
                                        {store.logoUrl && <img src={store.logoUrl} alt={store.name} className="w-full h-full object-contain" />}
                                        {!store.logoUrl && <ShoppingCart className="text-slate-300" />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{store.name}</h3>
                                        <p className="text-xs text-slate-500">
                                            {isConnected ? "Connected" : "Not connected"}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    {!isConnected ? (
                                        <AnimatedButton
                                            size="sm"
                                            variant="primary"
                                            className="text-sm px-4 py-2"
                                            onClick={() => linkStore(store.id)}
                                            isLoading={isLinking}
                                        >
                                            Connect
                                        </AnimatedButton>
                                    ) : (
                                        <div className="flex flex-col items-end gap-2">
                                            <div className="flex items-center text-brand-600 text-xs font-bold bg-brand-100 px-2 py-1 rounded-md">
                                                <Check className="w-3 h-3 mr-1" /> Linked
                                            </div>
                                            <AnimatedButton
                                                variant="ghost"
                                                className="text-xs h-8 px-2 py-0 text-slate-500 hover:text-brand-600"
                                                onClick={() => syncPurchases(store.id)}
                                                isLoading={isSyncing}
                                            >
                                                <RefreshCw className="w-3 h-3 mr-1" /> Sync
                                            </AnimatedButton>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-8 text-center text-sm text-slate-500">
                <p>Your data is secure and used only to verify purchases.</p>
            </div>
        </div>
    );
};
