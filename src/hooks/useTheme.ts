import { useEffect } from 'react';

export function useTheme() {
  // Always apply dark theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    // Optionally, store 'dark' in localStorage to indicate the theme (if needed)
    localStorage.setItem('theme', 'dark');
  }, []);

  // No toggle function needed since only dark theme is enforced
  return { theme: 'dark' };
}