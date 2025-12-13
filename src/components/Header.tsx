import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { PointsBadge } from './PointsBadge';

interface HeaderProps {
    userPoints?: number;
}

export const Header = ({ userPoints = 0 }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-30 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200 px-4 py-3">
            <div className="flex items-center justify-between max-w-md mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">V</div>
                    <span className="font-bold text-lg tracking-tight text-slate-900">VeganPoints</span>
                </div>

                <div className="flex items-center gap-3">
                    <PointsBadge points={userPoints} size="sm" />
                    <button className="p-2 rounded-full hover:bg-slate-200 text-slate-500">
                        <Bell className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};
