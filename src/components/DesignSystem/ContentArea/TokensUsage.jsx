import React, { useState } from 'react';
import { 
  CodeBracketIcon, 
  DocumentArrowDownIcon,
  ClipboardDocumentIcon,
  CubeIcon,
  SwatchIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export function TokensUsage() {
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const codeBlocks = [
    {
      id: 'import',
      title: 'Import Tokens in React',
      code: `import designTokens from './design-tokens/design-tokens.json';

// Use tokens in your component
function Button() {
  return (
    <button style={{
      backgroundColor: designTokens.colors.primary[500],
      padding: designTokens.spacing[2],
      borderRadius: designTokens.borderRadius.md
    }}>
      Click me
    </button>
  );
}`
    },
    {
      id: 'tailwind',
      title: 'Tailwind CSS Configuration',
      code: `// tailwind.config.js
const tokens = require('./src/design-tokens/design-tokens.json');

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      fontSize: tokens.typography.fontSize,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
    }
  }
}`
    },
    {
      id: 'css',
      title: 'CSS Custom Properties',
      code: `/* Import in your main CSS file */
@import './design-tokens.css';

/* Or use directly */
.button {
  background-color: var(--primary-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
}`
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-4">
          <CodeBracketIcon className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Design Tokens - Usage Guide
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Learn how to consume and implement design tokens in your applications.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <ArrowPathIcon className="h-6 w-6 mr-2 text-primary-600" />
          Quick Start Guide
        </h2>
        <div className="space-y-3">
          {[
            "Go to Tokens → Export and download the design-tokens.json file",
            "Place the file in your new project's src/design-tokens/ directory",
            "Import tokens into your components or configuration files",
            "Start building consistent UI using token-based values"
          ].map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                {index + 1}
              </div>
              <div className="ml-3">
                <p className="text-gray-700 dark:text-gray-300">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {codeBlocks.map((block) => (
          <div key={block.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {block.title}
              </h3>
            </div>
            <div className="relative">
              <pre className="bg-gray-900 p-4 overflow-x-auto text-gray-300 text-sm">
                <code>{block.code}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(block.code, block.id)}
                className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                {copiedText === block.id ? (
                  <CheckIcon className="h-4 w-4 text-green-400" />
                ) : (
                  <ClipboardDocumentIcon className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Best Practices */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <CubeIcon className="h-6 w-6 mr-2 text-green-600" />
          Best Practices
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">✅ Do's</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Version control your tokens JSON file</li>
              <li>• Use semantic naming (primary, secondary, etc.)</li>
              <li>• Keep tokens in a shared location for team access</li>
              <li>• Document token usage in your component library</li>
              <li>• Automate token updates with CI/CD pipelines</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">❌ Don'ts</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Hardcode values that should be tokens</li>
              <li>• Create tokens without clear purpose</li>
              <li>• Mix design tokens with business logic</li>
              <li>• Manually edit exported token files</li>
              <li>• Use different naming in different apps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Complete Workflow */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          🚀 Complete Workflow Example
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">1. Export tokens from this design system:</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-gray-300 text-sm">Click Tokens → Export → Download JSON</code>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">2. Create new app and copy tokens:</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-gray-300 text-sm">npx create-react-app my-app
cp design-tokens.json my-app/src/design-tokens/</code>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">3. Configure Tailwind (optional):</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-gray-300 text-sm">npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">4. Start building with tokens:</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-gray-300 text-sm">{`import tokens from './design-tokens/design-tokens.json';
// Your components now use design system styles!`}</code>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          🔧 Troubleshooting
        </h2>
        
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Issue: Tokens not applying</p>
            <p className="text-gray-600 dark:text-gray-400">Solution: Check import paths and ensure JSON file is correctly formatted.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Issue: Tailwind classes not working</p>
            <p className="text-gray-600 dark:text-gray-400">Solution: Verify tailwind.config.js is properly configured and restart dev server.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Issue: CSS variables not recognized</p>
            <p className="text-gray-600 dark:text-gray-400">Solution: Ensure CSS file is imported in your main component.</p>
          </div>
        </div>
      </div>

      {/* Navigation Tip */}
      <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400">
          💡 <strong>Tip:</strong> Go to <strong>Tokens → Export</strong> to download the actual token files needed for implementation.
        </p>
      </div>
    </div>
  );
}