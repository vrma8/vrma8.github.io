import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Terminal, 
  Instagram, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { motion } from 'motion/react';
import { BinaryRain } from './BinaryRain';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "24BCS096@nith.ac.in";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    toast.success('Email copied to clipboard!', {
      className: 'font-mono text-xs',
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "05accb4d-e322-480c-acd4-66e6b49edd64");
    formData.append("from_name", "Portfolio Contact Form");
    
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast.success('Secure transmission complete. I will get back to you soon!', {
          className: 'font-mono text-xs',
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
          (e.target as HTMLFormElement).reset();
        }, 6000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Transmission failed. Direct email available on the left.', {
        className: 'font-mono text-xs',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />

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
            <Terminal className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Encrypted Channel</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight flex items-center justify-center gap-3 text-black dark:text-white">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" />
            <span>Initialize Contact</span>
          </h2>
          <p className="text-neutral-500 font-mono text-sm sm:text-base mt-2 max-w-xl mx-auto">
            <span>/* Open for software engineering internships, security research collaborations, and open-source projects */</span>
          </p>
        </motion.div>

        {/* ===== 2-COLUMN CONTACT GRID ===== */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Communication Hub & Quick Copy (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-4"
          >
            {/* Status Card */}
            <Card className="bg-white/90 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 p-6 backdrop-blur-sm shadow-sm font-mono">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-black dark:text-white uppercase tracking-wider">
                  Transmission Status: Ready
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Currently pursuing B.Tech CSE at NIT Hamirpur. Actively seeking Summer 2025/2026 internships, research positions, and systems challenges.
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-500 pt-2 border-t border-neutral-100 dark:border-neutral-900">
                <Clock className="w-3.5 h-3.5" />
                <span>Typical response latency: &lt; 24 hours</span>
              </div>
            </Card>

            {/* Email Card with 1-Click Copy */}
            <Card className="bg-white/90 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 p-6 backdrop-blur-sm shadow-sm font-mono flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                  // Primary Communication Channel
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-black dark:text-white shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-black dark:text-white truncate">
                      {emailAddress}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCopyEmail}
                    className="h-8 px-2.5 text-xs font-mono hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white shrink-0 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </span>
                    )}
                  </Button>
                </div>
              </div>

              {/* Location & Institute */}
              <div className="pt-6 space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>NIT Hamirpur, Himachal Pradesh, India</span>
                </div>
              </div>

              {/* Verified Direct Handles */}
              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-900 space-y-2.5">
                <span className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                  // Verified Digital Coordinates
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="https://github.com/vrma8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 hover:border-black dark:hover:border-white transition-all text-center flex flex-col items-center gap-1 text-xs text-neutral-700 dark:text-neutral-300 group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform text-black dark:text-white" />
                    <span className="text-[11px]">GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/ravi-kumar-verma-nith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 hover:border-black dark:hover:border-white transition-all text-center flex flex-col items-center gap-1 text-xs text-neutral-700 dark:text-neutral-300 group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform text-black dark:text-white" />
                    <span className="text-[11px]">LinkedIn</span>
                  </a>

                  <a
                    href="https://instagram.com/r_a_v_i_v_e_r_m_a_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 hover:border-black dark:hover:border-white transition-all text-center flex flex-col items-center gap-1 text-xs text-neutral-700 dark:text-neutral-300 group"
                  >
                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform text-black dark:text-white" />
                    <span className="text-[11px]">Instagram</span>
                  </a>
                </div>
              </div>
            </Card>

          </motion.div>

          {/* RIGHT COLUMN: Terminal Message Transmission Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="bg-white/95 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm shadow-sm overflow-hidden h-full flex flex-col">
              
              {/* Form Terminal Bar */}
              <div className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                  <span className="text-black dark:text-white font-semibold ml-2">
                    transmission.sh
                  </span>
                </div>
                <span className="text-neutral-400 text-xs">
                  protocol://web3forms
                </span>
              </div>

              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 font-mono my-auto">
                    <div className="p-3.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        Packet Delivered Successfully
                      </h3>
                      <p className="text-xs text-neutral-500 max-w-sm">
                        Your message has been safely routed to Ravi's inbox. Expect a response shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 font-mono">
                    
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                        <span className="text-neutral-400 dark:text-neutral-500">&gt;</span>
                        <span>--name</span>
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Ada Lovelace"
                        className="bg-neutral-50/80 dark:bg-neutral-900/50 border-neutral-300 dark:border-neutral-800 text-black dark:text-white font-mono text-xs focus-visible:ring-black dark:focus-visible:ring-white h-10"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                        <span className="text-neutral-400 dark:text-neutral-500">&gt;</span>
                        <span>--email</span>
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="ada@analytical.engine"
                        className="bg-neutral-50/80 dark:bg-neutral-900/50 border-neutral-300 dark:border-neutral-800 text-black dark:text-white font-mono text-xs focus-visible:ring-black dark:focus-visible:ring-white h-10"
                      />
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                        <span className="text-neutral-400 dark:text-neutral-500">&gt;</span>
                        <span>--subject</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Collaboration / Summer Internship"
                        className="bg-neutral-50/80 dark:bg-neutral-900/50 border-neutral-300 dark:border-neutral-800 text-black dark:text-white font-mono text-xs focus-visible:ring-black dark:focus-visible:ring-white h-10"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                        <span className="text-neutral-400 dark:text-neutral-500">&gt;</span>
                        <span>--message</span>
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Describe the opportunity, codebase challenge, or collaborative inquiry..."
                        className="bg-neutral-50/80 dark:bg-neutral-900/50 border-neutral-300 dark:border-neutral-800 text-black dark:text-white font-mono text-xs focus-visible:ring-black dark:focus-visible:ring-white resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 border border-black dark:border-white font-mono shadow-md transition-all cursor-pointer h-10"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Routing packets...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Execute Transmission</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-70" />
                        </>
                      )}
                    </Button>

                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
