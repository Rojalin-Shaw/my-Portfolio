"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Image from "next/image";
import { FiDownload, FiUser } from "react-icons/fi";

export function AboutSection() {
  return (
    <Section id="about" className="bg-gradient-to-br from-background to-muted/20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto lg:mx-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-full glow"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute inset-4 bg-background rounded-full overflow-hidden">
              <Image
                src="/images/Rojalin_photo1.jpg"
                alt="Rojalin Shaw - About"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              I'm a B.Tech Computer Science student at <strong className="text-foreground">Centurion University of Technology and Management</strong>, 
              specializing in Software Technology with a passion for building innovative software solutions.
            </p>
            
            <p>
              With expertise in <strong className="text-primary">Java, SAP ABAP and JavaScript</strong>, 
              I work with modern frameworks like <strong className="text-primary">Spring Boot</strong> to create 
              robust full-stack applications. My strong problem-solving mindset drives me to tackle complex challenges 
              and deliver efficient solutions.
            </p>
            
            <p>
              I thrive in collaborative environments and believe in the power of teamwork to achieve exceptional results. 
              Whether it's developing a full-stack e-commerce platform or building healthcare applications, 
              I'm committed to writing clean, maintainable code and following best practices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AnimatedButton 
              size="lg"
              className="flex items-center gap-2"
              onClick={() => {
                // Create a temporary link to download resume
                const link = document.createElement('a');
                link.href = '/docs/Rojalinresume.pdf'; // You'll need to add your actual resume file
                link.download = '/docs/Rojalinresume.pdf';
                link.click();
              }}
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </AnimatedButton>
            
            <AnimatedButton 
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FiUser className="w-4 h-4" />
              Hire Me
            </AnimatedButton>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { number: "8.85", label: "CGPA", suffix: "/10" },
              { number: "10+", label: "Projects", suffix: "" },
              { number: "5", label: "Certifications", suffix: "" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}