import React, { useState, useRef } from 'react';
import { 
  MagnifyingGlassIcon,
  XMarkIcon,
  ClockIcon,
  TrashIcon,
  CommandLineIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  SwatchIcon,
  DocumentTextIcon,
  CubeIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  EyeIcon,
  PaintBrushIcon,
  ArrowsRightLeftIcon, // Alternative for spacing
  Squares2X2Icon, // Alternative for layout
} from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Import menu components and configuration
import { MenuItem, SubMenuItem, MenuItemDivider, MenuItemWithBadge } from './MenuItem';
import { menuItems, quickAccessItems, bottomItems } from './menuConfig';

export function Sidebar({ activeSection, setActiveSection }) {
  const [openMenu, setOpenMenu] = useState(0);
  const [search, setSearch] = useState('');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(-1);
  
  const searchInputRef = useRef(null);
  
  // Simple debounce function
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    
    React.useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    
    return debouncedValue;
  };
  
  const debouncedSearch = useDebounce(search, 300);
  
  const handleSearchChange = (value) => {
    setSearch(value);
    if (value.trim() && !history.includes(value)) {
      setHistory(prev => [value, ...prev.slice(0, 9)]);
    }
  };
  
  const clearSearch = () => {
    setSearch('');
    setIsHistoryOpen(false);
  };
  
  const removeFromHistory = (item) => {
    setHistory(prev => prev.filter(h => h !== item));
  };
  
  const clearHistory = () => {
    setHistory([]);
  };
  
  const selectHistoryItem = (item) => {
    setSearch(item);
    setIsHistoryOpen(false);
    searchInputRef.current?.focus();
  };
  
  // Use menuItems from config instead of defining locally
  const navigationItems = menuItems.map(item => ({
    ...item,
    subsections: item.subsections.map(sub => ({
      name: sub.name,
      section: sub.section || `${item.name}-${sub.name.replace(' ', '')}`
    }))
  }));
  
  // Filter menu items based on search
  const filteredItems = navigationItems.filter(item => 
    debouncedSearch === '' || 
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    item.subsections.some(sub => 
      sub.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      (sub.section && sub.section.toLowerCase().includes(debouncedSearch.toLowerCase()))
    )
  );
  
  // Helper function to get all subsections for search results count
  const getAllSubsections = () => {
    return filteredItems.flatMap(item => item.subsections);
  };
  
  // Helper to find icon component by name
  const getIconComponent = (iconName) => {
    const iconMap = {
      SwatchIcon,
      DocumentTextIcon,
      CubeIcon,
      HomeIcon,
      DocumentDuplicateIcon,
      Cog6ToothIcon,
      ChartBarIcon,
      EyeIcon,
      PaintBrushIcon,
      ArrowsRightLeftIcon,
      Squares2X2Icon,
    };
    
    // If icon is a string, get from map, otherwise it's already a component
    if (typeof iconName === 'string') {
      return iconMap[iconName] || CubeIcon; // Fallback icon
    }
    return iconName;
  };
  
  return (
    <div className="h-screen w-72 p-4 shadow-xl rounded-none bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      {/* Header with Search */}
      <div className="mb-6 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Design System
          </h2>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <CommandLineIcon className="h-4 w-4 mr-1" />
            <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
              ⌘K
            </kbd>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search components..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => setIsHistoryOpen(true)}
              className="pl-10 pr-10 py-2 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {search && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r"
                aria-label="Clear search"
              >
                <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </button>
            )}
          </div>
          
          {/* Search History Dropdown */}
          {isHistoryOpen && history.length > 0 && (
            <div className="absolute w-64 z-50 p-0 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 mt-1">
              <div className="flex justify-between items-center p-3 border-b dark:border-gray-700">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  Recent Searches
                </div>
                <button
                  onClick={clearHistory}
                  className="text-xs text-red-500 hover:text-red-600 dark:text-red-400 p-0"
                >
                  Clear All
                </button>
              </div>
              
              <div className="max-h-60 overflow-y-auto">
                {history.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                      selectedHistoryIndex === index ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } ${index < history.length - 1 ? 'border-b dark:border-gray-700' : ''}`}
                    onClick={() => selectHistoryItem(item)}
                    onMouseEnter={() => setSelectedHistoryIndex(index)}
                  >
                    <div className="flex items-center">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromHistory(item);
                      }}
                      className="text-gray-400 hover:text-red-500 p-1 rounded"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Search Status */}
        {debouncedSearch && (
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Found {getAllSubsections().length} item{getAllSubsections().length !== 1 ? 's' : ''} 
              {getAllSubsections().length > 0 ? ` matching "${debouncedSearch}"` : ' matching your search'}
            </p>
          </div>
        )}
      </div>
      
      {/* Main Navigation */}
      <div className="overflow-y-auto h-[calc(100vh-14rem)]">
        {/* Quick Access Items */}
        {quickAccessItems && quickAccessItems.length > 0 && (
          <div className="mb-4">
            {quickAccessItems.map((item) => (
              <MenuItem
                key={item.id}
                label={item.name}
                icon={getIconComponent(item.icon)}
                isActive={activeSection === item.section}
                onClick={() => setActiveSection(item.section)}
              />
            ))}
          </div>
        )}
        
        <MenuItemDivider label="Categories" />
        
        {/* Filtered Navigation Items */}
        {filteredItems.length === 0 && debouncedSearch ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              No items found for "{debouncedSearch}"
            </p>
            {history.length > 0 && (
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Try one of your recent searches
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-1">
            {filteredItems.map((item) => (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => setOpenMenu(openMenu === item.id ? 0 : item.id)}
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center">
                    {React.createElement(getIconComponent(item.icon), { 
                      className: "h-5 w-5 mr-3" 
                    })}
                    <span className="font-normal">{item.name}</span>
                  </div>
                  <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                    openMenu === item.id ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openMenu === item.id && (
                  <div className="pl-8 space-y-1">
                    {item.subsections.map((sub) => (
                      <SubMenuItem
                        key={sub.section}
                        label={sub.name}
                        isActive={activeSection === sub.section}
                        onClick={() => setActiveSection(sub.section)}
                        level={1}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <MenuItemDivider />
            
            {/* Bottom Items */}
            {bottomItems && bottomItems.map((item) => (
              item.externalLink ? (
                <a
                  key={item.id}
                  href={item.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <MenuItemWithBadge
                    label={item.name}
                    icon={getIconComponent(item.icon)}
                    badgeCount={item.badgeCount}
                    badgeColor={item.badgeColor}
                    isActive={false}
                  />
                </a>
              ) : (
                <MenuItemWithBadge
                  key={item.id}
                  label={item.name}
                  icon={getIconComponent(item.icon)}
                  badgeCount={item.badgeCount}
                  badgeColor={item.badgeColor}
                  isActive={activeSection === item.section}
                  onClick={() => setActiveSection(item.section)}
                />
              )
            ))}
          </div>
        )}
      </div>
      
      {/* Footer with Stats */}
      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 p-2">
          <div>
            <p>{getAllSubsections().length} total items</p>
            <p className="mt-1">{history.length} recent searches</p>
          </div>
          <div className="text-right">
            <p className="flex items-center justify-end mb-1">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <ArrowDownIcon className="h-3 w-3 mr-2" />
              Navigate
            </p>
            <p>Press ⌘K to search</p>
          </div>
        </div>
      </div>
    </div>
  );
}