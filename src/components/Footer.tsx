import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 relative overflow-hidden border-t border-cyan-500/30">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
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

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-cyan-300 font-mono flex items-center gap-2">
              <span className="text-green-400">#</span> Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Certifications', href: '#certifications' },
                { label: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-cyan-300/60 hover:text-cyan-400 transition-colors font-mono flex items-center gap-2 group"
                  >
                    <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
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
                href="mailto:[EMAIL_ADDRESS]"
                className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
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
    </footer>
  );
}