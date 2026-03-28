'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, Check, Loader2 } from 'lucide-react';
import { PlatformSelector } from '@/components/PlatformSelector';
import { InputBox } from '@/components/InputBox';
import { GenerateButton } from '@/components/GenerateButton';
import { ResultCard } from '@/components/ResultCard';

interface GeneratedContent {
  tiktok: {
    hooks: string[];
    captions: string[];
  };
  instagram: {
    bio: string;
    captions: string[];
    hashtags: string[];
  };
  linkedin: {
    posts: string[];
  };
}

export default function HomePage() {
  const [idea, setIdea] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['tiktok', 'instagram', 'linkedin']);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleGenerate = async () => {
    if (!idea.trim()) return;

    setIsGenerating(true);
    setGeneratedContent(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idea: idea.trim(),
          platforms: selectedPlatforms,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedContent(data);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-medium mb-8"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Content Generation
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              One Idea → Content for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Every Platform
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Turn your business idea into high-converting content for TikTok, Instagram, and LinkedIn in seconds. 
              No more staring at blank screens.
            </motion.p>
          </div>

          {/* Main Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
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
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </section>

      {/* Results Section */}
      <AnimatePresence mode="wait">
        {generatedContent && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="pb-20 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Your Generated Content
              </h2>
              
              <div className="grid gap-8 md:grid-cols-3">
                {selectedPlatforms.includes('tiktok') && (
                  <ResultCard
                    platform="TikTok"
                    icon="🎵"
                    content={{
                      hooks: generatedContent.tiktok.hooks,
                      captions: generatedContent.tiktok.captions,
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
                      bio: generatedContent.instagram.bio,
                      captions: generatedContent.instagram.captions,
                      hashtags: generatedContent.instagram.hashtags,
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
                      posts: generatedContent.linkedin.posts,
                    }}
                    onCopy={handleCopy}
                    copiedStates={copiedStates}
                  />
                )}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
