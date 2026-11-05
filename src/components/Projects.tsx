import { useState } from 'react';
import { ExternalLink, Github, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import nexavoiceImg from '../assets/nexavoice.png';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
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
  {
    id: 2, // Unique ID for each project (use sequential numbers)
    title: 'NexaVoice', // PROJECT NAME
    description: 'NexaVoice is an intelligent support platform built on Agora Conversational AI that enables natural voice and text interactions. It is engineered for realistic, high-stress environments where callers may be speaking in multiple languages (English, Hindi, Hinglish), interrupting the agent, or communicating from noisy locations.', // PROJECT DESCRIPTION
    image: nexavoiceImg, // PROJECT IMAGE URL
    technologies: ['Agora Conversational AI', 'TypeScript', 'PostgreSQL', 'Vercel', 'WebRTC', 'RESTAPI', 'Prisma', 'Next.js'], // TECH STACK (add/remove as needed)
    github: 'https://github.com/vrma8/nexavoice', // GITHUB REPO LINK
    demo: 'https://nexavoice-v1.vercel.app', // LIVE DEMO LINK ()
  },  
];

type Project = (typeof projects)[number];

// ===== PROJECT CARD COMPONENT =====
// Renders a single project card with a collapsible description.
// All cards have the same height in their default (collapsed) state.
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }} // Starts invisible, below, and smaller
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Fades in, moves up, grows to full size
      viewport={{ once: false }}
      transition={{
        duration: 0.6, // Animation duration
        delay: 0.4 + index * 0.15, // Stagger: Each card appears 0.15s after previous
        type: 'spring', // Spring physics for bounce effect
        stiffness: 100, // Lower = more bouncy, Higher = stiffer
      }}
      // ===== HOVER ANIMATION =====
      whileHover={{ y: -10, scale: 1.02 }} // Lifts up and grows slightly on hover
    >
      <Card className="flex flex-col overflow-hidden bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 transition-all backdrop-blur-sm group relative shadow-sm">
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-neutral-100/30 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* ===== PROJECT IMAGE ===== */}
        <div className="relative overflow-hidden">
          {/* Image zooms in on hover */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <Cpu className="absolute top-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* ===== PROJECT INFO ===== */}
        <CardHeader>
          <CardTitle className="text-black dark:text-white font-mono group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-neutral-600 dark:text-neutral-400 font-mono text-sm">
            <span className={!expanded ? 'line-clamp-3' : undefined}>
              {project.description}
            </span>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-0.5 mt-1 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white underline font-mono text-xs font-medium transition-colors"
              aria-expanded={expanded}
            >
              {expanded ? (
                <><ChevronUp className="w-3 h-3" /> Read less</>
              ) : (
                <><ChevronDown className="w-3 h-3" /> Read more</>
              )}
            </button>
          </CardDescription>
        </CardHeader>

        {/* ===== TECH STACK BADGES ===== */}
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 font-mono text-xs"
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
            className="gap-2 flex-1 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-neutral-400 transition-all font-mono"
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
            className="gap-2 flex-1 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 border border-black dark:border-white font-mono shadow-md transition-all"
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
  );
}

export function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-neutral-950 dark:to-black relative"
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
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
            <span className="text-neutral-400 dark:text-neutral-600">&lt;</span>
            <span>Projects</span>
            <span className="text-neutral-400 dark:text-neutral-600">/&gt;</span>
          </h2>
          <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto font-mono text-sm">
            <span># Selected engineering & open-source work</span>
          </p>
        </motion.div>

        {/* ===== PROJECT CARDS GRID ===== */}
        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
