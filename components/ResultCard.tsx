'use client';

import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface TikTokContent {
  hooks: string[];
  captions: string[];
}

interface InstagramContent {
  bio: string;
  captions: string[];
  hashtags: string[];
}

interface LinkedInContent {
  posts: string[];
}

interface ResultCardProps {
  platform: string;
  icon: string;
  content: TikTokContent | InstagramContent | LinkedInContent;
  onCopy: (text: string, key: string) => void;
  copiedStates: Record<string, boolean>;
}

export function ResultCard({ platform, icon, content, onCopy, copiedStates }: ResultCardProps) {
  const handleCopy = (text: string, key: string) => {
    onCopy(text, key);
  };

  const renderContent = () => {
    if (platform === 'TikTok') {
      const tiktok = content as TikTokContent;
      return (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Viral Hooks</h4>
            <div className="space-y-2">
              {tiktok.hooks.map((hook, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-800">{hook}</span>
                  <button
                    onClick={() => handleCopy(hook, `tiktok-hook-${index}`)}
                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                  >
                    {copiedStates[`tiktok-hook-${index}`] ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Captions</h4>
            <div className="space-y-2">
              {tiktok.captions.map((caption, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-800">{caption}</span>
                  <button
                    onClick={() => handleCopy(caption, `tiktok-caption-${index}`)}
                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                  >
                    {copiedStates[`tiktok-caption-${index}`] ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (platform === 'Instagram') {
      const instagram = content as InstagramContent;
      return (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Bio</h4>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-800">{instagram.bio}</span>
              <button
                onClick={() => handleCopy(instagram.bio, 'instagram-bio')}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                {copiedStates['instagram-bio'] ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Captions</h4>
            <div className="space-y-2">
              {instagram.captions.map((caption, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-800">{caption}</span>
                  <button
                    onClick={() => handleCopy(caption, `instagram-caption-${index}`)}
                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                  >
                    {copiedStates[`instagram-caption-${index}`] ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Hashtags</h4>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-800">{instagram.hashtags.join(' ')}</span>
              <button
                onClick={() => handleCopy(instagram.hashtags.join(' '), 'instagram-hashtags')}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                {copiedStates['instagram-hashtags'] ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (platform === 'LinkedIn') {
      const linkedin = content as LinkedInContent;
      return (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Professional Posts</h4>
            <div className="space-y-2">
              {linkedin.posts.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-800">{post}</span>
                  <button
                    onClick={() => handleCopy(post, `linkedin-post-${index}`)}
                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                  >
                    {copiedStates[`linkedin-post-${index}`] ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-bold text-gray-900">{platform}</h3>
        </div>
      </div>
      
      {renderContent()}
    </motion.div>
  );
}