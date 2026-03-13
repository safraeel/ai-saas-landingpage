import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { databases, DATABASE_ID, COLLECTION_ID } from '../appwrite';
import { ID, Query } from 'appwrite';
import { useAuthStore } from '../store/authStore';
import { Database, Plus, Sparkles, TerminalSquare, AlertCircle } from 'lucide-react';

export const PromptsManager: React.FC = () => {
  const { user } = useAuthStore();
  const [prompts, setPrompts] = useState<any[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrompts = async () => {
    try {
      setLoading(true);
      if (!user?.$id) return;

      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal('userId', user.$id)]
      );
      setPrompts(response.documents);
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.$id) {
      fetchPrompts();
    }
  }, [user]);

  const handleSavePrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim() || !user?.$id) return;

    try {
      setError(null);
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          title: newTitle,
          content: newContent,
          userId: user.$id
        }
      );

      setNewTitle('');
      setNewContent('');
      await fetchPrompts();
    } catch (err: any) {
      setError(err.message || 'Failed to save prompt.');
    }
  };

  return (
    <div className="w-full h-full p-6 sm:p-8 relative isolate">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          <Database className="h-5 w-5 text-violet-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Knowledge Base</h3>
          <p className="text-sm text-slate-600 dark:text-gray-400">Store and reuse your high-performing AI prompts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Create Form */}
        <div className="lg:col-span-4 space-y-6">
          <form onSubmit={handleSavePrompt} className="space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-2xl dark:border-white/5 dark:bg-white/[0.02]">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
              <Plus className="h-4 w-4 text-brand-400" /> Create New Record
            </h4>
            
            {error && (
              <motion.div initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} className="rounded-xl bg-red-500/10 p-3 text-xs text-red-400 border border-red-500/20 flex gap-2 items-start">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <div className="space-y-1">
              <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-gray-500">Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Next.js SaaS Boilerplate"
                className="w-full rounded-xl border-0 bg-white py-2.5 px-3 text-sm text-slate-900 shadow-inner ring-1 ring-inset ring-slate-300 transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-500 dark:bg-black/40 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-600"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-gray-500">System Prompt</label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Act as a senior engineer..."
                rows={4}
                className="w-full resize-none rounded-xl border-0 bg-white py-2.5 px-3 text-sm text-slate-900 shadow-inner ring-1 ring-inset ring-slate-300 transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-500 dark:bg-black/40 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Commit to DB
              <Sparkles className="h-3 w-3" />
            </button>
          </form>
        </div>

        {/* Database List */}
        <div className="lg:col-span-8">
          {loading ? (
            <div className="flex h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 dark:border-white/10">
              <div className="h-6 w-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-sm text-slate-500 dark:text-gray-500">Syncing with Appwrite securely...</p>
            </div>
          ) : prompts.length === 0 ? (
            <div className="flex h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 dark:border-white/10 dark:bg-white/[0.01]">
              <TerminalSquare className="mb-3 h-8 w-8 text-slate-500 dark:text-gray-600" />
              <p className="text-sm font-medium text-slate-600 dark:text-gray-400">Dataset empty</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-gray-600">Inject your first prompt on the left.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <AnimatePresence>
                {prompts.map((prompt, i) => (
                  <motion.div
                    key={prompt.$id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-white/5 dark:bg-black/20 dark:hover:border-white/10 dark:hover:bg-white/[0.03]"
                  >
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-[10px] text-slate-600 dark:bg-black/40 dark:text-gray-500">ID: {prompt.$id.slice(0, 6)}</div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      <h4 className="truncate pr-8 font-semibold text-slate-800 dark:text-gray-200">{prompt.title}</h4>
                    </div>
                    <div className="relative h-20 overflow-hidden">
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600 dark:text-gray-400">{prompt.content}</p>
                      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white/80 to-transparent transition-all group-hover:from-transparent dark:from-black/40" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
