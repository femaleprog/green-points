import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BottomNav } from '@/components/layout/BottomNav';
import { Header } from '@/components/layout/Header';
import { Dashboard } from '@/features/home/pages/Dashboard';
import { LinkAccount } from '@/features/auth/pages/LinkAccountPage';
import { Rewards } from '@/features/rewards/pages/RewardsPage';
import { HistoryPage } from '@/features/history/pages/HistoryPage';
import { Profile } from '@/features/auth/pages/ProfilePage';
import { SearchPage } from '@/features/products/pages/SearchPage';
import { CartPage } from '@/features/cart/pages/CartPage';
import { CartProvider } from '@/features/cart/context/CartContext';
import { useUser } from '@/features/auth/hooks/useUser';

// Create a client
const queryClient = new QueryClient();

const Layout = () => {
    const { user } = useUser();
    return (
        <div className="min-h-screen bg-slate-50/50 flex flex-col max-w-md mx-auto relative shadow-2xl shadow-slate-200 overflow-hidden min-h-[100dvh]">
            <Header userPoints={user?.points} />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
};

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <Router>
                    <div className="w-full min-h-screen bg-slate-200 flex justify-center">
                        <Routes>
                            <Route element={<Layout />}>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/link" element={<LinkAccount />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/rewards" element={<Rewards />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/history" element={<HistoryPage />} />
                                <Route path="/profile" element={<Profile />} />
                            </Route>
                        </Routes>
                    </div>
                </Router>
            </CartProvider>
        </QueryClientProvider>
    );
}
