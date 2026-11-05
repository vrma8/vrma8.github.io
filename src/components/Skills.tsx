import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { motion } from 'motion/react';
import { Code2, Server, Wrench, Shield } from 'lucide-react';
import { BinaryRain } from './BinaryRain';


const skillCategories = [
  {
    category: 'Frontend', // CATEGORY NAME
    skills: [
      { name: 'React/Next.js', level: 85 }, // name: Skill name, level: Percentage (0-100)
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      // TO ADD MORE: Copy the line above, paste below, change name and level
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 70 },
      { name: 'RESTful APIs', level: 85 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
    ],
  },
  {
    category: 'Cyber Security',
    skills: [
      { name: 'Networking', level: 80 },
      { name: 'Web Pentesting', level: 75 },
      { name: 'Reverse Engineering', level: 70 },
      { name: 'Forensics', level: 65 },
    ],
  },
  // TO ADD NEW CATEGORY: Copy the object above, paste here, and edit
];

export function Skills() {
  // ===== ICON MAPPING =====
  // Maps category names to their icons
  // TO CHANGE ICONS: Import new icon from 'lucide-react' and change here
  const icons = {
    'Frontend': Code2,    // Code icon for frontend
    'Backend': Server,    // Server icon for backend
    'Tools & Others': Wrench,  // Wrench icon for tools
    'Cyber Security': Shield  // Shield icon for cyber security
  };

  return (
    <motion.section 
      id="skills" 
      className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black relative overflow-hidden"
      // ===== SECTION FADE-IN ANIMATION =====
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />
      
     

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
            <span className="text-neutral-400 dark:text-neutral-600">$ </span>
            <span>Skills & Tech Stack</span>
          </h2>
          {/* TO EDIT SUBTITLE: Change text below */}
          <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto font-mono text-sm">
            <span>// Proficiency levels across different technology domains</span>
          </p>
        </motion.div>

        {/* ===== SKILLS GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Loop through each skill category */}
          {skillCategories.map((category, catIndex) => {
            // Get the icon for this category
            const Icon = icons[category.category as keyof typeof icons];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4 + catIndex * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 transition-all backdrop-blur-sm group relative overflow-hidden shadow-sm h-full">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-neutral-200/40 dark:bg-white/5 rounded-full blur-2xl transition-all" />
                  
                  {/* ===== CARD HEADER ===== */}
                  <CardHeader>
                    <CardTitle className="text-black dark:text-white font-mono flex items-center gap-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                      <Icon className="w-5 h-5 text-black dark:text-white" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>

                  {/* ===== SKILLS LIST ===== */}
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ 
                          duration: 0.5,
                          delay: 0.4 + catIndex * 0.1 + index * 0.05 
                        }}
                        className="relative"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-neutral-800 dark:text-neutral-200 font-mono">{skill.name}</span>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">{skill.level}%</span>
                        </div>
                        
                        <div className="relative">
                          <Progress value={skill.level} className="h-1.5 bg-neutral-200 dark:bg-neutral-800" />
                          <motion.div
                            className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-neutral-600 via-neutral-400 to-black dark:from-neutral-500 dark:via-neutral-300 dark:to-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: false }}
                            transition={{ 
                              duration: 1.2,
                              delay: 0.4 + catIndex * 0.1 + index * 0.05,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

