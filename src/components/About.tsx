import { GraduationCap, Code, Award, Terminal } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';
import { motion } from 'motion/react';
import { BinaryRain } from './BinaryRain';

export function About() {
  // ===== STATE MANAGEMENT =====
  // Tracks which card is currently being hovered (education, experience, or achievements)
  // This controls the expand/collapse animation of cards
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // ===== CONTENT DATA =====
  // TO EDIT YOUR EDUCATION: Modify the array below
  const educationDetails = [
    "B.Tech Computer Science & Engineering - National Institute of Technology Hamirpur, 2024-2028",
    "Senior Secondary Education - 2023",
    "Matriculation - 2021"
  ];

  // TO EDIT YOUR EXPERIENCE: Modify the array below
  const experienceDetails = [
    "Domain Lead at SHIELD NITH",
    "Executive at Robotics Society NITH",
    "Volunteer at Robotics Society NITH",
    "Volunteer at Entrepreneurship Cell NITH"
  ];

  // TO EDIT YOUR ACHIEVEMENTS: Modify the array below
  const achievementDetails = [
    "Top 3% Globally- TryHackMe",
    "Grand Finalist of National Level Conversational AI Hackathon",
  ];

  return (
    <motion.section 
      id="about" 
      className="py-26 px-4 relative overflow-hidden min-h-[800px] bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-neutral-950 dark:to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      {/* ===== GLOWING ORBS ===== */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
      />

      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      
      {/* ===== MAIN CONTENT CONTAINER ===== */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
            <span className="text-neutral-400 dark:text-neutral-600">{"<"}</span>
            <span>About Me</span>
            <span className="text-neutral-400 dark:text-neutral-600">{" />"}</span>
          </h2>
          <p className="text-center text-neutral-500 mb-12 font-mono text-sm">
            <span>// Personal background & milestones</span>
          </p>
        </motion.div>

        {/* ===== TWO-COLUMN LAYOUT ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* ===== LEFT COLUMN ===== */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="p-6 bg-white/90 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-lg backdrop-blur-sm shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed">
                <span className="text-neutral-400 dark:text-neutral-500">&gt;&gt; </span>
                Pre Final Year undergraduate student at National Institute of Technology, Hamirpur, 
                pursuing Bachelor of Technology in Computer Science and Engineering.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white/90 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-lg backdrop-blur-sm shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed">
                <span className="text-neutral-400 dark:text-neutral-500">&gt;&gt; </span>
                I am interested in <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">full-stack Web Development</span> and{" "}
                <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">Cyber Security</span>. 
                I am always eager to learn new technologies and improve my existing skillset.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white/90 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-lg backdrop-blur-sm shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed">
                <span className="text-neutral-400 dark:text-neutral-500">&gt;&gt; </span>
                My goal is to create innovative and scalable solutions that make a difference in the world. 
                I believe in <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">continuous learning</span> and always improving myself on best practices in software development.
              </p>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="space-y-6">
            
            {/* ===== EDUCATION CARD ===== */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card 
                className={`bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 cursor-pointer transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-sm ${
                  hoveredCard === 'education' 
                    ? 'scale-105 shadow-xl shadow-black/5 dark:shadow-white/5 border-black dark:border-white' 
                    : hoveredCard 
                      ? 'opacity-50 scale-95' 
                      : 'hover:shadow-lg hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
                onMouseEnter={() => setHoveredCard('education')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === 'education' && (
                  <div className="absolute inset-0 bg-neutral-100/50 dark:bg-white/5" />
                )}
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                      animate={hoveredCard === 'education' ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6 text-black dark:text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-black dark:text-white font-mono flex items-center gap-2 font-semibold">
                        <Terminal className="w-4 h-4 text-neutral-500" />
                        Education
                      </h3>
                      {hoveredCard === 'education' && (
                        <motion.ul 
                          className="space-y-2 mt-3"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {educationDetails.map((detail, index) => (
                            <motion.li 
                              key={index} 
                              className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2 font-mono"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="text-neutral-400 dark:text-neutral-500 mt-1">▸</span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ===== EXPERIENCE CARD ===== */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card 
                className={`bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 cursor-pointer transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-sm ${
                  hoveredCard === 'experience' 
                    ? 'scale-105 shadow-xl shadow-black/5 dark:shadow-white/5 border-black dark:border-white' 
                    : hoveredCard 
                      ? 'opacity-50 scale-95' 
                      : 'hover:shadow-lg hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
                onMouseEnter={() => setHoveredCard('experience')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === 'experience' && (
                  <div className="absolute inset-0 bg-neutral-100/50 dark:bg-white/5" />
                )}
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                      animate={hoveredCard === 'experience' ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Code className="w-6 h-6 text-black dark:text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-black dark:text-white font-mono flex items-center gap-2 font-semibold">
                        <Terminal className="w-4 h-4 text-neutral-500" />
                        Experience
                      </h3>
                      {hoveredCard === 'experience' && (
                        <motion.ul 
                          className="space-y-2 mt-3"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {experienceDetails.map((detail, index) => (
                            <motion.li 
                              key={index} 
                              className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2 font-mono"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="text-neutral-400 dark:text-neutral-500 mt-1">▸</span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ===== ACHIEVEMENTS CARD ===== */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card 
                className={`bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 cursor-pointer transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-sm ${
                  hoveredCard === 'achievements' 
                    ? 'scale-105 shadow-xl shadow-black/5 dark:shadow-white/5 border-black dark:border-white' 
                    : hoveredCard 
                      ? 'opacity-50 scale-95' 
                      : 'hover:shadow-lg hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
                onMouseEnter={() => setHoveredCard('achievements')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === 'achievements' && (
                  <div className="absolute inset-0 bg-neutral-100/50 dark:bg-white/5" />
                )}
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                      animate={hoveredCard === 'achievements' ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-6 h-6 text-black dark:text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-black dark:text-white font-mono flex items-center gap-2 font-semibold">
                        <Terminal className="w-4 h-4 text-neutral-500" />
                        Achievements
                      </h3>
                      {hoveredCard === 'achievements' && (
                        <motion.ul 
                          className="space-y-2 mt-3"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {achievementDetails.map((detail, index) => (
                            <motion.li 
                              key={index} 
                              className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2 font-mono"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="text-neutral-400 dark:text-neutral-500 mt-1">▸</span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* 
===== ANIMATION TIMING GUIDE =====
To adjust when elements appear, modify the 'delay' values:

Section fade-in: delay 0s (immediate)
Glowing orbs: delay 0.2s and 0.4s
Header: delay 0.3s
Left column container: delay 0.4s
  - Paragraph 1: delay 0.5s
  - Paragraph 2: delay 0.6s
  - Paragraph 3: delay 0.7s
Right column cards:
  - Education: delay 0.5s
  - Experience: delay 0.6s
  - Achievements: delay 0.7s

TIP: Increase delays for slower, more dramatic entrance
TIP: Decrease delays for snappier, faster animations
TIP: Keep delays consistent (0.1s - 0.2s apart) for smooth stagger effect

===== TO DISABLE REPEATING ANIMATIONS =====
Change all: viewport={{ once: false }}
To: viewport={{ once: true }}
*/