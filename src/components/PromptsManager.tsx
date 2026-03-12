import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { databases, DATABASE_ID, COLLECTION_ID } from '../appwrite';
import { ID, Query } from 'appwrite';
import { useAuthStore } from '../store/authStore';

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
          userId: user.$id // Assuming we link the prompt to the user
        }
      );
      
      setNewTitle('');
      setNewContent('');
      await fetchPrompts(); // Refresh the list
    } catch (err: any) {
      setError(err.message || 'Failed to save prompt. Please make sure columns are created in Appwrite.');
    }
  };

  return (
    <div className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-6 w-full">
      <h3 className="text-xl font-medium text-slate-100 mb-6">Your Saved AI Prompts</h3>
      
      <form onSubmit={handleSavePrompt} className="space-y-4 mb-8">
        {error && (
          <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20">
            {error}
          </div>
        )}
        
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Prompt Title (e.g. Master Copywriter)"
          className="w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          required
        />
        
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Act as a master copywriter and..."
          rows={3}
          className="w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          required
        />
        
        <button
          type="submit"
          className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-slate-50 shadow-glow transition-colors hover:bg-brand-400"
        >
          Save to Database
        </button>
      </form>

      {loading ? (
        <p className="text-slate-400 text-sm">Loading prompts...</p>
      ) : prompts.length === 0 ? (
        <p className="text-slate-500 text-sm">No prompts saved yet. Create your first one above!</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {prompts.map((prompt) => (
            <motion.div
              key={prompt.$id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4"
            >
              <h4 className="font-medium text-slate-200">{prompt.title}</h4>
              <p className="mt-2 text-xs text-slate-400 whitespace-pre-wrap">{prompt.content}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
