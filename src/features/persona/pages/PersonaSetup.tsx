import { useNavigate } from 'react-router-dom';
import { useUser } from '@/features/auth/hooks/useUser';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ArrowRight, Lock } from 'lucide-react';
import eggImg from '@/assets/persona/egg.png';

export const PersonaSetup = () => {
    const { updatePersona, user } = useUser();
    const navigate = useNavigate();

    const handleSelect = async () => {
        await updatePersona({ type: 'chicken', stage: 'egg' });
        navigate('/persona');
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xs w-full space-y-8"
            >
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Choose your Companion</h1>
                    <p className="text-slate-500">Select a partner to evolve with you as you save the planet.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {/* Chicken (Available) */}
                    <div className="bg-white rounded-2xl p-4 border-2 border-brand-500 shadow-md relative overflow-hidden">
                        <div className="absolute top-2 right-2 text-xs font-bold text-brand-600 bg-brand-100 px-2 py-1 rounded-full">
                            Recommended
                        </div>
                        <img src={eggImg} alt="Chicken Egg" className="w-24 h-24 mx-auto mb-4 object-contain" />
                        <h3 className="text-lg font-bold text-slate-900">The Chicken</h3>
                        <p className="text-xs text-slate-500">Starts as an egg. Full of potential!</p>
                    </div>

                    {/* Cow (Locked) */}
                    <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 opacity-60 relative">
                        <div className="absolute top-2 right-2" title="Coming Soon">
                            <Lock className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="w-24 h-24 mx-auto mb-4 bg-slate-200 rounded-full flex items-center justify-center">
                            <span className="text-4xl">🐮</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">The Cow</h3>
                        <p className="text-xs text-slate-500">Coming soon...</p>
                    </div>
                </div>

                <AnimatedButton onClick={handleSelect} className="w-full">
                    Start Journey <ArrowRight className="w-4 h-4 ml-2" />
                </AnimatedButton>
            </motion.div>
        </div>
    );
};
