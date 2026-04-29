import React, { useState, useEffect } from 'react';
import { 
  CheckIcon, 
  DocumentDuplicateIcon, 
  ChartBarIcon, 
  ChartPieIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline';
import { colorTokens } from '../../../utils/designTokens';

export function ColorsDataViz() {
  const [copiedColor, setCopiedColor] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeChart, setActiveChart] = useState('bar');
  const [pieAngles, setPieAngles] = useState([]);

  const copyToClipboard = async (text, type = 'color') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'color') {
        setCopiedColor(text);
        setTimeout(() => setCopiedColor(null), 2000);
      } else {
        setCopiedCode(text);
        setTimeout(() => setCopiedCode(null), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Mock data for charts
  const barChartData = [
    { label: 'Q1', value: 65, color: colorTokens.dataViz.categorical[0] },
    { label: 'Q2', value: 85, color: colorTokens.dataViz.categorical[1] },
    { label: 'Q3', value: 45, color: colorTokens.dataViz.categorical[2] },
    { label: 'Q4', value: 95, color: colorTokens.dataViz.categorical[3] },
  ];

  const pieChartData = [
    { label: 'Product A', value: 30, color: colorTokens.dataViz.categorical[0] },
    { label: 'Product B', value: 25, color: colorTokens.dataViz.categorical[1] },
    { label: 'Product C', value: 20, color: colorTokens.dataViz.categorical[2] },
    { label: 'Product D', value: 15, color: colorTokens.dataViz.categorical[3] },
    { label: 'Product E', value: 10, color: colorTokens.dataViz.categorical[4] },
  ];

  const lineChartData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 2000 },
    { month: 'Apr', revenue: 2780 },
    { month: 'May', revenue: 1890 },
    { month: 'Jun', revenue: 2390 },
  ];

  // Calculate pie chart angles
  useEffect(() => {
    let total = 0;
    const calculatedAngles = pieChartData.map(item => {
      const angle = (item.value / 100) * 360;
      const start = total;
      total += angle;
      return { ...item, startAngle: start, endAngle: total };
    });
    setPieAngles(calculatedAngles);
  }, []);

  const ColorSwatch = ({ color, name, index = null }) => (
    <div 
      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer group transition-colors"
      onClick={() => copyToClipboard(color)}
    >
      <div 
        className="w-12 h-12 rounded border border-gray-300 dark:border-gray-600 flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-gray-900 dark:text-white text-sm truncate">
          {name}
        </div>
        <div className="font-mono text-gray-600 dark:text-gray-400 text-xs">
          {color}
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1">
        {copiedColor === color ? (
          <CheckIcon className="h-4 w-4 text-green-500" />
        ) : (
          <DocumentDuplicateIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );

  const CodeBlock = ({ title, code, language = 'javascript' }) => (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
        <button
          onClick={() => copyToClipboard(code, 'code')}
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <DocumentDuplicateIcon className="h-3 w-3" />
          {copiedCode === code ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-purple-100 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
            <ChartBarIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Data Visualization Colors</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Carefully curated color palettes for charts, graphs, and data presentations
            </p>
          </div>
        </div>

        {/* Chart Type Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveChart('bar')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 ${
              activeChart === 'bar'
                ? 'bg-purple-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <ChartBarIcon className="h-4 w-4" />
            Bar Charts
          </button>
          <button
            onClick={() => setActiveChart('pie')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 ${
              activeChart === 'pie'
                ? 'bg-purple-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <ChartPieIcon className="h-4 w-4" />
            Pie Charts
          </button>
          <button
            onClick={() => setActiveChart('line')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 ${
              activeChart === 'line'
                ? 'bg-purple-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <ChartBarIcon className="h-4 w-4" />
            Line Charts
          </button>
          <button
            onClick={() => setActiveChart('heatmap')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 ${
              activeChart === 'heatmap'
                ? 'bg-purple-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <TableCellsIcon className="h-4 w-4" />
            Heatmaps
          </button>
        </div>
      </div>

      {/* Categorical Colors */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Categorical Colors</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Use for distinct categories in bar charts, pie charts, and when comparing different groups
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {colorTokens.dataViz.categorical.map((color, index) => (
            <ColorSwatch 
              key={index}
              color={color}
              name={`Category ${index + 1}`}
              index={index}
            />
          ))}
        </div>

        {/* Example Charts */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Example: {activeChart === 'bar' ? 'Bar Chart' : activeChart === 'pie' ? 'Pie Chart' : activeChart === 'line' ? 'Line Chart' : 'Heatmap'}</h3>
          
          {/* Bar Chart */}
          {activeChart === 'bar' && (
            <div className="space-y-4">
              <div className="h-64 flex items-end gap-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                {barChartData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full rounded-t-lg transition-all hover:opacity-90 min-h-[4px]"
                      style={{ 
                        backgroundColor: item.color,
                        height: `${item.value}%`
                      }}
                    />
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                {barChartData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pie Chart */}
          {activeChart === 'pie' && (
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {pieAngles.map((item, index) => (
                    <div
                      key={index}
                      className="absolute inset-0"
                      style={{
                        background: `conic-gradient(from ${item.startAngle}deg, ${item.color} 0deg, ${item.color} ${item.endAngle - item.startAngle}deg, transparent ${item.endAngle - item.startAngle}deg)`,
                      }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3">
                {pieChartData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                    <span className="text-gray-600 dark:text-gray-400">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Line Chart */}
          {activeChart === 'line' && (
            <div className="space-y-6">
              <div className="h-64 relative p-4">
                <div className="absolute inset-4 border-l border-b border-gray-200 dark:border-gray-700">
                  {/* Draw lines between points */}
                  <svg className="absolute inset-0 w-full h-full">
                    <polyline
                      fill="none"
                      stroke={colorTokens.dataViz.categorical[0]}
                      strokeWidth="2"
                      points={lineChartData.map((point, index) => 
                        `${(index / (lineChartData.length - 1)) * 100}%,${100 - (point.revenue / 5000) * 100}%`
                      ).join(' ')}
                    />
                  </svg>
                  
                  {/* Draw points */}
                  {lineChartData.map((point, index) => (
                    <div 
                      key={index}
                      className="absolute w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${(index / (lineChartData.length - 1)) * 100}%`,
                        top: `${100 - (point.revenue / 5000) * 100}%`,
                        backgroundColor: colorTokens.dataViz.categorical[0],
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 px-4">
                {lineChartData.map((point) => (
                  <span key={point.month}>{point.month}</span>
                ))}
              </div>
            </div>
          )}

          {/* Heatmap */}
          {activeChart === 'heatmap' && (
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-2">
                {colorTokens.dataViz.sequential.blue.map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div 
                      className="h-16 rounded border border-gray-200 dark:border-gray-700"
                      style={{ backgroundColor: color }}
                      onClick={() => copyToClipboard(color)}
                    />
                    <div className="text-xs text-center text-gray-500 dark:text-gray-400">
                      Level {index + 1}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Blue sequential scale for heatmaps - click any color to copy
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sequential Colors */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Sequential Colors</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Use for ordered data where low to high values need to be represented (heatmaps, choropleth maps)
        </p>

        <div className="space-y-6">
          {Object.entries(colorTokens.dataViz.sequential).map(([name, scale]) => (
            <div key={name} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4 capitalize">{name} Scale</h3>
              <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-4">
                {scale.map((color, index) => (
                  <div 
                    key={index}
                    className="flex-1 h-12 flex items-center justify-center group relative cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => copyToClipboard(color)}
                  >
                    <span className="text-xs font-medium mix-blend-difference text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Low values</span>
                <span>Medium values</span>
                <span>High values</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-blue-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700 dark:text-gray-300">Do's</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Use categorical colors for distinct categories</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Use sequential colors for ordered/numeric data</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Maintain consistent color schemes across charts</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700 dark:text-gray-300">Don'ts</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Don't use too many colors (max 8-10 categories)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Avoid red-green combinations for colorblind users</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Don't rely solely on color to convey information</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Code Examples with Copy Functionality */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Implementation Examples</h3>
        
        <div className="space-y-6">
          <CodeBlock
            title="Chart.js Configuration"
            code={`// Chart.js configuration with our categorical colors
const chartColors = {
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
  }
};

// Bar Chart Example
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Sales',
      data: [65, 85, 45, 95],
      backgroundColor: chartColors.categorical.slice(0, 4),
      borderColor: chartColors.categorical.slice(0, 4),
      borderWidth: 1
    }]
  }
});`}
          />

          <CodeBlock
            title="D3.js Color Scale"
            code={`// D3.js Sequential Color Scale
import * as d3 from 'd3';

// Using our sequential blue scale
const colorScale = d3.scaleSequential()
  .domain([0, 100])
  .range(['#dbeafe', '#1e40af']); // From light blue to dark blue

// Or using interpolator
const interpolator = d3.interpolateRgb('#dbeafe', '#1e40af');
const colorScale = d3.scaleSequential(interpolator)
  .domain([0, 100]);

// Apply to heatmap
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('fill', d => colorScale(d.value));`}
          />

          <CodeBlock
            title="Recharts Configuration"
            code={`// Recharts Line Chart with categorical colors
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 2000 },
  { month: 'Apr', revenue: 2780 },
  { month: 'May', revenue: 1890 },
  { month: 'Jun', revenue: 2390 },
];

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

function RevenueChart() {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line 
        type="monotone" 
        dataKey="revenue" 
        stroke={COLORS[0]} 
        strokeWidth={2}
        dot={{ fill: COLORS[0], r: 4 }}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
}`}
          />

          <CodeBlock
            title="CSS Gradient for Sequential Scales"
            code={`/* CSS Linear Gradient for heatmaps */
.heatmap-cell {
  background: linear-gradient(
    to right,
    #dbeafe,  /* Light blue */
    #93c5fd,  /* Medium light blue */
    #3b82f6,  /* Primary blue */
    #1d4ed8,  /* Dark blue */
    #1e40af   /* Very dark blue */
  );
}

/* Or using CSS custom properties */
:root {
  --sequential-blue-0: #dbeafe;
  --sequential-blue-1: #93c5fd;
  --sequential-blue-2: #3b82f6;
  --sequential-blue-3: #1d4ed8;
  --sequential-blue-4: #1e40af;
}

.heatmap-gradient {
  background: linear-gradient(
    to right,
    var(--sequential-blue-0),
    var(--sequential-blue-1),
    var(--sequential-blue-2),
    var(--sequential-blue-3),
    var(--sequential-blue-4)
  );
}`}
          />
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Reference</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Categorical Colors</h4>
            <div className="space-y-1">
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                colors.dataViz.categorical[0]
              </code>
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                colors.dataViz.categorical[1]
              </code>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Sequential Scales</h4>
            <div className="space-y-1">
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                colors.dataViz.sequential.blue
              </code>
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                colors.dataViz.sequential.green
              </code>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Diverging Scales</h4>
            <div className="space-y-1">
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                colors.dataViz.diverging.redBlue
              </code>
              <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                colors.dataViz.diverging.greenRed
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}