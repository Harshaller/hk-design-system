// src/components/DesignSystem/ContentArea/Buttons.jsx
import React from 'react';
import { CubeIcon } from '@heroicons/react/24/outline';

export function Buttons() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <CubeIcon className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Buttons
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Button components for user interactions and actions.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons Content */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Button Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <button className="px-6 py-3 rounded-lg font-medium bg-primary-600 text-white hover:bg-primary-700 transition-all">
              Primary Button
            </button>
            
            {/* Secondary Button - FIXED: Now matches Ghost style */}
            <button className="px-6 py-3 rounded-lg font-medium bg-transparent text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all">
              Secondary Button
            </button>
            
            {/* Success Button */}
            <button className="px-6 py-3 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-all">
              Success Button
            </button>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Button Sizes
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 transition-all">
              Small
            </button>
            
            <button className="px-6 py-3 rounded-lg font-medium bg-primary-600 text-white hover:bg-primary-700 transition-all">
              Medium
            </button>
            
            <button className="px-8 py-4 rounded-lg text-lg font-medium bg-primary-600 text-white hover:bg-primary-700 transition-all">
              Large
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;