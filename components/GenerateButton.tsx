'use client';

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
}

export function GenerateButton({ onClick, disabled, isLoading }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full py-4 px-6 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform ${
        disabled || isLoading
          ? 'bg-gray-400 cursor-not-allowed shadow-none'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 active:translate-y-0 active:shadow-lg'
      }`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating Content...
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="mr-2">🚀</span>
          Generate Content
        </div>
      )}
    </button>
  );
}