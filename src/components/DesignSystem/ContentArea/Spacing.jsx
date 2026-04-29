// src/components/DesignSystem/ContentArea/Spacing.jsx
import React from 'react';
import { ArrowsRightLeftIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

export function Spacing({ activeSubSection }) {
  const renderContent = () => {
    switch(activeSubSection) {
      case 'Margin':
        return <MarginSection />;
      case 'Padding':
        return <PaddingSection />;
      case 'Gap':
        return <GapSection />;
      default:
        return <MarginSection />;
    }
  };

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <ArrowsRightLeftIcon className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Spacing - {activeSubSection}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Consistent spacing utilities for margins, padding, and gaps.
            </p>
          </div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}

function MarginSection() {
  const margins = [
    { name: 'm-0', value: '0px', description: 'No margin' },
    { name: 'm-1', value: '0.25rem', description: '4px' },
    { name: 'm-2', value: '0.5rem', description: '8px' },
    { name: 'm-3', value: '0.75rem', description: '12px' },
    { name: 'm-4', value: '1rem', description: '16px' },
    { name: 'm-5', value: '1.5rem', description: '24px' },
    { name: 'm-6', value: '2rem', description: '32px' },
    { name: 'm-8', value: '2.5rem', description: '40px' },
    { name: 'm-10', value: '3rem', description: '48px' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Margin Scale</h2>
        <div className="space-y-4">
          {margins.map((margin) => (
            <div key={margin.name} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <code className="text-sm font-mono text-primary-600 dark:text-primary-400">{margin.name}</code>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{margin.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{margin.value}</span>
                </div>
              </div>
              <div className="mt-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <div className={`bg-primary-100 dark:bg-primary-900/30 p-4 rounded ${margin.name}`}>
                  <div className="bg-primary-500 h-10 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaddingSection() {
  const paddings = [
    { name: 'p-0', value: '0px', description: 'No padding' },
    { name: 'p-1', value: '0.25rem', description: '4px' },
    { name: 'p-2', value: '0.5rem', description: '8px' },
    { name: 'p-3', value: '0.75rem', description: '12px' },
    { name: 'p-4', value: '1rem', description: '16px' },
    { name: 'p-5', value: '1.5rem', description: '24px' },
    { name: 'p-6', value: '2rem', description: '32px' },
    { name: 'p-8', value: '2.5rem', description: '40px' },
    { name: 'p-10', value: '3rem', description: '48px' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Padding Scale</h2>
        <div className="space-y-4">
          {paddings.map((padding) => (
            <div key={padding.name} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <code className="text-sm font-mono text-primary-600 dark:text-primary-400">{padding.name}</code>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{padding.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{padding.value}</span>
                </div>
              </div>
              <div className="mt-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <div className={`bg-primary-500 h-10 rounded ${padding.name}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GapSection() {
  const gaps = [
    { name: 'gap-0', value: '0px' },
    { name: 'gap-1', value: '0.25rem' },
    { name: 'gap-2', value: '0.5rem' },
    { name: 'gap-3', value: '0.75rem' },
    { name: 'gap-4', value: '1rem' },
    { name: 'gap-5', value: '1.5rem' },
    { name: 'gap-6', value: '2rem' },
    { name: 'gap-8', value: '2.5rem' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gap Scale</h2>
        <div className="space-y-4">
          {gaps.map((gap) => (
            <div key={gap.name} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <code className="text-sm font-mono text-primary-600 dark:text-primary-400">{gap.name}</code>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{gap.value}</span>
                </div>
              </div>
              <div className={`flex ${gap.name}`}>
                <div className="w-16 h-16 bg-primary-500 rounded"></div>
                <div className="w-16 h-16 bg-primary-400 rounded"></div>
                <div className="w-16 h-16 bg-primary-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Spacing;