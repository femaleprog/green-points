import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@/features/auth/hooks/useUser';
import { Loader2 } from 'lucide-react';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user, isLoading } = useUser();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <Loader2 className="w-8 h-8 text-brand-500 animate-spin mb-4" />
                <p className="text-slate-500 font-medium text-sm">Loading user data...</p>
            </div>
        );
    }

    if (!user) {
        // Redirect to login page while saving the attempted url
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};
