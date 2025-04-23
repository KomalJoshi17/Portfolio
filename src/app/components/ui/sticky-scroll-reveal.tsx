'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define certificates data
const certificates = [
  {
    title: 'Full Stack Development',
    description: 'Certified in MERN Stack development from XYZ Institute.',
    image: '/assets/certificates/webdev.png',
  },
  {
    title: 'UI/UX Design',
    description: "Completed Google's UI/UX certification.",  // Changed single quote to double quotes to handle the apostrophe
    image: '/assets/certificates/react.png',
  },
  {
    title: 'Cloud Fundamentals',
    description: 'Azure fundamentals certification by Microsoft.',
    image: '/assets/certificates/aws.png',
  },
];

// StickyScroll component
export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  const gradientThemes = [
    "linear-gradient(135deg, #4C1D95, #831843)",     // deep violet to dark rose
    "linear-gradient(135deg, #082F49, #1E3A8A)",     // deep cyan to navy
    "linear-gradient(135deg, #7C2D12, #713F12)",     // burnt orange to olive
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(gradientThemes[0]);

  useEffect(() => {
    setBackgroundGradient(gradientThemes[activeCard % gradientThemes.length]);
  }, [activeCard, gradientThemes]);

  return (
    <div className="py-10">
      <div className="text-center mb-8 -mt-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500"
        >
          My Certificates
        </motion.h2>
      </div>

      <motion.div
        animate={{
          background: backgroundGradient,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative flex h-[36rem] justify-center overflow-y-auto rounded-xl p-10 transition-all duration-500"
        ref={ref}
      >
        {/* Content area */}
        <div id="certifications" className="scroll-mt-51 relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                className="my-24"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  scale: activeCard === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Image Section */}
                <div className="relative w-full h-48 mb-6">
                  <motion.div
                    className="absolute inset-0 z-10 w-full h-full overflow-hidden rounded-lg shadow-lg shadow-black/30"
                    style={{
                      backgroundImage: `url(${item.content?.props?.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: "scale(1.1)",
                    }}
                    animate={{
                      transform: "scale(1)",
                      opacity: activeCard === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 rounded-lg">
                    <h2 className="text-4xl font-extrabold text-white">{item.title}</h2>
                  </div>
                </div>

                <p className="mt-6 max-w-sm text-slate-200 text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        {/* Sticky visual preview */}
        <motion.div
          style={{
            background: backgroundGradient,
          }}
          className={cn(
            "sticky top-10 hidden h-72 w-80 overflow-hidden rounded-2xl shadow-lg shadow-black/20 transition-all duration-500 lg:block",
            contentClassName
          )}
          initial={{ opacity: 0.8, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </motion.div>
    </div>
  );
};

// StickyScrollRevealDemo component
export const StickyScrollRevealDemo = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });

  const gradientThemes = [
    'linear-gradient(135deg, #4C1D95, #831843)',
    'linear-gradient(135deg, #082F49, #1E3A8A)',
    'linear-gradient(135deg, #7C2D12, #713F12)',
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(gradientThemes[0]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = certificates.map((_, index) => index / certificates.length);
    const closestIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  useEffect(() => {
    setBackgroundGradient(gradientThemes[activeCard % gradientThemes.length]);
  }, [activeCard, gradientThemes]);

  return (
    <div className="py-10">
      <div className="text-center mb-8 -mt-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500"
        >
          My Certificates
        </motion.h2>
      </div>

      <motion.div
        animate={{ background: backgroundGradient }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="relative flex h-[36rem] justify-center overflow-y-auto rounded-xl p-10 transition-all duration-500"
        ref={ref}
      >
        {/* Scroll Content */}
        <div id="certifications" className="scroll-mt-51 relative flex items-start px-4">
          <div className="max-w-2xl">
            {certificates.map((item, index) => (
              <motion.div
                key={item.title + index}
                className="my-24"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  scale: activeCard === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Image Background Card */}
                <div className="relative w-full h-48 mb-6">
                  <motion.div
                    className="absolute inset-0 z-10 w-full h-full overflow-hidden rounded-lg shadow-lg shadow-black/30"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    animate={{
                      transform: 'scale(1)',
                      opacity: activeCard === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 rounded-lg">
                    <h2 className="text-4xl font-extrabold text-white">{item.title}</h2>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 max-w-sm text-slate-200 text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        {/* Sticky Visual Preview */}
        // In the StickyScrollRevealDemo component
        <motion.div
          style={{
            background: backgroundGradient,
          }}
          className={cn(
            'sticky top-10 hidden h-72 w-80 overflow-hidden rounded-2xl shadow-lg shadow-black/20 transition-all duration-500 lg:block'
          )}
          initial={{ opacity: 0.8, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="relative w-full h-full">
            {/* Replace Image with a div with background image for simplicity */}
            <div 
              className="w-full h-full rounded-2xl"
              style={{
                backgroundImage: `url(${certificates[activeCard].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
