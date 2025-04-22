'use-client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Layers, Users, Lock } from 'lucide-react';
import whatusImage3 from '../../../public/images/1.svg';
import Image from 'next/image';
import whatusImage4 from '../../../public/images/4.svg';
import whatusImage5 from '../../../public/images/5.svg';
import CardSpotlightDemo from '@/components/ui/cardSpotlight/CardSpotlightDemo.jsx';

function PainSection() {
  const firstSectionRef = useRef(null);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const { scrollYProgress: firstSectionProgress } = useScroll({
    target: firstSectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(firstSectionProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const gapSpacing = useTransform(smoothProgress, [0, 1], [250, 20]);

  const fontSize = useTransform(smoothProgress, [0.3, 0.7], ['3vw', '1000vw']);
  const scale = useTransform(smoothProgress, [0.2, 0.5], [1, 1.8]);
  const backgroundColor = useTransform(smoothProgress, [0.4, 0.5], ['#FFFFFF', '#000000']);

  useEffect(() => {
    return smoothProgress.on('change', (value) => {
      setShowSecondSection(value >= 0.5);
    });
  }, [smoothProgress]);

  const cards = [
    {
      icon: whatusImage3,
      title: 'Information Security Solutions',
      description:
        'Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.',
    },
    {
      icon: whatusImage4,
      title: 'Comprehensive Solutions',
      description:
        'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies.',
    },
    {
      icon: whatusImage5,
      title: 'Victim Approach',
      description:
        'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing real-world strategies.',
    },
    {
      icon: whatusImage4,
      title: 'Advanced Protection',
      description:
        'Secure365 provides innovative approaches to combat cyber threats, ensuring the highest security standards.',
    },
  ];

  // ✅ Duplicate cards for infinite loop
  const duplicatedCards = [...cards, ...cards];

  useEffect(() => {
    return gapSpacing.on('change', (value) => {
      setIsFixed(value >= 120); // ✅ Convert MotionValue to state
    });
  }, [gapSpacing]);

  console.log('fixed', isFixed);

  return (
    <div className="relative">
      <div ref={firstSectionRef} className="mainCoantinersec">
        <motion.section
          style={{ backgroundColor }}
          className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.h2
            style={{ fontSize, scale }}
            className="text-center font-bold px-4 transition-colors duration-300 whitespace-nowrap"
          >
            We Understand Your Pain
          </motion.h2>
        </motion.section>
      </div>

      {showSecondSection && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[576px] inset-0 flex flex-col items-center justify-center bg-black text-white md:p-10 blacksec p-2 overflow-hidden"
        >
          <motion.h2 className=" text-white font-bold text-center z-10 xl:mb-20 md:mb-12 mb-10 xxl:text-7xl xl:text-5xl text-3xl ">
            What Makes Us Different?
          </motion.h2>
          <div className="w-full sliderSec">
            {/* // style={{ marginTop: gapSpacing }}> */}
            {/* {duplicatedCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-[400px] h-96 bg-black border border-white/20 backdrop-blur-sm rounded-2xl p-8 transition-colors duration-300 slidecol"
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-6">
                      <Image src={card.icon} width={60} height={60} />
                    </div>
                    <h3 className="text-white md:mb-4  mb-2 cardtitile">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 cardDecription">
                      {card.description}
                    </p>
                  </motion.div>
                ))} */}
            <CardSpotlightDemo />
            {/* </motion.div> */}
          </div>
        </motion.section>
      )}
    </div>
  );
}

export default PainSection;
