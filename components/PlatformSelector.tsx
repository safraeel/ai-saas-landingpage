'use client';

interface PlatformSelectorProps {
  selectedPlatforms: string[];
  onPlatformChange: (platforms: string[]) => void;
}

export function PlatformSelector({ selectedPlatforms, onPlatformChange }: PlatformSelectorProps) {
  const platforms = [
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
  ];

  const togglePlatform = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      onPlatformChange(selectedPlatforms.filter(p => p !== platformId));
    } else {
      onPlatformChange([...selectedPlatforms, platformId]);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Select Platforms
      </label>
      <div className="flex flex-wrap gap-3">
        {platforms.map((platform) => {
          const isSelected = selectedPlatforms.includes(platform.id);
          
          return (
            <button
              key={platform.id}
              onClick={() => togglePlatform(platform.id)}
              className={`flex items-center px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg shadow-blue-200/50'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg mr-2">{platform.icon}</span>
              <span className="font-medium">{platform.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}