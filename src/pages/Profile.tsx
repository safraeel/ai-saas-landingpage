import React from 'react';
import { ProgressBar } from '../components/ui/ProgressBar';

export const ProfilePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <section className="glass-panel border-slate-800/80 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-400 to-violet-500 text-sm font-semibold text-slate-50 shadow-glow">
              AI
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-50 sm:text-2xl">Work with me</h1>
              <p className="text-xs text-slate-400">AI landing pages · premium UI · fast delivery</p>
            </div>
          </div>
          <div className="text-xs text-slate-400">
            <p className="font-medium text-slate-200">Typical delivery</p>
            <div className="mt-2">
              <ProgressBar value={82} />
              <p className="mt-1 text-[11px] text-slate-500">From first draft to launch-ready in days (not weeks).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 text-xs text-slate-200 md:grid-cols-3">
        <div className="glass-panel border-slate-800/80 p-4">
          <p className="text-[11px] text-slate-400">Best for</p>
          <p className="mt-2 text-sm font-semibold text-slate-50">AI tools + SaaS launches</p>
          <p className="mt-1 text-[11px] text-slate-500">Waitlists, demo booking, pricing pages, and product-led growth.</p>
        </div>
        <div className="glass-panel border-slate-800/80 p-4">
          <p className="text-[11px] text-slate-400">What I ship</p>
          <p className="mt-2 text-sm font-semibold text-slate-50">Design + code</p>
          <p className="mt-1 text-[11px] text-slate-500">Responsive UI, motion polish, and clean component systems.</p>
        </div>
        <div className="glass-panel border-slate-800/80 p-4">
          <p className="text-[11px] text-slate-400">Quality bar</p>
          <p className="mt-2 text-sm font-semibold text-slate-50">Performance-first</p>
          <p className="mt-1 text-[11px] text-slate-500">Accessibility + speed + details that make it feel expensive.</p>
        </div>
      </section>

      <section className="glass-panel border-slate-800/80 p-5 text-xs text-slate-200">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Contact</p>
        <p className="mt-3 max-w-2xl text-[11px] text-slate-300">
          Drop your AI product link + what you need (waitlist, pricing, demo page) and I&apos;ll reply with a plan and timeline.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="mailto:Safraeelz@gmail.com"
            className="inline-flex items-center justify-center rounded-xl bg-slate-50 px-4 py-2 text-[11px] font-medium text-slate-950 shadow-soft hover:bg-slate-200"
          >
            Email: Safraeelz@gmail.com
          </a>
          <a
            href="https://t.me/TujiZ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-[11px] font-medium text-slate-200 shadow-soft hover:border-slate-700 hover:bg-slate-900"
          >
            Telegram: @TujiZ
          </a>
          <a
            href="https://wa.me/251901337491?text=Hi%20Safraeel%2C%20I%20need%20a%20landing%20page%20for%20my%20AI%20tool.%20Here%27s%20my%20link%3A%20"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-[11px] font-medium text-slate-200 shadow-soft hover:border-slate-700 hover:bg-slate-900"
          >
            WhatsApp: +251 901 337 491
          </a>
        </div>
      </section>
    </div>
  );
};
