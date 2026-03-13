import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

const featureCards = [
  {
    icon: <Sparkles className="h-5 w-5 text-brand-400" />,
    title: 'AI Conversion Engine',
    description: 'We build landing pages specifically optimized for AI products to maximize signups and demo bookings.',
  },
  {
    icon: <Zap className="h-5 w-5 text-emerald-400" />,
    title: 'Lightning Fast',
    description: 'Built on Vite and React, ensuring millisecond load times to keep your drop-off rates near zero.',
  },
  {
    icon: <Shield className="h-5 w-5 text-violet-400" />,
    title: 'Enterprise Trust',
    description: 'B2B-ready design systems that establish credibility with enterprise buyers instantly.',
  },
];

export const HomePage: React.FC = () => {
  return (
    <div className="relative isolate overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-24 sm:mt-32 lg:mt-16"
          >
            <a href="#features" className="inline-flex space-x-6">
              <span className="rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold leading-6 text-brand-400 ring-1 ring-inset ring-brand-500/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-600 dark:text-gray-300">
                <span>Just shipped God-Mode UI</span>
                <ChevronRight className="h-4 w-4 text-gray-500" />
              </span>
            </a>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            Launch your AI SaaS into orbit.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-700 dark:text-gray-300"
          >
            Stop settling for generic templates. Get a custom-engineered, high-conversion landing page designed exclusively for AI startups. Turn traffic into paid users today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Link
              to="/pricing"
              className={cn(
                "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-brand-500 px-8 font-medium text-white shadow-glow transition-all duration-300 hover:bg-brand-400 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,160,50,0.3)]"
              )}
            >
              <span>View Subscriptions</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/auth" className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-500 dark:text-white dark:hover:text-brand-300 transition-colors">
              Access Dashboard <span aria-hidden="true">{'->'}</span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 flex w-full max-w-xl justify-center sm:mt-16 lg:mt-0 lg:max-w-2xl lg:justify-end"
        >
          <div className="w-full">
            <div className="relative glass-panel rounded-2xl p-4 ring-1 ring-white/10 lg:rounded-3xl lg:p-6">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px] pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white/70 shadow-2xl backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50">
                <div className="flex border-b border-slate-200 bg-slate-100/80 px-4 py-3 dark:border-slate-700/50 dark:bg-slate-800/50">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                </div>
                <div className="p-6 md:p-10 space-y-6">
                  <div className="font-mono text-sm text-brand-300">
                    <span className="text-pink-400">const</span> <span className="text-blue-400">growth</span> = <span className="text-yellow-300">await</span> Launchglow.optimize();
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10">
                      <p className="text-slate-500 dark:text-slate-400">Conversion Rate</p>
                      <p className="mt-2 text-2xl font-semibold text-emerald-400">+142%</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10">
                      <p className="text-slate-500 dark:text-slate-400">Load Time</p>
                      <p className="mt-2 text-2xl font-semibold text-brand-400">0.8s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div id="features" className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-500 dark:text-brand-400">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything you need. No bullshit.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-gray-300">
            We stripped away the clutter to give you exactly what scales AI startups. Pure performance, undeniable aesthetics.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {featureCards.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col glass-panel p-8 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-brand-500/30 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-7 text-gray-300 relative z-10">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
