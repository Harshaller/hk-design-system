import React from 'react';
import { 
  DocumentTextIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export function TypographyHeadings() {
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

  const headingScale = [
    {
      level: 'H1',
      size: '4.5rem',
      className: 'text-7xl',
      weight: 'font-black',
      lineHeight: '1',
      usage: 'Page titles, hero sections',
      example: 'The quick brown fox jumps'
    },
    {
      level: 'H2',
      size: '3.75rem',
      className: 'text-6xl',
      weight: 'font-bold',
      lineHeight: '1.1',
      usage: 'Major section headings',
      example: 'The quick brown fox jumps'
    },
    {
      level: 'H3',
      size: '3rem',
      className: 'text-5xl',
      weight: 'font-bold',
      lineHeight: '1.15',
      usage: 'Sub-section headings',
      example: 'The quick brown fox jumps'
    },
    {
      level: 'H4',
      size: '2.25rem',
      className: 'text-4xl',
      weight: 'font-semibold',
      lineHeight: '1.2',
      usage: 'Card titles, feature headings',
      example: 'The quick brown fox jumps'
    },
    {
      level: 'H5',
      size: '1.875rem',
      className: 'text-3xl',
      weight: 'font-semibold',
      lineHeight: '1.25',
      usage: 'Smaller feature headings',
      example: 'The quick brown fox jumps'
    },
    {
      level: 'H6',
      size: '1.5rem',
      className: 'text-2xl',
      weight: 'font-semibold',
      lineHeight: '1.3',
      usage: 'Labels, small headings',
      example: 'The quick brown fox jumps'
    }
  ];

  const headingExamples = [
    {
      title: 'Marketing Headings',
      description: 'Bold and attention-grabbing for landing pages',
      code: `<h1 class="text-7xl font-black tracking-tight">
  Transform Your Digital Experience
</h1>
<h2 class="text-4xl font-bold text-gray-700">
  Join 10,000+ companies already growing
</h2>`,
      preview: (
        <div className="space-y-4">
          <h1 className="text-7xl font-black tracking-tight text-gray-900 dark:text-white">
            Transform Your Digital Experience
          </h1>
          <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-300">
            Join 10,000+ companies already growing
          </h2>
        </div>
      )
    },
    {
      title: 'Dashboard Headings',
      description: 'Clean and functional for internal tools',
      code: `<h1 class="text-3xl font-semibold text-gray-900">
  Analytics Dashboard
</h1>
<h2 class="text-lg font-medium text-gray-600">
  Last updated: Today, 2:30 PM
</h2>`,
      preview: (
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h1>
          <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400">
            Last updated: Today, 2:30 PM
          </h2>
        </div>
      )
    },
    {
      title: 'Article Headings',
      description: 'Hierarchical and readable for long-form content',
      code: `<h1 class="text-5xl font-bold mb-4">
  The Future of Web Development
</h1>
<h2 class="text-2xl font-semibold text-gray-700 mb-3">
  Emerging Trends and Technologies
</h2>
<h3 class="text-xl font-medium text-gray-600">
  Section 1: Modern Frameworks
</h3>`,
      preview: (
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Future of Web Development
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Emerging Trends and Technologies
          </h2>
          <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">
            Section 1: Modern Frameworks
          </h3>
        </div>
      )
    }
  ];

  const headingGuidelines = [
    {
      title: 'Hierarchy Rules',
      items: [
        'Use only one H1 per page for main title',
        'Maintain logical heading order (H1 → H2 → H3)',
        'Never skip heading levels for styling purposes',
        'Use semantic headings, not just for visual styling'
      ]
    },
    {
      title: 'Spacing Guidelines',
      items: [
        'Add more space above headings than below',
        'Maintain consistent vertical rhythm',
        'Use proportional spacing based on heading size',
        'Ensure headings don\'t look disconnected from content'
      ]
    },
    {
      title: 'Accessibility',
      items: [
        'Ensure sufficient contrast with background',
        'Use relative units (rem) for scalability',
        'Test with screen readers for proper announcement',
        'Avoid ALL CAPS for long headings'
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
              Typography: Headings
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              A comprehensive heading system for clear hierarchy and visual impact.
            </p>
          </div>
        </div>
      </div>

      {/* Heading Scale */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Heading Scale & Hierarchy
        </h2>
        
        <div className="space-y-8">
          {headingScale.map((heading, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left: Heading Preview */}
                <div className="lg:w-2/3">
                  <div className={`${heading.className} ${heading.weight} text-gray-900 dark:text-white mb-3`}>
                    {heading.example}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {heading.usage}
                  </p>
                </div>
                
                {/* Right: Technical Details */}
                <div className="lg:w-1/3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Level</div>
                      <div className="font-medium text-gray-900 dark:text-white">{heading.level}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Size</div>
                      <div className="font-medium text-gray-900 dark:text-white">{heading.size}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Weight</div>
                      <div className="font-medium text-gray-900 dark:text-white">{heading.weight.replace('font-', '')}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Line Height</div>
                      <div className="font-medium text-gray-900 dark:text-white">{heading.lineHeight}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button
                      onClick={() => copyToClipboard(`<${heading.level.toLowerCase()} class="${heading.className} ${heading.weight}">Your heading here</${heading.level.toLowerCase()}>`)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      {copiedCode === heading.level ? (
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

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Real-World Examples
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {headingExamples.map((example, index) => (
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
                    className="absolute top-8 right-2 text-gray-400 hover:text-gray-300"
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

      {/* Guidelines */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Heading Guidelines
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {headingGuidelines.map((guideline, index) => (
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

      {/* Implementation */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Implementation
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Tailwind CSS Classes
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="font-mono text-sm text-gray-900 dark:text-white">.text-7xl .font-black</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Hero headings</div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="font-mono text-sm text-gray-900 dark:text-white">.text-4xl .font-bold</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Section headings</div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="font-mono text-sm text-gray-900 dark:text-white">.text-lg .font-semibold</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Sub-headings</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              CSS Variables
            </h3>
            <div className="relative">
              <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`:root {
  --heading-1: 4.5rem;
  --heading-2: 3.75rem;
  --heading-3: 3rem;
  --heading-4: 2.25rem;
  --heading-5: 1.875rem;
  --heading-6: 1.5rem;
  
  --font-weight-black: 900;
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
}`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`:root {\n  --heading-1: 4.5rem;\n  --heading-2: 3.75rem;\n  --heading-3: 3rem;\n  --heading-4: 2.25rem;\n  --heading-5: 1.875rem;\n  --heading-6: 1.5rem;\n  \n  --font-weight-black: 900;\n  --font-weight-bold: 700;\n  --font-weight-semibold: 600;\n}`)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-300"
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

      {/* Best Practices */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Best Practices
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-green-50 dark:bg-gray-800 rounded-xl border border-green-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-green-500" />
              Do's
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                <span>Use semantic HTML tags (h1-h6)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                <span>Maintain consistent spacing between headings</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                <span>Test heading hierarchy with screen readers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                <span>Use appropriate contrast for readability</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-red-50 dark:bg-gray-800 rounded-xl border border-red-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <CodeBracketIcon className="h-5 w-5 text-red-500" />
              Don'ts
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                <span>Use headings just for visual styling</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                <span>Skip heading levels (h1 → h3)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                <span>Use ALL CAPS for long headings</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                <span>Overuse decorative fonts for headings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypographyHeadings;