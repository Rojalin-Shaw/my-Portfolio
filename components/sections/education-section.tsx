"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FiAward, FiCalendar, FiTrendingUp } from "react-icons/fi";

const educationData = [
  {
    institution: "Centurion University of Technology and Management",
    location: "Bhubaneswar",
    degree: "B.Tech in Computer Science",
    duration: "2022 – Present",
    grade: "CGPA: 8.85/10",
    description: "Specializing in Software Technology with focus on modern development practices and emerging technologies.",
    status: "current"
  },
  {
    institution: "Bcet Higher Secondary School",
    location: "Balasore",
    degree: "Higher Secondary",
    duration: "2020 – 2022",
    grade: "Percentage: 76%",
    description: "Completed higher secondary education with strong foundation in Mathematics and Science.",
    status: "completed"
  },
  {
    institution: "Umamani Uchha BidyaPitha",
    location: "Balasore",
    degree: "Matriculation",
    duration: "2010 – 2020",
    grade: "Percentage: 60%",
    description: "Completed secondary education with focus on core subjects and extracurricular activities.",
    status: "completed"
  }
];

export function EducationSection() {
  return (
    <Section id="education" className="bg-gradient-to-br from-background to-muted/10">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey showcasing continuous learning and growth in computer science and technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center glow">
                  {edu.status === 'current' ? (
                    <FiTrendingUp className="w-4 h-4 text-white" />
                  ) : (
                    <FiAward className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Content Card */}
                <Card className={`ml-16 md:ml-0 md:w-1/2 p-6 glass border-white/10 hover:border-primary/50 transition-all duration-300 ${
                  edu.status === 'current' ? 'ring-2 ring-primary/20' : ''
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gradient">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {edu.location}
                        </p>
                      </div>
                      {edu.status === 'current' && (
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {edu.duration}
                        </span>
                        <span className="text-primary font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </Card>

                {/* Spacer for md layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}