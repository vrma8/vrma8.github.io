import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, Heart, Terminal, Eye, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const [views, setViews] = useState<number | null>(null);

  return (
    <motion.footer className="bg-black text-white py-12 px-4 relative overflow-hidden border-t border-cyan-500/30" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8 }}>
      {/* Background effects */}
      
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">      
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-cyan-300 font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Ravi Verma
            </h3>
            <p className="text-cyan-300/60 text-sm font-mono leading-relaxed">
              <span className="text-green-400">&gt;&gt; </span>
              ...
            </p>
          </motion.div>

          
          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-cyan-300 font-mono flex items-center gap-2">
              <span className="text-green-400">$</span> Connect
            </h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/vrma8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ravi-k-verma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
              </motion.a>
              <motion.a
                href="mailto:24bcs096@nith.ac.in"
                className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/vrma_nyt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-cyan-500/20 text-center text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="flex items-center justify-center gap-2 text-cyan-300/60">
            <span className="text-green-400">&lt;</span>
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-green-400 fill-current inline" />
            </motion.span>
            by <span className="text-cyan-400">Ravi</span>
            <span className="text-green-400">/&gt;</span>
          </p>
          <p className="mt-2 text-xs text-cyan-300/40">
            <span className="text-green-400">// </span>
            System online • All rights reserved © 2025
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}