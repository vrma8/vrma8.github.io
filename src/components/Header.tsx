import { Menu, X, Terminal, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { motion } from 'motion/react';
import { soundFX } from '../utils/audio';

interface HeaderProps {
  onOpenTerminal?: () => void;
}

export function Header({ onOpenTerminal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundFX.enabled);

  const toggleSound = () => {
    const active = soundFX.toggle();
    setSoundEnabled(active);
  };

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
      <nav className="max-w-6xl mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          {/* ===== LOGO/BRAND ===== */}
          <motion.a 
            href="#" 
            className="flex items-center gap-2 text-xl sm:text-2xl font-mono cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => soundFX.playBeep()}
          >
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white" />
            <span className="text-black dark:text-white font-bold tracking-tight">
              root@ravi
            </span>
            <span className="text-neutral-500 dark:text-neutral-400">:~$</span>
          </motion.a>
          
          {/* ===== DESKTOP NAVIGATION ===== */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation Links */}
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <motion.a
                    href={item.href}
                    onClick={() => soundFX.playKeypress()}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-mono text-sm relative group"
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

            <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-800" />

            {/* Interactive Terminal Trigger */}
            {onOpenTerminal && (
              <motion.button
                onClick={onOpenTerminal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-400 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-neutral-800 dark:text-neutral-200 transition-all cursor-pointer"
                title="Launch Interactive Terminal (Ctrl+K)"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-semibold">CLI</span>
                <kbd className="px-1 py-0.2 rounded bg-neutral-200 dark:bg-neutral-800 text-[10px] text-neutral-500 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">
                  Ctrl+K
                </kbd>
              </motion.button>
            )}

            {/* Sound FX Toggle */}
            <motion.button
              onClick={toggleSound}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="p-1.5 rounded-md border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-400 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
              title={soundEnabled ? "Disable Synthesizer SFX" : "Enable Synthesizer SFX"}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-400" />
              )}
            </motion.button>
          </div>

          {/* ===== MOBILE MENU BUTTONS (Hamburger) ===== */}
          <div className="md:hidden flex items-center gap-2">
            {onOpenTerminal && (
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenTerminal}
                className="text-xs font-mono border-neutral-300 dark:border-neutral-800 flex items-center gap-1.5 px-2 py-1 h-8"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                <span>CLI</span>
              </Button>
            )}

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
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-3 pb-4 border-t border-neutral-200 dark:border-neutral-800 pt-3"
          >
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    className="block text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all font-mono hover:pl-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-neutral-500 dark:text-neutral-400">&gt;</span> {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono">
              <span className="text-neutral-500">Audio Synthesizer:</span>
              <button
                onClick={toggleSound}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3 h-3 text-emerald-500" />
                    <span>ENABLED</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3 h-3 text-neutral-500" />
                    <span>MUTED</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
