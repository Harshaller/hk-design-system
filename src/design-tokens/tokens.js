// src/design-tokens/tokens.js
// Centralized design tokens for the design system

export const designTokens = {
  // Version and metadata
  version: "1.0.0",
  name: "Design System Tokens",
  created: new Date().toISOString(),
  
  // Color tokens
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      850: "#161e2e",
      900: "#111827",
      950: "#0c1120",
    },
    semantic: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#3b82f6",
    },
    background: {
      light: "#ffffff",
      dark: "#111827",
      surface: {
        light: "#f9fafb",
        dark: "#1f2937",
      },
    },
    text: {
      light: {
        primary: "#111827",
        secondary: "#4b5563",
        tertiary: "#9ca3af",
        inverse: "#ffffff",
      },
      dark: {
        primary: "#f9fafb",
        secondary: "#d1d5db",
        tertiary: "#9ca3af",
        inverse: "#111827",
      },
    },
  },
  
  // Typography tokens
  typography: {
    fontFamily: {
      sans: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },
    fontSize: {
      xs: {
        size: "0.75rem",
        lineHeight: "1rem",
        weight: "400",
      },
      sm: {
        size: "0.875rem",
        lineHeight: "1.25rem",
        weight: "400",
      },
      base: {
        size: "1rem",
        lineHeight: "1.5rem",
        weight: "400",
      },
      lg: {
        size: "1.125rem",
        lineHeight: "1.75rem",
        weight: "500",
      },
      xl: {
        size: "1.25rem",
        lineHeight: "1.75rem",
        weight: "600",
      },
      "2xl": {
        size: "1.5rem",
        lineHeight: "2rem",
        weight: "600",
      },
      "3xl": {
        size: "1.875rem",
        lineHeight: "2.25rem",
        weight: "700",
      },
      "4xl": {
        size: "2.25rem",
        lineHeight: "2.5rem",
        weight: "700",
      },
      "5xl": {
        size: "3rem",
        lineHeight: "1.2",
        weight: "800",
      },
    },
    heading: {
      h1: "4xl",
      h2: "3xl",
      h3: "2xl",
      h4: "xl",
      h5: "lg",
      h6: "base",
    },
  },
  
  // Spacing tokens
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  
  // Border radius tokens
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  
  // Shadow tokens
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
  },
  
  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  
  // Animation tokens
  animations: {
    duration: {
      fastest: "75ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "500ms",
      slowest: "1000ms",
    },
    easing: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  
  // Z-index tokens
  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
    dropdown: "1000",
    sticky: "1020",
    fixed: "1030",
    modalBackdrop: "1040",
    modal: "1050",
    popover: "1060",
    tooltip: "1070",
  },
  
  // Container tokens
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
    },
    maxWidth: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

export default designTokens;