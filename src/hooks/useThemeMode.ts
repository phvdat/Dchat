import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
const useThemeMode = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('color-theme') as Theme) || 'light'
  );

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [theme]);

  return { theme, setTheme };
};

export default useThemeMode;
