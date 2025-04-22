'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [letters, setLetters] = useState<string[]>([]);
  const [titleLetters, setTitleLetters] = useState<string[]>([]);

  const text =
    "Every journey into the unknown starts with a single launch—make yours a secure one. At Secure365, we're here to guide your mission through this galaxy and beyond, crafting stellar websites, managing your IT infrastructure, harnessing the power of the cloud, and fortifying your digital defenses.";

  const titleText = 'Secure in This Galaxy — and the Next';

  useEffect(() => {
    setLetters(text.split(''));
    setTitleLetters(titleText.split(''));
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center text-white py-20 homesec"
    >
      <div className="mr-auto text-left z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated H1 */}
          <h1 className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 uppercase mainheding">
            {titleLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -50 }} // Start from -50px left
                animate={{ opacity: 1, x: 0 }} // Animate to 0px left
                transition={{
                  duration: 0.6,
                  delay: index * 0.06, // Delayed animation for each letter
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <p className="subheading">
            From Web Development to Cybersecurity: Chart Your Course with Secure365
          </p>
        </motion.div>

        {/* Animated Paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 leading-relaxed paragrph">
            Every journey into the unknown starts with a single launch—make yours a secure one. At
            Secure365, we're here to guide your mission through this galaxy and beyond, crafting
            stellar websites, managing your IT infrastructure, harnessing the power of the cloud,
            and fortifying your digital defenses.
            {/* {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04, // Each letter appears with a slight delay
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))} */}
          </p>

          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
            Start Your Mission
          </button>
        </motion.div>
      </div>
    </section>
  );
}
