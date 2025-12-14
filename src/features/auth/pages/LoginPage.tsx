import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Leaf, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const LoginPage = () => {
    const { login, isLoggingIn } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('demo@greenswitch.com');
    const [password, setPassword] = useState('demo123');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await login();
            navigate('/');
        } catch (err) {
            setError('Failed to sign in. Please try again.');
        }
    };

    const handleSignUp = () => {
        // Mock functionality for demo
        alert("Registration is currently closed for the demo. Please use the 'Sign In' button.");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-brand-200/20 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-slate-100 p-8 z-10"
            >
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-brand-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-brand-500/30 mb-4 transform rotate-3">
                        <Leaf className="text-white w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">GreenSwitch</h1>
                    <p className="text-slate-500 text-sm">Your sustainable companion</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-600 ml-1 uppercase tracking-wider">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all font-medium"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-600 ml-1 uppercase tracking-wider">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all font-medium"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs text-center font-medium bg-red-50 py-1 rounded-lg">
                            {error}
                        </p>
                    )}

                    <div className="pt-2">
                        <AnimatedButton
                            variant="primary"
                            className="w-full justify-center text-lg py-4 shadow-brand-500/25"
                            disabled={isLoggingIn}
                        >
                            {isLoggingIn ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Signing In...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </AnimatedButton>
                    </div>
                </form>

                <div className="mt-8 text-center space-y-4">
                    <div className="text-xs text-slate-400 font-medium">
                        Don't have an account?
                    </div>
                    <button
                        onClick={handleSignUp}
                        className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors"
                    >
                        Create Account
                    </button>

                    <button className="text-xs text-brand-600 font-semibold hover:underline">
                        Forgot password?
                    </button>
                </div>
            </motion.div>

            <p className="absolute bottom-6 text-xs text-slate-400 font-medium">
                © 2024 GreenSwitch Demo
            </p>
        </div>
    );
};
