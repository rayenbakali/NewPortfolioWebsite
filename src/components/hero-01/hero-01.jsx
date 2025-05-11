import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowDownCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Software engineer", "Graphic designer", "Freelancer"];
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles]);
  return (
    <div className="h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Hi im Rayen Bakali
        </h1>
        <h1 className="text-2xl font-bold">
          <motion.span
            key={titleIndex}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: titleIndex * 0.2 }}
          >
            {titles[titleIndex]}
          </motion.span>
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          I'm a software engineer with a passion for building web applications
          and a freelance Graphic Designer
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get to know me <ArrowDownCircle className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            My other side
            <ArrowUpRight className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
