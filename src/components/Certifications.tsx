import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { BinaryRain } from './BinaryRain';

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'December 2024',
    credentialId: 'AWS-CCP-2024-12345',
    description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
    skills: ['Cloud Computing', 'AWS', 'Infrastructure'],
    logo: '☁️',
    verifyUrl: 'https://aws.amazon.com/verification',
  },
  {
    id: 2,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'October 2024',
    credentialId: 'GDAC-2024-67890',
    description: 'Comprehensive data analytics skills including data cleaning, visualization, and analysis.',
    skills: ['Data Analysis', 'SQL', 'Tableau', 'R'],
    logo: '📊',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 3,
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta',
    date: 'August 2024',
    credentialId: 'META-FE-2024-54321',
    description: 'Professional-level training in React, JavaScript, and modern front-end development.',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX'],
    logo: '⚛️',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 4,
    title: 'CompTIA Security+ Certification',
    issuer: 'CompTIA',
    date: 'June 2024',
    credentialId: 'COMP-SEC-2024-98765',
    description: 'Core cybersecurity skills and best practices for securing networks and systems.',
    skills: ['Cybersecurity', 'Network Security', 'Risk Management'],
    logo: '🔒',
    verifyUrl: 'https://comptia.org/verify',
  },
  {
    id: 5,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    date: 'April 2024',
    credentialId: 'ML-SPEC-2024-11111',
    description: 'Advanced machine learning algorithms and practical implementation techniques.',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
    logo: '🤖',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 6,
    title: 'GitHub Foundations Certification',
    issuer: 'GitHub',
    date: 'March 2024',
    credentialId: 'GH-FOUND-2024-22222',
    description: 'Proficiency in Git version control, collaboration workflows, and GitHub features.',
    skills: ['Git', 'Version Control', 'GitHub', 'DevOps'],
    logo: '🐙',
    verifyUrl: 'https://github.com/verify',
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