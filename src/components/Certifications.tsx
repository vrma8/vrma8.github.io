import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { BinaryRain } from './BinaryRain';

const certifications = [
  {
    id: 1,
    title: 'Web Application Pentesting',
    issuer: 'TryHackMe',
    date: 'July 2025',
    credentialId: 'THM-NNRBNHXKF4',
    description: 'Foundational understanding of Web Application Pentesting concepts, vulnerabilities and best practices.',
    skills: ['Web Application Pentesting', 'OWASP Top 10', 'SQL Injection', 'Cross-Site Scripting', 'Authentication & Authorization', 'Session Management', 'Input Validation'],
    logo: '🌐',
    verifyUrl: 'https://drive.google.com/file/d/161wlf8BaM5RQtFC7poYAP5e1PK1ScwcX/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Junior Penetration Tester',
    issuer: 'TryHackMe',
    date: 'July 2025',
    credentialId: 'THM-BJY6ID9OX9',
    description: 'Foundational understanding of penetration testing concepts, vulnerabilities and best practices.',
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Linux', 'Windows', 'Bash', 'Metasploit', 'Nmap'],
    logo: '🛡️',
    verifyUrl: 'https://drive.google.com/file/d/1WB4z06XZ6iKY9jcvHsGD7ZQxewCfV_yl/view?usp=sharing',
  },
  {
    id: 3,
    title: 'JavaScript Essencials 2',
    issuer: 'Cisco',
    date: 'July 2025',
    credentialId: '7f70d2b6-a11f-4ef6-a05d-85582dde8238',
    description: 'JavaScript programming fundamentals, including data types, control structures, functions, and object-oriented programming.',
    skills: ['JavaScript'],
    logo: '</>',
    verifyUrl: 'https://www.credly.com/badges/7f70d2b6-a11f-4ef6-a05d-85582dde8238/public_url',
  },
  {
    id: 4,
    title: 'Python Essencials 2',
    issuer: 'Cisco',
    date: 'July 2025',
    credentialId: '3e4436b2-0e80-4953-a2a4-b7709401e4eb',
    description: 'Python programming fundamentals, including data types, control structures, functions, and object-oriented programming.',
    skills: ['Python'],
    logo: '🐍',
    verifyUrl: 'https://www.credly.com/badges/3e4436b2-0e80-4953-a2a4-b7709401e4eb/public_url',
  },
  {
    id: 5,
    title: 'Ethical Hacker',
    issuer: 'Cisco',
    date: 'July 2025',
    credentialId: 'fe88ad41-efd2-4798-afaa-0ff6ddfc7e8e',
    description: 'Ethical hacking and penetration testing skills, including vulnerability assessment, network security, and Linux/Windows security.',
    skills: ['Ethical Hacking', 'Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Linux', 'Windows', 'Bash', 'Metasploit', 'Nmap'],
    logo: '💀',
    verifyUrl: 'https://www.credly.com/badges/fe88ad41-efd2-4798-afaa-0ff6ddfc7e8e/public_url',
  },
  {
    id: 6,
    title: 'Networking Basics',
    issuer: 'Cisco',
    date: 'July 2025',
    credentialId: '58163a8c-1cc4-4f3c-a513-2c797921915b',
    description: 'Networking fundamentals, including TCP/IP, routing, switching, and network security.',
    skills: ['Networking', 'TCP/IP', 'Routing', 'Switching', 'Network Security'],
    logo: '📡',
    verifyUrl: 'https://www.credly.com/badges/58163a8c-1cc4-4f3c-a513-2c797921915b/public_url',
  },
];

export function Certifications() {
  return (
    <motion.section 
      id="certifications" 
      className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-neutral-950 dark:to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono tracking-tight flex items-center justify-center gap-3 text-black dark:text-white">
            <Shield className="w-10 h-10 text-black dark:text-white" />
            <span>Certifications</span>
          </h2>
          <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto font-mono text-sm">
            <span>/* Professional credentials validating my expertise */</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="flex flex-col bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 transition-all backdrop-blur-sm group relative overflow-hidden h-full shadow-sm">
                <div className="absolute inset-0 bg-neutral-100/30 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-3 mb-2">
                    <motion.div 
                      className="text-4xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {cert.logo}
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-black dark:text-white text-lg leading-tight mb-2 font-mono group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-neutral-600 dark:text-neutral-400 text-sm font-mono">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500 font-mono">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow space-y-4 relative z-10">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 font-mono">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 text-xs font-mono"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-neutral-500 mb-2 font-mono">
                      <span>ID:</span> {cert.credentialId}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full gap-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-neutral-400 transition-all font-mono group/btn" 
                      asChild
                    >
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <Award className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                        Verify Credential
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}