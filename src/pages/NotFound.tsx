import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">Page not found</h1>
      <p className="text-sm text-slate-400">This route does not exist. Choose a page from the navigation.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-2 text-xs font-medium text-slate-50 shadow-glow hover:bg-brand-400 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
};
