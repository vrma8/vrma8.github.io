import { Github, Linkedin, Mail, Terminal, Code2, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import profileIMG from "../assets/ravi.jpg";
import { BinaryRain } from "./BinaryRain";

interface HeroProps {
  onOpenTerminal?: () => void;
}

// Interactive Brute Force / Cyber Scramble Text Component
function InteractiveCyberText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/~=";

  const triggerScramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }

      iteration += 1 / 2;
    }, 30);
  }, [text, isScrambling, characters]);

  // Initial trigger on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerScramble();
    }, 400);
    return () => clearTimeout(timer);
  }, []); // Run once on mount

  return (
    <span
      onMouseEnter={triggerScramble}
      onClick={triggerScramble}
      className="inline-block cursor-pointer select-none group"
      title="Click or hover to decrypt"
    >
      <span className="text-black dark:text-white font-bold font-mono tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
        {displayText}
      </span>
      {isScrambling && (
        <span className="inline-block w-1.5 h-8 bg-black dark:bg-white ml-1.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

export function Hero({ onOpenTerminal }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  // 3D Tilt State for Profile Card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ambientParticles = useMemo(() => 
    [...Array(20)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 5
    })), []
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -(y * 24), y: x * 24 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Calculate transform values based on scroll position
  const translateY = -scrollY * 0.4;
  const opacity = Math.max(0, 1 - scrollY / 700);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden bg-white dark:bg-black">
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-400/5 dark:bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-400/5 dark:bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neutral-400/5 dark:bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && ambientParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neutral-400 dark:bg-neutral-300 rounded-full"
            initial={{ 
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              scale: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Main Container - 2 Column Split Layout */}
      <motion.div 
        className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        style={{ translateY, opacity }}
      >
        {/* LEFT COLUMN: Name, College, Details, CTAs, Socials */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style greeting badge */}
          <motion.button
            onClick={onOpenTerminal}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100/90 dark:bg-neutral-900/90 font-mono text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 shadow-sm cursor-pointer hover:border-black dark:hover:border-neutral-500 transition-all"
            title="Click to open interactive terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-black dark:text-white" />
            <span className="text-neutral-400 dark:text-neutral-500">root@vrma8:~$</span>
            <span className="text-black dark:text-white font-medium">whoami</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">interactive</span>
          </motion.button>

          {/* Name with Interactive Cyber Scramble Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-black dark:text-white leading-tight">
              {mounted && <InteractiveCyberText text="Ravi Kumar Verma" />}
            </h1>
          </motion.div>

          {/* Role & College details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2.5 font-mono"
          >
            <div className="flex items-center gap-2.5 text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-medium">
              <Code2 className="w-5 h-5 text-neutral-500 dark:text-neutral-400 shrink-0" />
              <span>B.Tech in Computer Science & Engineering</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 flex-wrap">
              <GraduationCap className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0" />
              <span>National Institute of Technology, Hamirpur</span>
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span className="text-xs sm:text-sm px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                2024–2028
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-neutral-400 dark:text-neutral-500 font-bold">&gt;&gt; </span>
            Passionate about creating innovative solutions through code. Specializing in{" "}
            <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">Software Development</span> and{" "}
            <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">Cybersecurity</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex items-center gap-3.5 flex-wrap pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 border border-black dark:border-white font-mono shadow-md transition-all cursor-pointer"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-neutral-400 font-mono shadow-sm transition-all cursor-pointer"
              asChild
            >
              <a href="https://drive.google.com/file/d/161wlf8BaM5RQtFC7poYAP5e1PK1ScwcX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Terminal className="w-4 h-4" />
                Resume
              </a>
            </Button>

            {onOpenTerminal && (
              <Button
                size="lg"
                variant="outline"
                onClick={onOpenTerminal}
                className="gap-2 border-neutral-300 dark:border-neutral-700 bg-neutral-100/80 dark:bg-neutral-900 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:border-black dark:hover:border-neutral-500 font-mono shadow-sm transition-all cursor-pointer group"
                title="Launch Interactive Shell (Ctrl+K)"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Terminal className="w-4 h-4 text-black dark:text-white group-hover:rotate-6 transition-transform" />
                <span>CLI Terminal</span>
                <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">Ctrl+K</span>
              </Button>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="https://github.com/vrma8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-all group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/ravi-kumar-verma-nith"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-all group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
            </motion.a>

            <motion.a
              href="#contact"
              aria-label="Email"
              className="p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-all group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
            </motion.a>

            <span className="text-neutral-400 dark:text-neutral-600 text-xs font-mono ml-2">
              // connect with me
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive 3D Tilt Profile Photo & Cyber Hub */}
        <motion.div 
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div 
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group cursor-pointer select-none perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Outer container with 3D tilt transformation */}
            <motion.div
              className="w-full h-full relative"
              animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                scale: isHovered ? 1.03 : 1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Outer dashed spinning ring */}
              <motion.div 
                className="absolute -inset-4 rounded-full border border-dashed border-neutral-300 dark:border-neutral-700"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Orbiting ring 1 */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-neutral-300 dark:border-neutral-700"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-black dark:bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm" />
              </motion.div>

              {/* Orbiting ring 2 (counter-rotating) */}
              <motion.div 
                className="absolute inset-3 rounded-full border-2 border-neutral-200 dark:border-neutral-800"
                animate={{ rotate: -360 }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 right-0 w-2.5 h-2.5 bg-neutral-500 dark:bg-neutral-400 rounded-full translate-x-1/2 -translate-y-1/2" />
              </motion.div>

              {/* Inner ring */}
              <motion.div 
                className="absolute inset-6 rounded-full border border-neutral-300/60 dark:border-neutral-800"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing ambient glow */}
              <motion.div 
                className="absolute inset-6 rounded-full bg-neutral-200/50 dark:bg-white/5 blur-2xl pointer-events-none"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Profile image with clean border */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-2xl shadow-black/15 dark:shadow-white/5 group-hover:border-neutral-400 dark:group-hover:border-neutral-700 transition-all">
                <img 
                  src={profileIMG}
                  alt="Ravi Kumar Verma"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Dynamic 3D glare overlay */}
                {isHovered && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                    style={{
                      transform: `translate(${tilt.y * 2}px, ${-tilt.x * 2}px)`
                    }}
                  />
                )}
              </div>

              {/* Pill badge on bottom */}
              <motion.div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black px-3.5 py-1 rounded-full text-xs font-mono font-medium border border-neutral-800 dark:border-neutral-200 shadow-lg flex items-center gap-1.5 whitespace-nowrap select-none"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>NIT Hamirpur CSE</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
    </section>
  );
}
