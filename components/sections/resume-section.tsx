"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card } from "@/components/ui/card";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";

export function ResumeSection() {
  return (
    <Section id="resume" className="bg-gradient-to-br from-muted/20 to-primary/5">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my latest resume or view it online to learn more about my experience and qualifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 glass border-white/10 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FiFileText className="w-10 h-10 text-white" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Rojalin Shaw - Resume</h3>
            <p className="text-muted-foreground mb-8">
              Full Stack Developer specializing in Java, Spring Boot, Angular, and Node.js.
              View my complete professional background, education, skills, and project experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                onClick={() => {
                  // Open resume in new tab
                  window.open('/docs/Rojalinresume.pdf', '_blank');
                }}
              >
                <FiExternalLink className="w-4 h-4" />
                View Online
              </AnimatedButton>
            </div>
          </Card>
        </motion.div>

        {/* Resume Preview Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 glass border-white/10">
            <h4 className="text-xl font-semibold mb-4">Resume Highlights</h4>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="font-semibold text-primary mb-2">Education</h5>
                <p className="text-sm text-muted-foreground">
                  B.Tech in Computer Science<br />
                  CGPA: 8.85/10
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-primary mb-2">Skills</h5>
                <p className="text-sm text-muted-foreground">
                  Java, Spring Boot, Angular, Node.js,<br />
                  MySQL, REST API, Git
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-primary mb-2">Projects</h5>
                <p className="text-sm text-muted-foreground">
                  E-Commerce Website<br />
                  Hotel Management System<br />
                  Healthcare App
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-primary mb-2">Certifications</h5>
                <p className="text-sm text-muted-foreground">
                  Data Structures & Algorithms<br />
                  Database Management Systems
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}