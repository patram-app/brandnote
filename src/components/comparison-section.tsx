"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeSlider, setActiveSlider] = useState(0)

  const comparisons = [
    {
      title: "Roadside Hoardings vs BrandNote",
      traditional: {
        name: "Roadside Hoardings",
        cost: "₹30k–50k/month",
        points: ["One-time visibility", "Easily forgotten", "Only seen if someone passes by", "Weather dependent"],
      },
      brandnote: {
        name: "BrandNote",
        cost: "More cost-effective",
        points: [
          "Daily visibility for months",
          "Seen by students, parents, teachers",
          "Visible at home, class, coaching centers",
          "Weather independent",
        ],
      },
    },
    {
      title: "FreeWater vs BrandNote",
      traditional: {
        name: "FreeWater Model",
        cost: "Single use",
        points: [
          "Ad visible only once",
          "Bottle thrown away after drinking",
          "No lasting impression",
          "Limited audience reach",
        ],
      },
      brandnote: {
        name: "BrandNote Model",
        cost: "Long-term value",
        points: [
          "Notebook used for months",
          "Ad visible every time student writes",
          "Creates lasting brand recall",
          "Multiple touchpoints daily",
        ],
      },
    },
  ]

  return (
    <section id="comparison" className="py-24 bg-black sm:mx-5 rounded-4xl  text-white curved-section relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance text-white mb-4">
            Why It&apos;s Better
          </h2>
          <p className="text-xl text-gray-300 text-pretty">
            Interactive comparison: See how BrandNote outperforms traditional advertising
          </p>
        </motion.div>

        {/* Comparison Slider Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl gap-1 p-2 flex border border-gray-700">
            {comparisons.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlider(index)}
                className={`px-8 py-4 rounded-xl transition-all duration-300 font-medium ${
                  activeSlider === index
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Comparison {index + 1}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeSlider}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">{comparisons[activeSlider].title}</h3>

          {/* Desktop Horizontal Layout */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Traditional Method */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <Card className="bg-red-900/20 border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 h-full backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-red-400 text-xl">
                    <XCircle className="h-6 w-6" />
                    {comparisons[activeSlider].traditional.name}
                  </CardTitle>
                  <p className="text-red-300 font-semibold">{comparisons[activeSlider].traditional.cost}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comparisons[activeSlider].traditional.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* VS Arrow */}
            <div className="flex items-center justify-center px-4">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="bg-accent/20 rounded-full p-6 border border-accent/30"
              >
                <ArrowRight className="h-8 w-8 text-accent" />
              </motion.div>
            </div>

            {/* BrandNote */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1"
            >
              <Card className="bg-accent/20 border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 h-full backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-accent text-xl">
                    <CheckCircle className="h-6 w-6" />
                    {comparisons[activeSlider].brandnote.name}
                  </CardTitle>
                  <p className="text-accent/80 font-semibold">{comparisons[activeSlider].brandnote.cost}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comparisons[activeSlider].brandnote.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 text-white"
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="lg:hidden space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-red-900/20 border-red-500/30 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-400">
                    <XCircle className="h-5 w-5" />
                    {comparisons[activeSlider].traditional.name}
                  </CardTitle>
                  <p className="text-red-300 text-sm">{comparisons[activeSlider].traditional.cost}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {comparisons[activeSlider].traditional.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-accent/20 border-accent/30 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <CheckCircle className="h-5 w-5" />
                    {comparisons[activeSlider].brandnote.name}
                  </CardTitle>
                  <p className="text-accent/80 text-sm">{comparisons[activeSlider].brandnote.cost}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {comparisons[activeSlider].brandnote.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-2 text-white">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Auto-advance indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-12 space-x-3"
        >
          {comparisons.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlider(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeSlider === index ? "bg-accent shadow-lg shadow-accent/50" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
