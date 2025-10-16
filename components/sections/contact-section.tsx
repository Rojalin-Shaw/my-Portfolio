"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub,
  FiExternalLink,
  FiSend,
  FiCheck
} from "react-icons/fi";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "rojalinshaw696@gmail.com",
    href: "mailto:rojalinshaw696@gmail.com",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91-7205522840",
    href: "tel:+917205522840",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Balasore, Odisha, India",
    href: "#",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "rojalin-shaw-7698a72a9",
    href: "https://linkedin.com/in/rojalin-shaw-7698a72a9",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "Rojalin-Shaw",
    href: "https://github.com/Rojalin-Shaw",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: FiExternalLink,
    label: "Portfolio",
    value: "portfolio-demo-link.com",
    href: "https://portfolio-demo-link.com",
    color: "from-purple-500 to-purple-700"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <Section id="contact" className="bg-gradient-to-br from-muted/20 to-primary/10">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's collaborate and bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 glass border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={!isFormValid || isSubmitting || submitted}
                >
                  {submitted ? (
                    <>
                      <FiCheck className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 mr-2"
                      >
                        <FiSend className="w-4 h-4" />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </AnimatedButton>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out through 
                any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 glass border-white/10 rounded-lg hover:border-primary/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {info.label}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {info.value}
                    </p>
                  </div>
                  {info.href.startsWith('http') && (
                    <FiExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
                <h4 className="font-bold mb-2">Ready to work together?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
                <div className="flex gap-3">
                  <AnimatedButton
                    size="sm"
                    onClick={() => window.open('https://linkedin.com/in/rojalin-shaw-7698a72a9', '_blank')}
                  >
                    <FiLinkedin className="w-4 h-4 mr-2" />
                    Connect
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Resume
                  </AnimatedButton>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}