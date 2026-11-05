import { GraduationCap, Briefcase, Award, Terminal, Code2, MapPin, Calendar, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';
import { BinaryRain } from './BinaryRain';

export function About() {
  const educationItems = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "National Institute of Technology, Hamirpur",
      period: "2024 — 2028",
      detail: "Focused on Operating Systems, Computer Networks, and Full-Stack Engineering."
    },
    {
      title: "Senior Secondary Education (Class XII)",
      institution: "CBSE Board",
      period: "2023",
      detail: "Physics, Chemistry, and Mathematics with Computer Science."
    },
    {
      title: "Matriculation (Class X)",
      institution: "CBSE Board",
      period: "2021",
      detail: "Foundation in science, mathematics, and computing."
    }
  ];

  const experienceItems = [
    {
      role: "Domain Lead",
      organization: "SHIELD NITH (Cybersecurity Society NITH)",
      description: "Leading technical workshops and hands-on sessions on web security and pentesting."
    },
    {
      role: "Executive Member",
      organization: "Robotics Society NITH",
      description: "Contributing to hardware-software integration, system design, and technical events."
    },
    {
      role: "Volunteer",
      organization: "Robotics Society & Entrepreneurship Cell NITH",
      description: "Assisted in organizing college-level hackathons, tech exhibitions, and speaker sessions."
    }
  ];

  const achievementItems = [
    {
      title: "Top 3% Globally",
      issuer: "TryHackMe",
      description: "Consistently ranked among the top percentile in global cybersecurity and web pentesting challenges."
    },
    {
      title: "Grand Finalist",
      issuer: "National Level Conversational AI Hackathon",
      description: "Recognized for building intelligent voice and audio processing systems in high-stress environments."
    }
  ];

  const focusAreas = [
    "Systems & OS Kernel",
    "Full-Stack Web Dev",
    "Web Application Pentesting",
    "Network Security",
    "Conversational AI",
    "Linux Systems"
  ];

  return (
    <motion.section 
      id="about" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-neutral-950 dark:to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      {/* Subtle ambient glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
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
            <span>Profile & Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
            <span className="text-neutral-400 dark:text-neutral-600">&lt;</span>
            <span>About Me</span>
            <span className="text-neutral-400 dark:text-neutral-600"> /&gt;</span>
          </h2>
          <p className="text-neutral-500 font-mono text-sm sm:text-base mt-2 max-w-xl mx-auto">
            <span>// Academic journey, key leadership roles, and technical milestones</span>
          </p>
        </motion.div>

        {/* ===== TWO-COLUMN CONTENT ===== */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* ===== LEFT COLUMN: TERMINAL BIO & FOCUS ===== */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Terminal Window Card */}
            <Card className="bg-white/90 dark:bg-neutral-950/80 border-neutral-200 dark:border-neutral-800 shadow-sm backdrop-blur-sm overflow-hidden">
              {/* Window Header Bar */}
              <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
                </div>
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                  vrma8:~/about.md
                </span>
                <Terminal className="w-3.5 h-3.5 text-neutral-400" />
              </div>

              <CardContent className="p-6 space-y-5 font-mono text-sm">
                <div className="space-y-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p>
                    <span className="text-neutral-400 dark:text-neutral-500 font-bold">&gt;&gt; </span>
                    Undergraduate student pursuing a <span className="text-black dark:text-white font-semibold">B.Tech in Computer Science & Engineering</span> at National Institute of Technology, Hamirpur.
                  </p>
                  <p>
                    <span className="text-neutral-400 dark:text-neutral-500 font-bold">&gt;&gt; </span>
                    Deeply fascinated by the intersection of <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">low-level systems</span> (kernel architecture, memory paging) and <span className="text-black dark:text-white font-semibold underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4">modern web engineering</span>.
                  </p>
                  <p>
                    <span className="text-neutral-400 dark:text-neutral-500 font-bold">&gt;&gt; </span>
                    Active offensive security practitioner with hands-on focus in web penetration testing and secure software development.
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Status:</span>
                    <span className="text-black dark:text-white font-medium">B.Tech CSE (Pre-Final)</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">University:</span>
                    <span className="text-black dark:text-white font-medium">NIT Hamirpur</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Location:</span>
                    <span className="text-black dark:text-white font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-400" /> India
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Graduation:</span>
                    <span className="text-black dark:text-white font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-400" /> 2028
                    </span>
                  </div>
                </div>

                {/* Technical Focus Tags */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
                  <span className="text-xs text-neutral-500 block">// Primary Domains</span>
                  <div className="flex flex-wrap gap-1.5">
                    {focusAreas.map((area) => (
                      <span 
                        key={area}
                        className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ===== RIGHT COLUMN: TIMELINE CARDS ===== */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* 1. Education Card */}
            <Card className="bg-white/90 dark:bg-neutral-950/80 border-neutral-200 dark:border-neutral-800 shadow-sm backdrop-blur-sm hover:border-black dark:hover:border-neutral-700 transition-all">
              <CardHeader className="pb-3 border-b border-neutral-100 dark:border-neutral-900">
                <CardTitle className="text-lg font-mono text-black dark:text-white flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <GraduationCap className="w-4 h-4 text-black dark:text-white" />
                  </div>
                  <span>Education & Academics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 font-mono">
                {educationItems.map((item, idx) => (
                  <div key={idx} className="relative pl-5 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-1">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-black dark:bg-white" />
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h4 className="text-sm font-semibold text-black dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs text-neutral-500 px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {item.institution}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-0.5">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 2. Experience & Leadership Card */}
            <Card className="bg-white/90 dark:bg-neutral-950/80 border-neutral-200 dark:border-neutral-800 shadow-sm backdrop-blur-sm hover:border-black dark:hover:border-neutral-700 transition-all">
              <CardHeader className="pb-3 border-b border-neutral-100 dark:border-neutral-900">
                <CardTitle className="text-lg font-mono text-black dark:text-white flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <Briefcase className="w-4 h-4 text-black dark:text-white" />
                  </div>
                  <span>Leadership & Campus Roles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 font-mono">
                {experienceItems.map((item, idx) => (
                  <div key={idx} className="relative pl-5 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-1">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h4 className="text-sm font-semibold text-black dark:text-white">
                        {item.role}
                      </h4>
                      <span className="text-xs text-neutral-500">
                        {item.organization}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 3. Achievements Card */}
            <Card className="bg-white/90 dark:bg-neutral-950/80 border-neutral-200 dark:border-neutral-800 shadow-sm backdrop-blur-sm hover:border-black dark:hover:border-neutral-700 transition-all">
              <CardHeader className="pb-3 border-b border-neutral-100 dark:border-neutral-900">
                <CardTitle className="text-lg font-mono text-black dark:text-white flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <Award className="w-4 h-4 text-black dark:text-white" />
                  </div>
                  <span>Key Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3 font-mono">
                {achievementItems.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
                    <div className="p-1.5 rounded bg-black text-white dark:bg-white dark:text-black shrink-0 mt-0.5">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-black dark:text-white">{item.title}</span>
                        <span className="text-xs text-neutral-500">— {item.issuer}</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}