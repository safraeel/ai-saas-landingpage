import React, { useState } from 'react';
import launchLogo from '../../../images/launchglow.svg';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Command } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { useAuthStore } from '../../store/authStore';
import { cn } from '../../utils/cn';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const { user } = useAuthStore();
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-2xl transition-all dark:border-white/5 dark:bg-slate-950/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-x-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 p-[1px] shadow-glow transition-transform group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-950">
                <img
                  src={launchLogo}
                  alt="Launchglow"
                  className="h-8 w-8 object-contain rounded-full"
                />
              </div>
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900 transition-colors group-hover:text-brand-500 dark:text-white dark:group-hover:text-brand-300">
              Launchglow
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden gap-4 items-center">
          <button onClick={toggleTheme} className="text-slate-500 hover:text-slate-900 transition-colors dark:text-gray-400 dark:hover:text-white">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 items-center rounded-full border border-slate-200/80 bg-white/80 px-6 py-2 shadow-[0_0_20px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_0_20px_rgba(255,255,255,0.02)]">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors",
                  isActive ? "text-brand-500 dark:text-brand-400" : "text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-500 transition-all hover:scale-110 hover:bg-slate-200/80 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {user ? (
            <Link
              to="/dashboard"
              className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold leading-6 text-slate-900 transition-all hover:bg-slate-200 dark:border-white/5 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/auth"
              className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold leading-6 text-white transition-all hover:scale-105 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-gray-100"
            >
              Log in <Command className="h-3 w-3" />
            </Link>
          )}
        </div>
      </nav>
      
      {open && (
        <div className="lg:hidden">
          <div className="space-y-1 border-b border-slate-200 bg-white/90 px-4 pb-3 pt-2 shadow-2xl backdrop-blur-xl sm:px-3 dark:border-white/10 dark:bg-slate-900/90">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-slate-200 pt-4 pb-2 dark:border-white/10">
              {user ? (
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white bg-brand-500 hover:bg-brand-400 text-center"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-950 bg-white hover:bg-gray-200 text-center"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
