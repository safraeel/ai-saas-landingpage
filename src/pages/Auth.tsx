import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { account } from '../appwrite';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { checkAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        await account.createEmailPasswordSession(email, password);
        await checkAuth(); 
        navigate('/dashboard');
      } else {
        await account.create(ID.unique(), email, password, name);
        await account.createEmailPasswordSession(email, password);
        await checkAuth(); 
        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please try again.');      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md space-y-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-2xl sm:p-10 dark:border-white/5 dark:bg-slate-900/60"
      >
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-brand-500/20 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-violet-500/20 blur-[80px] pointer-events-none" />
        
        <div className="relative text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-300 shadow-glow dark:bg-white/5 dark:ring-white/10"
          >
            <Lock className="h-6 w-6 text-brand-400" />
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-gray-400">
            {isLogin
              ? 'Enter your credentials to access your dashboard.'
              : 'Sign up to launch your AI integrations faster.'}    
          </p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl bg-red-500/10 p-4 border border-red-500/20 text-sm text-red-400 flex items-center gap-3"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 relative">
          {!isLogin && (
            <div className="relative">
              <label htmlFor="name" className="sr-only">Full Name</label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <User className="h-5 w-5 text-slate-500 dark:text-gray-500" />
              </div>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-xl border-0 bg-white py-4 pl-12 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-all placeholder:text-slate-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500"
                placeholder="John Doe"
                required={!isLogin}
              />
            </div>
          )}

          <div className="relative">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Mail className="h-5 w-5 text-slate-500 dark:text-gray-500" />
            </div>
            <input
              id="email-address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-xl border-0 bg-white py-4 pl-12 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-all placeholder:text-slate-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Lock className="h-5 w-5 text-slate-500 dark:text-gray-500" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-xl border-0 bg-white py-4 pl-12 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-all placeholder:text-slate-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500"
              placeholder="********"
              required
              minLength={8}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full justify-center items-center gap-2 rounded-xl bg-brand-500 py-4 px-3 text-sm font-semibold text-white hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 shadow-glow transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        <div className="relative mt-6">
          <p className="text-center text-sm text-slate-600 dark:text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}   
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold leading-6 text-brand-400 hover:text-brand-300 transition-colors"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
