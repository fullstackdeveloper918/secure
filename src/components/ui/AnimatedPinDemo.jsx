'use client';
import React, { useState, useEffect } from 'react';
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
  const [isClient, setIsClient] = useState(false);

  // Ensures that the component renders only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log('Mouse entered');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log('Mouse left');
  };

  if (!isClient) {
    return null; // Prevents the hydration error by not rendering on the server
  }

  return (
    <div
      className="bg-black px-8 py-[10px] flex flex-col  justify-around gap-8 mb-16 newservice_sec"
      style={{ float: 'left', width: '100%' }}
    >
      {' '}
      <motion.h2 className=" w-full text-white font-bold text-center z-10 xl:mb-20 md:mb-2 mb-0 xxl:text-7xl xl:text-5xl text-3xl ">
      Discover Our Difference
      </motion.h2>
      <div
        className="bg-black px-8 py-[80px] flex  justify-around gap-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {' '}
        {/* Left Column */}
        <div className="flex flex-col gap-6 newssection ">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={leftVariant}
            className=" text-white rounded-2xl p-6 max-w-[25rem] innersecvice"
          >
            <h2 className="text-lg font-semibold mb-2 text-white">AI in Healthcares</h2>
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
            className="innersecvice text-white rounded-2xl p-6 max-w-[22rem]"
          >
            <h2 className="text-lg font-semibold mb-2 text-white">Robotics</h2>
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
            className=" innersecvice text-white rounded-2xl p-6 max-w-[20rem]"
          >
            <h2 className="text-lg font-semibold mb-2 text-white">Edge AI</h2>
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
          <PinContainer title="AI in Healthcares" href="#" hover={isHovered}>
            <div className="flex flex-col p-4 mt-5 tracking-tight text-slate-100/50 w-[20rem] h-[25rem]">
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
            className=" innersecvice text-white rounded-2xl p-6 max-w-[25rem]"
          >
            <h2 className="text-lg font-semibold mb-2 text-white">Neural Networks</h2>
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
            className=" innersecvice text-white rounded-2xl p-6 max-w-[22rem]"
          >
            <h2 className="text-lg font-semibold mb-2 text-white">Natural Language Processing</h2>
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
            className=" innersecvice text-white rounded-2xl p-6 max-w-[20rem]"
          >
            <h2 className="text-lg font-semibold mb-2 text-white">Computer Vision</h2>
            <p className="text-sm text-slate-300">
              Enables AI to see and interpret visual information like faces, gestures, and scenes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
