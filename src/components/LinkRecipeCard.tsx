import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Leaf, ShoppingCart } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export interface AgentResult {
    isDish: boolean;
    name: string;
    items: {
        original: string;
        alternative: string;
        links: {
            name: string;
            url: string;
            price?: string;
            image?: string;
            store: string;
        }[];
    }[];
}

interface LinkRecipeCardProps {
    result: AgentResult;
}

export const LinkRecipeCard = ({ result }: LinkRecipeCardProps) => {
    // Track expanded state for each ingredient index
    const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});

    const toggleExpand = (idx: number) => {
        setExpandedMap(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
        >
            <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                        {result.name}
                        {result.isDish && <span className="block text-xs font-normal text-slate-500 mt-1">Green Version</span>}
                    </h3>
                    <div className="bg-brand-100 text-brand-700 px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold">
                        <Leaf size={12} fill="currentColor" />
                        Green Choice
                    </div>
                </div>

                <div className="space-y-6">
                    {result.items.map((item, idx) => {
                        const isExpanded = !!expandedMap[idx];
                        const visibleLinks = isExpanded ? item.links : item.links.slice(0, 3);
                        const hiddenCount = item.links.length - 3;

                        return (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                <div className="flex items-center gap-2 text-sm mb-3">
                                    <span className="text-slate-400 line-through decoration-slate-300">{item.original}</span>
                                    <span className="text-slate-300">→</span>
                                    <span className="font-bold text-brand-700">{item.alternative}</span>
                                </div>

                                <div className="space-y-2">
                                    {visibleLinks.map((link, lIdx) => (
                                        <a
                                            key={lIdx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block bg-white border border-slate-200 rounded-xl p-3 hover:border-brand-300 transition-colors group relative"
                                        >
                                            <div className="flex items-center gap-3">
                                                {link.image ? (
                                                    <img src={link.image} alt={link.name} className="w-12 h-12 object-cover rounded-lg bg-white" />
                                                ) : (
                                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                                                        <ShoppingCart size={20} />
                                                    </div>
                                                )}

                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs text-slate-500 font-medium uppercase mb-0.5">{link.store}</div>
                                                    <div className="font-medium text-slate-900 text-sm truncate group-hover:text-brand-700 transition-colors">
                                                        {link.name}
                                                    </div>
                                                    {link.price && (
                                                        <div className="text-brand-600 font-bold text-xs mt-1">{link.price}</div>
                                                    )}
                                                </div>

                                                <ExternalLink size={16} className="text-slate-300 group-hover:text-brand-500 transition-colors" />
                                            </div>
                                        </a>
                                    ))}

                                    {item.links.length === 0 && (
                                        <div className="text-xs text-slate-400 italic text-center py-2">No links found in price range</div>
                                    )}

                                    {!isExpanded && hiddenCount > 0 && (
                                        <button
                                            onClick={() => toggleExpand(idx)}
                                            className="w-full text-center text-xs font-medium text-slate-500 hover:text-brand-600 py-2 hover:bg-slate-100 rounded-lg transition-colors"
                                        >
                                            Tout voir ({item.links.length})
                                        </button>
                                    )}

                                    {isExpanded && item.links.length > 3 && (
                                        <button
                                            onClick={() => toggleExpand(idx)}
                                            className="w-full text-center text-xs font-medium text-slate-500 hover:text-brand-600 py-2 hover:bg-slate-100 rounded-lg transition-colors"
                                        >
                                            Voir moins
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};
