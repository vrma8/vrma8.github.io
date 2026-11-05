import { Github, Linkedin, Mail, Instagram, Heart, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <motion.footer 
      className="bg-black text-white py-12 px-4 relative overflow-hidden border-t border-neutral-900" 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, margin: "-100px" }} 
      transition={{ duration: 0.8 }}
    >
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">      
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-white font-mono flex items-center gap-2 font-semibold">
              <Terminal className="w-4 h-4 text-neutral-500" />
              Ravi Verma
            </h3>
            <p className="text-neutral-400 text-sm font-mono leading-relaxed">
              <span className="text-neutral-600">&gt;&gt; </span>
              B.Tech CSE student building high-performance systems, modern web platforms, and cybersecurity tools.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-white font-mono flex items-center gap-2 font-semibold">
              <span className="text-neutral-500">#</span> Navigation
            </h3>
            <ul className="space-y-2 text-sm font-mono text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">/about</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">/projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">/skills</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">/certifications</a></li>
            </ul>
          </motion.div>
          
          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-white font-mono flex items-center gap-2 font-semibold">
              <span className="text-neutral-500">$</span> Connect
            </h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/vrma8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-500 transition-all group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ravi-k-verma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-500 transition-all group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </motion.a>
              <motion.a
                href="mailto:24bcs096@nith.ac.in"
                className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-500 transition-all group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/vrma_nyt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-500 transition-all group"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-neutral-900 text-center text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="flex items-center justify-center gap-2 text-neutral-400">
            <span className="text-neutral-600">&lt;</span>
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-white fill-white inline" />
            </motion.span>
            by <span className="text-white font-medium">Ravi</span>
            <span className="text-neutral-600">/&gt;</span>
          </p>
          <p className="mt-2 text-xs text-neutral-600">
            <span>// </span>
            System online • All rights reserved © 2025
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}