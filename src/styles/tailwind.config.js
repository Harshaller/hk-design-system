// Add these color definitions to your theme configuration

module.exports = {
  theme: {
    extend: {
      colors: {
        // Fix Primary category - complete 50-950 range
        primary: {
          50: '#eff6ff',    // Very light blue
          100: '#dbeafe',   // Light blue
          200: '#bfdbfe',   // Light medium blue
          300: '#93c5fd',   // Medium light blue
          400: '#60a5fa',   // Medium blue
          500: '#3b82f6',   // Your main blue (keep this)
          600: '#2563eb',   // Dark blue
          700: '#1d4ed8',   // Darker blue
          800: '#1e40af',   // Very dark blue
          900: '#1e3a8a',   // Deep blue
          950: '#172554',   // Navy blue
        },
        
        // Fix Semantic colors - add warning and error
        success: '#10b981',     // Keep your green
        info: '#3b82f6',        // Keep your blue
        warning: '#f59e0b',     // Add amber/orange
        error: '#ef4444',       // Add red
        'warning-light': '#fef3c7',
        'warning-dark': '#d97706',
        'error-light': '#fee2e2',
        'error-dark': '#dc2626',
        
        // Add Text category colors
        text: {
          primary: '#1f2937',    // Gray-800 for main text
          secondary: '#6b7280',  // Gray-500 for secondary text
          tertiary: '#9ca3af',   // Gray-400 for muted text
          accent: '#3b82f6',     // Blue for links/CTAs
          inverse: '#ffffff',    // White for dark backgrounds
          success: '#059669',    // Green-600
          warning: '#d97706',    // Amber-600
          error: '#dc2626',      // Red-600
        },
        
        // Add Data Visualization colors (won't affect UI)
        chart: {
          // Categorical colors for bar charts, pie charts
          1: '#3b82f6',  // Blue
          2: '#ef4444',  // Red
          3: '#10b981',  // Green
          4: '#f59e0b',  // Yellow/Amber
          5: '#8b5cf6',  // Purple
          6: '#ec4899',  // Pink
          7: '#06b6d4',  // Cyan
          8: '#84cc16',  // Lime
          9: '#f97316',  // Orange
          10: '#6366f1', // Indigo
        },
        
        // Sequential colors for heatmaps, gradients
        sequential: {
          blue: ['#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8', '#1e40af'],
          green: ['#dcfce7', '#86efac', '#22c55e', '#16a34a', '#166534'],
          red: ['#fee2e2', '#fca5a5', '#ef4444', '#dc2626', '#991b1b'],
          purple: ['#f3e8ff', '#d8b4fe', '#a855f7', '#9333ea', '#6b21a8'],
        },
        
        // Diverging colors for positive/negative scales
        diverging: {
          redBlue: ['#dc2626', '#fca5a5', '#d1d5db', '#93c5fd', '#2563eb'],
          greenRed: ['#059669', '#34d399', '#d1d5db', '#fca5a5', '#dc2626'],
          purpleGreen: ['#8b5cf6', '#c4b5fd', '#d1d5db', '#86efac', '#16a34a'],
        },
      },
    },
  },
}