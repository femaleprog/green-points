import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BottomNav } from '@/components/BottomNav';
import { Header } from '@/components/Header';
import { Dashboard } from '@/pages/Dashboard';
import { LinkAccount } from '@/pages/LinkAccount';
import { Rewards } from '@/pages/Rewards';
import { HistoryPage } from '@/pages/History';
import { useUser } from '@/hooks/useUser';

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
            <Router>
                <div className="w-full min-h-screen bg-slate-200 flex justify-center">
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/link" element={<LinkAccount />} />
                            <Route path="/rewards" element={<Rewards />} />
                            <Route path="/history" element={<HistoryPage />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </QueryClientProvider>
    );
}
