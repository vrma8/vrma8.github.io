import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Volume2, VolumeX } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: string | React.ReactNode;
  time: string;
}

const COMMANDS = [
  'help',
  'about',
  'skills',
  'projects',
  'certifications',
  'contact',
  'resume',
  'whoami',
  'clear',
  'audio',
  'sudo',
  'exit'
];

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-neutral-400">
          <p className="text-black dark:text-white font-bold">
            VRMA8 Interactive Shell [v2.4.0-release]
          </p>
          <p>Type <span className="text-black dark:text-white font-semibold underline">help</span> to view available commands or press <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-xs font-mono text-black dark:text-white">TAB</kbd> for autocompletion.</p>
        </div>
      ),
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundFX.enabled);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      soundFX.playBeep();
    }
  }, [isOpen]);

  // Scroll to bottom on new output
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Keyboard shortcut listener for ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSound = () => {
    const state = soundFX.toggle();
    setSoundEnabled(state);
  };

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    const parts = trimmed.split(' ');
    const primary = parts[0].toLowerCase();
    const time = new Date().toLocaleTimeString();

    if (!trimmed) {
      setHistory(prev => [...prev, { command: '', output: '', time }]);
      return;
    }

    setCommandList(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    let output: string | React.ReactNode = '';

    switch (primary) {
      case 'help':
        output = (
          <div className="space-y-2 py-1 text-neutral-300">
            <p className="font-semibold text-black dark:text-white">Supported commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs">
              <div><span className="text-black dark:text-white font-bold">about</span> - Background & education summary</div>
              <div><span className="text-black dark:text-white font-bold">skills</span> - Technical & security competencies</div>
              <div><span className="text-black dark:text-white font-bold">projects</span> - Engineering projects & repos</div>
              <div><span className="text-black dark:text-white font-bold">certifications</span> - Verified cybersecurity & dev certs</div>
              <div><span className="text-black dark:text-white font-bold">contact</span> - Email, socials & communication</div>
              <div><span className="text-black dark:text-white font-bold">resume</span> - Open verified PDF resume</div>
              <div><span className="text-black dark:text-white font-bold">whoami</span> - Inspect active session identity</div>
              <div><span className="text-black dark:text-white font-bold">audio</span> - Toggle browser sound synthesizer</div>
              <div><span className="text-black dark:text-white font-bold">clear</span> - Flush terminal buffer</div>
              <div><span className="text-black dark:text-white font-bold">exit</span> - Close terminal shell</div>
            </div>
          </div>
        );
        soundFX.playSuccess();
        break;

      case 'about':
        output = (
          <div className="space-y-1.5 text-neutral-300 py-1">
            <p className="font-semibold text-black dark:text-white">Ravi Kumar Verma</p>
            <p>B.Tech Computer Science & Engineering (2024–2028)</p>
            <p className="text-neutral-400">National Institute of Technology, Hamirpur (H.P.), India</p>
            <p className="text-xs pt-1 text-neutral-400">Focus: Systems architecture, low-level programming, web engineering, and offensive/defensive cybersecurity.</p>
          </div>
        );
        soundFX.playSuccess();
        break;

      case 'skills':
        output = (
          <div className="space-y-2 py-1">
            <p className="font-semibold text-black dark:text-white">Technical Arsenal:</p>
            <div className="text-xs space-y-1 text-neutral-300">
              <p><span className="text-neutral-400 font-mono">[Core Languages]:</span> C, C++, Python, TypeScript, JavaScript, SQL, HTML5, CSS3</p>
              <p><span className="text-neutral-400 font-mono">[Web Systems]:</span> React 19, Next.js, Node.js, Express.js, Tailwind CSS, REST APIs</p>
              <p><span className="text-neutral-400 font-mono">[Security & Cyber]:</span> Cryptography, Network Auditing, Wireshark, Burp Suite, Nmap, GDB</p>
              <p><span className="text-neutral-400 font-mono">[DevOps & Cloud]:</span> Docker, Git/GitHub, Linux (Arch/Debian), Bash, AWS</p>
            </div>
          </div>
        );
        soundFX.playSuccess();
        break;

      case 'projects':
        output = (
          <div className="space-y-2 py-1">
            <p className="font-semibold text-black dark:text-white">Engineering Highlights:</p>
            <div className="space-y-2 text-xs">
              <div className="p-2 border border-neutral-700 rounded bg-neutral-900/60">
                <p className="font-bold text-white">01. NexaVoice - AI Multi-Model Audio Synthesis & Intelligence</p>
                <p className="text-neutral-400">Next.js 14, Web Audio API, Gemini Flash, Whisper, Supabase</p>
                <a href="#projects" onClick={onClose} className="text-neutral-300 hover:text-white underline mt-1 inline-block">
                  &gt; Jump to project card
                </a>
              </div>
              <div className="p-2 border border-neutral-700 rounded bg-neutral-900/60">
                <p className="font-bold text-white">02. vrma8.github.io - High-Performance Monochromatic Cyber Portfolio</p>
                <p className="text-neutral-400">React 19, TypeScript, Tailwind CSS v4, Motion, Web Audio</p>
                <a href="https://github.com/vrma8/vrma8.github.io" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white underline mt-1 inline-block">
                  &gt; View on GitHub
                </a>
              </div>
            </div>
          </div>
        );
        soundFX.playSuccess();
        break;

      case 'certifications':
        output = (
          <div className="space-y-1.5 py-1 text-xs text-neutral-300">
            <p className="font-semibold text-black dark:text-white text-sm">Verified Credentials:</p>
            <p>• <span className="font-semibold text-white">Web Development Fundamentals</span> — IBM SkillsBuild</p>
            <p>• <span className="font-semibold text-white">Foundations of Cybersecurity</span> — Google (Coursera)</p>
            <p>• <span className="font-semibold text-white">Play It Safe: Manage Security Risks</span> — Google (Coursera)</p>
            <p>• <span className="font-semibold text-white">Connect & Protect: Networks & Network Security</span> — Google</p>
            <p>• <span className="font-semibold text-white">Linux & SQL Tools</span> — Google (Coursera)</p>
            <p>• <span className="font-semibold text-white">Introduction to Programming with Python</span> — CS50x Harvard</p>
          </div>
        );
        soundFX.playSuccess();
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-neutral-300 py-1">
            <p className="font-semibold text-white">Direct Communication Channels:</p>
            <p>• Email: <span className="font-mono text-white selection:bg-white selection:text-black">24BCS096@nith.ac.in</span></p>
            <p>• GitHub: <a href="https://github.com/vrma8" target="_blank" rel="noreferrer" className="underline text-neutral-200">github.com/vrma8</a></p>
            <p>• LinkedIn: <a href="https://linkedin.com/in/ravi-kumar-verma-nith" target="_blank" rel="noreferrer" className="underline text-neutral-200">linkedin.com/in/ravi-kumar-verma-nith</a></p>
          </div>
        );
        soundFX.playSuccess();
        break;

      case 'resume':
        window.open('https://drive.google.com/file/d/161wlf8BaM5RQtFC7poYAP5e1PK1ScwcX/view?usp=sharing', '_blank');
        output = <p className="text-emerald-400 text-xs">Opening resume document in a new window...</p>;
        soundFX.playSuccess();
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-xs text-neutral-300 py-1 font-mono">
            <p>USER: guest_visitor</p>
            <p>ROLE: Authenticated Evaluator</p>
            <p>PERMISSIONS: Read-Only (Sandbox)</p>
            <p>AGENT: {navigator.userAgent.slice(0, 50)}...</p>
          </div>
        );
        soundFX.playSuccess();
        break;

      case 'audio':
        const nextState = soundFX.toggle();
        setSoundEnabled(nextState);
        output = <p className="text-xs text-neutral-300">Synthesizer Sound FX: <span className={nextState ? "text-emerald-400 font-bold" : "text-neutral-400"}>{nextState ? "ENABLED" : "MUTED"}</span></p>;
        break;

      case 'sudo':
        output = (
          <p className="text-red-400 text-xs font-mono">
            [SECURITY ALERT] User is not in the sudoers file. This incident has been logged and reported to root@ravi.
          </p>
        );
        soundFX.playError();
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      default:
        output = (
          <p className="text-xs text-neutral-400">
            command not found: <span className="text-red-400">{cmd}</span>. Type <span className="text-white font-bold">help</span> to view available commands.
          </p>
        );
        soundFX.playError();
        break;
    }

    setHistory(prev => [...prev, { command: cmd, output, time }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    soundFX.playKeypress();

    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandList[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandList.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandList[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = COMMANDS.find(c => c.startsWith(input.toLowerCase().trim()));
      if (match) {
        setInput(match);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className={`w-full ${
            isMaximized ? 'h-[92vh] max-w-7xl' : 'max-w-3xl h-[560px]'
          } bg-black border border-neutral-800 rounded-xl shadow-2xl flex flex-col overflow-hidden text-neutral-200 font-mono`}
        >
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 inline-block" onClick={onClose} title="Close (Esc)" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer hover:bg-yellow-500 inline-block" onClick={() => setHistory([])} title="Clear Screen" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer hover:bg-emerald-500 inline-block" onClick={() => setIsMaximized(!isMaximized)} title="Maximize" />
              <div className="flex items-center gap-2 ml-3 text-xs text-neutral-400">
                <TerminalIcon className="w-3.5 h-3.5 text-neutral-300" />
                <span>guest@vrma8-portfolio:~ (interactive bash)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Audio Toggle */}
              <button
                onClick={toggleSound}
                className="text-neutral-400 hover:text-white text-xs flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer"
                title="Toggle Web Audio SFX"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3 h-3 text-emerald-400" />
                    <span className="hidden sm:inline text-[11px]">SFX: ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3 h-3 text-neutral-500" />
                    <span className="hidden sm:inline text-[11px]">SFX: OFF</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800 transition-colors"
                title={isMaximized ? "Restore" : "Maximize"}
              >
                {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div 
            className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs sm:text-sm bg-black/95 leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command && (
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="text-emerald-400">guest@vrma8:~$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                    <span className="text-[10px] text-neutral-600 ml-auto">{item.time}</span>
                  </div>
                )}
                {item.output && (
                  <div className="pl-3 border-l border-neutral-800">
                    {item.output}
                  </div>
                )}
              </div>
            ))}
            <div ref={terminalBottomRef} />
          </div>

          {/* Interactive Shell Input Line */}
          <div className="px-4 py-3 bg-neutral-950 border-t border-neutral-800 flex items-center gap-2">
            <span className="text-emerald-400 text-xs sm:text-sm font-bold shrink-0">
              guest@vrma8:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or tab to complete..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder:text-neutral-600"
              autoFocus
            />
            <button
              onClick={() => {
                executeCommand(input);
                setInput('');
              }}
              className="text-neutral-400 hover:text-white p-1.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors cursor-pointer"
              title="Execute"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
