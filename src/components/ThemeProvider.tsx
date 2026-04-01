import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/* 
===== THEME PROVIDER =====
Manages light/dark theme state across the entire application.

HOW IT WORKS:
1. Stores theme preference in localStorage
2. Applies 'dark' or 'light' class to document root
3. Provides theme state and toggle function to all components

TO USE IN COMPONENTS:
import { useTheme } from './ThemeProvider';
const { theme, toggleTheme } = useTheme();
*/

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme from localStorage or default to 'dark' (Kali theme)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  // Apply theme class to document root whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to localStorage for persistence
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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

/* 
===== USAGE GUIDE =====

1. WRAP YOUR APP:
   <ThemeProvider>
     <App />
   </ThemeProvider>

2. USE IN COMPONENTS:
   const { theme, toggleTheme } = useTheme();
   
   // Check current theme
   if (theme === 'dark') { ... }
   
   // Toggle theme
   <button onClick={toggleTheme}>Toggle</button>

3. STYLING WITH THEME:
   // In Tailwind classes:
   <div className="bg-white dark:bg-black">
   
   // The 'dark:' prefix applies styles only in dark mode
*/
