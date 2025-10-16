"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export function PhotoSection() {
  return (
    <Section id="photo" className="py-20 bg-gradient-to-br from-primary/5 to-purple-500/5">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          <motion.div
            className="relative w-64 h-64 mx-auto"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-full glow animate-pulse" />
            <div className="absolute inset-2 bg-background rounded-full overflow-hidden">
              <Image
                src="/images/Rojalin_photo11.jpg"
                alt="Rojalin Shaw - Professional Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </motion.div>
          
          {/* Floating particles */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-primary/60 rounded-full"
              style={{
                top: `${20 + Math.sin(index * Math.PI / 3) * 40}%`,
                left: `${20 + Math.cos(index * Math.PI / 3) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            />
          ))}
        </motion.div>

        <motion.h2
          className="text-3xl font-bold mt-8 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, I'm Rojalin 👋
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mt-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Welcome to my digital space where creativity meets technology.
        </motion.p>
      </div>
    </Section>
  );
}