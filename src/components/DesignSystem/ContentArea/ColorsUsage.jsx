import React, { useState } from 'react';
import { CheckIcon, DocumentDuplicateIcon, CodeBracketIcon, EyeIcon, BeakerIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { colorTokens } from '../../../utils/designTokens';

export function ColorsUsage() {
  const [copiedToken, setCopiedToken] = useState(null);
  const [activeTab, setActiveTab] = useState('implementation');

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedToken(text);
      setTimeout(() => setCopiedToken(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const UsageExample = ({ title, description, children, code }) => (
    <div className="mb-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 max-w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white break-words">{title}</h3>
        <button
          onClick={() => copyToClipboard(code)}
          className="flex items-center justify-center gap-2 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors w-fit sm:w-auto"
        >
          <CodeBracketIcon className="h-4 w-4" />
          Copy Code
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4 break-words">{description}</p>
      <div className="mb-4 overflow-x-auto">
        {children}
      </div>
      <div className="relative max-w-full">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto max-w-full">
          <code className="break-words whitespace-pre-wrap">{code}</code>
        </pre>
        {copiedToken === code && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <CheckIcon className="h-3 w-3" />
            Copied!
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-gray-700 max-w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
            <BeakerIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white break-words">Color Usage Guide</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 break-words">
              Practical implementation examples and ready-to-use code snippets for applying colors in your application
            </p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 mb-6 pb-2">
          <button
            onClick={() => setActiveTab('implementation')}
            className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'implementation'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            <EyeIcon className="h-4 w-4 inline mr-2" />
            Implementation
          </button>
          <button
            onClick={() => setActiveTab('accessibility')}
            className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'accessibility'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            <SparklesIcon className="h-4 w-4 inline mr-2" />
            Accessibility
          </button>
        </div>
      </div>

      {activeTab === 'implementation' ? (
        <>
          {/* Buttons Section */}
          <section className="max-w-full">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400">1</span>
              </div>
              Button Colors
            </h2>
            
            <UsageExample
              title="Primary Buttons"
              description="Use primary colors for main CTAs and important actions"
              code={`<button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">
  Primary Action
</button>`}
            >
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                  Primary Button
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                  Secondary Button
                </button>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                  Accent Button
                </button>
              </div>
            </UsageExample>

            <UsageExample
              title="Semantic Buttons"
              description="Use semantic colors for specific actions like success, warning, or errors"
              code={`<button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
  Success Action
</button>
<button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
  Warning Action
</button>
<button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
  Error Action
</button>`}
            >
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                  Success
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                  Warning
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                  Error
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                  Neutral
                </button>
              </div>
            </UsageExample>
          </section>

          {/* Alerts Section */}
          <section className="max-w-full">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400">2</span>
              </div>
              Alert & Notification Colors
            </h2>

            <UsageExample
              title="Status Alerts"
              description="Use semantic colors for different types of status messages"
              code={`<div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
  Success message goes here
</div>
<div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4">
  Warning message goes here
</div>
<div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
  Error message goes here
</div>`}
            >
              <div className="space-y-4 max-w-full">
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 max-w-full">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <strong>Success:</strong> Your changes have been saved successfully.
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4 max-w-full">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <strong>Warning:</strong> Please review the changes before submitting.
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 max-w-full">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <strong>Error:</strong> Unable to save changes. Please try again.
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 max-w-full">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <strong>Info:</strong> New features are available in the latest update.
                  </div>
                </div>
              </div>
            </UsageExample>
          </section>

          {/* Form Elements */}
          <section className="max-w-full">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400">3</span>
              </div>
              Form & Input Colors
            </h2>

            <UsageExample
              title="Input States"
              description="Different color states for form inputs and validation"
              code={`<input
  className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-3 py-2 w-full"
  placeholder="Default input"
/>
<input
  className="border border-green-500 focus:ring-2 focus:ring-green-200 rounded-lg px-3 py-2 w-full"
  placeholder="Valid input"
/>
<input
  className="border border-red-500 focus:ring-2 focus:ring-red-200 rounded-lg px-3 py-2 w-full"
  placeholder="Error input"
/>
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
  Submit
</button>`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Default Input
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 rounded-lg px-3 py-2 bg-white dark:bg-gray-800"
                      placeholder="Enter text here"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                      Valid Input
                    </label>
                    <input
                      type="text"
                      className="w-full border border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 rounded-lg px-3 py-2 bg-white dark:bg-gray-800"
                      placeholder="Valid input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-red-700 dark:text-red-300 mb-1">
                      Error Input
                    </label>
                    <input
                      type="text"
                      className="w-full border border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900 rounded-lg px-3 py-2 bg-white dark:bg-gray-800"
                      placeholder="Error state"
                    />
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">This field is required</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Select Input
                    </label>
                    <select className="w-full border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 rounded-lg px-3 py-2 bg-white dark:bg-gray-800">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Checkbox
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Option 1</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="text-green-500 rounded" />
                        <span>Option 2</span>
                      </label>
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                    Submit Form
                  </button>
                </div>
              </div>
            </UsageExample>
          </section>

          {/* Cards & Containers */}
          <section className="max-w-full">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400">4</span>
              </div>
              Cards & Container Colors
            </h2>

            <UsageExample
              title="Card Variations"
              description="Different color schemes for cards and containers"
              code={`<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
  Default Card
</div>
<div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
  Info Card
</div>
<div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-6">
  Gradient Card
</div>`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Default Card</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Standard card with neutral background and borders
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Info Card</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Use for informational content or highlights
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2">Gradient Card</h4>
                  <p className="text-blue-100 text-sm">
                    Perfect for promotional content or CTAs
                  </p>
                </div>
              </div>
            </UsageExample>
          </section>

          {/* Badges & Tags */}
          <section className="max-w-full">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400">5</span>
              </div>
              Badges & Status Indicators
            </h2>

            <UsageExample
              title="Status Badges"
              description="Color-coded badges for status indicators and tags"
              code={`<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
  Active
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
  Pending
</span>
<span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
  Inactive
</span>
<span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
  New
</span>`}
            >
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Active
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Pending
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Inactive
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  New
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Featured
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  Draft
                </span>
              </div>
            </UsageExample>
          </section>

          {/* Gradient Cards Section */}
          <section className="max-w-full">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400">6</span>
              </div>
              Gradient Cards & CTAs
            </h2>

            <UsageExample
              title="Basic Gradient Card"
              description="Simple gradient background card perfect for highlighting important content"
              code={`<div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-6">
  <h4 className="font-semibold mb-2">Promotional Offer</h4>
  <p className="text-blue-100 text-sm">
    Get 50% off on all products for a limited time.
  </p>
</div>`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Promotional Offer</h4>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Get 50% off on all products for a limited time.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Success Message</h4>
                  <p className="text-green-100 text-xs sm:text-sm">
                    Your changes have been saved successfully.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Important Alert</h4>
                  <p className="text-orange-100 text-xs sm:text-sm">
                    System maintenance scheduled for tonight at 2 AM.
                  </p>
                </div>
              </div>
            </UsageExample>

            <UsageExample
              title="Gradient Card with CTA Button"
              description="Add a call-to-action button to make gradient cards more interactive"
              code={`<div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-6">
  <h4 className="font-semibold mb-2">Upgrade to Pro</h4>
  <p className="text-blue-100 text-sm mb-4">
    Unlock all premium features and advanced analytics.
  </p>
  <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors">
    Upgrade Now
  </button>
</div>`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Upgrade to Pro</h4>
                  <p className="text-blue-100 text-xs sm:text-sm mb-4">
                    Unlock all premium features and advanced analytics.
                  </p>
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                    Upgrade Now
                  </button>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Limited Time Offer</h4>
                  <p className="text-pink-100 text-xs sm:text-sm mb-4">
                    Subscribe today and get 3 months free on annual plans.
                  </p>
                  <button className="bg-white text-pink-600 hover:bg-pink-50 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </UsageExample>
          </section>

          {/* Gradient Implementation Guide */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 rounded-2xl border border-purple-100 dark:border-gray-700 mt-8 max-w-full overflow-hidden">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 break-words">Gradient Card Implementation Guide</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Gradient Directions</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">to-r</code>
                    <span>Left to right (default)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">to-b</code>
                    <span>Top to bottom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">to-l</code>
                    <span>Right to left</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">to-t</code>
                    <span>Bottom to top</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Common Use Cases</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Promotional banners and offers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Feature highlights and CTAs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Dashboard statistics cards</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Quick Color Combinations</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <div className="text-center">
                  <div className="h-6 sm:h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mb-1"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Blue-Purple</span>
                </div>
                <div className="text-center">
                  <div className="h-6 sm:h-8 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 mb-1"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Green-Teal</span>
                </div>
                <div className="text-center">
                  <div className="h-6 sm:h-8 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 mb-1"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Orange-Red</span>
                </div>
                <div className="text-center">
                  <div className="h-6 sm:h-8 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 mb-1"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Pink-Rose</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Accessibility Tab */
        <div className="space-y-8 max-w-full">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 rounded-2xl border border-purple-100 dark:border-gray-700 max-w-full">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 break-words">
              Color Contrast Guidelines
            </h3>
            <p className="text-gray-600 dark:text-gray-400 break-words">
              Ensure your color combinations meet WCAG 2.1 AA standards for accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 max-w-full">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Text on Background</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-500 rounded-lg">
                  <span className="text-white font-medium text-sm">✓ Good Contrast</span>
                  <span className="text-green-100 text-xs sm:text-sm">4.5:1</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-300 rounded-lg">
                  <span className="text-yellow-900 font-medium text-sm">✓ Good Contrast</span>
                  <span className="text-yellow-800 text-xs sm:text-sm">5.7:1</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-200 rounded-lg">
                  <span className="text-gray-500 font-medium text-sm">✗ Poor Contrast</span>
                  <span className="text-gray-500 text-xs sm:text-sm">2.1:1</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 max-w-full">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Interactive Elements</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Buttons should have at least 3:1 contrast with background</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Focus states should be clearly visible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Don't rely solely on color to convey information</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 max-w-full">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4 break-words">Ready-to-Use Accessible Combinations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-500 rounded-lg">
                <div className="text-white font-medium mb-2 text-sm">Primary Text</div>
                <div className="text-blue-100 text-xs">Use white text on blue-500+</div>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="text-white font-medium mb-2 text-sm">Dark Background</div>
                <div className="text-gray-300 text-xs">Use gray-100+ on gray-800+</div>
              </div>
              <div className="p-4 bg-white border border-gray-300 rounded-lg">
                <div className="text-gray-800 font-medium mb-2 text-sm">Light Background</div>
                <div className="text-gray-600 text-xs">Use gray-700+ on white</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Reference */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 max-w-full">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 break-words">Quick Reference</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Primary Actions</h4>
            <div className="space-y-1">
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded break-words">
                bg-primary-500
              </code>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Success States</h4>
            <div className="space-y-1">
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded break-words">
                bg-green-500
              </code>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Error States</h4>
            <div className="space-y-1">
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded break-words">
                bg-red-500
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}