import { useState } from 'react';
import { designTokens } from '../../../design-tokens/tokens';
import { 
  exportTokensAsJSON, 
  exportTokensAsCSS, 
  exportTokensAsSCSS,
  copyTokensToClipboard 
} from '../../../utils/exportTokens';
import { 
  DocumentArrowDownIcon, 
  ClipboardDocumentIcon,
  CheckIcon,
  CodeBracketIcon
} from '@heroicons/react/24/solid';

export function TokensExport() {
  const [copied, setCopied] = useState(false);
  const [activeFormat, setActiveFormat] = useState('json');

  const handleCopy = async () => {
    const success = await copyTokensToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExport = (format) => {
    switch (format) {
      case 'json':
        exportTokensAsJSON();
        break;
      case 'css':
        exportTokensAsCSS();
        break;
      case 'scss':
        exportTokensAsSCSS();
        break;
      default:
        exportTokensAsJSON();
    }
  };

  const formatPreview = () => {
    switch (activeFormat) {
      case 'json':
        return (
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-[500px] text-xs">
            {JSON.stringify(designTokens, null, 2)}
          </pre>
        );
      case 'css':
        return (
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-[500px] text-xs">
            {`:root {
  /* Design System CSS Variables */
  --primary-500: ${designTokens.colors.primary[500]};
  --primary-600: ${designTokens.colors.primary[600]};
  --gray-800: ${designTokens.colors.gray[800]};
  
  /* Typography */
  --font-size-base: ${designTokens.typography.fontSize.base.size};
  --font-size-lg: ${designTokens.typography.fontSize.lg.size};
  
  /* Spacing */
  --spacing-4: ${designTokens.spacing[4]};
  --spacing-8: ${designTokens.spacing[8]};
}`}
          </pre>
        );
      case 'scss':
        return (
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-[500px] text-xs">
            {`// SCSS Variables
$primary-500: ${designTokens.colors.primary[500]};
$primary-600: ${designTokens.colors.primary[600]};
$gray-800: ${designTokens.colors.gray[800]};

// Typography
$font-size-base: ${designTokens.typography.fontSize.base.size};
$font-size-lg: ${designTokens.typography.fontSize.lg.size};

// Spacing
$spacing-4: ${designTokens.spacing[4]};
$spacing-8: ${designTokens.spacing[8]};`}
          </pre>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-4">
          <CodeBracketIcon className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Design Tokens - Export
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Export your design tokens to maintain consistency across multiple applications.
            </p>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Export Options
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => handleExport('json')}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <DocumentArrowDownIcon className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">Export as JSON</span>
          </button>
          
          <button
            onClick={() => handleExport('css')}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <DocumentArrowDownIcon className="h-5 w-5 text-green-500" />
            <span className="text-gray-700 dark:text-gray-300">Export as CSS</span>
          </button>
          
          <button
            onClick={() => handleExport('scss')}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <DocumentArrowDownIcon className="h-5 w-5 text-purple-500" />
            <span className="text-gray-700 dark:text-gray-300">Export as SCSS</span>
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveFormat('json')}
              className={`px-3 py-1 rounded ${
                activeFormat === 'json'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              JSON Preview
            </button>
            <button
              onClick={() => setActiveFormat('css')}
              className={`px-3 py-1 rounded ${
                activeFormat === 'css'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              CSS Preview
            </button>
            <button
              onClick={() => setActiveFormat('scss')}
              className={`px-3 py-1 rounded ${
                activeFormat === 'scss'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              SCSS Preview
            </button>
          </div>
          
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copied ? (
              <>
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Copied!</span>
              </>
            ) : (
              <>
                <ClipboardDocumentIcon className="h-4 w-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Copy JSON</span>
              </>
            )}
          </button>
        </div>
        
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {formatPreview()}
        </div>
      </div>

      {/* Token Statistics */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Token Statistics
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-500">
              {Object.keys(designTokens.colors).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Color Categories</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-500">
              {Object.keys(designTokens.typography.fontSize).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Font Sizes</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-500">
              {Object.keys(designTokens.spacing).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Spacing Values</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-500">
              {Object.keys(designTokens.shadows).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Shadow Levels</div>
          </div>
        </div>
      </div>
    </div>
  );
}