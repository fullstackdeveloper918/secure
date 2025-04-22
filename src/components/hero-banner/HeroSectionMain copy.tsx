'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSectionMain() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const planetScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const planetY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const astronautY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const astronautRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-start pt-20 bg-hero-main"
      style={{ background: '/sky-stars.jpg' }}
      id="hero"
    >
      <motion.div
        className="absolute left-1/6 top-[20%] w-[300px] h-[300px]"
        style={{
          y: planetY,
          scale: planetScale,
          right: '-5%',
        }}
      >
        <Image
          src="/planet-blue.png"
          alt="Planet"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.div
        className="absolute right-[-5%] bottom-[-20%] w-[400px] h-[400px]"
        style={{
          y: astronautY,
          rotate: astronautRotate,
        }}
      >
        <Image
          src="/astronaut-white.png"
          alt="Astronaut"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </motion.div>

      <div className="container-fluid px-12 mx-auto relative z-10 pt-[100px]">
        <motion.div
          // className="max-w-3xl mx-auto md:mx-0 md:ml-auto text-left md:text-left"
          style={{ y: textY }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* <span className="
            bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text 
            text-transparent"></span> */}
            <span className="text-white">Secure in This Galaxy</span>
            <br />
            <span className="text-foreground dark:text-white">and the Next</span>
          </motion.h1>

          <motion.p
            className="text-xl text-foreground dark:text-blue-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From Web Development to Cybersecurity: Chart Your <br /> Course with Secure365
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          ></motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
