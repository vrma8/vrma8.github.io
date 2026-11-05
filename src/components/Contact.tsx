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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-neutral-950 dark:to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>Open for Opportunities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
            <span className="text-neutral-400 dark:text-neutral-600">$ </span>
            <span>Get In Touch</span>
          </h2>
          <p className="text-neutral-500 font-mono text-sm sm:text-base mt-2 max-w-xl mx-auto">
            <span>// Open for software engineering internships, technical collaborations, and inquiries</span>
          </p>
        </motion.div>

        {/* ===== TWO-COLUMN CONTACT LAYOUT ===== */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* ===== LEFT COLUMN: CONTACT CHANNELS ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Status Card */}
            <Card className="bg-white/95 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm shadow-sm overflow-hidden font-mono">
              <div className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 flex items-center justify-between text-xs">
                <span className="text-neutral-500 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-black dark:text-white" />
                  <span>Channel: COMM_PORT_01</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
              <CardContent className="p-5 space-y-3 text-xs">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Have an exciting project, open internship role, or security query? Feel free to reach out directly through any of the channels below.
                </p>
                <div className="flex items-center gap-2 text-neutral-500 pt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Response SLA: Usually within 24 hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Email Quick Action Card */}
            <Card className="bg-white/95 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 transition-all backdrop-blur-sm shadow-sm font-mono">
              <CardContent className="p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shrink-0">
                    <Mail className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Primary Email</p>
                    <a 
                      href={`mailto:${emailAddress}`}
                      className="text-xs sm:text-sm font-medium text-black dark:text-white hover:underline truncate block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="shrink-0 h-8 px-2.5 text-xs gap-1.5 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="hidden sm:inline text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Social Channels List */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              <a
                href="https://github.com/vrma8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/70 hover:border-black dark:hover:border-neutral-600 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-black dark:text-white" />
                  <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/ravi-k-verma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/70 hover:border-black dark:hover:border-neutral-600 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-black dark:text-white" />
                  <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/vrma_nyt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/70 hover:border-black dark:hover:border-neutral-600 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-black dark:text-white" />
                  <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Instagram</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>

              <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/70 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-black dark:text-white" />
                  <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">Hamirpur, HP</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT COLUMN: INTERACTIVE TERMINAL FORM ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <Card className="bg-white/95 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm shadow-sm overflow-hidden">
              {/* Form Window Top Bar */}
              <div className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
                  <span className="ml-2 text-neutral-600 dark:text-neutral-400 font-medium">send_message.sh</span>
                </div>
                <span className="text-neutral-400 text-[11px]">// encrypted transmission</span>
              </div>

              <CardContent className="p-6 sm:p-8 font-mono">
                {isSubmitted ? (
                  <motion.div 
                    className="py-12 text-center space-y-4"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <div className="w-14 h-14 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-black dark:text-white">Message Transmitted!</h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
                        Thank you for reaching out. Your message has been received and I will reply shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs text-neutral-700 dark:text-neutral-300">
                          01 // Your Name <span className="text-neutral-400">*</span>
                        </Label>
                        <Input 
                          id="name" 
                          name="name"
                          type="text" 
                          placeholder="e.g. John Doe" 
                          required 
                          className="h-10 text-xs transition-all focus:ring-1 focus:ring-black dark:focus:ring-white bg-white dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-mono focus:border-black dark:focus:border-white"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs text-neutral-700 dark:text-neutral-300">
                          02 // Email Address <span className="text-neutral-400">*</span>
                        </Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="name@domain.com" 
                          required 
                          className="h-10 text-xs transition-all focus:ring-1 focus:ring-black dark:focus:ring-white bg-white dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-mono focus:border-black dark:focus:border-white"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-xs text-neutral-700 dark:text-neutral-300">
                        03 // Subject
                      </Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        type="text" 
                        placeholder="Project Discussion / Internship Role / Collaboration" 
                        className="h-10 text-xs transition-all focus:ring-1 focus:ring-black dark:focus:ring-white bg-white dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-mono focus:border-black dark:focus:border-white"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-xs text-neutral-700 dark:text-neutral-300">
                        04 // Message Content <span className="text-neutral-400">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Write your message or inquiry here..."
                        rows={4}
                        required
                        className="text-xs transition-all focus:ring-1 focus:ring-black dark:focus:ring-white resize-none bg-white dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-mono focus:border-black dark:focus:border-white"
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full gap-2 transition-all bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-mono shadow-md border border-black dark:border-white cursor-pointer" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Transmitting Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Transmission
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