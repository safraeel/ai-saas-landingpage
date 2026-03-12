import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { PromptsManager } from '../components/PromptsManager';

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
        <p className="text-slate-400">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 pt-8 sm:pt-12" id="top">
      <section className="max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="glass-panel p-6 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Welcome back, {user?.name || 'Creator'}!
              </h1>
              <p className="mt-2 text-slate-400">Manage your SaaS tools and subscriptions here.</p>
            </div>
            <button
              onClick={handleLogout}
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20 w-fit"
            >
              Sign Out
            </button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-6">
              <h3 className="text-lg font-medium text-slate-100">Current Plan</h3>
              <p className="mt-2 text-sm text-slate-400">You are currently on the Free Tier.</p>
              <button
                onClick={() => navigate('/pricing')}
                className="mt-6 w-full sm:w-auto rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-slate-50 shadow-glow transition-colors hover:bg-brand-400"
              >
                Upgrade to Pro
              </button>
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-6">
              <h3 className="text-lg font-medium text-slate-100">API Usage</h3>
              <div className="mt-6">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>0 requests</span>
                  <span>100 limit</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-0 rounded-full bg-gradient-to-r from-brand-400 via-emerald-400 to-violet-400" />
                </div>
              </div>
            </div>
          </div>

          {/* New Prompts Database Manager embedded here! */}
          <PromptsManager />
          
        </motion.div>
      </section>
    </div>
  );
};
