import { ExternalLink, Github, Cpu, Layers, Sparkles, Terminal } from 'lucide-react';
import nexavoiceImg from '../assets/nexavoice.png';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { BinaryRain } from './BinaryRain';

const projects = [
  {
    id: 1,
    tag: "01",
    category: "OS & Systems Kernel",
    title: 'Agentic OS',
    summary: 'A x86_64 monolithic operating system kernel built from scratch in C and Assembly.',
    description: 'Engineered with 64-bit Long Mode, hybrid UEFI & Legacy BIOS boot, 4-level paging, FAT32 filesystem support, APIC interrupt management, preemptive task scheduling, and an interactive shell.',
    highlights: ['64-Bit Long Mode', 'UEFI & BIOS Hybrid Boot', '4-Level Virtual Memory Paging', 'FAT32 Filesystem Driver', 'APIC & Task Scheduler'],
    image: 'https://www.techspot.com/images2/news/bigimage/2025/11/2025-11-18-image-24.jpg',
    technologies: ['C', 'Assembly', 'x86_64', 'UEFI', 'FAT32', 'APIC'],
    github: 'https://github.com/vrma8/AOS',
    demo: 'https://github.com/vrma8/AOS',
    demoLabel: 'Kernel Repo',
  },
  {
    id: 2,
    tag: "02",
    category: "Conversational AI Platform",
    title: 'NexaVoice',
    summary: 'Real-time multi-lingual voice agent built for dynamic and noisy customer environments.',
    description: 'An intelligent support platform built on Agora Conversational AI that enables natural voice and text interactions. Engineered for realistic environments supporting multi-language switching (English, Hindi, Hinglish) and graceful interruption handling.',
    highlights: ['Low-Latency Voice Stream', 'Multi-Language (EN/HI/Hinglish)', 'Active Interruption Handling', 'PostgreSQL & Prisma Backend', 'Next.js 15 & WebRTC'],
    image: nexavoiceImg,
    technologies: ['Agora AI', 'TypeScript', 'Next.js', 'PostgreSQL', 'WebRTC', 'Prisma', 'Vercel'],
    github: 'https://github.com/vrma8/nexavoice',
    demo: 'https://nexavoice-v1.vercel.app',
    demoLabel: 'Live Platform',
  },  
];

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.15,
        type: 'spring',
        stiffness: 100,
      }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden bg-white/95 dark:bg-neutral-950/80 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-700 transition-all duration-300 backdrop-blur-sm group shadow-sm hover:shadow-xl dark:hover:shadow-white/5">
        
        {/* Project Card Header Bar */}
        <div className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-400 dark:text-neutral-500">
              [{project.tag}]
            </span>
            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active</span>
          </div>
        </div>

        {/* Project Image Banner */}
        <div className="relative overflow-hidden aspect-[16/9] w-full bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-neutral-700 text-white">
            {project.id === 1 ? <Cpu className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
          </div>

          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-xs font-mono text-neutral-300 line-clamp-1">
              // {project.summary}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <CardHeader className="pt-5 pb-3">
          <CardTitle className="text-xl sm:text-2xl font-mono text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
            {project.title}
          </CardTitle>
          <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
            {project.description}
          </p>
        </CardHeader>

        {/* Key Architectural Highlights */}
        <CardContent className="space-y-4 flex-grow font-mono">
          <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-900">
            <span className="text-xs text-neutral-500 block font-semibold">
              // Key Capabilities:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {project.highlights.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                  <span className="text-neutral-400 dark:text-neutral-600 font-bold">▸</span>
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="space-y-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-900">
            <span className="text-xs text-neutral-500 block font-semibold">
              // Technologies:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 font-mono text-xs font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        {/* Action Buttons */}
        <CardFooter className="gap-3 pt-3 pb-5 border-t border-neutral-100 dark:border-neutral-900">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 flex-1 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-neutral-400 transition-all font-mono"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </Button>

          <Button
            size="sm"
            className="gap-2 flex-1 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 border border-black dark:border-white font-mono shadow-sm transition-all"
            asChild
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              {project.demoLabel}
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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-neutral-950 dark:to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Featured Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
            <span className="text-neutral-400 dark:text-neutral-600">&lt;</span>
            <span>Projects</span>
            <span className="text-neutral-400 dark:text-neutral-600"> /&gt;</span>
          </h2>
          <p className="text-neutral-500 font-mono text-sm sm:text-base mt-2 max-w-xl mx-auto">
            <span>// Open-source kernels, AI platforms, and technical architecture</span>
          </p>
        </motion.div>

        {/* ===== PROJECT CARDS GRID ===== */}
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
