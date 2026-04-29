// src/components/DesignSystem/ContentArea/Layout.jsx
import React from 'react';
import { ViewColumnsIcon } from '@heroicons/react/24/outline';

export function Layout({ activeSubSection }) {
  const renderContent = () => {
    switch(activeSubSection) {
      case 'Grid':
        return <GridSection />;
      case 'Flexbox':
        return <FlexboxSection />;
      case 'Container':
        return <ContainerSection />;
      default:
        return <GridSection />;
    }
  };

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <ViewColumnsIcon className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Layout - {activeSubSection}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Layout systems for building responsive interfaces.
            </p>
          </div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}

function GridSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">CSS Grid Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Grid 3 Columns</h3>
            <code className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-2 block">grid grid-cols-3 gap-4</code>
            <div className="grid grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="bg-primary-500 h-20 rounded flex items-center justify-center text-white">1</div>
              <div className="bg-primary-500 h-20 rounded flex items-center justify-center text-white">2</div>
              <div className="bg-primary-500 h-20 rounded flex items-center justify-center text-white">3</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Grid Responsive</h3>
            <code className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-2 block">grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4</code>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="bg-primary-500 h-20 rounded flex items-center justify-center text-white">1</div>
              <div className="bg-primary-500 h-20 rounded flex items-center justify-center text-white">2</div>
              <div className="bg-primary-500 h-20 rounded flex items-center justify-center text-white">3</div>
              <div className="bg-primary-500 h-20 rounded flex items-center justify-center text-white">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlexboxSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Flexbox Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Flex Row</h3>
            <code className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-2 block">flex flex-row gap-4</code>
            <div className="flex flex-row gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="bg-primary-500 h-16 w-16 rounded flex items-center justify-center text-white">1</div>
              <div className="bg-primary-500 h-16 w-16 rounded flex items-center justify-center text-white">2</div>
              <div className="bg-primary-500 h-16 w-16 rounded flex items-center justify-center text-white">3</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Flex Column</h3>
            <code className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-2 block">flex flex-col gap-4</code>
            <div className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="bg-primary-500 h-16 rounded flex items-center justify-center text-white">1</div>
              <div className="bg-primary-500 h-16 rounded flex items-center justify-center text-white">2</div>
              <div className="bg-primary-500 h-16 rounded flex items-center justify-center text-white">3</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Flex Justify Between</h3>
            <code className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-2 block">flex justify-between gap-4</code>
            <div className="flex justify-between gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="bg-primary-500 h-16 w-16 rounded flex items-center justify-center text-white">1</div>
              <div className="bg-primary-500 h-16 w-16 rounded flex items-center justify-center text-white">2</div>
              <div className="bg-primary-500 h-16 w-16 rounded flex items-center justify-center text-white">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Container Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Default Container</h3>
            <code className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-2 block">container mx-auto</code>
            <div className="container mx-auto bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">This container centers content with max-width based on responsive breakpoints.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Full Width Container</h3>
            <code className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-2 block">w-full</code>
            <div className="w-full bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">This container spans the full width of its parent.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Max Width Container</h3>
            <code className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-2 block">max-w-2xl mx-auto</code>
            <div className="max-w-2xl mx-auto bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">This container has max width with auto margins.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;