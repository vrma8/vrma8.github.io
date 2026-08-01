import { createContext, useContext, useEffect, ReactNode } from 'react';



type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Component — dark mode only
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme: Theme = 'dark';

  // Always apply dark class on mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('portfolio-theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
