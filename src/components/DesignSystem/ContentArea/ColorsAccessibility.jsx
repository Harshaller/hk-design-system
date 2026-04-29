import React, { useState } from 'react';
import { 
  EyeIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  DocumentDuplicateIcon,
  LightBulbIcon,
  ArrowsPointingOutIcon,
  SpeakerWaveIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

export function ColorsAccessibility() {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Color contrast examples with WCAG compliance levels
  const contrastExamples = [
    {
      category: 'Text on Light Background',
      examples: [
        {
          foreground: '#111827', // gray-900
          background: '#ffffff', // white
          contrast: '21:1',
          wcag: { AA: true, AAA: true },
          usage: 'Primary text, headings',
          example: (
            <div className="p-4 bg-white rounded-lg border">
              <p style={{ color: '#111827' }} className="text-lg font-medium">
                Perfect for main content text
              </p>
            </div>
          )
        },
        {
          foreground: '#3b82f6', // primary-500
          background: '#ffffff', // white
          contrast: '4.7:1',
          wcag: { AA: true, AAA: false },
          usage: 'Links, interactive elements',
          example: (
            <div className="p-4 bg-white rounded-lg border">
              <a href="#" style={{ color: '#3b82f6' }} className="text-lg font-medium hover:underline">
                Accessible link example
              </a>
            </div>
          )
        },
        {
          foreground: '#6b7280', // gray-500
          background: '#ffffff', // white
          contrast: '5.3:1',
          wcag: { AA: true, AAA: false },
          usage: 'Secondary text, captions',
          example: (
            <div className="p-4 bg-white rounded-lg border">
              <p style={{ color: '#6b7280' }} className="text-lg">
                Secondary information text
              </p>
            </div>
          )
        }
      ]
    },
    {
      category: 'Text on Dark Background',
      examples: [
        {
          foreground: '#ffffff', // white
          background: '#1f2937', // gray-800
          contrast: '15.9:1',
          wcag: { AA: true, AAA: true },
          usage: 'Text on dark themes',
          example: (
            <div style={{ backgroundColor: '#1f2937' }} className="p-4 rounded-lg">
              <p className="text-white text-lg font-medium">
                High contrast on dark backgrounds
              </p>
            </div>
          )
        },
        {
          foreground: '#d1d5db', // gray-300
          background: '#111827', // gray-900
          contrast: '8.5:1',
          wcag: { AA: true, AAA: true },
          usage: 'Muted text on dark',
          example: (
            <div style={{ backgroundColor: '#111827' }} className="p-4 rounded-lg">
              <p style={{ color: '#d1d5db' }} className="text-lg">
                Subtle text in dark mode
              </p>
            </div>
          )
        }
      ]
    },
    {
      category: 'UI Components',
      examples: [
        {
          foreground: '#ffffff', // white
          background: '#3b82f6', // primary-500
          contrast: '4.7:1',
          wcag: { AA: true, AAA: false },
          usage: 'Primary buttons, CTAs',
          example: (
            <button 
              style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
              className="px-6 py-3 rounded-lg font-medium"
            >
              Accessible Button
            </button>
          )
        },
        {
          foreground: '#ffffff', // white
          background: '#ef4444', // error-500
          contrast: '4.5:1',
          wcag: { AA: true, AAA: false },
          usage: 'Error states, alerts',
          example: (
            <div style={{ backgroundColor: '#ef4444', color: '#ffffff' }} className="px-4 py-3 rounded-lg">
              Error: Something went wrong
            </div>
          )
        },
        {
          foreground: '#111827', // gray-900
          background: '#fef3c7', // warning-100
          contrast: '12.2:1',
          wcag: { AA: true, AAA: true },
          usage: 'Warning backgrounds',
          example: (
            <div style={{ backgroundColor: '#fef3c7', color: '#111827' }} className="px-4 py-3 rounded-lg border border-yellow-300">
              Warning: Action required
            </div>
          )
        }
      ]
    }
  ];

  // Common accessibility issues and solutions
  const commonIssues = [
    {
      issue: 'Insufficient color contrast',
      problem: 'Text becomes difficult to read',
      solution: 'Use minimum 4.5:1 contrast ratio for normal text',
      code: `/* Bad: 2.5:1 contrast */
.low-contrast {
  color: #93c5fd; /* primary-300 */
  background: white;
}

/* Good: 4.7:1 contrast */
.good-contrast {
  color: #3b82f6; /* primary-500 */
  background: white;
}`,
      icon: ExclamationTriangleIcon,
      severity: 'high'
    },
    {
      issue: 'Color-only information',
      problem: 'Using only color to convey meaning',
      solution: 'Add text labels, patterns, or icons alongside colors',
      code: `/* Bad: Color only */
.status-error {
  color: #ef4444;
}

/* Good: Color with text label */
.status-error {
  color: #ef4444;
  content: "Error: ";
}

/* Good: Color with icon */
.status-error::before {
  content: "⚠ ";
  color: #ef4444;
}`,
      icon: LightBulbIcon,
      severity: 'medium'
    },
    {
      issue: 'Poor focus visibility',
      problem: 'Users can\'t see focused elements',
      solution: 'Use high-contrast focus indicators',
      code: `/* Bad: Default focus */
button:focus {
  outline: none;
}

/* Good: Custom focus */
button:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}

/* Better: Custom with high contrast */
button:focus {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
}`,
      icon: ArrowsPointingOutIcon,
      severity: 'high'
    },
    {
      issue: 'Small touch targets',
      problem: 'Difficult for users with motor impairments',
      solution: 'Minimum 44x44px touch targets',
      code: `/* Bad: Small button */
.small-button {
  padding: 4px 8px;
  height: 30px;
}

/* Good: Accessible button */
.accessible-button {
  padding: 12px 24px;
  min-height: 44px;
  min-width: 44px;
}`,
      icon: MagnifyingGlassIcon,
      severity: 'medium'
    }
  ];

  // Color blindness simulations
  const colorBlindnessTypes = [
    {
      type: 'Protanopia',
      description: 'Red-green color blindness (red appears darker)',
      prevalence: '1% of men',
      simulation: [
        { original: '#3b82f6', simulated: '#3b82f6' }, // Blue stays similar
        { original: '#ef4444', simulated: '#808080' }, // Red becomes grayish
        { original: '#10b981', simulated: '#10b981' }, // Green stays similar
      ]
    },
    {
      type: 'Deuteranopia',
      description: 'Red-green color blindness (most common type)',
      prevalence: '6% of men',
      simulation: [
        { original: '#3b82f6', simulated: '#3b82f6' },
        { original: '#ef4444', simulated: '#a0a0a0' },
        { original: '#10b981', simulated: '#10b981' },
      ]
    },
    {
      type: 'Tritanopia',
      description: 'Blue-yellow color blindness',
      prevalence: '0.01% of population',
      simulation: [
        { original: '#3b82f6', simulated: '#a0a0a0' }, // Blue becomes gray
        { original: '#f59e0b', simulated: '#808080' }, // Yellow becomes gray
        { original: '#8b5cf6', simulated: '#8b5cf6' }, // Purple stays
      ]
    }
  ];

  // Testing tools and resources
  const testingTools = [
    {
      name: 'WebAIM Contrast Checker',
      url: 'https://webaim.org/resources/contrastchecker/',
      description: 'Online tool to check color contrast ratios',
      free: true
    },
    {
      name: 'axe DevTools',
      url: 'https://www.deque.com/axe/',
      description: 'Browser extension for accessibility testing',
      free: true
    },
    {
      name: 'Color Oracle',
      url: 'https://colororacle.org/',
      description: 'Color blindness simulator desktop app',
      free: true
    },
    {
      name: 'Stark',
      url: 'https://www.getstark.co/',
      description: 'Plugin for Figma/Sketch with contrast checking',
      free: 'Freemium'
    },
    {
      name: 'WCAG 2.1 Guidelines',
      url: 'https://www.w3.org/WAI/WCAG21/quickref/',
      description: 'Official accessibility guidelines',
      free: true
    }
  ];

  // Best practices checklist
  const checklistItems = [
    { id: 1, text: 'All text has minimum 4.5:1 contrast ratio', checked: false },
    { id: 2, text: 'Large text (18px+) has minimum 3:1 contrast ratio', checked: false },
    { id: 3, text: 'UI components have minimum 3:1 contrast ratio', checked: false },
    { id: 4, text: 'Color is not the only means of conveying information', checked: false },
    { id: 5, text: 'Focus states are clearly visible (2px+ outline)', checked: false },
    { id: 6, text: 'Interactive elements are at least 44x44px', checked: false },
    { id: 7, text: 'Error states use both color and text/icon', checked: false },
    { id: 8, text: 'Success/status messages are clear without color', checked: false },
    { id: 9, text: 'Form labels are always present and visible', checked: false },
    { id: 10, text: 'Tested with at least one screen reader', checked: false }
  ];

  const [checklist, setChecklist] = useState(checklistItems);

  const toggleChecklistItem = (id) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const WCAGBadge = ({ level, achieved }) => (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      achieved 
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    }`}>
      {achieved ? '✓' : '✗'} WCAG {level}
    </span>
  );

  const SeverityBadge = ({ severity }) => {
    const config = {
      high: { color: 'bg-red-100 text-red-800', icon: XCircleIcon },
      medium: { color: 'bg-yellow-100 text-yellow-800', icon: ExclamationTriangleIcon },
      low: { color: 'bg-blue-100 text-blue-800', icon: LightBulbIcon }
    };
    const { color, icon: Icon } = config[severity];
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${color}`}>
        <Icon className="h-3 w-3" />
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>
    );
  };

  return (
    <div>
      {/* Hero Section - REMOVED max-w-7xl mx-auto */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
            <EyeIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Color Accessibility
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Building inclusive products that work for everyone, regardless of ability.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-primary-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Why Accessibility Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">1 in 4</div>
              <div className="text-gray-700 dark:text-gray-300">Adults in the US have a disability</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">8% of men</div>
              <div className="text-gray-700 dark:text-gray-300">Have color vision deficiency</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">16%</div>
              <div className="text-gray-700 dark:text-gray-300">Global population has significant disability</div>
            </div>
          </div>
        </div>
      </div>

      {/* WCAG Standards */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <ClipboardDocumentCheckIcon className="h-6 w-6" />
          WCAG Standards & Compliance
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Level A</h3>
              <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">Basic</span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Text alternatives for non-text content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Keyboard accessible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>No keyboard traps</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Level AA</h3>
              <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">Target</span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>Contrast ratio ≥ 4.5:1 (text)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>Text resizable up to 200%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>Consistent navigation</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Level AAA</h3>
              <span className="text-xs font-medium px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">Enhanced</span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5" />
                <span>Contrast ratio ≥ 7:1 (text)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5" />
                <span>Low or no background audio</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5" />
                <span>Sign language for audio</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Color Contrast Examples */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Color Contrast Examples</h2>
        
        {contrastExamples.map((category, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {category.examples.map((example, exIndex) => (
                <div key={exIndex} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {example.usage}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Contrast: <span className="font-mono">{example.contrast}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <WCAGBadge level="AA" achieved={example.wcag.AA} />
                        <WCAGBadge level="AAA" achieved={example.wcag.AAA} />
                      </div>
                    </div>
                    <div className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      <div>Foreground: {example.foreground}</div>
                      <div>Background: {example.background}</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900">
                    {example.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Common Issues & Solutions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Common Issues & Solutions
        </h2>
        
        <div className="space-y-6">
          {commonIssues.map((issue, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <issue.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {issue.issue}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <strong>Problem:</strong> {issue.problem}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        <strong>Solution:</strong> {issue.solution}
                      </p>
                    </div>
                  </div>
                  <SeverityBadge severity={issue.severity} />
                </div>
                
                <div className="relative mt-4">
                  <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{issue.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(issue.code)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-300"
                  >
                    {copiedCode === issue.code ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <DocumentDuplicateIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Color Blindness Awareness */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Color Blindness Awareness</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {colorBlindnessTypes.map((type, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {type.type}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {type.description}
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                Affects: {type.prevalence}
              </div>
              
              <div className="space-y-3">
                {type.simulation.map((color, colorIndex) => (
                  <div key={colorIndex} className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded border border-gray-300"
                        style={{ backgroundColor: color.original }}
                      />
                      <div className="text-sm font-medium">
                        {color.original}
                      </div>
                    </div>
                    <div className="text-gray-400">→</div>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded border border-gray-300"
                        style={{ backgroundColor: color.simulated }}
                      />
                      <div className="text-sm text-gray-500">
                        {color.simulated}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-yellow-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            💡 Tips for Color Blind Friendly Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Use patterns or textures in charts/graphs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Add text labels to color-coded information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Use icons alongside color indicators</span>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Avoid red/green for important distinctions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Test interfaces in grayscale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Use sufficient contrast regardless of hue</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Checklist */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Accessibility Checklist
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Project Accessibility Audit
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Check off items as you complete them
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {checklist.filter(item => item.checked).length}/{checklist.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Items completed</div>
            </div>
          </div>
          
          <div className="space-y-3">
            {checklist.map((item) => (
              <label key={item.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleChecklistItem(item.id)}
                  className="h-5 w-5 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                />
                <span className={`flex-1 ${item.checked ? 'text-gray-500 dark:text-gray-500 line-through' : 'text-gray-700 dark:text-gray-300'}`}>
                  {item.text}
                </span>
                {item.checked && (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                )}
              </label>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setChecklist(checklistItems.map(item => ({ ...item, checked: false })))}
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
            >
              Reset Checklist
            </button>
          </div>
        </div>
      </div>

      {/* Tools & Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Testing Tools & Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testingTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {tool.name}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  tool.free === true 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {tool.free === true ? 'Free' : tool.free}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tool.description}
              </p>
              <div className="text-xs text-primary-600 dark:text-primary-400 mt-3 flex items-center gap-1">
                Visit resource
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Implementation Guidelines */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Implementation Guidelines
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Color Usage Rules
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 mt-1"></div>
                <div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">Success States</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Always pair green with check icons ✓ or success text
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500 mt-1"></div>
                <div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">Error States</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Use red with X icons ✗ and clear error messages
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-500 mt-1"></div>
                <div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">Warning States</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Combine yellow with ⚠ icons and cautionary text
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Quick Reference
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-gray-700 dark:text-gray-300">Minimum text contrast</div>
                <div className="font-mono text-primary-600 dark:text-primary-400">4.5:1</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-gray-700 dark:text-gray-300">Minimum UI contrast</div>
                <div className="font-mono text-primary-600 dark:text-primary-400">3:1</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-gray-700 dark:text-gray-300">Touch target size</div>
                <div className="font-mono text-primary-600 dark:text-primary-400">44×44px</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Build Accessible Products?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Accessibility isn't just a checklist—it's about creating experiences that work for everyone. 
          Use these guidelines to build products that are inclusive by design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
            Download Accessibility Checklist
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            View WCAG Guidelines
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorsAccessibility;