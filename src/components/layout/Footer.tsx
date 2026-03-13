import React from 'react';
import launchLogo from '../../../images/launchglow.svg';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80 dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-brand-500 to-pink-500 p-[1px] opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-slate-950">
                <img
                  src={launchLogo}
                  alt="Launchglow"
                  className="h-5 w-5 object-contain rounded-full"
                />
              </div>
            </div>
            <span className="text-sm font-semibold text-slate-500 transition-colors group-hover:text-slate-900 dark:text-gray-400 dark:group-hover:text-white">Launchglow</span>
          </Link>
        </div>
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <a href="/#features" className="text-sm leading-6 text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white">
              Features
            </a>
          </div>
          <div className="pb-6">
            <Link to="/pricing" className="text-sm leading-6 text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white">
              Pricing
            </Link>
          </div>
          <div className="pb-6">
            <Link to="/auth" className="text-sm leading-6 text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white">
              Sign In
            </Link>
          </div>
          <div className="pb-6">
            <a href="https://t.me/TujiZ" target="_blank" rel="noreferrer" className="text-sm leading-6 text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white">
              Telegram
            </a>
          </div>
          <div className="pb-6">
            <a href="https://wa.me/251901337491" target="_blank" rel="noreferrer" className="text-sm leading-6 text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white">
              WhatsApp
            </a>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-slate-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Launchglow Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
