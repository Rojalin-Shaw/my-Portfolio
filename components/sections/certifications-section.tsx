"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";
import { SiGeeksforgeeks, SiSap } from "react-icons/si";

const certificationsData = [
  {
    title: "Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    year: "2024",
    description: "Comprehensive course covering fundamental data structures and algorithmic problem-solving techniques essential for software development.",
    certificateUrl: "https://www.geeksforgeeks.org/certificate/49a93dbe98fd5858db8a12222ffe2389",
    icon: SiGeeksforgeeks,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Database Management Systems",
    issuer: "Scaler",
    year: "2024", 
    description: "Advanced concepts in database design, SQL optimization, transaction management, and modern database technologies.",
    certificateUrl: "https://moonshot.scaler.com/s/li/4m-OgFtDnc",
    icon: FiAward,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Back-End Developer - ABAP Cloud",
    issuer: "SAP",
    year: "2025",
    description: "This certification verifies that you possess ABAP programming language the cores based on ABAP RESTful Application Programming Model on SAP Business Technology Platform ",
    certificateUrl: "https://www.credly.com/badges/1f43e1a4-cb77-4c28-8a8a-9f16df9010a2/public_url",
    icon: SiSap,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "ABAP RESTful Application",
    issuer: "SAP",
    year: "2025",
    description: "Transactional Apps with the ABAP RESTful Application Programming Model(RAP).",
    certificateUrl: "/doc/SAP CERTIFICATE.pdf",
    icon: SiSap,
    color: "from-blue-500 to-indigo-600"
  }
];

export function CertificationsSection() {
  return (
    <Section id="certifications" className="bg-gradient-to-br from-muted/10 to-primary/5">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in software development and computer science fundamentals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full glass border-white/10 hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <FiCalendar className="w-4 h-4" />
                      {cert.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gradient group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <AnimatedButton
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:border-primary/50"
                      onClick={() => window.open(cert.certificateUrl, '_blank')}
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </AnimatedButton>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-16"
        >
          {[
            { number: "2", label: "Certifications", suffix: "+" },
            { number: "100", label: "Hours Learning", suffix: "+" },
            { number: "2024", label: "Year Certified", suffix: "" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass border-white/10 rounded-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-primary">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}