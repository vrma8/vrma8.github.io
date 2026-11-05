import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MatrixRain } from './components/MatrixRain';
import { ThemeProvider } from './components/ThemeProvider';
import { TerminalModal } from './components/TerminalModal';
import { CyberHUD } from './components/CyberHUD';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Global shortcut Ctrl+K or Cmd+K to toggle the interactive shell
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
        <MatrixRain />
        <div className="relative z-10">
          <Header onOpenTerminal={() => setIsTerminalOpen(true)} />
          <main>
            <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
            <About />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
        
        {/* Floating cyber HUD with CLI launcher & sound synthesizer */}
        <CyberHUD onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* Full-featured Interactive Cyber CLI Shell */}
        <TerminalModal 
          isOpen={isTerminalOpen} 
          onClose={() => setIsTerminalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}
