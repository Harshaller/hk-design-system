// src/components/DesignSystem/Logo.jsx
import React from 'react';

export function HKLogo({ className = "h-8 w-8", variant = "default" }) {
  if (variant === "icon") {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        
        {/* Outer hexagon */}
        <polygon points="50 5 95 27.5 95 72.5 50 95 5 72.5 5 27.5" fill="url(#hkGradient)" stroke="white" strokeWidth="2"/>
        
        {/* Inner hexagon */}
        <polygon points="50 20 80 35 80 65 50 80 20 65 20 35" fill="white" opacity="0.95"/>
        
        {/* H letter */}
        <path d="M35 35 L35 65 M50 50 L35 50 M65 35 L65 65" stroke="url(#hkGradient)" strokeWidth="4" strokeLinecap="round"/>
        
        {/* K letter */}
        <path d="M75 35 L65 50 M75 65 L65 50 M65 50 L75 50" stroke="url(#hkGradient)" strokeWidth="4" strokeLinecap="round"/>
        
        {/* Decorative dots */}
        <circle cx="50" cy="90" r="3" fill="#6366F1"/>
        <circle cx="50" cy="10" r="3" fill="#8B5CF6"/>
      </svg>
    );
  }
  
  if (variant === "horizontal") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="url(#hkGradientLogo)"/>
          <text x="20" y="28" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="Arial">HK</text>
        </svg>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-gray-900 dark:text-white">HK Design</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Design System</span>
        </div>
      </div>
    );
  }
  
  // Default - full logo
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hkGradientLogo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        
        <rect width="100" height="100" rx="20" fill="url(#hkGradientLogo)"/>
        
        <text x="50" y="68" textAnchor="middle" fill="white" fontSize="52" fontWeight="bold" fontFamily="Arial, sans-serif">HK</text>
        
        <circle cx="50" cy="85" r="4" fill="white" opacity="0.5"/>
      </svg>
      
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">HK Design System</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">Creative Design Studio</p>
      </div>
    </div>
  );
}

export default HKLogo;