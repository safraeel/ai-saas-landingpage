'use client';

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export function InputBox({ value, onChange, placeholder }: InputBoxProps) {
  return (
    <div>
      <label htmlFor="idea-input" className="block text-sm font-medium text-gray-700 mb-2">
        Your Business Idea
      </label>
      <div className="relative">
        <input
          id="idea-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-4 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 placeholder-gray-500"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
          {value.length}/200
        </div>
      </div>
    </div>
  );
}