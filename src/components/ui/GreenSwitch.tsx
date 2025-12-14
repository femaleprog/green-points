import { motion } from 'framer-motion';
import { cn } from '@/utils';

interface GreenSwitchProps {
    className?: string;
    isOn?: boolean;
    onToggle?: () => void;
    interactive?: boolean;
}

export const GreenSwitch = ({ className, isOn = true, onToggle, interactive = false }: GreenSwitchProps) => {
    return (
        <div
            className={cn(
                "relative inline-flex items-center",
                interactive ? "cursor-pointer" : "cursor-default",
                className
            )}
            onClick={interactive ? onToggle : undefined}
        >
            {/* Switch Track */}
            <div className={cn(
                "w-10 h-6 rounded-full transition-colors duration-300 ease-in-out border-2",
                isOn
                    ? "bg-brand-100 border-brand-500"
                    : "bg-slate-200 border-slate-300"
            )}></div>

            {/* Switch Knob / Leaf */}
            <motion.div
                initial={false}
                animate={{
                    x: isOn ? 18 : 2,
                    backgroundColor: isOn ? '#16a34a' : '#94a3b8' // brand-600 vs slate-400
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-0 w-4 h-4 rounded-full shadow-sm flex items-center justify-center"
            >
                {/* Optional Leaf Icon inside knob for extra branding */}
                {isOn && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                )}
            </motion.div>
        </div>
    );
};
