import { ExternalLink, Github, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { BinaryRain } from './BinaryRain';



const projects = [
  {
    id: 1, // Unique ID for each project (use sequential numbers)
    title: 'Agentic OS', // PROJECT NAME
    description: 'A x86_64 monolithic operating system kernel built from scratch in C and Assembly, featuring 64-bit Long Mode, hybrid UEFI & Legacy BIOS boot, 4-level paging, FAT32 filesystem support, APIC interrupt management, preemptive task scheduling, and an interactive shell.', // PROJECT DESCRIPTION
    image: 'https://www.techspot.com/images2/news/bigimage/2025/11/2025-11-18-image-24.jpg', // PROJECT IMAGE URL
    technologies: ['C', 'Assembly'], // TECH STACK (add/remove as needed)
    github: 'https://github.com/vrma8/AOS', // GITHUB REPO LINK
    demo: 'https://github.com/vrma8/AOS', // LIVE DEMO LINK (Points to repo as it's an OS)
  },
  
];

export function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black relative"
      // ===== SECTION FADE-IN ANIMATION =====
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }} // Triggers animation 100px before section enters view
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />
      
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Starts invisible, 20px below
          whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* TO EDIT SECTION TITLE: Change "Projects" text below */}
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono">
            <span className="text-blue-600 dark:text-green-400">&lt;</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-cyan-400 dark:via-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
            <span className="text-blue-600 dark:text-green-400">/&gt;</span>
          </h2>
          {/* TO EDIT SUBTITLE: Change text below */}
          <p className="text-center text-gray-600 dark:text-cyan-300/70 mb-12 max-w-2xl mx-auto font-mono text-sm">
            <span className="text-purple-600 dark:text-green-400"># </span>
            Showcasing my work
          </p>
        </motion.div>

        {/* ===== PROJECT CARDS GRID ===== */}
        {/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through projects array to create cards */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id} // Important: Each card needs unique key
              // ===== CARD ENTRANCE ANIMATION =====
              initial={{ opacity: 0, y: 50, scale: 0.9 }} // Starts invisible, below, and smaller
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Fades in, moves up, grows to full size
              viewport={{ once: false }}
              transition={{ 
                duration: 0.6, // Animation duration
                delay: 0.4 + index * 0.15, // Stagger: Each card appears 0.15s after previous
                type: "spring", // Spring physics for bounce effect
                stiffness: 100 // Lower = more bouncy, Higher = stiffer
              }}
              // ===== HOVER ANIMATION =====
              whileHover={{ y: -10, scale: 1.02 }} // Lifts up and grows slightly on hover
            >
              <Card className="flex flex-col overflow-hidden bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 transition-all backdrop-blur-sm group relative shadow-sm">
                {/* Glowing overlay - appears on hover (using Tailwind 'group' feature) */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 dark:from-cyan-500/0 dark:via-green-500/0 dark:to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 dark:group-hover:from-cyan-500/10 dark:group-hover:via-green-500/5 dark:group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />
                
                {/* ===== PROJECT IMAGE ===== */}
                <div className="relative overflow-hidden">
                  {/* Image zooms in on hover */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }} // Zoom effect
                    transition={{ duration: 0.3 }}
                  />
                  {/* Dark gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  {/* OS icon appears on hover (cybersecurity/technical theme) */}
                  <Cpu className="absolute top-4 right-4 w-6 h-6 text-blue-400 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* ===== PROJECT INFO ===== */}
                <CardHeader>
                  {/* Title changes color on hover */}
                  <CardTitle className="text-blue-700 dark:text-cyan-300 font-mono group-hover:text-purple-600 dark:group-hover:text-green-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* ===== TECH STACK BADGES ===== */}
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {/* Map through technologies array to create badges */}
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-blue-500/10 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 hover:bg-blue-500/20 dark:hover:bg-cyan-500/20 border border-blue-300 dark:border-cyan-500/30 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* ===== ACTION BUTTONS ===== */}
                <CardFooter className="gap-2">
                  {/* GitHub Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 flex-1 border-blue-400 dark:border-cyan-500/50 bg-blue-500/5 dark:bg-cyan-500/5 text-blue-700 dark:text-cyan-300 hover:bg-blue-500/20 dark:hover:bg-cyan-500/20 hover:text-blue-800 dark:hover:text-cyan-100 hover:border-blue-500 dark:hover:border-cyan-400 transition-all font-mono" 
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {/* Live Demo Button */}
                  <Button 
                    size="sm" 
                    className="gap-2 flex-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-600 dark:to-green-600 hover:from-blue-500 hover:to-purple-500 dark:hover:from-cyan-500 dark:hover:to-green-500 text-white font-mono shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/20 hover:shadow-blue-500/40 dark:hover:shadow-cyan-500/40 transition-all" 
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

