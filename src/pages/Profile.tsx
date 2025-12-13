import { useUser } from '@/hooks/useUser';
import { User, LogOut, Settings } from 'lucide-react';

export const Profile = () => {
    const { user } = useUser();

    if (!user) return null;

    return (
        <div className="pb-24 pt-6 px-4 space-y-6 animate-fade-in">
            <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center">
                <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-brand-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{user.displayName}</h2>
                <p className="text-slate-500 text-sm">{user.email}</p>
            </div>

            <div className="space-y-2">
                <button className="w-full bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3 text-slate-700 hover:bg-slate-50">
                    <Settings className="w-5 h-5" /> Settings
                </button>
                <button className="w-full bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3 text-red-600 hover:bg-red-50">
                    <LogOut className="w-5 h-5" /> Sign Out
                </button>
            </div>
        </div>
    );
};
