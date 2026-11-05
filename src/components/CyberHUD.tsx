import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Volume2, VolumeX } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface CyberHUDProps {
  onOpenTerminal: () => void;
}

export function CyberHUD({ onOpenTerminal }: CyberHUDProps) {
  const [soundEnabled, setSoundEnabled] = useState(soundFX.enabled);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleSound = () => {
    const active = soundFX.toggle();
    setSoundEnabled(active);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2">
      <motion.button
        onClick={onOpenTerminal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/90 dark:bg-neutral-900/90 text-white border border-neutral-700 text-xs font-mono backdrop-blur-md shadow-lg hover:border-neutral-400 transition-all cursor-pointer group"
        title="Open Interactive Cyber Terminal (Ctrl+K)"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <Terminal className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white" />
        <span className="font-medium">CLI [Ctrl+K]</span>
      </motion.button>

      <motion.button
        onClick={handleToggleSound}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/90 dark:bg-neutral-900/90 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-mono backdrop-blur-md shadow-lg hover:border-neutral-400 transition-all cursor-pointer"
        title="Toggle Web Audio Synthesizer SFX"
      >
        {soundEnabled ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px]">SFX</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
            <span className="text-[11px] text-neutral-500">SFX</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
