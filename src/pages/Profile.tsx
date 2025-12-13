import { useUser } from '@/hooks/useUser';
import { User, Mail, Award, Settings, LogOut } from 'lucide-react';
import { PointsBadge } from '@/components/PointsBadge';
import { AnimatedButton } from '@/components/AnimatedButton';

export const Profile = () => {
    const { user } = useUser();

    if (!user) return null;

    return (
        <div className="pb-24 pt-6 px-4 space-y-6 animate-fade-in bg-white min-h-screen">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
                <PointsBadge points={user.points} size="lg" />
            </header>

            <div className="flex flex-col items-center justify-center mb-8">
                <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4 shadow-inner">
                    <User size={48} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{user.displayName || 'Vegan Warrior'}</h2>
                <p className="text-slate-500 text-sm">{user.email || 'user@example.com'}</p>
            </div>

            <div className="space-y-4">
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                    <div className="bg-blue-50 p-2 rounded-xl text-blue-500">
                        <Mail size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-slate-500">Email</p>
                        <p className="font-medium text-slate-900">{user.email}</p>
                    </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                    <div className="bg-yellow-50 p-2 rounded-xl text-yellow-500">
                        <Award size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-slate-500">Status</p>
                        <p className="font-medium text-slate-900">Green Member</p>
                    </div>
                </div>
            </div>

            <div className="pt-6 space-y-3">
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors text-slate-900 font-medium">
                    <div className="flex items-center gap-3">
                        <Settings size={20} className="text-slate-500" />
                        <span>Settings</span>
                    </div>
                </button>

                <AnimatedButton variant="secondary" className="w-full justify-center gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100">
                    <LogOut size={18} />
                    <span>Log Out</span>
                </AnimatedButton>
            </div>
        </div>
    );
};
