// components/DesignSystem/ThemeToggle.jsx
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="flex items-center space-x-2">
      <SunIcon className="h-5 w-5 text-gray-600 dark:text-yellow-300" />
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className={`${
          theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
      >
        <span className="sr-only">Toggle theme</span>
        <span className={`${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
      </Switch>
      <MoonIcon className="h-5 w-5 text-gray-400 dark:text-blue-300" />
    </div>
  );
}