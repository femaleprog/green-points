import { CompanySpotlight } from '@/lib/types';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

interface CompanyCardProps {
    company: CompanySpotlight;
}

export const CompanyCard = ({ company }: CompanyCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 relative overflow-hidden"
        >
            <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex gap-3">
                    <img src={company.imageUrl} alt={company.name} className="w-12 h-12 rounded-xl object-cover bg-slate-100" />
                    <div>
                        <h3 className="font-bold text-lg text-slate-900">{company.name}</h3>
                        <div className="flex items-center text-xs text-yellow-500 gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="text-slate-500 font-medium">Partner of the Month</span>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-slate-600 text-sm mb-4 relative z-10">{company.description}</p>

            <div className="bg-brand-50 rounded-xl p-3 flex items-center justify-between relative z-10">
                <span className="text-brand-700 font-medium text-sm">{company.promoText}</span>
                <button className="text-brand-600 hover:text-brand-700">
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* Decorative background blob */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-100/50 rounded-full blur-2xl" />
        </motion.div>
    );
};
