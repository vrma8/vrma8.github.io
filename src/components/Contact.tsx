import { Mail, MapPin, Send, CheckCircle2, Loader2, Terminal, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';
import { motion } from 'motion/react';
import { BinaryRain } from './BinaryRain';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    // Add your Web3Forms Access Key here (Get it free at https://web3forms.com)
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
        
        // Reset form after delay
        setTimeout(() => {
          setIsSubmitted(false);
          (e.target as HTMLFormElement).reset();
        }, 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Transmission failed. Direct link available in header.', {
        className: 'font-mono text-xs',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-neutral-950 dark:to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />

      {/* Glowing orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-300/10 dark:bg-white/5 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
            <span className="text-neutral-400 dark:text-neutral-600">$ </span>
            <span>Get In Touch</span>
          </h2>
          <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto font-mono text-sm">
            <span>// Initiating secure communication channel...</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-6 text-black dark:text-white font-mono flex items-center gap-2 font-semibold">
              <Terminal className="w-5 h-5 text-neutral-500" />
              Contact Information
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                style={{ originX: 0 }}
              >
                <Card className="bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 transition-all backdrop-blur-sm group shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-all">
                      <Mail className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">Email</p>
                      <p className="text-neutral-900 dark:text-neutral-100 font-mono text-sm">24BCS096@nith.ac.in</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                style={{ originX: 0 }}
              >
                <Card className="bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 transition-all backdrop-blur-sm group shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-all">
                      <Instagram className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">Instagram</p>
                      <p className="text-neutral-900 dark:text-neutral-100 font-mono text-sm">@vrma_nyt</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                style={{ originX: 0 }}
              >
                <Card className="bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-600 transition-all backdrop-blur-sm group shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-all">
                      <MapPin className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">Location</p>
                      <p className="text-neutral-900 dark:text-neutral-100 font-mono text-sm">Hamirpur HP, INDIA</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-white/90 dark:bg-neutral-950/70 border-neutral-200 dark:border-neutral-800 backdrop-blur-sm shadow-sm">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <motion.div 
                    className="py-12 text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-neutral-300 dark:border-neutral-700"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-black dark:text-white" />
                    </motion.div>
                    <h3 className="mb-2 text-black dark:text-white font-mono font-semibold">Message Sent!</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-mono">
                      <span>&gt;&gt; </span>
                      Connection established. Response incoming...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm text-neutral-800 dark:text-neutral-200 font-mono">
                        Name <span className="text-neutral-400 dark:text-neutral-500">*</span>
                      </Label>
                      <Input 
                        id="name" 
                        name="name"
                        type="text" 
                        placeholder="root@user" 
                        required 
                        className="transition-all focus:ring-1 focus:ring-black dark:focus:ring-white bg-white dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-mono focus:border-black dark:focus:border-white"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-neutral-800 dark:text-neutral-200 font-mono">
                        Email <span className="text-neutral-400 dark:text-neutral-500">*</span>
                      </Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="user@domain.com" 
                        required 
                        className="transition-all focus:ring-1 focus:ring-black dark:focus:ring-white bg-white dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-mono focus:border-black dark:focus:border-white"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm text-neutral-800 dark:text-neutral-200 font-mono">
                        Subject
                      </Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        type="text" 
                        placeholder="[TOPIC]" 
                        className="transition-all focus:ring-1 focus:ring-black dark:focus:ring-white bg-white dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-mono focus:border-black dark:focus:border-white"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm text-neutral-800 dark:text-neutral-200 font-mono">
                        Message <span className="text-neutral-400 dark:text-neutral-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="# Enter your message here..."
                        rows={5}
                        required
                        className="transition-all focus:ring-1 focus:ring-black dark:focus:ring-white resize-none bg-white dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-mono focus:border-black dark:focus:border-white"
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full gap-2 transition-all hover:gap-3 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-mono shadow-md border border-black dark:border-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
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