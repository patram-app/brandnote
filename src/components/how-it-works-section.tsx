"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Variants } from "framer-motion";

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Contact us to book an ad slot",
      description:
        "Reach out to us via phone or WhatsApp to discuss your advertising needs and book your preferred slot.",
      icon: "📞",
    },
    {
      number: "02",
      title: "We print & distribute notebooks",
      description:
        "Your ad is professionally printed on high-quality notebooks and distributed free to students across colleges and coaching centers.",
      icon: "📚",
    },
    {
      number: "03",
      title: "Your brand stays in students' hands for months",
      description:
        "Unlike fleeting digital ads, your brand gets daily visibility as students use notebooks for classes, notes, and studying.",
      icon: "🎯",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // ✅ now valid
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-br from-background to-muted/20"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Simple, effective, and long-lasting advertising in just three steps
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-8 md:grid-cols-3"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full group">
                  <CardContent className="p-8">
                    {/* Step number background */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                      {step.number}
                    </div>

                    <div className="relative z-10">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.5,
                        }}
                        className="text-4xl mb-6"
                      >
                        {step.icon}
                      </motion.div>

                      <div className="text-sm font-mono text-accent font-semibold mb-4 tracking-wider">
                        STEP {step.number}
                      </div>

                      <h3 className="text-xl font-semibold text-card-foreground mb-4 leading-tight">
                        {step.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connecting line for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-20">
                        <motion.div
                          animate={{ scaleX: [0, 1, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.7,
                          }}
                          className="w-full h-full bg-accent origin-left"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
