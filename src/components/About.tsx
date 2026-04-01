import { GraduationCap, Code, Award, Terminal } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
    "B.Tech Computer Science & Engineering, Expected 2028",
    "Senior Secondary Education - 2023",
    "Matriculation - 2021",
    "Relevant Coursework: Data Structures, Algorithms, Web Development"
  ];

  // TO EDIT YOUR EXPERIENCE: Modify the array below
  const experienceDetails = [
    "Executive at Robotics Society NITH - present",
    "Volunteer at Robotics Society NITH - ",
    "Volunteer at E Cell NITH - ",
  ];

  // TO EDIT YOUR ACHIEVEMENTS: Modify the array below
  const achievementDetails = [
    "Top 3% Globally- TryHackMe"
  ];

  return (
    <motion.section 
      id="about" 
      className="py-26 px-4 relative overflow-hidden min-h-[800px] bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black"
      // ===== SECTION FADE-IN ANIMATION =====
      // Entire section fades in when scrolling into view
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }} // once: false = animate every time you scroll to this section
      transition={{ duration: 0.8 }} // Animation takes 0.8 seconds
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      {/* Falling binary (0s and 1s) animation in the background */}
      <BinaryRain />
      
      {/* ===== BACKGROUND PATTERN ===== */}
      {/* Static cyber grid pattern - change bg-[size:80px_80px] to adjust grid size */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* ===== GLOWING ORBS (ANIMATED DECORATIONS) ===== */}
      {/* Top-left cyan orb - scales from 0 to 1 when section enters view */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }} // Starts invisible and tiny
        whileInView={{ scale: 1, opacity: 1 }} // Grows to full size
        viewport={{ once: false }} // Animates every time
        transition={{ duration: 1.2 }} // Slow growth
      />

      {/* Bottom-right green orb - appears after cyan orb */}
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 dark:bg-green-500/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.3 }} // Starts 0.3s after cyan orb
      />
      
      {/* ===== MAIN CONTENT CONTAINER ===== */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== SECTION HEADER (Title + Subtitle) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Starts invisible, 20px below
          whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* TO EDIT SECTION TITLE: Change "About Me" text below */}
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono">
            <span className="text-blue-600 dark:text-cyan-400">{"<"}</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-cyan-400 dark:via-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
            <span className="text-blue-600 dark:text-cyan-400">{" />"}</span>
          </h2>
          {/* TO EDIT SUBTITLE: Change text below */}
          <p className="text-center text-gray-600 dark:text-cyan-300/70 mb-12 font-mono text-sm">
            <span className="text-purple-600 dark:text-green-400">// </span>
            System.out.println("Who am I?");
          </p>
        </motion.div>

        {/* ===== TWO-COLUMN LAYOUT (Text on left, Cards on right) ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* ===== LEFT COLUMN - ABOUT TEXT BLOCKS ===== */}
          <motion.div 
            className="space-y-6"
            // Container slides in from left
            initial={{ opacity: 0, x: -50 }} // Starts 50px to the left
            whileInView={{ opacity: 1, x: 0 }} // Slides to normal position
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* PARAGRAPH 1 - TO EDIT: Change text inside <p> tag */}
            <motion.div 
              className="p-6 bg-white/80 dark:bg-gray-900/50 border border-blue-300 dark:border-cyan-500/30 rounded-lg backdrop-blur-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }} // Starts invisible, below
              whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }} // Each paragraph has different delay for stagger
              whileHover={{ scale: 1.02 }} // Hover: slight scale
            >
              <p className="text-gray-700 dark:text-cyan-300/90 font-mono leading-relaxed">
                <span className="text-purple-600 dark:text-green-400">&gt;&gt; </span>
                I'm a junior at State University majoring in Computer Science with a minor in Mathematics. 
                My journey in tech started when I built my first website in high school, and I've been 
                hooked ever since.
              </p>
            </motion.div>
            
            {/* PARAGRAPH 2 - TO EDIT: Change text inside <p> tag */}
            <motion.div 
              className="p-6 bg-white/80 dark:bg-gray-900/50 border border-blue-300 dark:border-cyan-500/30 rounded-lg backdrop-blur-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }} // Appears after first paragraph
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-700 dark:text-cyan-300/90 font-mono leading-relaxed">
                <span className="text-purple-600 dark:text-green-400">&gt;&gt; </span>
                I'm particularly interested in <span className="text-blue-600 dark:text-cyan-400 font-semibold">full-stack development</span> and{" "}
                <span className="text-blue-600 dark:text-cyan-400 font-semibold">artificial intelligence</span>. 
                When I'm not coding, you can find me contributing to open-source projects, participating 
                in hackathons, or mentoring fellow students in our coding club.
              </p>
            </motion.div>
            
            {/* PARAGRAPH 3 - TO EDIT: Change text inside <p> tag */}
            <motion.div 
              className="p-6 bg-white/80 dark:bg-gray-900/50 border border-blue-300 dark:border-cyan-500/30 rounded-lg backdrop-blur-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }} // Last paragraph appears last
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-700 dark:text-cyan-300/90 font-mono leading-relaxed">
                <span className="text-purple-600 dark:text-green-400">&gt;&gt; </span>
                My goal is to create innovative solutions that make a positive impact on people's lives. 
                I believe in <span className="text-blue-600 dark:text-cyan-400 font-semibold">continuous learning</span> and staying up-to-date with the latest technologies 
                and best practices in software development.
              </p>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT COLUMN - INTERACTIVE CARDS (Education, Experience, Achievements) ===== */}
          <div className="space-y-6">
            
            {/* ===== EDUCATION CARD ===== */}
            <motion.div
              // Slides in from right with scale effect
              initial={{ opacity: 0, x: 50, scale: 0.9 }} // Starts smaller and to the right
              whileInView={{ opacity: 1, x: 0, scale: 1 }} // Grows to full size and normal position
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }} // Adjust delay to change when this appears
            >
              <Card 
                // Dynamic styling based on hover state
                className={`bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 cursor-pointer transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-sm ${
                  hoveredCard === 'education' 
                    ? 'scale-105 shadow-xl shadow-blue-500/20 dark:shadow-cyan-500/20 border-blue-400 dark:border-cyan-400' // When this card is hovered
                    : hoveredCard 
                      ? 'opacity-50 scale-95' // When another card is hovered
                      : 'hover:shadow-lg hover:border-blue-400 dark:hover:border-cyan-400/50' // Default hover
                }`}
                onMouseEnter={() => setHoveredCard('education')} // Set hover state
                onMouseLeave={() => setHoveredCard(null)} // Clear hover state
              >
                {/* Glowing overlay when hovered */}
                {hoveredCard === 'education' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 dark:from-cyan-500/10 to-transparent" />
                )}
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    {/* Icon with wiggle animation on hover */}
                    <motion.div 
                      className="p-3 rounded-lg bg-blue-500/10 dark:bg-cyan-500/20 border border-blue-300 dark:border-cyan-500/30"
                      animate={hoveredCard === 'education' ? { rotate: [0, 10, -10, 0] } : {}} // Wiggle effect
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-blue-700 dark:text-cyan-300 font-mono flex items-center gap-2 font-semibold">
                        <Terminal className="w-4 h-4" />
                        Education
                      </h3>
                      {/* Education details - only shown when card is hovered */}
                      {hoveredCard === 'education' && (
                        <motion.ul 
                          className="space-y-2 mt-3"
                          initial={{ opacity: 0, y: -10 }} // Starts hidden, slightly above
                          animate={{ opacity: 1, y: 0 }} // Slides down and fades in
                          transition={{ duration: 0.3 }}
                        >
                          {/* Map through education details array */}
                          {educationDetails.map((detail, index) => (
                            <motion.li 
                              key={index} 
                              className="text-sm text-gray-700 dark:text-cyan-300/80 flex items-start gap-2 font-mono"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }} // Each item appears with slight delay
                            >
                              <span className="text-purple-600 dark:text-green-400 mt-1">▸</span>
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
            {/* Same structure as Education card, but with green theme */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6 }} // Appears after Education card
            >
              <Card 
                className={`bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 cursor-pointer transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-sm ${
                  hoveredCard === 'experience' 
                    ? 'scale-105 shadow-xl shadow-purple-500/20 dark:shadow-green-500/20 border-purple-400 dark:border-green-400' 
                    : hoveredCard 
                      ? 'opacity-50 scale-95' 
                      : 'hover:shadow-lg hover:border-blue-400 dark:hover:border-cyan-400/50'
                }`}
                onMouseEnter={() => setHoveredCard('experience')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === 'experience' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 dark:from-green-500/10 to-transparent" />
                )}
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-purple-500/10 dark:bg-green-500/20 border border-purple-300 dark:border-green-500/30"
                      animate={hoveredCard === 'experience' ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Code className="w-6 h-6 text-purple-600 dark:text-green-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-purple-700 dark:text-green-300 font-mono flex items-center gap-2 font-semibold">
                        <Terminal className="w-4 h-4" />
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
                              className="text-sm text-gray-700 dark:text-cyan-300/80 flex items-start gap-2 font-mono"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="text-purple-600 dark:text-green-400 mt-1">▸</span>
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
            {/* Same structure as other cards, cyan theme */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.7 }} // Appears last
            >
              <Card 
                className={`bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 cursor-pointer transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-sm ${
                  hoveredCard === 'achievements' 
                    ? 'scale-105 shadow-xl shadow-blue-500/20 dark:shadow-cyan-500/20 border-blue-400 dark:border-cyan-400' 
                    : hoveredCard 
                      ? 'opacity-50 scale-95' 
                      : 'hover:shadow-lg hover:border-blue-400 dark:hover:border-cyan-400/50'
                }`}
                onMouseEnter={() => setHoveredCard('achievements')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === 'achievements' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 dark:from-cyan-500/10 dark:via-green-500/5 to-transparent" />
                )}
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-blue-500/10 dark:bg-cyan-500/20 border border-blue-300 dark:border-cyan-500/30"
                      animate={hoveredCard === 'achievements' ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-blue-700 dark:text-cyan-300 font-mono flex items-center gap-2 font-semibold">
                        <Terminal className="w-4 h-4" />
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
                              className="text-sm text-gray-700 dark:text-cyan-300/80 flex items-start gap-2 font-mono"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="text-purple-600 dark:text-green-400 mt-1">▸</span>
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