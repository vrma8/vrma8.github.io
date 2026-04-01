import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
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
      className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />
      
      {/* Hexagonal pattern background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono flex items-center justify-center gap-3">
            <Shield className="w-10 h-10 text-blue-600 dark:text-cyan-400" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-cyan-400 dark:via-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-cyan-300/70 mb-12 max-w-2xl mx-auto font-mono text-sm">
            <span className="text-purple-600 dark:text-green-400">/* </span>
            Professional credentials validating my expertise
            <span className="text-purple-600 dark:text-green-400"> */</span>
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
              <Card className="flex flex-col bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 hover:border-purple-500 dark:hover:border-green-400 transition-all backdrop-blur-sm group relative overflow-hidden h-full shadow-sm">
                {/* Animated border glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 dark:from-cyan-500/0 dark:via-green-500/0 dark:to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 dark:group-hover:from-cyan-500/20 dark:group-hover:via-green-500/10 dark:group-hover:to-cyan-500/20 transition-all duration-500" />
                
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
                      <CardTitle className="text-blue-700 dark:text-cyan-300 text-lg leading-tight mb-2 font-mono group-hover:text-purple-600 dark:group-hover:text-green-400 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-600/70 dark:text-cyan-400/70 font-mono">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow space-y-4 relative z-10">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-purple-500/10 dark:bg-green-500/10 text-purple-700 dark:text-green-300 hover:bg-purple-500/20 dark:hover:bg-green-500/20 border border-purple-300 dark:border-green-500/30 text-xs font-mono"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 mb-2 font-mono">
                      <span className="text-purple-600 dark:text-green-400">ID:</span> {cert.credentialId}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full gap-2 border-blue-500/50 dark:border-cyan-500/50 bg-blue-500/5 dark:bg-cyan-500/5 text-blue-700 dark:text-cyan-300 hover:bg-blue-500/20 dark:hover:bg-cyan-500/20 hover:text-blue-900 dark:hover:text-cyan-100 hover:border-blue-500 dark:hover:border-cyan-400 transition-all font-mono group/btn" 
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