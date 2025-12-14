import { GreenSwitch } from '@/components/ui/GreenSwitch';

import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { PointsBadge } from '@/components/ui/PointsBadge';
import { UserProfile } from '@/types';
import eggImg from '@/assets/persona/egg.png';
import chickImg from '@/assets/persona/chick.png';
import adultImg from '@/assets/persona/adult.png';
import glowupImg from '@/assets/persona/glowup.png';

interface HeaderProps {
    user?: UserProfile | null;
}

const PERSONA_IMGS: Record<string, string> = {
    egg: eggImg,
    chick: chickImg,
    teen: adultImg,
    adult: adultImg,
    glowup: glowupImg
};


export const Header = ({ user }: HeaderProps) => {
    const personaImg = user?.persona ? PERSONA_IMGS[user.persona.stage] : null;

    return (
        <header className="sticky top-0 z-30 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200 px-4 py-3">
            <div className="flex items-center justify-between max-w-md mx-auto">
                <div className="flex items-center gap-2">
                    <GreenSwitch className="scale-90" interactive={false} isOn={true} />
                    <span className="font-bold text-lg tracking-tight text-slate-900">
                        Green<span className="text-brand-600">Switch</span>
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <PointsBadge points={user?.points || 0} size="sm" />
                    <button className="p-2 rounded-full hover:bg-slate-200 text-slate-500">
                        <Bell className="w-5 h-5" />
                    </button>
                    <Link to="/persona" className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors border border-slate-200 overflow-hidden">
                        {personaImg ? (
                            <img src={personaImg} alt="Persona" className="w-full h-full object-cover" />
                        ) : (
                            <User size={20} />
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};
