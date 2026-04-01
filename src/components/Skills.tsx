import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Shield } from 'lucide-react';
import { BinaryRain } from './BinaryRain';

/* 
===== SKILLS DATA =====
TO EDIT YOUR SKILLS:
1. Find the category you want to edit (Frontend, Backend, Tools & Others)
2. Change the skill name and level (0-100)
3. Add new skills by copying an existing line
4. Remove skills by deleting the line

SKILL LEVEL GUIDE:
90-100: Expert/Advanced
70-89: Proficient/Intermediate
50-69: Competent/Basic
Below 50: Beginner/Learning
*/
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
      
      {/* ===== ANIMATED BACKGROUND LINES ===== */}
      {/* Three vertical lines that grow from top to bottom */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left line (25% from left) - Cyan */}
        <motion.div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 dark:via-cyan-500/20 to-transparent"
          initial={{ scaleY: 0 }} // Starts with 0 height
          whileInView={{ scaleY: 1 }} // Grows to full height
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }} // 1 second animation, starts at 0.2s
        />
        {/* Center line (50% from left) - Green */}
        <motion.div 
          className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 dark:via-green-500/20 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }} // Appears slightly after first line
        />
        {/* Right line (75% from left) - Cyan */}
        <motion.div 
          className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 dark:via-cyan-500/20 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.4 }} // Appears last
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* TO EDIT SECTION TITLE: Change "Skills & Tech Stack" text */}
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono">
            <span className="text-purple-600 dark:text-green-400">$ </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-green-400 dark:via-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
              Skills & Tech Stack
            </span>
          </h2>
          {/* TO EDIT SUBTITLE: Change text below */}
          <p className="text-center text-gray-600 dark:text-cyan-300/70 mb-12 max-w-2xl mx-auto font-mono text-sm">
            <span className="text-purple-600 dark:text-green-400">// </span>
            Proficiency levels across different technology domains
          </p>
        </motion.div>

        {/* ===== SKILLS GRID ===== */}
        {/* 3 columns on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Loop through each skill category */}
          {skillCategories.map((category, catIndex) => {
            // Get the icon for this category
            const Icon = icons[category.category as keyof typeof icons];
            return (
              <motion.div
                key={category.category}
                // ===== CARD ENTRANCE ANIMATION =====
                // 3D flip effect (rotateX) + slide up + fade in
                initial={{ opacity: 0, y: 50, rotateX: -15 }} // Starts tilted back, below, invisible
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }} // Flips to normal, moves up, visible
                viewport={{ once: false }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.5 + catIndex * 0.15, // Stagger: Each card appears 0.15s after previous
                  type: "spring", // Bouncy animation
                  stiffness: 100 // Bounce intensity (lower = more bounce)
                }}
                whileHover={{ scale: 1.05 }} // Grows 5% on hover
              >
                <Card className="bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 hover:border-purple-400 dark:hover:border-green-400/50 transition-all backdrop-blur-sm group relative overflow-hidden shadow-sm">
                  {/* Glowing orb in top-right corner - changes on hover */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 dark:bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-purple-500/10 dark:group-hover:bg-green-500/20 transition-all" />
                  
                  {/* ===== CARD HEADER (Category name + icon) ===== */}
                  <CardHeader>
                    <CardTitle className="text-blue-700 dark:text-cyan-300 font-mono flex items-center gap-2 group-hover:text-purple-600 dark:group-hover:text-green-400 transition-colors">
                      <Icon className="w-5 h-5" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>

                  {/* ===== SKILLS LIST ===== */}
                  <CardContent className="space-y-6">
                    {/* Loop through each skill in this category */}
                    {category.skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        // Each skill slides in from left
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ 
                          duration: 0.5,
                          // Stagger formula: base delay + category delay + skill delay
                          delay: 0.6 + catIndex * 0.15 + index * 0.08 
                        }}
                        className="relative"
                      >
                        {/* Skill name and percentage */}
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-700 dark:text-cyan-300 font-mono">{skill.name}</span>
                          <span className="text-sm text-purple-600 dark:text-green-400 font-mono">{skill.level}%</span>
                        </div>
                        
                        {/* ===== PROGRESS BAR ===== */}
                        <div className="relative">
                          {/* Background progress bar (gray) */}
                          <Progress value={skill.level} className="h-2" />
                          
                          {/* ===== ANIMATED GLOWING PROGRESS BAR ===== */}
                          {/* This overlays the gray bar and animates from 0 to skill.level */}
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-green-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                            initial={{ width: 0 }} // Starts at 0 width
                            whileInView={{ width: `${skill.level}%` }} // Fills to skill percentage
                            viewport={{ once: false }}
                            transition={{ 
                              duration: 1.2, // Slower fill for dramatic effect
                              delay: 0.6 + catIndex * 0.15 + index * 0.08, // Same stagger as skill
                              ease: "easeOut" // Starts fast, ends slow
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

/* 
===== ANIMATION TIMING BREAKDOWN =====
Background lines:
  - Line 1 (left): 0.2s
  - Line 2 (center): 0.3s  
  - Line 3 (right): 0.4s

Header: 0.3s

Skill cards (staggered):
  - Frontend: 0.5s
  - Backend: 0.65s
  - Tools: 0.8s

Skills within cards (staggered further):
  - Skill 1: card delay + 0s
  - Skill 2: card delay + 0.08s
  - Skill 3: card delay + 0.16s
  - Skill 4: card delay + 0.24s

===== CUSTOMIZATION TIPS =====

TO CHANGE STAGGER SPEED:
- Cards: Change "catIndex * 0.15" (higher = slower)
- Skills: Change "index * 0.08" (higher = slower)

TO CHANGE PROGRESS BAR SPEED:
- Change "duration: 1.2" (higher = slower fill)

TO ADD NEW CATEGORY:
1. Copy existing category object in skillCategories array
2. Change category name
3. Update skills array
4. Add icon mapping in icons object if needed

TO CHANGE COLORS:
- Cyan: text-cyan-400, border-cyan-500, bg-cyan-500/10
- Green: text-green-400, border-green-500, bg-green-500/10
Replace these classes throughout the file

TO DISABLE 3D FLIP:
- Remove "rotateX: -15" from initial
- Remove "rotateX: 0" from whileInView
*/