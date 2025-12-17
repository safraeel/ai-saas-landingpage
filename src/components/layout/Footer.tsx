import React from 'react';

export const Footer: React.FC = () => {
  const focusRingClasses =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/60">
      <div className="section-max-width flex flex-col gap-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-300">Launchglow Studio</p>
          <p className="mt-1 text-slate-500">Conversion-first landing pages for AI products.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#work" className={`rounded-md hover:text-slate-300 ${focusRingClasses}`}>
            Work
          </a>
          <a href="#process" className={`rounded-md hover:text-slate-300 ${focusRingClasses}`}>
            Process
          </a>
          <a href="#pricing" className={`rounded-md hover:text-slate-300 ${focusRingClasses}`}>
            Pricing
          </a>
          <a href="#contact" className={`rounded-md hover:text-slate-300 ${focusRingClasses}`}>
            Contact
          </a>
          <a
            href="https://t.me/TujiZ"
            target="_blank"
            rel="noreferrer"
            className={`rounded-md hover:text-slate-300 ${focusRingClasses}`}
          >
            Telegram
          </a>
          <a
            href="https://wa.me/251901337491?text=Hi%20Safraeel%2C%20I%20need%20a%20landing%20page%20for%20my%20AI%20tool.%20Here%27s%20my%20link%3A%20"
            target="_blank"
            rel="noreferrer"
            className={`rounded-md hover:text-slate-300 ${focusRingClasses}`}
          >
            WhatsApp
          </a>
        </div>
        <p className="text-[11px] text-slate-600">© {new Date().getFullYear()} Launchglow Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};
