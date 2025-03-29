import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    console.log('Before update - Theme:', theme, 'classList:', root.classList.toString());

    // Apply the class based on the theme
    if (theme === 'dark') {
      console.log('Adding dark class');
      root.classList.add('dark');
    } else {
      console.log('Removing dark class');
      root.classList.remove('dark');
    }

    // Log after the update to confirm
    console.log('After update - Theme:', theme, 'classList:', root.classList.toString());
  }, [theme]);

  const toggleTheme = () => {
    console.log('Toggling from:', theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}