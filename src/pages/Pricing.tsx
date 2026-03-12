import React from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51TA7PDPKNo1sa6zUVnsfzN9zXK1kA4uwJeC7LlykQCNedNdzJ4sTG7dIcXczyTqxeB8ebAY8lsjlxWUqgmXxKHXv00y0UJJnEJ');

export const PricingPage: React.FC = () => {
  const handleCheckout = async (planPrice: string) => {
    // You will call your backend (Appwrite/Server) to create a Stripe session
    // const stripe = await stripePromise;
    // const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
    alert(`Initiating Stripe checkout for ${planPrice} plan!\n(Need a Stripe account to finish)`);
  };

  return (
    <div className="space-y-14 sm:space-y-16" id="top">
      <section className="pt-8 sm:pt-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl"
        >
          Simple, transparent pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-base text-slate-400 sm:text-lg max-w-2xl mx-auto"
        >
          Choose a plan that works best for your needs.
        </motion.p>
      </section>

      <section className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {[
          { title: 'Starter', price: '$29', features: ['1 Project', 'Basic Analytics', 'Community Support'] },
          { title: 'Pro', price: '$99', features: ['10 Projects', 'Advanced Analytics', 'Priority Support'] },
          { title: 'Enterprise', price: 'Custom', features: ['Unlimited Projects', 'Custom Features', '24/7 Support'] },
        ].map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="glass-panel p-8 text-center"
          >
            <h3 className="text-xl font-medium text-slate-100">{plan.title}</h3>
            <p className="mt-4 text-3xl font-bold text-slate-50">{plan.price}</p>
            <ul className="mt-8 space-y-4 text-sm text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button 
              onClick={() => handleCheckout(plan.price)}
              className="mt-8 w-full rounded-xl bg-brand-500 py-3 text-sm font-medium text-slate-50 hover:bg-brand-400 transition-colors shadow-glow"
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
