import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Gift, History, Search } from 'lucide-react';
import { cn } from '@/utils';
import { motion } from 'framer-motion';

export const BottomNav = () => {
    const tabs = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Link', icon: ShoppingBag, path: '/link' },
        { name: 'Search', icon: Search, path: '/search' },
        { name: 'Rewards', icon: Gift, path: '/rewards' },
        { name: 'History', icon: History, path: '/history' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 pb-safe pt-2 px-6">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.name}
                        to={tab.path}
                        className={({ isActive }) => cn(
                            "flex flex-col items-center gap-1 p-2 min-w-[64px] rounded-xl transition-colors relative",
                            isActive ? "text-brand-600" : "text-slate-400 hover:text-slate-600"
                        )}
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-brand-50 rounded-xl -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <tab.icon className={cn("w-6 h-6", isActive && "fill-current")} />
                                <span className="text-[10px] font-medium">{tab.name}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};
