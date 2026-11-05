import { useState } from 'react';
import { Award, ExternalLink, Calendar, Shield, ShieldCheck, Globe, Terminal, Network, Skull, Code2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { BinaryRain } from './BinaryRain';
import { soundFX } from '../utils/audio';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  category: 'security' | 'programming' | 'networking';
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
  verifyUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Web Application Pentesting',
    issuer: 'TryHackMe',
    category: 'security',
    date: 'July 2025',
    credentialId: 'THM-NNRBNHXKF4',
    description: 'Practical offensive security assessments: OWASP Top 10, SQLi, XSS, auth bypass, session management, and input sanitization.',
    skills: ['OWASP Top 10', 'SQL Injection', 'Cross-Site Scripting (XSS)', 'Auth Bypass', 'Session Security'],
    icon: Globe,
    verifyUrl: 'https://drive.google.com/file/d/161wlf8BaM5RQtFC7poYAP5e1PK1ScwcX/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Junior Penetration Tester',
    issuer: 'TryHackMe',
    category: 'security',
    date: 'July 2025',
    credentialId: 'THM-BJY6ID9OX9',
    description: 'Foundations of penetration testing methodology, vulnerability assessment, privilege escalation, Metasploit, and network auditing.',
    skills: ['Penetration Testing', 'Nmap', 'Metasploit', 'Privilege Escalation', 'Linux Security'],
    icon: ShieldCheck,
    verifyUrl: 'https://drive.google.com/file/d/1WB4z06XZ6iKY9jcvHsGD7ZQxewCfV_yl/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    category: 'security',
    date: 'July 2025',
    credentialId: 'fe88ad41-efd2-4798-afaa-0ff6ddfc7e8e',
    description: 'Hands-on ethical hacking skills, threat mitigation, reconnaissance, network defense strategies, and vulnerability management.',
    skills: ['Ethical Hacking', 'Threat Assessment', 'Defense Architecture', 'Network Auditing'],
    icon: Skull,
    verifyUrl: 'https://www.credly.com/badges/fe88ad41-efd2-4798-afaa-0ff6ddfc7e8e/public_url',
  },
  {
    id: 4,
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    category: 'networking',
    date: 'July 2025',
    credentialId: '58163a8c-1cc4-4f3c-a513-2c797921915b',
    description: 'Core internet protocols, packet routing, TCP/IP architecture, subnetting, switching, and foundational network defense.',
    skills: ['TCP/IP Model', 'Subnetting & Routing', 'Switching', 'Network Protocols'],
    icon: Network,
    verifyUrl: 'https://www.credly.com/badges/58163a8c-1cc4-4f3c-a513-2c797921915b/public_url',
  },
  {
    id: 5,
    title: 'Python Essentials 2',
    issuer: 'Cisco / OpenEDG Python Institute',
    category: 'programming',
    date: 'July 2025',
    credentialId: '3e4436b2-0e80-4953-a2a4-b7709401e4eb',
    description: 'Advanced Python programming: Object-Oriented Programming (OOP), modules, packages, exceptions, and file processing.',
    skills: ['Python OOP', 'Exceptions & Generators', 'File I/O', 'Package Architecture'],
    icon: Terminal,
    verifyUrl: 'https://www.credly.com/badges/3e4436b2-0e80-4953-a2a4-b7709401e4eb/public_url',
  },
  {
    id: 6,
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco / OpenEDG JS Institute',
    category: 'programming',
    date: 'July 2025',
    credentialId: '7f70d2b6-a11f-4ef6-a05d-85582dde8238',
    description: 'Modern JavaScript fundamentals: prototype chains, asynchronous operations, event handling, OOP, and data structures.',
    skills: ['JavaScript ES6+', 'Async / Promises', 'Object Prototypes', 'DOM & Events'],
    icon: Code2,
    verifyUrl: 'https://www.credly.com/badges/7f70d2b6-a11f-4ef6-a05d-85582dde8238/public_url',
  },
];

export function Certifications() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'security' | 'programming' | 'networking'>('all');

  const filteredCerts = activeFilter === 'all' 
    ? certifications 
    : certifications.filter((c) => c.category === activeFilter);

  const handleTabClick = (filterId: 'all' | 'security' | 'programming' | 'networking') => {
    soundFX.playKeypress();
    setActiveFilter(filterId);
  };

  return (
    <motion.section 
      id="certifications" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-neutral-950 dark:to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-4">
            <Award className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Verified Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight flex items-center justify-center gap-3 text-black dark:text-white">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" />
            <span>Certifications</span>
          </h2>
          <p className="text-neutral-500 font-mono text-sm sm:text-base mt-2 max-w-xl mx-auto">
            <span>/* Professional credentials in offensive security, networking, and engineering */</span>
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap font-mono text-xs">
            {[
              { id: 'all', label: `All (${certifications.length})` },
              { id: 'security', label: 'Security & Pentesting (3)' },
              { id: 'networking', label: 'Networking (1)' },
              { id: 'programming', label: 'Programming (2)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id as typeof activeFilter)}
                className={`px-3.5 py-1.5 rounded-full transition-all border cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
                    : 'bg-white/80 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ===== CERTIFICATION CARDS GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCerts.map((cert, index) => {
            const CertIcon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1 + index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                className="h-full"
              >
                <Card className="flex flex-col h-full bg-white/95 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm group shadow-sm hover:shadow-xl dark:hover:shadow-white/5 overflow-hidden">
                  
                  {/* Card Header Bar */}
                  <div className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 flex items-center justify-between font-mono text-xs">
                    <span className="text-neutral-500 font-medium">
                      {cert.issuer}
                    </span>
                    <div className="flex items-center gap-1.5 text-neutral-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <CardHeader className="pt-5 pb-3">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-black dark:text-white shrink-0 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-colors">
                        <CertIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base font-mono font-bold text-black dark:text-white leading-snug group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                          {cert.title}
                        </CardTitle>
                        <p className="text-xs font-mono text-neutral-500 mt-0.5">
                          Verified by {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow space-y-4 pt-1 font-mono">
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-900">
                      <span className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                        // Validated Skills
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono font-normal"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  {/* Card Footer: Credential ID & Verify Link */}
                  <div className="p-5 pt-3 border-t border-neutral-100 dark:border-neutral-900 space-y-3 font-mono">
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span className="text-[11px] text-neutral-400">ID:</span>
                      <span className="text-[11px] text-neutral-700 dark:text-neutral-300 font-medium font-mono truncate max-w-[200px]" title={cert.credentialId}>
                        {cert.credentialId}
                      </span>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => soundFX.playBeep()}
                      className="w-full gap-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-neutral-400 transition-all font-mono group/btn cursor-pointer" 
                      asChild
                    >
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 group-hover/btn:text-black dark:group-hover/btn:text-white transition-colors" />
                        Verify Credential
                        <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
