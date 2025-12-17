import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useThemeStore } from '../../store/themeStore';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  const focusRingClasses =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl">
      <nav className="section-max-width flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Launchglow Studio"
            className="h-9 w-9 select-none"
            loading="eager"
            decoding="async"
          />
          <div className="leading-tight">
            <Link to="/" className="text-sm font-medium text-slate-300">
              Launchglow Studio
            </Link>
            <p className="text-xs text-slate-500">Conversion-first</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-lg pb-1 text-slate-400 transition-colors hover:text-slate-100 ${focusRingClasses}`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/60 text-slate-200 shadow-soft transition-colors hover:border-slate-700 hover:bg-slate-900 ${focusRingClasses}`}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>
          <a
            href="#contact"
            className={`inline-flex items-center justify-center rounded-xl bg-brand-500 px-4 py-2 text-xs font-medium text-slate-50 shadow-glow transition-colors hover:bg-brand-400 ${focusRingClasses}`}
          >
            Work with me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/60 text-slate-200 shadow-soft transition-colors hover:border-slate-700 hover:bg-slate-900 ${focusRingClasses}`}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/60 text-slate-200 shadow-soft transition-colors hover:border-slate-700 hover:bg-slate-900 ${focusRingClasses}`}
          >
            {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
          <div className="section-max-width flex flex-col gap-2 py-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-slate-50 ${focusRingClasses}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={`mt-2 inline-flex items-center justify-center rounded-xl bg-brand-500 px-4 py-2 text-xs font-medium text-slate-50 shadow-glow transition-colors hover:bg-brand-400 ${focusRingClasses}`}
            >
              Work with me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
