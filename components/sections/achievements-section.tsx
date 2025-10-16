"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { 
  FiTrendingUp, 
  FiUsers, 
  FiGithub, 
  FiClock,
  FiTarget,
  FiAward
} from "react-icons/fi";

const achievementsData = [
  {
    icon: FiUsers,
    title: "Hackathon Participation",
    description: "Actively participated in hackathons, collaborating with diverse teams under time constraints to develop innovative solutions.",
    color: "from-purple-500 to-pink-600",
    highlight: "Team Collaboration"
  },
  {
    icon: FiGithub,
    title: "GitHub Contributions",
    description: "Built and deployed multiple projects including E-Commerce Website, Hotel Management System, and Healthcare App with active GitHub contributions.",
    color: "from-blue-500 to-cyan-600",
    highlight: "3+ Major Projects"
  },
  {
    icon: FiTarget,
    title: "Academic Excellence",
    description: "Maintained strong academic performance with 8.85/10 CGPA while actively working on practical projects and skill development.",
    color: "from-orange-500 to-red-600",
    highlight: "8.85 CGPA"
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Learning",
    description: "Committed to continuous skill development through certifications, online courses, and staying updated with latest technologies.",
    color: "from-indigo-500 to-purple-600",
    highlight: "Lifelong Learner"
  },
  {
    icon: FiAward,
    title: "Technical Proficiency",
    description: "Demonstrated expertise across multiple programming languages and frameworks, with successful project implementations and deployments.",
    color: "from-teal-500 to-blue-600",
    highlight: "Multi-Stack Developer"
  }
];

export function AchievementsSection() {
  return (
    <Section id="achievements" className="bg-gradient-to-br from-background to-muted/10">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key milestones and accomplishments that showcase my dedication to excellence in software development and professional growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="p-6 h-full glass border-white/10 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative space-y-4">
                  {/* Icon and Highlight */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center glow`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {achievement.highlight}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${achievement.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 glass border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Achievement Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: FiGithub, number: "3+", label: "Projects Deployed" },
                { icon: FiUsers, number: "Multiple", label: "Team Collaborations" },
                { icon: FiAward, number: "2", label: "Certifications" },
                { icon: FiTrendingUp, number: "8.85", label: "CGPA" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}