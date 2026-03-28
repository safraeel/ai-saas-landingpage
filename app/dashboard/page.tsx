'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Sparkles, LogOut, History, Plus, Copy, Check } from 'lucide-react';
import { InputBox } from '@/components/InputBox';
import { PlatformSelector } from '@/components/PlatformSelector';
import { GenerateButton } from '@/components/GenerateButton';
import { ResultCard } from '@/components/ResultCard';

interface GeneratedContent {
  id: string;
  idea: string;
  platforms: string[];
  content: {
    tiktok?: {
      hooks: string[];
      captions: string[];
    };
    instagram?: {
      bio: string;
      captions: string[];
      hashtags: string[];
    };
    linkedin?: {
      posts: string[];
    };
  };
  createdAt: Date;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [idea, setIdea] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['tiktok', 'instagram', 'linkedin']);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [history, setHistory] = useState<GeneratedContent[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchHistory();
    }
  }, [status, router]);

  const fetchHistory = async () => {
    setLoadingHistory(true);
    try {
      const response = await fetch('/api/content/history');
      if (response.ok) {
        const data = await response.json();
        setHistory(data);
      }
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoadingHistory(false);
    }
  };

  const handleGenerate = async () => {
    if (!idea.trim() || !session?.user) return;

    setIsGenerating(true);
    setGeneratedContent(null);

    try {
      const response = await fetch('/api/content/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idea: idea.trim(),
          platforms: selectedPlatforms,
          userId: session.user.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedContent(data);
        fetchHistory(); // Refresh history
      }
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Proxi.tech Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {session?.user?.name || session?.user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Generate Content</h2>
              
              <div className="space-y-6">
                <PlatformSelector
                  selectedPlatforms={selectedPlatforms}
                  onPlatformChange={setSelectedPlatforms}
                />
                
                <InputBox
                  value={idea}
                  onChange={setIdea}
                  placeholder="Enter your business idea (e.g., 'I sell clothes', 'I offer web design services')"
                />
                
                <GenerateButton
                  onClick={handleGenerate}
                  disabled={!idea.trim() || isGenerating}
                  isLoading={isGenerating}
                />
              </div>
            </div>

            {/* Results Section */}
            {generatedContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Generated Content</h2>
                
                <div className="grid gap-6 md:grid-cols-3">
                  {selectedPlatforms.includes('tiktok') && (
                    <ResultCard
                      platform="TikTok"
                      icon="🎵"
                      content={{
                        hooks: generatedContent.content.tiktok?.hooks || [],
                        captions: generatedContent.content.tiktok?.captions || [],
                      }}
                      onCopy={handleCopy}
                      copiedStates={copiedStates}
                    />
                  )}
                  
                  {selectedPlatforms.includes('instagram') && (
                    <ResultCard
                      platform="Instagram"
                      icon="📸"
                      content={{
                        bio: generatedContent.content.instagram?.bio || '',
                        captions: generatedContent.content.instagram?.captions || [],
                        hashtags: generatedContent.content.instagram?.hashtags || [],
                      }}
                      onCopy={handleCopy}
                      copiedStates={copiedStates}
                    />
                  )}
                  
                  {selectedPlatforms.includes('linkedin') && (
                    <ResultCard
                      platform="LinkedIn"
                      icon="💼"
                      content={{
                        posts: generatedContent.content.linkedin?.posts || [],
                      }}
                      onCopy={handleCopy}
                      copiedStates={copiedStates}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar - History */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200 sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  Generation History
                </h3>
                <button
                  onClick={fetchHistory}
                  disabled={loadingHistory}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {loadingHistory ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {history.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No history yet. Generate some content to see it here!</p>
                ) : (
                  history.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{item.idea}</h4>
                        <span className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.platforms.map((platform) => (
                          <span key={platform} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}