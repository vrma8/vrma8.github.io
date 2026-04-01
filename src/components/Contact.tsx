import React from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, Terminal } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
      className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-black dark:to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== BINARY RAIN BACKGROUND ===== */}
      <BinaryRain />
      
      {/* Cyber grid background */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      />
      
      {/* Glowing orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-green-500/10 rounded-full blur-3xl"
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
          <h2 className="text-center mb-4 text-2xl md:text-5xl font-bold font-mono">
            <span className="text-purple-600 dark:text-green-400">$ </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-cyan-400 dark:via-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-cyan-300/70 mb-12 max-w-2xl mx-auto font-mono text-sm">
            <span className="text-purple-600 dark:text-green-400">// </span>
            Initiating secure communication channel...
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
            <h3 className="mb-6 text-blue-700 dark:text-cyan-300 font-mono flex items-center gap-2">
              <Terminal className="w-5 h-5" />
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
                <Card className="bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 hover:border-blue-500 dark:hover:border-cyan-400 transition-all backdrop-blur-sm group shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 dark:bg-cyan-500/20 border border-blue-300 dark:border-cyan-500/30 group-hover:bg-blue-500/20 dark:group-hover:bg-cyan-500/30 transition-all">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 dark:text-cyan-400 font-mono">Email</p>
                      <p className="text-gray-700 dark:text-cyan-300 font-mono text-sm">24BCS096@nith.ac.in</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                style={{ originX: 0 }}
              >
                <Card className="bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 hover:border-purple-500 dark:hover:border-green-400 transition-all backdrop-blur-sm group shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 dark:bg-green-500/20 border border-purple-300 dark:border-green-500/30 group-hover:bg-purple-500/20 dark:group-hover:bg-green-500/30 transition-all">
                      <Phone className="w-6 h-6 text-purple-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-purple-600 dark:text-green-400 font-mono">Phone</p>
                      <p className="text-gray-700 dark:text-cyan-300 font-mono text-sm">+91 ******9673</p>
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
                <Card className="bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 hover:border-blue-500 dark:hover:border-cyan-400 transition-all backdrop-blur-sm group shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 dark:bg-cyan-500/20 border border-blue-300 dark:border-cyan-500/30 group-hover:bg-blue-500/20 dark:group-hover:bg-cyan-500/30 transition-all">
                      <MapPin className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 dark:text-cyan-400 font-mono">Location</p>
                      <p className="text-gray-700 dark:text-cyan-300 font-mono text-sm">Hamirpur HP, INDIA</p>
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
            <Card className="bg-white/80 dark:bg-gray-900/50 border-blue-300 dark:border-cyan-500/30 backdrop-blur-sm shadow-sm">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <motion.div 
                    className="py-12 text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-purple-500/10 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/50 dark:border-green-500/50"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-purple-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="mb-2 text-purple-600 dark:text-green-400 font-mono">Message Sent!</h3>
                    <p className="text-sm text-gray-600 dark:text-cyan-300/70 font-mono">
                      <span className="text-purple-600 dark:text-green-400">&gt;&gt; </span>
                      Connection established. Response incoming...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm text-gray-700 dark:text-cyan-300 font-mono">
                        Name <span className="text-purple-600 dark:text-green-400">*</span>
                      </Label>
                      <Input 
                        id="name" 
                        name="name"
                        type="text" 
                        placeholder="root@user" 
                        required 
                        className="transition-all focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 bg-white dark:bg-black/50 border-gray-300 dark:border-cyan-500/30 text-gray-700 dark:text-cyan-300 placeholder:text-gray-400 dark:placeholder:text-cyan-300/30 font-mono focus:border-blue-400 dark:focus:border-cyan-400"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-gray-700 dark:text-cyan-300 font-mono">
                        Email <span className="text-purple-600 dark:text-green-400">*</span>
                      </Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="user@domain.com" 
                        required 
                        className="transition-all focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 bg-white dark:bg-black/50 border-gray-300 dark:border-cyan-500/30 text-gray-700 dark:text-cyan-300 placeholder:text-gray-400 dark:placeholder:text-cyan-300/30 font-mono focus:border-blue-400 dark:focus:border-cyan-400"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm text-gray-700 dark:text-cyan-300 font-mono">
                        Subject
                      </Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        type="text" 
                        placeholder="[TOPIC]" 
                        className="transition-all focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 bg-white dark:bg-black/50 border-gray-300 dark:border-cyan-500/30 text-gray-700 dark:text-cyan-300 placeholder:text-gray-400 dark:placeholder:text-cyan-300/30 font-mono focus:border-blue-400 dark:focus:border-cyan-400"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm text-gray-700 dark:text-cyan-300 font-mono">
                        Message <span className="text-purple-600 dark:text-green-400">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="# Enter your message here..."
                        rows={5}
                        required
                        className="transition-all focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 resize-none bg-white dark:bg-black/50 border-gray-300 dark:border-cyan-500/30 text-gray-700 dark:text-cyan-300 placeholder:text-gray-400 dark:placeholder:text-cyan-300/30 font-mono focus:border-blue-400 dark:focus:border-cyan-400"
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full gap-2 transition-all hover:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 dark:from-cyan-600 dark:to-green-600 dark:hover:from-cyan-500 dark:hover:to-green-500 font-mono shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/30 hover:shadow-blue-500/50 dark:hover:shadow-cyan-500/50 border border-blue-400/50 dark:border-cyan-400/50" 
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