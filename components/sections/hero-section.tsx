"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Section } from "@/components/ui/section";
import { 
  FiMail, 
  FiPhone, 
  FiLinkedin, 
  FiGithub, 
  FiExternalLink,
  FiMapPin
} from "react-icons/fi";

const roles = [
  "Full Stack Developer",
  "Java Developer",
  "SAP ABAP Consultant",
  "Node.js Developer"
];

const quickLinks = [
  {
    icon: FiMail,
    label: "rojalinshaw696@gmail.com",
    href: "mailto:rojalinshaw696@gmail.com"
  },
  {
    icon: FiPhone,
    label: "+91-7205522840",
    href: "tel:+917205522840"
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn Profile",
    href: "https://linkedin.com/in/rojalin-shaw-7698a72a9"
  },
  {
    icon: FiGithub,
    label: "GitHub Profile",
    href: "https://github.com/Rojalin-Shaw"
  },
  {
    icon: FiExternalLink,
    label: "Portfolio",
    href: "https://portfolio-demo-link.com"
  },
  {
    icon: FiMapPin,
    label: "Balasore, Odisha, India",
    href: "#"
  }
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-gradient">Rojalin Shaw</span>
          </h1>
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl text-muted-foreground h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {roles[currentRole]}
          </motion.span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about building innovative software solutions with modern technologies.
          Specializing in full-stack development with Java, Spring Boot, SAP ABAP Consultant and Node.js.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <AnimatedButton
            size="lg"
            onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6"
          >
            View Resume
          </AnimatedButton>
          <AnimatedButton
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6"
          >
            Contact Me
          </AnimatedButton>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              className="flex items-center gap-3 p-4 glass border-white/10 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -2 }}
            >
              <link.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </Section>
  );
}