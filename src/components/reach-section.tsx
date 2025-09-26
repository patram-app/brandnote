"use client";

import { easeOut, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Home, GraduationCap, UserCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CombinedReachImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: "10,000+",
      label: "Students Reached Monthly",
      icon: "👥",
      description: "Direct student access",
    },
    {
      number: "500+",
      label: "Daily Impressions",
      icon: "👀",
      description: "During writing & study",
    },
    {
      number: "6-12",
      label: "Months Visibility",
      icon: "📅",
      description: "Sustained exposure",
    },
    {
      number: "Multiple",
      label: "Daily Touchpoints",
      icon: "🎯",
      description: "Home, class, coaching",
    },
  ];

  const mergedImpacts = [
    {
      icon: GraduationCap,
      title: "Students in Class",
      description:
        "Direct reach during lectures; visible to peers & teachers for credibility",
    },
    {
      icon: Home,
      title: "Family at Home",
      description:
        "Parents see your brand during homework, extending visibility",
    },
    {
      icon: Users,
      title: "Teachers & Educators",
      description:
        "Builds trust in classrooms & coaching centers across institutions",
    },
    {
      icon: UserCheck,
      title: "Friends & Peers",
      description:
        "Amplifies reach through social networks in daily study environments",
    },
  ];

  // Define left-to-right variants for mobile
  const mobileSlideVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.15, ease: easeOut },
    }),
  };

  return (
    <section
      id="reach-impact"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-100 text-black"
      ref={ref}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/60 mb-4">
            Reach & Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-pretty">
            Unprecedented visibility: One notebook drives multiple daily
            impressions for months
          </p>
        </motion.div>

        {/* Stats Grid - Mobile: 2 cols, Tablet: 2, Desktop: 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300 text-center h-full rounded-xl overflow-hidden">
                <CardContent className="p-4 md:p-6">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-semibold mb-1 md:mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Merged Impacts Section */}
        <motion.div
          className=" max-w-5xl mx-auto bg-black text-white p-4 md:p-8 rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Mobile Version */}
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              One Notebook <br /> Multiple Impressions
            </h2>
            <Carousel className="w-full overflow-x-visible">
              <CarouselContent className="-ml-2 md:-ml-4 flex gap-3">
                {mergedImpacts.map((impact, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-[85%] sm:basis-[45%] flex-shrink-0"
                  >
                    <motion.div
                      className="group h-full"
                      custom={index}
                      variants={mobileSlideVariants}
                    >
                      <Card className="bg-white backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300 text-center h-full rounded-xl overflow-hidden">
                        <CardContent className="p-4 md:p-6">
                          <div className="mx-auto mb-2 md:mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                            <impact.icon className="h-6 w-6 md:h-7 md:w-7 text-accent group-hover:scale-110 transition-transform" />
                          </div>
                          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                            {impact.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            {impact.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black " />
              <CarouselNext className="text-black " />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
