'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PinContainer } from './LineAnim';

const leftVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const rightVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export function AnimatedPinDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log('Mouse entered');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log('Mouse left');
  };
  return (
    <div
      className="min-h-screen bg-black px-8 py-20 flex flex-wrap justify-around gap-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col gap-6">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={leftVariant}
          className="border border-slate-800 bg-slate-900 text-white rounded-2xl p-6 w-[30rem]"
        >
          <h2 className="text-lg font-semibold mb-2">AI in Healthcare</h2>
          <p className="text-sm text-slate-300">
            AI is transforming healthcare with predictive analytics and personalized treatments.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={leftVariant}
          className="border border-slate-800 bg-slate-900 text-white rounded-2xl p-6 w-[30rem]"
        >
          <h2 className="text-lg font-semibold mb-2">Robotics</h2>
          <p className="text-sm text-slate-300">
            Smart robots automate tasks from manufacturing to home assistance with precision.
          </p>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={leftVariant}
          className="border border-slate-800 bg-slate-900 text-white rounded-2xl p-6 w-[30rem]"
        >
          <h2 className="text-lg font-semibold mb-2">Edge AI</h2>
          <p className="text-sm text-slate-300">
            Bringing AI processing closer to data sources enables faster decisions in real time.
          </p>
        </motion.div>
      </div>

      {/* Center PinContainer */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center"
      >
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
          hover={isHovered}
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <div className="flex flex-1 w-full rounded-xl mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>

      <div className="flex flex-col gap-6 items-end">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rightVariant}
          className="border border-slate-800 bg-slate-900 text-white rounded-2xl p-6 w-[30rem]"
        >
          <h2 className="text-lg font-semibold mb-2">Neural Networks</h2>
          <p className="text-sm text-slate-300">
            Mimicking the brain, neural nets power voice recognition, image processing & more.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rightVariant}
          className="border border-slate-800 bg-slate-900 text-white rounded-2xl p-6 w-[30rem]"
        >
          <h2 className="text-lg font-semibold mb-2">Natural Language Processing</h2>
          <p className="text-sm text-slate-300">
            NLP helps machines understand human language — powering chatbots and translators.
          </p>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rightVariant}
          className="border border-slate-800 bg-slate-900 text-white rounded-2xl p-6 w-[30rem]"
        >
          <h2 className="text-lg font-semibold mb-2">Computer Vision</h2>
          <p className="text-sm text-slate-300">
            Enables AI to see and interpret visual information like faces, gestures, and scenes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
