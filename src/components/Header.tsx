import { Menu, X, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { motion } from 'motion/react';



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


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
      className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 border-b border-neutral-200 dark:border-neutral-800 shadow-sm"
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
            <Terminal className="w-6 h-6 text-black dark:text-white" />
            <span className="text-black dark:text-white font-bold tracking-tight">
              root@ravi
            </span>
            <span className="text-neutral-500 dark:text-neutral-400">:~$</span>
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
                    className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-mono relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300"
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>

          </div>

          {/* ===== MOBILE MENU BUTTONS (Hamburger) ===== */}
          <div className="md:hidden flex items-center gap-2">
            {/* Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
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
                  className="block text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all font-mono hover:pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-neutral-500 dark:text-neutral-400">&gt;</span> {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
}

