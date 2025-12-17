import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const featureCards = [
  {
    title: 'Conversion-first hero + messaging',
    description: 'Clear value prop, strong CTA hierarchy, and copy that sells your AI product in seconds.',
  },
  {
    title: 'Premium UI motion & polish',
    description: 'Smooth, modern interactions (micro-animations, hover states, scroll feel) that signal quality.',
  },
  {
    title: 'Performance + accessibility',
    description: 'Fast loading, great Lighthouse scores, and keyboard/screen-reader friendly UI by default.',
  },
];

export const HomePage: React.FC = () => {
  const focusRingClasses =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  return (
    <div className="space-y-14 sm:space-y-16" id="top">
      <section className="grid items-center gap-8 pt-3 sm:gap-10 sm:pt-4 lg:grid-cols-[1.4fr_1fr]">
        <motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.4rem]"
          >
            Launchglow landing pages that convert.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg"
          >
            I design and build premium landing pages for AI tools - fast, smooth, and focused on signups, demos, and
            revenue.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#work"
              className={`inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-6 py-3 text-sm font-medium text-slate-50 shadow-glow transition-colors hover:bg-brand-400 sm:w-auto sm:py-2.5 ${focusRingClasses}`}
            >
              View case studies
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className={`inline-flex w-full items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 shadow-soft transition-colors hover:border-slate-700 hover:bg-slate-900 sm:w-auto sm:py-2.5 ${focusRingClasses}`}
            >
              Work with me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="glass-panel relative overflow-hidden p-6 sm:p-7 lg:p-8"
        >
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="relative space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200">AI launch-ready delivery</p>
            <p className="text-sm text-slate-300">
              Conversion-focused sections, clean UI systems, and motion polish - built like a real product.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
                <p className="text-[11px] text-slate-400">Build speed</p>
                <p className="mt-1 font-medium text-slate-100">Vite + React + Tailwind</p>
              </div>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
                <p className="text-[11px] text-slate-400">Conversion focus</p>
                <p className="mt-1 font-medium text-emerald-300">Signups + demos</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
                <p className="text-[11px] text-slate-400">Quality bar</p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-400 via-emerald-400 to-violet-400" />
                </div>
                <p className="mt-1 text-[11px] text-slate-400">Design, performance, and polish - shipped together.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="space-y-6 scroll-mt-28" id="process">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">What clients get.</h2>
            <p className="mt-1 text-sm text-slate-400">A landing page that looks premium and sells your AI tool.</p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="glass-panel relative overflow-hidden p-5"
            >
              <div className="absolute inset-px rounded-[1.4rem] border border-white/5" />
              <div className="relative">
                <h3 className="text-sm font-medium text-slate-50">{card.title}</h3>
                <p className="mt-2 text-xs text-slate-400">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="space-y-6 scroll-mt-28">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Case studies</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-400">
              Three common AI launch pages. Each shows the structure, copy intent, and UX details that drive
              conversions.
            </p>
          </div>
          <a
            href="#contact"
            className={`inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 shadow-soft transition-colors hover:border-slate-700 hover:bg-slate-900 ${focusRingClasses}`}
          >
            Get a quote
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'AI Tool Hero + Value Prop',
              summary: 'Headline, proof, and CTA hierarchy that makes the product instantly understandable.',
              meta: 'Quick scope',
            },
            {
              title: 'Waitlist Page + Email Capture',
              summary: 'High-trust waitlist with strong objections handling and clean form states.',
              meta: 'Standard scope',
            },
            {
              title: 'Full Marketing Landing + Pricing',
              summary: 'Sections, FAQ, pricing, and conversion CTAs designed for paid acquisition.',
              meta: 'Complex scope',
            },
          ].map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="glass-panel border-slate-800/80 p-4 text-xs text-slate-200"
            >
              <p className="text-[11px] text-slate-400">{item.meta}</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-2 text-[11px] text-slate-400">{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="pricing" className="space-y-6 scroll-mt-28">
        <div>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Pricing</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-400">
            Simple packages you can choose from. Final quote depends on sections, copy needs, and integrations.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Quick',
              price: '$299 - $599',
              bullets: ['Hero + proof + CTA', 'Responsive + accessible', 'Premium motion polish'],
            },
            {
              title: 'Standard',
              price: '$799 - $1499',
              bullets: ['Full landing sections', 'Waitlist/demo form states', 'Performance-first build'],
            },
            {
              title: 'Complex',
              price: '$1999+',
              bullets: ['Pricing + FAQ + variants', 'Analytics events + tracking hooks', 'Iterative polish pass'],
            },
          ].map((tier) => (
            <div key={tier.title} className="glass-panel border-slate-800/80 p-5 text-xs text-slate-200">
              <p className="text-[11px] text-slate-400">{tier.title}</p>
              <p className="mt-2 text-xl font-semibold text-slate-50">{tier.price}</p>
              <ul className="mt-3 space-y-2 text-[11px] text-slate-300">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-brand-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-6 scroll-mt-28">
        <div>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">FAQ</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-400">Quick answers founders usually ask before hiring.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: 'Do you write copy?',
              a: 'I can refine your existing copy or draft a clear first version. Final messaging is aligned in Discovery.',
            },
            {
              q: 'What stack do you ship with?',
              a: 'React + Vite + Tailwind by default. If you need Next.js for SEO, we can adapt the same design system.',
            },
            {
              q: 'Can you connect a waitlist form?',
              a: 'Yes. I can wire a simple form, success/error states, and hook it to your provider or API endpoint.',
            },
            {
              q: 'How fast can we launch?',
              a: 'Quick builds can ship in days. Larger marketing pages depend on section count and feedback loops.',
            },
          ].map((item) => (
            <div key={item.q} className="glass-panel border-slate-800/80 p-4 text-xs text-slate-200">
              <p className="text-sm font-semibold text-slate-50">{item.q}</p>
              <p className="mt-2 text-[11px] text-slate-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-6 scroll-mt-28">
        <div className="glass-panel border-slate-800/80 p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Contact</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">Ready to launch your AI tool?</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Send your product link + goal (waitlist, demo bookings, pricing page). I&apos;ll reply with a plan and timeline.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="mailto:Safraeelz@gmail.com"
              className={`inline-flex items-center justify-center rounded-xl bg-slate-50 px-4 py-2 text-[11px] font-medium text-slate-950 shadow-soft hover:bg-slate-200 ${focusRingClasses}`}
            >
              Email: Safraeelz@gmail.com
            </a>
            <a
              href="https://t.me/TujiZ"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-[11px] font-medium text-slate-200 shadow-soft hover:border-slate-700 hover:bg-slate-900 ${focusRingClasses}`}
            >
              Telegram: @TujiZ
            </a>
            <a
              href="https://wa.me/251901337491?text=Hi%20Safraeel%2C%20I%20need%20a%20landing%20page%20for%20my%20AI%20tool.%20Here%27s%20my%20link%3A%20"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-[11px] font-medium text-slate-200 shadow-soft hover:border-slate-700 hover:bg-slate-900 ${focusRingClasses}`}
            >
              WhatsApp: +251 901 337 491
            </a>
          </div>
          <p className="mt-3 text-[10px] text-slate-500">Email me and I&apos;ll respond with next steps.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Trusted by builders shipping AI.</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="glass-panel p-5 sm:p-6 text-sm leading-relaxed text-slate-300 md:text-xs md:leading-normal">
              <p className="text-slate-300">
                “The landing page finally matched our product quality. Copy, motion, and layout felt premium - and
                signups improved.”
              </p>
              <p className="mt-4 text-xs text-slate-500 md:mt-3 md:text-[11px]">Founder - AI SaaS</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
