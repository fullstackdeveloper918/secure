'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  return (
    <section ref={sectionRef} className="min-h-screen text-white py-40 relative aboutsec">
      <motion.div className="aboutsec" style={{ opacity, y }}>
        <span className="headingTag">Our mission</span>

        <h2 className="">
          Navigating Your Business Through the Stars… and <b>Safeguarding Every Step</b>
        </h2>

        <div className="">
          {/* <h3 className="text-xl md:text-2xl mb-4 text-purple-200">
            Navigating Your Business Through the Stars... and Safeguarding Every Step
          </h3> */}

          <p className="text-md xxl:text-lg mb-6 text-gray-300">
            Think of Secure365 as your interstellar co-pilot, guiding you safely through the
            ever-expanding cosmos of modern technology. We blend visionary web development with
            rock-solid IT services, cloud solutions, and cybersecurity—ensuring that no matter which
            galaxy (or market) you're aiming for, you'll arrive unscathed.
          </p>

          <p className="text-lg text-gray-300">
            Our mission? Simple: to help your brand thrive and remain secure, from initial launch to
            the far reaches of tomorrow.
          </p>
        </div>

        {/* Orbital path decoration */}
        {/* <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div> */}

        {/* Floating satellite */}
        <motion.div
          className="absolute w-8 h-8"
          animate={{
            rotate: 360,
            x: [0, 100, 0, -100, 0],
            y: [0, -50, -100, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          style={{ right: '20%', top: '30%' }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-blue-400 rounded-sm transform rotate-45"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
