"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { BookOpen, PenTool, Users, Zap } from "lucide-react";

export function WhatIsBrandNoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Direct Student Engagement",
      description:
        "Connect with students daily through free, high-quality notebooks, embedding your brand in their educational journey.",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Hyper-Targeted Advertising",
      description:
        "Gain guaranteed visibility with ads on notebook covers and pages that students see every time they study.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Extensive Distribution Reach",
      description:
        "Maximize your brand's reach via our extensive distribution network across schools, colleges, and coaching centers.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Months of Brand Exposure",
      description:
        "Achieve long-lasting impact as your brand remains visible for the entire academic year, outlasting digital ads.",
    },
  ];

  return (
    <section
      id="what-is-brandnote"
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      ref={ref}
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          <p className="text-xs md:text-sm font-semibold uppercase text-accent/80 tracking-[0.2em] mb-3">
            THE SMART ALTERNATIVE
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-accent to-foreground/80 leading-tight">
            Elevate Your Brand with Daily Visibility.
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-muted-foreground leading-relaxed">
            BrandNote connects brands with students through free notebooks,
            turning a classroom essential into a powerful, long-lasting
            advertising medium.
          </p>
        </motion.div>

        {/* Feature Grid - mobile first */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-card/60 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm md:hover:shadow-xl flex flex-col"
            >
              {/* Icon */}
              <div className="relative flex items-center justify-center w-14 h-14 bg-accent/10 text-accent rounded-xl mb-5">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
