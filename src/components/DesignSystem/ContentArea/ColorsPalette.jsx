import React, { useState } from 'react';
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

function ColorsPalette() {
  // Comprehensive color system - carefully crafted for design system
  const colors = {
    // Primary Colors - Main brand color with 50-950 range
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    
    // Secondary Colors - Complementary brand color
    secondary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724',
    },
    
    // Accent Colors - For highlights and CTAs
    accent: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    
    // Semantic Colors - For UI feedback
    semantic: {
      success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#052e16',
      },
      warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
        950: '#451a03',
      },
      error: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a',
      },
      info: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554',
      },
    },
    
    // Gray Scale - For text, backgrounds, and borders
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    
    // Data Visualization - For charts and graphs
    dataViz: {
      categorical: [
        '#3b82f6', // Blue
        '#ef4444', // Red
        '#10b981', // Green
        '#f59e0b', // Amber
        '#8b5cf6', // Purple
        '#ec4899', // Pink
        '#06b6d4', // Cyan
        '#84cc16', // Lime
        '#f97316', // Orange
        '#6366f1', // Indigo
      ],
      sequential: {
        blue: ['#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8', '#1e40af'],
        green: ['#dcfce7', '#86efac', '#22c55e', '#16a34a', '#166534'],
        red: ['#fee2e2', '#fca5a5', '#ef4444', '#dc2626', '#991b1b'],
        purple: ['#f3e8ff', '#d8b4fe', '#a855f7', '#9333ea', '#6b21a8'],
      },
      diverging: {
        redBlue: ['#dc2626', '#fca5a5', '#d1d5db', '#93c5fd', '#2563eb'],
        greenRed: ['#059669', '#34d399', '#d1d5db', '#fca5a5', '#dc2626'],
      },
    },
    
    // Text Colors - For typography
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      tertiary: '#9ca3af',
      disabled: '#d1d5db',
      inverse: '#ffffff',
      accent: '#3b82f6',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
    },
  };

  const [copiedColor, setCopiedColor] = useState(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.cllipboard.writeText(text);
      setCopiedColor(text);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedColor(text);
      setTimeout(() => setCopiedColor(null), 2000);
    }
  };

  const ColorCard = ({ name, value, shade = null }) => (
    <div 
      className="group relative cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
      onClick={() => copyToClipboard(value)}
    >
      <div 
        className="h-24 rounded-t-lg border border-gray-200 dark:border-gray-700"
        style={{ backgroundColor: value }}
      />
      <div className="rounded-b-lg bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 border-t-0">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium text-gray-900 dark:text-white text-sm">
              {shade ? `${name}-${shade}` : name}
            </div>
            <div className="font-mono text-gray-600 dark:text-gray-400 text-xs mt-1">
              {value}
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1">
            {copiedColor === value ? (
              <CheckIcon className="h-4 w-4 text-green-500" />
            ) : (
              <DocumentDuplicateIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute -top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
          Click to copy
        </div>
      </div>
    </div>
  );

  const ColorScale = ({ title, colorsObj }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-4">
        {Object.entries(colorsObj).map(([shade, value]) => (
          <ColorCard key={shade} name={title} value={value} shade={shade} />
        ))}
      </div>
    </div>
  );

  const SemanticSection = ({ title, colorsObj }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(colorsObj).map(([name, shades]) => (
          <div key={name} className="space-y-2">
            <h4 className="font-medium text-gray-700 dark:text-gray-300 capitalize">
              {name}
            </h4>
            <div className="grid grid-cols-5 gap-1">
              {Object.entries(shades).slice(0, 5).map(([shade, value]) => (
                <div key={shade} className="space-y-1">
                  <div 
                    className="h-8 rounded border border-gray-200 dark:border-gray-700"
                    style={{ backgroundColor: value }}
                    title={`${name}-${shade}: ${value}`}
                  />
                  <div className="text-xs text-center text-gray-500 dark:text-gray-400">
                    {shade}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Primary: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                {shades[500]}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DataVizSection = () => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Data Visualization Colors
      </h3>
      
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
          Categorical Colors (for bar charts, pie charts)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {colors.dataViz.categorical.map((color, index) => (
            <ColorCard 
              key={index} 
              name={`Chart ${index + 1}`} 
              value={color} 
            />
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
          Sequential Scales (for heatmaps, gradients)
        </h4>
        <div className="space-y-4">
          {Object.entries(colors.dataViz.sequential).map(([name, scale]) => (
            <div key={name}>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 capitalize">
                {name}
              </div>
              <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                {scale.map((color, index) => (
                  <div 
                    key={index}
                    className="flex-1 h-8"
                    style={{ backgroundColor: color }}
                    title={`${name}-${index + 1}: ${color}`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TextColorsSection = () => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Text Colors
      </h3>
      <div className="space-y-4">
        {Object.entries(colors.text).map(([name, value]) => (
          <div 
            key={name}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: name === 'inverse' ? '#1f2937' : 'transparent' }}
          >
            <div>
              <div className="font-medium text-gray-900 dark:text-white capitalize">
                {name}
              </div>
              <div 
                className="text-lg font-medium mt-1"
                style={{ color: value }}
              >
                This is how {name} text appears
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm text-gray-600 dark:text-gray-400">
                {value}
              </div>
              <button 
                onClick={() => copyToClipboard(value)}
                className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mt-1"
              >
                {copiedColor === value ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Color System
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Complete color palette with 50-950 ranges, semantic colors, and data visualization colors.
          Click any color to copy its HEX code.
        </p>
      </div>

      {/* Primary Colors */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Primary Colors (Brand Colors)
        </h2>
        <ColorScale title="Primary" colorsObj={colors.primary} />
        <ColorScale title="Secondary" colorsObj={colors.secondary} />
        <ColorScale title="Accent" colorsObj={colors.accent} />
      </div>

      {/* Semantic Colors */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Semantic Colors (UI Feedback)
        </h2>
        <SemanticSection title="Semantic Colors" colorsObj={colors.semantic} />
      </div>

      {/* Gray Scale */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Gray Scale (Neutral Colors)
        </h2>
        <ColorScale title="Gray" colorsObj={colors.gray} />
      </div>

      {/* Data Visualization Colors */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Data Visualization Colors
        </h2>
        <DataVizSection />
      </div>

      {/* Text Colors */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Text Colors
        </h2>
        <TextColorsSection />
      </div>

      {/* Usage Examples */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          How to Use These Colors
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">colors.primary[500]</code> for primary buttons</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">colors.semantic.error[500]</code> for error states</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">colors.dataViz.categorical[0]</code> for charts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// KEEP ONLY ONE EXPORT STATEMENT
export { ColorsPalette };