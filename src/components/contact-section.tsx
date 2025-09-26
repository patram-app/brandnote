"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openWhatsApp = () => {
    window.open("https://wa.me/9817285068", "_blank");
  };

  const callPhone = () => {
    window.open("tel:9817285068", "_self");
  };

  return (
    <section id="contact" className="pt-5  " ref={ref}>
      <div className="container  md:flex mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto md:mt-20 max-w-2xl text-center mb-10"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            BrandNote
          </h1>
          {/* <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Get in Touch
          </h2> */}
          <p className="mt-4 text-lg text-gray-50 text-pretty">
            Reach Students. Influence Families. <br /> Build Trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <Card className="border-0 bg-card shadow-xl rounded-b-none  hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <User className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      Varun
                    </h3>
                    <p className="text-muted-foreground">
                      +91 98172 85068
                    </p>
                  </div>
                </div>

                <div className=" flex  gap-4 md:grid-cols-2">
                  <Button
                    onClick={callPhone}
                    variant="outline"
                    size="lg"
                    className="flex items-center w-39 gap-3 p-6 h-auto hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <Phone className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Call Now</div>
                      
                    </div>
                  </Button>

                  <Button
                    onClick={openWhatsApp}
                    size="lg"
                    className="flex items-center gap-3 p-6 h-auto bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-90">Quick Response</div>
                    </div>
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Available Monday to Saturday, 9 AM to 7 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
