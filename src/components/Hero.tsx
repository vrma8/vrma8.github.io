import { Github, Linkedin, Mail, Terminal, Code2, Lock, Shield, Cpu } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import profileIMG from "../assets/ravi.jpg";
import { BinaryRain } from "./BinaryRain";

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
        <span className="inline-block w-0.5 h-[1em] bg-black dark:bg-white ml-1 animate-pulse" />
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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-white dark:bg-black">
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      {/* Falling binary (0s and 1s) animation in the background */}
      <BinaryRain />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0">
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
              className="absolute inset-0 rounded-full border-2 border-neutral-300 dark:border-neutral-700"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-black dark:bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div 
              className="absolute inset-2 rounded-full border-2 border-neutral-200 dark:border-neutral-800"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-neutral-500 dark:bg-neutral-400 rounded-full translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div 
              className="absolute inset-4 rounded-full border border-neutral-200 dark:border-neutral-800"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Pulsing glow effect */}
            <motion.div 
              className="absolute inset-6 rounded-full bg-neutral-200/50 dark:bg-white/5 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Profile image */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-xl shadow-black/10 dark:shadow-white/5 group-hover:border-neutral-400 dark:group-hover:border-neutral-700 transition-all">
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
          className="mb-4 font-mono text-neutral-600 dark:text-neutral-400"
        >
          <span className="text-neutral-500 dark:text-neutral-500">root@vrma8:~$</span> <span className="text-black dark:text-white">whoami</span>
        </motion.div>

        {/* Name with Brute Force Animation */}
        <motion.h1 
          className="mb-4 text-4xl md:text-6xl font-bold font-mono tracking-tight text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {mounted && <BruteForceText text="Ravi Kumar Verma" delay={500} />}
        </motion.h1>

        {/* Title */}
        <motion.p 
          className="text-xl text-neutral-700 dark:text-neutral-300 mb-4 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <Code2 className="inline w-5 h-5 mr-2 text-neutral-500 dark:text-neutral-400" />
          B. Tech Computer Science & Engineering Student
        </motion.p>

        {/* Institution */}
        <motion.p 
          className="text-neutral-600 dark:text-neutral-400 mb-8 font-mono text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 }}
        >
          National Institute of Technology, Hamirpur
        </motion.p>

        {/* Description */}
        <motion.p 
          className="text-lg text-neutral-600 dark:text-neutral-300/80 mb-10 max-w-2xl mx-auto font-mono leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9 }}
        >
          <span className="text-neutral-400 dark:text-neutral-500">{">>"} </span>
          Passionate about creating innovative solutions through code. 
          Specializing in <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">web development</span> and{" "}
          <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">cybersecurity</span>.
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
            className="gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 border border-black dark:border-white font-mono shadow-md transition-all"
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
            className="gap-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-neutral-400 font-mono shadow-sm transition-all"
            asChild
          >
            <a href="https://drive.google.com/file/d/161wlf8BaM5RQtFC7poYAP5e1PK1ScwcX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Terminal className="w-4 h-4" />
              View Resume
            </a>
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
            className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ravi-k-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
          </motion.a>
          <motion.a
            href="mailto:24bcs096@nith.ac.in"
            className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
          </motion.a>
        </motion.div>

        {/* Blinking cursor effect */}
        <motion.div
          className="mt-8 text-black dark:text-white font-mono text-2xl"
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