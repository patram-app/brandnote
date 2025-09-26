"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Target, Eye, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingDown,
      title: "Affordable compared to hoardings",
      description:
        "Get better ROI with significantly lower costs than traditional outdoor advertising",
    },
    {
      icon: Eye,
      title: "Long-lasting daily impressions",
      description:
        "Your ad stays visible for months, not seconds like digital ads",
    },
    {
      icon: Target,
      title: "Targeted to students + families",
      description:
        "Reach the exact demographic you want with precision targeting",
    },
    {
      icon: Heart,
      title: "Social goodwill: supporting free education material",
      description:
        "Build positive brand association by supporting student education",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="benefits" className="py-10 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Left Side: Advertiser Benefits Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Why Brands Choose Us
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Discover why smart businesses partner with BrandNote to elevate
            their marketing campaigns with impactful, cost-effective, and
            socially responsible advertising solutions.
          </p>
        </motion.div>

        {/* Right Side: Pinterest-like Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:block lg:w-2/3 columns-1 sm:columns-2 gap-6 space-y-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="break-inside-avoid"
            >
              <Card className="border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] overflow-hidden rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                        {benefit.icon && (
                          <benefit.icon className="h-5 w-5 text-accent" />
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Carousel className="w-full sm:hidden  overflow-visible">
          <CarouselContent className="-ml-4 flex gap-4">
            {benefits.map((benefit, index) => (
              <CarouselItem key={index} className="basis-[85%] flex-shrink-0">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <Card className="border-0 bg-card h-45 mb-5 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] overflow-hidden rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                            {benefit.icon && (
                              <benefit.icon className="h-5 w-5 text-accent" />
                            )}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
