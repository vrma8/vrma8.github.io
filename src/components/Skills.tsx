import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';
import { 
  Code2, 
  Server, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Globe, 
  Database, 
  Terminal, 
  Layers, 
  Container, 
  GitBranch, 
  Cloud, 
  Binary, 
  Radio, 
  Bug, 
  Lock, 
  Network, 
  Palette, 
  Sparkles,
  Braces
} from 'lucide-react';
import { BinaryRain } from './BinaryRain';

interface SkillItem {
  name: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  categoryIcon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Systems',
    categoryIcon: Cpu,
    description: 'Low-level kernel programming, systems architecture, and core languages',
    skills: [
      { name: 'C', tag: 'Systems / OS', icon: Cpu },
      { name: 'x86_64 Assembly', tag: 'Kernel / Boot', icon: Binary },
      { name: 'Python', tag: 'Automation & Sec', icon: Terminal },
      { name: 'TypeScript', tag: 'Typed Full-Stack', icon: Braces },
      { name: 'JavaScript (ES6+)', tag: 'Web & Runtime', icon: Code2 },
      { name: 'Bash / Shell', tag: 'Linux Scripting', icon: Terminal },
      { name: 'SQL', tag: 'Relational DB', icon: Database },
    ],
  },
  {
    title: 'Frontend & Web Tech',
    categoryIcon: Globe,
    description: 'Modern, high-performance UI engineering and reactive web applications',
    skills: [
      { name: 'React 19', tag: 'UI Library', icon: Layers },
      { name: 'Next.js 15', tag: 'Full-Stack SSR', icon: Globe },
      { name: 'Tailwind CSS v4', tag: 'Design Systems', icon: Palette },
      { name: 'HTML5 & CSS3', tag: 'Semantic Web', icon: Code2 },
      { name: 'WebRTC', tag: 'Realtime Audio/P2P', icon: Radio },
      { name: 'Motion / Framer', tag: 'Interactive UX', icon: Sparkles },
    ],
  },
  {
    title: 'Backend & Infrastructure',
    categoryIcon: Server,
    description: 'Scalable services, database architecture, and realtime pipelines',
    skills: [
      { name: 'Node.js', tag: 'Server Runtime', icon: Server },
      { name: 'RESTful APIs', tag: 'Architecture', icon: Network },
      { name: 'PostgreSQL', tag: 'Relational Store', icon: Database },
      { name: 'Prisma ORM', tag: 'Data Modeling', icon: Layers },
      { name: 'WebSockets', tag: 'Bidirectional Stream', icon: Radio },
      { name: 'Conversational AI', tag: 'Agora Realtime', icon: Sparkles },
    ],
  },
  {
    title: 'Security & DevOps',
    categoryIcon: ShieldCheck,
    description: 'Offensive security auditing, containerization, and automated workflows',
    skills: [
      { name: 'Penetration Testing', tag: 'Web & Network', icon: ShieldCheck },
      { name: 'OWASP Top 10', tag: 'AppSec Auditing', icon: Lock },
      { name: 'Wireshark & Nmap', tag: 'Packet Analysis', icon: Network },
      { name: 'Burp Suite', tag: 'Vulnerability Audit', icon: Bug },
      { name: 'Docker', tag: 'Containerization', icon: Container },
      { name: 'Git & GitHub CI', tag: 'Version Control', icon: GitBranch },
      { name: 'Linux Administration', tag: 'Arch / Debian', icon: Terminal },
      { name: 'Cloud Services', tag: 'AWS / Cloudflare', icon: Cloud },
    ],
  },
];

const securityProtocols = [
  'GDB / Debugging',
  'Wireshark',
  'Burp Suite',
  'Nmap Network Mapper',
  'Metasploit',
  'Docker Engine',
  'Git Workflows',
  'Linux CLI',
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <motion.section 
      id="skills" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-4">
            <Wrench className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight flex items-center justify-center gap-3 text-black dark:text-white">
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" />
            <span>Technical Arsenal</span>
          </h2>
          <p className="text-neutral-500 font-mono text-sm sm:text-base mt-2 max-w-xl mx-auto">
            <span>/* Categorized technologies, low-level tooling, and security competencies */</span>
          </p>
        </motion.div>

        {/* ===== 4-CATEGORY SKILLS GRID ===== */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {skillCategories.map((cat, catIdx) => {
            const HeaderIcon = cat.categoryIcon;
            const isHovered = activeCategory === catIdx;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.15 + catIdx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setActiveCategory(catIdx)}
                onMouseLeave={() => setActiveCategory(null)}
                className="h-full"
              >
                <Card className={`h-full flex flex-col bg-white/95 dark:bg-neutral-950/80 border transition-all duration-300 backdrop-blur-sm group shadow-sm overflow-hidden ${
                  isHovered 
                    ? 'border-black dark:border-neutral-500 shadow-xl dark:shadow-white/5' 
                    : 'border-neutral-200 dark:border-neutral-800'
                }`}>
                  {/* Category Top Banner */}
                  <div className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-neutral-400 dark:text-neutral-500">
                        [0{catIdx + 1}]
                      </span>
                      <span className="text-black dark:text-white font-semibold">
                        {cat.title}
                      </span>
                    </div>
                    <span className="text-neutral-500 text-xs">
                      {cat.skills.length} tools
                    </span>
                  </div>

                  <CardHeader className="pt-4 pb-2">
                    <CardTitle className="text-lg font-mono text-black dark:text-white flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-colors">
                        <HeaderIcon className="w-4 h-4 text-black dark:text-white" />
                      </div>
                      <span>{cat.title}</span>
                    </CardTitle>
                    <p className="text-xs font-mono text-neutral-500 pt-1">
                      {cat.description}
                    </p>
                  </CardHeader>

                  {/* Technology Chips Grid */}
                  <CardContent className="pt-3 pb-6 flex-grow">
                    <div className="grid grid-cols-2 gap-2.5">
                      {cat.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-neutral-900/40 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-black dark:hover:border-neutral-500 transition-all duration-200 flex items-start gap-2.5 group/item cursor-default select-none"
                          >
                            <div className="p-1.5 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/80 shrink-0 mt-0.5 group-hover/item:border-black dark:group-hover/item:border-white transition-colors">
                              <SkillIcon className="w-3.5 h-3.5 text-black dark:text-white" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-xs font-mono font-semibold text-black dark:text-white truncate">
                                {skill.name}
                              </h4>
                              <p className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 truncate">
                                {skill.tag}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* ===== SECURITY & SYSTEMS TOOLING STRIP ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/70 backdrop-blur-sm shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-black dark:text-white" />
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                Kernel & Security Tooling:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {securityProtocols.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-colors cursor-default select-none"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
