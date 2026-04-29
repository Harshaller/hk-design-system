import { useState, useEffect } from 'react';

export function useSearchHistory(initialHistory = [], maxItems = 5) {
  const [history, setHistory] = useState(() => {
    // Load from localStorage on initial render
    const saved = localStorage.getItem('design-system-search-history');
    return saved ? JSON.parse(saved) : initialHistory;
  });

  // Save to localStorage whenever history changes
  useEffect(() => {
    localStorage.setItem('design-system-search-history', JSON.stringify(history));
  }, [history]);

  const addToHistory = (searchTerm) => {
    if (!searchTerm.trim() || history.includes(searchTerm)) return;
    
    setHistory(prev => {
      const newHistory = [searchTerm, ...prev.filter(item => item !== searchTerm)];
      return newHistory.slice(0, maxItems); // Keep only latest N items
    });
  };

  const removeFromHistory = (searchTerm) => {
    setHistory(prev => prev.filter(item => item !== searchTerm));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory
  };
}