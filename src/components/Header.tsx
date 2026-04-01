import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

/* 
===== HEADER COMPONENT =====
Top navigation bar with:
- Logo/brand
- Desktop navigation menu
- Mobile hamburger menu
- Theme toggle button (light/dark mode)

TO EDIT NAVIGATION:
- Find navItems array below
- Add/remove/edit menu items
*/

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Get theme state and toggle function

  // ===== NAVIGATION MENU ITEMS =====
  // TO ADD NEW PAGE: Add object with label and href
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 border-b border-gray-300 dark:border-cyan-500/30 shadow-lg shadow-gray-300/10 dark:shadow-cyan-500/10"
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ===== LOGO/BRAND ===== */}
          <motion.a 
            href="#" 
            className="flex items-center gap-2 text-2xl font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Terminal className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent font-bold">
              root@ravi
            </span>
            <span className="text-blue-600 dark:text-cyan-400">:~$</span>
          </motion.a>
          
          {/* ===== DESKTOP NAVIGATION ===== */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation Links */}
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    className="text-gray-700 dark:text-cyan-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors font-mono relative group"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-green-400 group-hover:w-full transition-all duration-300"
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>

            {/* ===== THEME TOGGLE BUTTON (Desktop) ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative text-gray-700 dark:text-cyan-300 hover:text-blue-600 dark:hover:text-green-400 hover:bg-blue-100 dark:hover:bg-cyan-500/10 border border-gray-300 dark:border-cyan-500/30"
                aria-label="Toggle theme"
              >
                {/* Sun icon for light mode, Moon icon for dark mode */}
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </motion.div>
          </div>

          {/* ===== MOBILE MENU BUTTONS (Theme + Hamburger) ===== */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle (Mobile) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-cyan-300 hover:text-blue-600 dark:hover:text-green-400 hover:bg-blue-100 dark:hover:bg-cyan-500/10"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-cyan-300 hover:text-blue-600 dark:hover:text-green-400 hover:bg-blue-100 dark:hover:bg-cyan-500/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* ===== MOBILE NAVIGATION MENU ===== */}
        {isMenuOpen && (
          <motion.ul 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="block text-gray-700 dark:text-cyan-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors font-mono hover:pl-2 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-purple-600 dark:text-green-400">&gt;</span> {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
}

/* 
===== THEME TOGGLE GUIDE =====

HOW IT WORKS:
1. useTheme() hook provides current theme ('light' or 'dark')
2. Sun icon shown in light mode, Moon icon shown in dark mode
3. Icons swap with smooth rotation animation
4. Click toggles between light and dark

CUSTOMIZE TOGGLE BUTTON:
- Icon size: Change h-5 w-5 to h-6 w-6 for larger
- Colors: Modify text-cyan-300, hover:text-green-400
- Border: border border-cyan-500/30
- Position: Currently in top right, move by changing order in flex

THEME CLASSES:
- dark:text-cyan-300 = cyan text ONLY in dark mode
- text-gray-700 = gray text in light mode (default)
- Always write: lightMode dark:darkMode

ANIMATION:
- Sun: rotate-0 in light, rotate-90 in dark (hidden)
- Moon: rotate-90 in light (hidden), rotate-0 in dark
- scale-100 = visible, scale-0 = hidden
*/