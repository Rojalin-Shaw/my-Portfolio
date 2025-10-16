"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    icons: any[];
    githubUrl: string;
    liveUrl?: string | null;
    date: string;
    featured: boolean;
  };
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <Card className="h-full glass border-white/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
        <div className="relative">
          {/* Project Image */}
          <motion.div
            className="relative h-48 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Date Badge */}
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <FiCalendar className="w-3 h-3" />
              {project.date}
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </div>
            )}
          </motion.div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            {/* Tech Icons */}
            <div className="flex gap-2">
              {project.icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <AnimatedButton
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <FiGithub className="w-4 h-4 mr-2" />
                Code
              </AnimatedButton>
              
              {project.liveUrl ? (
                <AnimatedButton
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <FiExternalLink className="w-4 h-4 mr-2" />
                  Live
                </AnimatedButton>
              ) : (
                <div className="flex-1 relative group/tooltip">
                  <AnimatedButton
                    size="sm"
                    variant="outline"
                    className="w-full cursor-not-allowed opacity-50"
                    disabled
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </AnimatedButton>
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded text-xs opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap">
                    Demo coming soon
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}