"use client";

import { motion } from "framer-motion";
import { FiArrowUp, FiHeart, FiMail, FiPhone, FiLinkedin, FiGithub, FiExternalLink } from "react-icons/fi";
import { AnimatedButton } from "@/components/ui/animated-button";

const socialLinks = [
  {
    icon: FiMail,
    href: "mailto:rojalinshaw696@gmail.com",
    label: "Email"
  },
  {
    icon: FiPhone,
    href: "tel:+917205522840",
    label: "Phone"
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/rojalin-shaw-7698a72a9",
    label: "LinkedIn"
  },
  {
    icon: FiGithub,
    href: "https://github.com/Rojalin-Shaw",
    label: "GitHub"
  },
  {
    icon: FiExternalLink,
    href: "https://portfolio-demo-link.com",
    label: "Portfolio"
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/20 to-primary/5 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold text-gradient mb-2">
              Rojalin Shaw
            </div>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer specializing in Java, Spring Boot, Angular & Node.js
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 glass border-white/10 rounded-full flex items-center justify-center hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <AnimatedButton
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="glass border-white/20"
            >
              <FiArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-border/20 text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Rojalin Shaw. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="w-4 h-4 text-red-500" />
            </motion.span>
            and passion for technology.
          </p>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  );
}