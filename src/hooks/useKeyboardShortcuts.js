import { useEffect, useCallback } from 'react';

export function useKeyboardShortcuts() {
  const registerShortcut = useCallback((key, callback, options = {}) => {
    const { ctrlKey = false, metaKey = false, shiftKey = false } = options;
    
    const handler = (e) => {
      if (
        e.key === key &&
        e.ctrlKey === ctrlKey &&
        e.metaKey === metaKey &&
        e.shiftKey === shiftKey
      ) {
        e.preventDefault();
        callback();
      }
    };
    
    return handler;
  }, []);

  const useShortcut = (key, callback, options = {}, dependencies = []) => {
    useEffect(() => {
      const handler = registerShortcut(key, callback, options);
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }, [callback, key, options, ...dependencies]);
  };

  return { useShortcut, registerShortcut };
}