"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { FiCode, FiExternalLink, FiGithub } from "react-icons/fi";
import { SiAngular, SiSpring, SiKotlin, SiExpress } from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";

const projectsData = [
  {
    title: "Full-Stack E-Commerce Website",
    description: "A comprehensive e-commerce platform built with Angular frontend and Spring Boot backend. Features include user authentication, product catalog, shopping cart, order management, and payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    technologies: ["Angular", "Spring Boot", "MySQL", "REST API", "TypeScript", "Java"],
    icons: [SiAngular, SiSpring, FaJava],
    githubUrl: "https://github.com/Rojalin-Shaw/spring-angular-E-com-app.git",
    liveUrl: null,
    date: "Nov 2024",
    featured: true
  },
  {
    title: "Hotel Management System",
    description: "Advanced Java-based hotel management system with comprehensive booking management, room allocation, customer service features, and administrative controls for efficient hotel operations.",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    technologies: ["Java", "Advanced Java", "MySQL", "Swing", "JDBC"],
    icons: [FaJava],
    githubUrl: "https://github.com/Rojalin-Shaw/HotelManagementSystem.git",
    liveUrl: null,
    date: "Oct 2024",
    featured: false
  },
 
  {
    title: "Health Care App",
    description: "Mobile healthcare application developed in Kotlin providing appointment scheduling, patient records management, doctor consultation features, and health monitoring capabilities.",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    technologies: ["Kotlin", "Android Studio", "SQLite", "Material Design"],
    icons: [SiKotlin],
    githubUrl: "https://github.com/Rojalin-Shaw/Healthcareproject.git",
    liveUrl: null,
    date: "Oct 2024",
    featured: false
  },
   {
    title: "Chat Application",
    description: "A chat app is a software platform that allows users to send and receive instant messages, images, or videos in real-time.",
    image: "https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1725.jpg",
    technologies: ["node js", "express js","vercal"],
    icons: [FaNodeJs, SiExpress],
    githubUrl: "https://github.com/Rojalin-Shaw/HotelManagementSystem.git",
    liveUrl: null,
    date: "May 2025",
    featured: false
  }
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-gradient-to-br from-background to-muted/20">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills through real-world applications and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Featured Project Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gradient">Featured Project</h3>
          </div>
          
          {projectsData
            .filter(project => project.featured)
            .map((project, index) => (
              <div key={project.title} className="max-w-4xl mx-auto">
                <div className="glass border-primary/20 rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-purple-500/5">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative rounded-xl overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="w-4 h-4" />
                          View Code
                        </motion.a>
                        
                        {project.liveUrl ? (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        ) : (
                          <div className="flex items-center gap-2 px-4 py-2 border-2 border-muted-foreground/20 text-muted-foreground rounded-lg cursor-not-allowed relative group">
                            <FiExternalLink className="w-4 h-4" />
                            Demo Coming Soon
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                              Demo coming soon
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </Section>
  );
}