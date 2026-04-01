import { Github, Linkedin, Mail, Terminal, Code2, Lock, Shield, Cpu } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import profileIMG from "figma:asset/3f0e77e7260dabab7c129f611fcb946f6cca22e9.png";

// Brute force text animation component
function BruteForceText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [revealedIndex, setRevealedIndex] = useState(0);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

  useEffect(() => {
    // Start the reveal process
    const revealInterval = setInterval(() => {
      setRevealedIndex((prev: number) => {
        if (prev >= text.length) {
          clearInterval(revealInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 80); // Speed of revealing each letter

    return () => clearInterval(revealInterval);
  }, [text.length]);

  useEffect(() => {
    if (revealedIndex >= text.length) return;

    // Brute force animation for non-revealed characters
    const bruteForceInterval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < revealedIndex) {
              // Already revealed, show the actual character
              return char;
            } else if (char === " ") {
              // Keep spaces as spaces
              return " ";
            } else {
              // Show random character for non-revealed positions
              return characters[Math.floor(Math.random() * characters.length)];
            }
          })
          .join("")
      );
    }, 60); // Speed of character randomization

    return () => clearInterval(bruteForceInterval);
  }, [revealedIndex, text]);

  // Set final text when complete
  useEffect(() => {
    if (revealedIndex >= text.length) {
      setDisplayText(text);
    }
  }, [revealedIndex, text]);

  return (
    <span className="inline-block min-h-[1em]">
      {displayText || text.split("").map(() => " ").join("")}
      {revealedIndex < text.length && (
        <span className="inline-block w-0.5 h-[1em] bg-green-400 ml-1 animate-pulse" />
      )}
    </span>
  );
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const codeSnippets = useMemo(() => 
    ["sudo", "chmod", "nmap", "ssh", "root@", "apt", "systemctl", "mkdir", "touch", "rmdir", "rm -rf", "netstat"]
      .map((text, i) => ({
        text,
        x: Math.random() * 100,
        duration: 10 + Math.random() * 10,
        delay: i * 2
      })), []
  );

  const ambientParticles = useMemo(() => 
    [...Array(20)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 5
    })), []
  );

  // Calculate transform values based on scroll position
  const translateY = -scrollY * 0.5; // Parallax effect
  const opacity = Math.max(0, 1 - scrollY / 600); // Fade out

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-white dark:bg-black">
      {/* Animated hexagonal grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 dark:opacity-10 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M25 0l12.5 7.2v14.3L25 28.9 12.5 21.7V7.4z" fill="none" className="stroke-cyan-400/30 dark:stroke-cyan-400/30 stroke-blue-400/40" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-40">
        {mounted && codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-blue-500 dark:text-cyan-400"
            initial={{ 
              left: `${snippet.x}%`, 
              top: -20,
              opacity: 0 
            }}
            animate={{ 
              top: windowSize.height + 20,
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: snippet.duration,
              repeat: Infinity,
              delay: snippet.delay,
              ease: "linear"
            }}
          >
            {snippet.text}
          </motion.div>
        ))}
      </div>

      {/* Radial gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Cyber grid with perspective */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.05)_2px,transparent_2px)] dark:bg-[linear-gradient(rgba(0,255,255,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,255,255,0.03)_2px,transparent_2px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* Particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && ambientParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-cyan-400 rounded-full"
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

      {/* Floating icons */}
      {[Lock, Shield, Cpu, Terminal].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          style={{
            top: `${20 + i * 20}%`,
            left: i % 2 === 0 ? '10%' : '85%',
          }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-16 h-16 text-blue-400 dark:text-cyan-400" />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        style={{ translateY, opacity }}
      >
        {/* Profile Image with Enhanced Cyber Border */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative w-60 h-60 mx-auto mb-8 group">
            {/* Multiple animated border rings */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-blue-500/30 dark:border-cyan-500/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 dark:bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div 
              className="absolute inset-2 rounded-full border-2 border-purple-500/20 dark:border-green-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 dark:bg-green-400 rounded-full translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div 
              className="absolute inset-4 rounded-full border border-blue-500/10 dark:border-cyan-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Pulsing glow effect */}
            <motion.div 
              className="absolute inset-6 rounded-full bg-blue-500/10 dark:bg-cyan-500/20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Profile image */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-black shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/50 group-hover:shadow-blue-500/50 dark:group-hover:shadow-cyan-500/80 transition-all">
              <img 
                src={profileIMG}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 font-mono text-blue-600 dark:text-cyan-400"
        >
          <span className="text-purple-600 dark:text-green-400">root@vrma8:~$</span> whoami
        </motion.div>

        {/* Name with Brute Force Animation */}
        <motion.h1 
          className="mb-4 text-4xl md:text-6xl font-bold font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-cyan-400 dark:via-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {mounted && <BruteForceText text="Ravi Kumar Verma" delay={500} />}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p 
          className="text-xl text-gray-700 dark:text-cyan-300 mb-4 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <Code2 className="inline w-5 h-5 mr-2" />
          B. Tech Computer Science & Engineering Student
        </motion.p>

        {/* Institution */}
        <motion.p 
          className="text-purple-600 dark:text-green-400 mb-8 font-mono text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 }}
        >
          National Institute of Technology, Hamirpur
        </motion.p>

        {/* Description */}
        <motion.p 
          className="text-lg text-gray-600 dark:text-cyan-300/80 mb-10 max-w-2xl mx-auto font-mono leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9 }}
        >
          <span className="text-purple-600 dark:text-green-400">{">>"} </span>
          Passionate about creating innovative solutions through code. 
          Specializing in <span className="text-blue-600 dark:text-cyan-400 font-semibold">web development</span> and{" "}
          <span className="text-blue-600 dark:text-cyan-400 font-semibold">cybersecurity</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex gap-4 justify-center mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1 }}
        >
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-600 dark:to-green-600 hover:from-blue-500 hover:to-purple-500 dark:hover:from-cyan-500 dark:hover:to-green-500 text-white font-mono shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/30 hover:shadow-blue-500/50 dark:hover:shadow-cyan-500/50 border border-blue-400/50 dark:border-cyan-400/50"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-blue-500/50 dark:border-cyan-500/50 bg-blue-500/5 dark:bg-cyan-500/5 text-blue-600 dark:text-cyan-300 hover:bg-blue-500/10 dark:hover:bg-cyan-500/20 hover:text-blue-700 dark:hover:text-cyan-100 hover:border-blue-400 dark:hover:border-cyan-400 font-mono shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/20"
          >
            <Terminal className="w-4 h-4" />
            View Resume
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3 }}
        >
          <motion.a
            href="https://github.com/vrma8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-blue-500/30 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 bg-blue-500/5 dark:bg-cyan-500/5 hover:bg-blue-500/10 dark:hover:bg-cyan-500/20 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-cyan-300 group-hover:text-blue-600 dark:group-hover:text-cyan-100" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ravi-k-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-blue-500/30 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 bg-blue-500/5 dark:bg-cyan-500/5 hover:bg-blue-500/10 dark:hover:bg-cyan-500/20 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-cyan-300 group-hover:text-blue-600 dark:group-hover:text-cyan-100" />
          </motion.a>
          <motion.a
            href="mailto:[EMAIL_ADDRESS]"
            className="p-3 rounded-lg border border-blue-500/30 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 bg-blue-500/5 dark:bg-cyan-500/5 hover:bg-blue-500/10 dark:hover:bg-cyan-500/20 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-cyan-300 group-hover:text-blue-600 dark:group-hover:text-cyan-100" />
          </motion.a>
        </motion.div>

        {/* Blinking cursor effect */}
        <motion.div
          className="mt-8 text-purple-600 dark:text-green-400 font-mono text-2xl"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          _
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent" />
    </section>
  );
}