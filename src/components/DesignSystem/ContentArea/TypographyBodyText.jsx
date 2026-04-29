import React from 'react';
import { 
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
  CheckIcon,
  ScaleIcon,
  EyeIcon,
  InformationCircleIcon,
  LightBulbIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export function TypographyBodyText() {
  const [copiedCode, setCopiedCode] = React.useState(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const textScale = [
    {
      name: 'Large Display',
      size: '1.25rem',
      className: 'text-xl',
      weight: 'font-normal',
      lineHeight: '1.6',
      letterSpacing: 'normal',
      usage: 'Lead paragraphs, introductions',
      example: 'Welcome to our design system documentation. This is large display text used for introductory content.'
    },
    {
      name: 'Body Regular',
      size: '1rem',
      className: 'text-base',
      weight: 'font-normal',
      lineHeight: '1.625',
      letterSpacing: 'normal',
      usage: 'Primary body content, articles',
      example: 'This is regular body text. Use this for most of your content including paragraphs, descriptions, and general text.'
    },
    {
      name: 'Body Small',
      size: '0.875rem',
      className: 'text-sm',
      weight: 'font-normal',
      lineHeight: '1.7',
      letterSpacing: 'normal',
      usage: 'Supporting text, captions',
      example: 'This is small body text. Perfect for captions, footnotes, and secondary information.'
    },
    {
      name: 'Extra Small',
      size: '0.75rem',
      className: 'text-xs',
      weight: 'font-normal',
      lineHeight: '1.8',
      letterSpacing: '0.025em',
      usage: 'Labels, microcopy',
      example: 'This is extra small text. Use sparingly for labels and legal text.'
    }
  ];

  const textWeights = [
    {
      name: 'Light',
      className: 'font-light',
      weight: '300',
      usage: 'Subtle emphasis, decorative text',
      example: 'This is light weight text with gentle presence.'
    },
    {
      name: 'Regular',
      className: 'font-normal',
      weight: '400',
      usage: 'Standard body text, default weight',
      example: 'This is regular weight text for comfortable reading.'
    },
    {
      name: 'Medium',
      className: 'font-medium',
      weight: '500',
      usage: 'Medium emphasis, section labels',
      example: 'This is medium weight text for balanced emphasis.'
    },
    {
      name: 'Semibold',
      className: 'font-semibold',
      weight: '600',
      usage: 'Strong emphasis, key points',
      example: 'This is semibold weight text for important content.'
    },
    {
      name: 'Bold',
      className: 'font-bold',
      weight: '700',
      usage: 'Strongest emphasis, critical information',
      example: 'This is bold weight text for maximum impact.'
    }
  ];

  const textColors = [
    {
      name: 'Primary Text',
      color: 'text-gray-900',
      darkColor: 'dark:text-white',
      hex: '#111827',
      darkHex: '#FFFFFF',
      usage: 'Main body text, headlines',
      example: 'This is primary text for most content.'
    },
    {
      name: 'Secondary Text',
      color: 'text-gray-600',
      darkColor: 'dark:text-gray-300',
      hex: '#4B5563',
      darkHex: '#D1D5DB',
      usage: 'Supporting text, descriptions',
      example: 'This is secondary text for less important content.'
    },
    {
      name: 'Tertiary Text',
      color: 'text-gray-500',
      darkColor: 'dark:text-gray-400',
      hex: '#6B7280',
      darkHex: '#9CA3AF',
      usage: 'Placeholders, disabled text',
      example: 'This is tertiary text for muted content.'
    },
    {
      name: 'Accent Text',
      color: 'text-primary-600',
      darkColor: 'dark:text-primary-400',
      hex: '#2563EB',
      darkHex: '#60A5FA',
      usage: 'Links, interactive elements',
      example: 'This is accent text for clickable elements.'
    }
  ];

  const usageExamples = [
    {
      title: 'Article Body',
      description: 'Optimal readability for long-form content',
      code: `<article class="max-w-3xl">
  <p class="text-base leading-relaxed text-gray-700">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p class="text-base leading-relaxed text-gray-700 mt-4">
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</article>`,
      preview: (
        <article className="max-w-3xl">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </article>
      )
    },
    {
      title: 'UI Labels & Descriptions',
      description: 'Clear hierarchy for interface text',
      code: `<div class="space-y-2">
  <label class="block text-sm font-medium text-gray-900">
    Email Address
  </label>
  <p class="text-sm text-gray-500">
    We'll never share your email with anyone else.
  </p>
  <input type="email" class="w-full px-3 py-2 border rounded-lg" />
</div>`,
      preview: (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Email Address
          </label>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We'll never share your email with anyone else.
          </p>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="you@example.com"
          />
        </div>
      )
    },
    {
      title: 'Data Display',
      description: 'Readable text for data-heavy interfaces',
      code: `<div class="grid grid-cols-2 gap-4">
  <div>
    <div class="text-xs text-gray-500 uppercase">Status</div>
    <div class="text-sm font-medium text-green-600">Active</div>
  </div>
  <div>
    <div class="text-xs text-gray-500 uppercase">Last Updated</div>
    <div class="text-sm font-medium">2 hours ago</div>
  </div>
</div>`,
      preview: (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase">Status</div>
            <div className="text-sm font-medium text-green-600 dark:text-green-400">Active</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase">Last Updated</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">2 hours ago</div>
          </div>
        </div>
      )
    }
  ];

  const readabilityGuidelines = [
    {
      title: 'Line Length',
      items: [
        'Ideal: 50-75 characters per line',
        'Max: 90 characters per line',
        'Min: 30 characters per line',
        'Use responsive breakpoints to maintain optimal length'
      ]
    },
    {
      title: 'Line Height',
      items: [
        'Body text: 1.5-1.75 × font size',
        'Headings: 1.1-1.3 × font size',
        'Small text: 1.7-1.9 × font size',
        'Increase line height for longer lines'
      ]
    },
    {
      title: 'Spacing',
      items: [
        'Paragraph margin: 1-1.5 × font size',
        'Consistent vertical rhythm',
        'Use em/rem units for scalability',
        'Maintain visual hierarchy with spacing'
      ]
    }
  ];

  const accessibilityGuidelines = [
    {
      title: 'Contrast Requirements',
      items: [
        'Normal text: 4.5:1 minimum contrast ratio',
        'Large text (18pt+): 3:1 minimum ratio',
        'Use tools to verify contrast compliance',
        'Test with color blindness simulators'
      ]
    },
    {
      title: 'Text Scaling',
      items: [
        'Support 200% zoom without breaking layout',
        'Use relative units (em, rem, %)',
        'Avoid fixed pixel sizes for text',
        'Test responsive text adjustments'
      ]
    },
    {
      title: 'Screen Readers',
      items: [
        'Maintain semantic HTML structure',
        'Provide text alternatives for images',
        'Use ARIA labels when needed',
        'Test with NVDA/JAWS/VoiceOver'
      ]
    }
  ];

  const bestPractices = [
    {
      title: 'Do\'s',
      icon: CheckIcon,
      color: 'green',
      items: [
        'Use consistent line heights across the app',
        'Maintain proper contrast ratios',
        'Choose readable font sizes (16px minimum)',
        'Use appropriate line lengths for readability'
      ]
    },
    {
      title: 'Don\'ts',
      icon: ExclamationTriangleIcon,
      color: 'red',
      items: [
        'Don\'t use pure black text on white (#000 on #FFF)',
        'Avoid justified text alignment on the web',
        'Don\'t use all caps for long paragraphs',
        'Avoid mixing too many font weights in one section'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <DocumentTextIcon className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Typography: Body Text
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Optimized text styles for readability, accessibility, and user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Text Scale */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <ScaleIcon className="h-6 w-6" />
          Text Scale & Sizes
        </h2>
        
        <div className="space-y-6">
          {textScale.map((text, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Text Preview */}
                <div className="lg:w-2/3">
                  <p className={`${text.className} ${text.weight} text-gray-900 dark:text-white leading-relaxed`}>
                    {text.example}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                    {text.usage}
                  </p>
                </div>
                
                {/* Technical Details */}
                <div className="lg:w-1/3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Size</div>
                      <div className="font-medium text-gray-900 dark:text-white">{text.size}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Weight</div>
                      <div className="font-medium text-gray-900 dark:text-white">Normal</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Line Height</div>
                      <div className="font-medium text-gray-900 dark:text-white">{text.lineHeight}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Class</div>
                      <div className="font-mono text-sm text-gray-900 dark:text-white">{text.className}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button
                      onClick={() => copyToClipboard(`<p class="${text.className} ${text.weight} leading-[${text.lineHeight}] text-gray-900">Your text here</p>`)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      {copiedCode === text.className ? (
                        <>
                          <CheckIcon className="h-4 w-4 text-green-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <DocumentDuplicateIcon className="h-4 w-4" />
                          Copy HTML
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Font Weights & Emphasis
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {textWeights.map((weight, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <div className={`text-lg ${weight.className} text-gray-900 dark:text-white mb-3`}>
                {weight.example}
              </div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900 dark:text-white">{weight.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{weight.usage}</div>
                <div className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  {weight.className}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Colors */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Text Colors
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {textColors.map((color, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <div className={`text-lg font-medium ${color.color} ${color.darkColor} mb-3`}>
                {color.example}
              </div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900 dark:text-white">{color.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{color.usage}</div>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <div 
                        className="w-6 h-6 rounded border border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-xs font-mono text-gray-600 dark:text-gray-400">
                        {color.hex}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div 
                        className="w-6 h-6 rounded border border-gray-300"
                        style={{ backgroundColor: color.darkHex }}
                      />
                      <div className="text-xs font-mono text-gray-600 dark:text-gray-400">
                        {color.darkHex}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Usage Examples
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {usageExamples.map((example, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {example.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {example.description}
                </p>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preview</div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    {example.preview}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Code</div>
                  <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(example.code)}
                    className="absolute top-8 right-2 p-1 text-gray-400 hover:text-gray-300 bg-gray-800 rounded"
                  >
                    {copiedCode === example.code ? (
                      <CheckIcon className="h-5 w-5 text-green-500" />
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

      {/* Readability Guidelines */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <EyeIcon className="h-6 w-6" />
          Readability Guidelines
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {readabilityGuidelines.map((guideline, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {guideline.title}
              </h3>
              <ul className="space-y-3">
                {guideline.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility Guidelines */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <InformationCircleIcon className="h-6 w-6" />
          Accessibility Guidelines
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accessibilityGuidelines.map((guideline, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {guideline.title}
              </h3>
              <ul className="space-y-3">
                {guideline.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <LightBulbIcon className="h-6 w-6" />
          Best Practices
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bestPractices.map((practice, index) => (
            <div key={index} className={`p-6 rounded-xl border ${
              practice.color === 'green' 
                ? 'bg-green-50 dark:bg-gray-800 border-green-200 dark:border-gray-700'
                : 'bg-red-50 dark:bg-gray-800 border-red-200 dark:border-gray-700'
            }`}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <practice.icon className={`h-5 w-5 ${
                  practice.color === 'green' ? 'text-green-500' : 'text-red-500'
                }`} />
                {practice.title}
              </h3>
              <ul className="space-y-2">
                {practice.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <div className={`w-2 h-2 ${
                      practice.color === 'green' ? 'bg-green-500' : 'bg-red-500'
                    } rounded-full mt-1.5`}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <ClipboardDocumentCheckIcon className="h-6 w-6" />
          Implementation
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Tailwind Configuration
            </h3>
            <div className="relative">
              <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.8' }],
      sm: ['0.875rem', { lineHeight: '1.7' }],
      base: ['1rem', { lineHeight: '1.625' }],
      lg: ['1.125rem', { lineHeight: '1.6' }],
      xl: ['1.25rem', { lineHeight: '1.6' }],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    }
  }
}`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard('tailwind-config')}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-300 bg-gray-800 rounded"
              >
                {copiedCode === 'tailwind-config' ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <DocumentDuplicateIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              CSS Variables
            </h3>
            <div className="relative">
              <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  
  --line-height-xs: 1.8;
  --line-height-sm: 1.7;
  --line-height-base: 1.625;
  --line-height-lg: 1.6;
  --line-height-xl: 1.6;
}`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard('css-vars')}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-300 bg-gray-800 rounded"
              >
                {copiedCode === 'css-vars' ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <DocumentDuplicateIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypographyBodyText;