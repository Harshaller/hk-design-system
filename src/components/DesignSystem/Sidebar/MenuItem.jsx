import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

/**
 * MenuItem Component
 * 
 * @param {Object} props
 * @param {string} props.label - The text to display
 * @param {React.Component} props.icon - Icon component from Heroicons
 * @param {boolean} props.isActive - Whether this item is currently active
 * @param {boolean} props.hasSubmenu - Whether this item has a submenu (shows chevron)
 * @param {function} props.onClick - Click handler function
 * @param {string} props.className - Additional CSS classes
 */
export function MenuItem({ 
  label, 
  icon: Icon, 
  isActive = false, 
  hasSubmenu = false, 
  onClick, 
  className = '',
  ...props 
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-between w-full p-3 
        rounded-lg transition-all duration-200
        hover:bg-gray-100 dark:hover:bg-gray-700
        ${isActive 
          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 font-semibold border-l-4 border-primary-500 dark:border-primary-400' 
          : 'text-gray-700 dark:text-gray-300'
        }
        ${className}
      `}
      {...props}
    >
      <div className="flex items-center">
        {Icon && (
          <div className="mr-3">
            <Icon className={`h-5 w-5 ${isActive ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'}`} />
          </div>
        )}
        <span className="text-sm font-medium">{label}</span>
      </div>
      
      {hasSubmenu && (
        <ChevronRightIcon className={`h-4 w-4 transition-transform duration-200 ${isActive ? 'text-primary-500' : 'text-gray-400'}`} />
      )}
    </button>
  );
}

/**
 * SubMenuItem Component - For nested menu items
 */
export function SubMenuItem({ 
  label, 
  isActive = false, 
  onClick, 
  level = 1,
  className = '',
  ...props 
}) {
  const paddingLeft = level * 1.5; // rem units
  
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center w-full py-2.5 rounded-lg transition-all duration-200
        hover:bg-gray-100 dark:hover:bg-gray-700
        ${isActive 
          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium border-l-2 border-primary-500 dark:border-primary-400' 
          : 'text-gray-600 dark:text-gray-400'
        }
        ${className}
      `}
      style={{ paddingLeft: `${paddingLeft}rem` }}
      {...props}
    >
      <div className="flex items-center">
        <div className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-200 ${
          isActive ? 'bg-primary-500 dark:bg-primary-400 scale-125' : 'bg-gray-400 dark:bg-gray-600'
        }`} />
        <span className="text-sm">{label}</span>
      </div>
    </button>
  );
}

/**
 * MenuItemWithBadge - Menu item with a badge/count
 */
export function MenuItemWithBadge({ 
  label, 
  icon: Icon, 
  badgeCount = 0,
  badgeColor = 'bg-blue-500',
  isActive = false,
  onClick,
  ...props 
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-between w-full p-3 rounded-lg
        transition-all duration-200
        hover:bg-gray-100 dark:hover:bg-gray-700
        ${isActive 
          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 font-semibold border-l-4 border-primary-500 dark:border-primary-400' 
          : 'text-gray-700 dark:text-gray-300'
        }
      `}
      {...props}
    >
      <div className="flex items-center">
        {Icon && (
          <div className="mr-3">
            <Icon className={`h-5 w-5 ${isActive ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'}`} />
          </div>
        )}
        <span className="text-sm font-medium">{label}</span>
      </div>
      
      {badgeCount > 0 && (
        <span className={`
          ${badgeColor} text-white text-xs font-semibold
          px-2 py-1 rounded-full min-w-[1.5rem] text-center shadow-sm
        `}>
          {badgeCount > 99 ? '99+' : badgeCount}
        </span>
      )}
    </button>
  );
}

/**
 * MenuItemDivider - For separating menu sections
 */
export function MenuItemDivider({ label = '' }) {
  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
      </div>
      {label && (
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * MenuItemGroup - For grouping related menu items with a title
 */
export function MenuItemGroup({ title, children, className = '' }) {
  return (
    <div className={className}>
      {title && (
        <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {title}
        </div>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}

export default MenuItem;