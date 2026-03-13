import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { PromptsManager } from '../components/PromptsManager';
import { LogOut, Rocket, Activity, CreditCard } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, loading, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Activity className="h-8 w-8 text-brand-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-20 relative isolate">
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand-500/20 blur-[120px] pointer-events-none" />
      
      <section className="max-w-6xl mx-auto px-4 w-full space-y-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
              <Rocket className="h-3 w-3" /> Overview
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Welcome, {user?.name || 'Creator'}!
            </h1>
            <p className="mt-2 max-w-xl text-slate-600 dark:text-gray-400">
              Manage your SaaS configuration, track your AI generation usage, and explore your saved prompts.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20 w-fit hover:border-red-500/40"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Plan Widget */}
          <div className="group relative overflow-hidden rounded-3xl glass-panel border border-slate-200 bg-white/80 p-6 transition-colors hover:border-brand-500/30 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500 dark:text-gray-400">Current Plan</h3>
                <p className="text-xl font-bold text-slate-900 dark:text-white">Tuner Free</p>
              </div>
            </div>
            <p className="mb-6 text-xs text-slate-500 dark:text-gray-500">Upgrade to remove limits and unlock premium models.</p>
            <button
              onClick={() => navigate('/pricing')}
              className="w-full rounded-xl bg-brand-500 px-4 py-3 text-sm font-medium text-white shadow-glow transition-all hover:bg-brand-400 hover:scale-[1.02]"
            >
              Upgrade to Pro
            </button>
          </div>

          {/* Usage Widget */}
          <div className="group relative overflow-hidden rounded-3xl glass-panel border border-slate-200 bg-white/80 p-6 transition-colors hover:border-emerald-500/30 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Activity className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500 dark:text-gray-400">API Usage</h3>
                <p className="text-xl font-bold text-slate-900 dark:text-white">0 <span className="text-sm font-normal text-slate-500 dark:text-gray-500">/ 100 req</span></p>
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-emerald-400">0% utilized</span>
                <span className="text-slate-500 dark:text-gray-500">100 remaining</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-300/80 dark:bg-slate-800/80">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "2%" }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-brand-400" 
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Database UI */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-3xl glass-panel border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5"
        >
          <PromptsManager />
        </motion.div>
      </section>
    </div>
  );
};
