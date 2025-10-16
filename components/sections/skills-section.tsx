"use client";

import { Section } from "@/components/ui/section";
import { SkillCard } from "@/components/ui/skill-card";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiLayers, 
  FiDatabase, 
  FiTool, 
  FiSettings,
  FiBriefcase
} from "react-icons/fi";

const skillsData = [
  {
    title: "Programming Languages",
    icon: <FiCode />,
    skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS", "SQL"]
  },
  {
    title: "Frameworks & Technologies",
    icon: <FiLayers />,
    skills: ["Spring Boot", "Angular", "Node.js", "REST API", "Linux"]
  },
  {
    title: "Databases",
    icon: <FiDatabase />,
    skills: ["MySQL", "SQLite"]
  },
  {
    title: "Developer Tools",
    icon: <FiTool />,
    skills: ["VS Code", "Android Studio", "IntelliJ IDEA", "Git", "GitHub"]
  },
  {
    title: "Cloud & Deployment",
    icon: <FiSettings />,
    skills: ["Heroku", "Vercel", "Cloud Deployment"]
  },
  {
    title: "Other Skills",
    icon: <FiBriefcase />,
    skills: ["Agile/Scrum", "Problem Solving", "Team Collaboration", "Project Management"]
  }
];

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-gradient-to-br from-muted/10 to-primary/5">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build amazing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "Java & Spring Boot", level: 90 },
              { skill: "JavaScript & Angular", level: 85 },
              { skill: "Database Design", level: 80 },
              { skill: "Node.js & APIs", level: 75 },
              { skill: "Cloud Deployment", level: 70 },
              { skill: "Mobile Development", level: 65 }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}