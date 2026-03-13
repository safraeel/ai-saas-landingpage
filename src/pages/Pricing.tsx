import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Check, Zap, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

const stripePromise = loadStripe('pk_test_51TA7PDPKNo1sa6zUVnsfzN9zXK1kA4uwJeC7LlykQCNedNdzJ4sTG7dIcXczyTqxeB8ebAY8lsjlxWUqgmXxKHXv00y0UJJnEJ');

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const handleCheckout = async (planPrice: string) => {
    alert(`Initiating Stripe checkout for ${planPrice} plan!`);
  };

  const plans = [
    { 
      title: 'Starter', 
      desc: 'Perfect for exploring AI SaaS capabilities.',
      price: billingCycle === 'monthly' ? '$29' : '$290', 
      frequency: billingCycle === 'monthly' ? '/mo' : '/yr',
      features: ['Up to 1,000 AI generations', 'Basic analytics dashboard', 'Community Discord support', 'Standard API access'],
      highlighted: false,
    },
    { 
      title: 'Pro', 
      desc: 'For power users and scaling startups.',
      price: billingCycle === 'monthly' ? '$99' : '$990', 
      frequency: billingCycle === 'monthly' ? '/mo' : '/yr',
      features: ['Unlimited AI generations', 'Advanced custom analytics', 'Priority 24/7 email support', 'High-rate API access', 'Custom integrations'],
      highlighted: true,
      badge: 'Most Popular'
    },
    { 
      title: 'Enterprise', 
      desc: 'Custom engineered solutions for large teams.',
      price: 'Custom', 
      frequency: '',
      features: ['Everything in Pro', 'Dedicated account manager', 'SLA guarantees', 'On-premise deployment options', 'Volume discounting'],
      highlighted: false,
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-500 ring-1 ring-inset ring-brand-500/20 dark:text-brand-400">
              <Zap className="h-4 w-4" />
              Simple, transparent pricing
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-semibold leading-7 text-slate-900 dark:text-white"
          >
            Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
          >
            Scale your SaaS without limits
          </motion.p>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600 dark:text-slate-300"
        >
          Start for free, then upgrade when you need more power. No hidden fees or surprise charges.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <div className="relative flex items-center rounded-full bg-slate-200/80 p-1 ring-1 ring-slate-300 dark:bg-white/5 dark:ring-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "relative w-32 rounded-full py-2 text-sm font-medium transition-colors",
                billingCycle === 'monthly' ? "text-white" : "text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              )}
            >
              {billingCycle === 'monthly' && (
                <motion.div layoutId="active-pill" className="absolute inset-0 bg-brand-500 rounded-full" />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={cn(
                "relative w-32 rounded-full py-2 text-sm font-medium transition-colors",
                billingCycle === 'annually' ? "text-white" : "text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              )}
            >
              {billingCycle === 'annually' && (
                <motion.div layoutId="active-pill" className="absolute inset-0 bg-brand-500 rounded-full" />
              )}
              <span className="relative z-10">Annually</span>
            </button>
            <span className="absolute -top-3 -right-6 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
              Save 20%
            </span>
          </div>
        </motion.div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 xl:p-10 transition-transform duration-300 hover:-translate-y-2",
                plan.highlighted 
                  ? "bg-white ring-2 ring-brand-500 shadow-[0_0_40px_rgba(255,160,50,0.14)] dark:bg-slate-900 dark:shadow-[0_0_50px_rgba(255,160,50,0.15)]" 
                  : "bg-white/70 ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="flex items-center gap-1 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold text-white shadow-glow">
                    <Sparkles className="h-3 w-3" />
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="flex items-center justify-between gap-x-4">
                <h3 className={cn("text-lg font-semibold leading-8", plan.highlighted ? "text-brand-500 dark:text-brand-400" : "text-slate-900 dark:text-white")}>
                  {plan.title}
                </h3>
              </div>
              
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-gray-300">{plan.desc}</p>
              
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{plan.price}</span>
                <span className="text-sm font-semibold leading-6 text-slate-500 dark:text-gray-300">{plan.frequency}</span>
              </p>
              
              <button
                onClick={() => handleCheckout(plan.price)}
                className={cn(
                  "mt-6 block rounded-xl w-full px-3 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200",
                  plan.highlighted
                    ? "bg-brand-500 text-white shadow-sm hover:bg-brand-400 shadow-glow"
                    : "bg-slate-900 text-white hover:bg-slate-700 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 ring-1 ring-inset ring-slate-300 dark:ring-white/10"
                )}
              >
                Get started today
              </button>
              
              <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-gray-300 xl:mt-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-emerald-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
