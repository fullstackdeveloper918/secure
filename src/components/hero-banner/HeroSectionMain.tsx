'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { ChevronRight, Shield, Rocket } from 'lucide-react';
import Link from 'next/link';
// import bannerobert from "../../../public/images/bannerobert.png";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  // Use a more efficient way to handle scroll animations
  // by reducing the number of transform calculations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Optimize parallax effects by using simpler transforms
  // and reducing the number of dependencies
  const planetY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Simplify animations to improve performance
  useEffect(() => {
    controls.start({
      y: [0, 15, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center bg-space-gradient "
      id="hero"
      style={{
        willChange: 'transform', // Hint to browser for optimization
        contain: 'layout paint size', // Improve rendering performance
      }}
    >
      {/* Stars background - using CSS background for better performance */}
      <div
        className="absolute inset-0 z-0 bg-stars"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Main purple planet - using hardware-accelerated transforms */}
      <motion.div
        className="absolute left-[10%] top-[20%] w-[300px] h-[300px]"
        style={{
          y: planetY,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <Image
          src="/planet-blue.png"
          alt="Purple Planet"
          width={300}
          height={300}
          className="object-contain"
          priority
          loading="eager"
        />
      </motion.div>

      {/* Small planets - using simpler animations */}
      <motion.div
        className="absolute left-[5%] bottom-[20%] w-[100px] h-[100px]"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br BGBGB2 BGBG shadow-[#0d6efd] opacity-20"></div>
      </motion.div>

      <motion.div
        className="absolute right-[20%] top-[20%] w-[80px] h-[80px]"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-cyan-700 shadow-[0_0_30px_rgba(6,182,212,0.5)]"></div>
      </motion.div>

      {/* Rocket - simplified animation */}
      <motion.div
        className="absolute right-[30%] bottom-[10%] w-[120px] h-[120px]"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* <Image src={"/rocket.png"} alt="" style={{width:"100%"}} width={500} height={500}/> */}
        {/* <RocketIcon /> */}
      </motion.div>

      {/* Waving astronaut - optimized animation */}
      <motion.div
        className="absolute right-[5%] bottom-[20%] w-[350px] h-[350px] z-20"
        animate={controls}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <Astronaut />
      </motion.div>

      {/* Content - using simpler transforms */}
      <div className="container mx-auto relative z-[9999] pt-[50px]">
        <motion.div
          className="main_banner"
          style={{
            y: textY,
            opacity: textOpacity,
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
          }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border bgtrans ">
              <Shield className="w-4 h-4 mr-2" /> Secure365 Cybersecurity
            </span> */}
          </motion.div>

          <motion.h1
            className="text-[12vw] leading-[13vw] sm:leading-[5xl]  md:leading-[6xl] sm:text-3xl md:text-6xl xl:text-8xl mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-white block">
              Secure in <span className="font-semibold">This Galaxy</span>
            </span>
            <span className="bg-clip-text text-transparent colorblue">and the Next</span>
          </motion.h1>

          <motion.p
            className="text-md xl:text-xl text-purple-100 mb-6 xl:mb-12 max-w-2xl text-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            From Web Development to Cybersecurity: Chart Your Course with Secure365 and become the
            hero of your digital universe.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <button className="text-center mx-auto relative z-[9999]">
              <Link
                href="#mission"
                id="btnTwo"
                className="BtnTwo btnWrapper rounded-[50px] text-white px-6 py-3 flex items-center justify-center"
              >
                Start Your Mission <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </button>

            {/* <Button
              variant="outline"
              size="lg"
            
              asChild
            >
              <Link href="#services"
              className="BtnTwo btnWrapper">
                Explore Services <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Optimized particles - reduced number and simplified animations */}
      <OptimizedParticles />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040720] to-transparent z-1"></div>
    </section>
  );
}

// Optimized particles component
function OptimizedParticles() {
  // Reduce number of particles for better performance
  return (
    <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-30"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            willChange: 'transform',
          }}
          animate={{
            y: [0, Math.random() * 50 - 25],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

// Astronaut component
function Astronaut() {
  return (
    <div className="relative w-full h-full astronutImgcircle">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full scale-[0.4] translate-x-[30%] translate-y-[10%]"></div>
      <div className="absolute inset-0 flex items-center justify-center astronutImg">
        {/* <div className="relative w-[60%] h-[80%]">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl"></div>
          <div className="absolute top-[15%] left-[15%] right-[15%] bottom-[60%] bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
          <div className="absolute top-[50%] left-[20%] w-[60%] h-[30%] bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"></div>
          <div className="absolute top-[20%] left-[40%] w-[20%] h-[10%] bg-white rounded-full"></div>
          <div className="absolute top-[85%] left-[10%] w-[30%] h-[10%] bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"></div>
          <div className="absolute top-[85%] right-[10%] w-[30%] h-[10%] bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"></div>
          <div className="absolute top-[40%] right-[10%] w-[30%] h-[5%] bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg"></div>
        </div> */}
        <Image src={'/images/bannerobert.png'} alt="" width={500} height={1000} />
      </div>
    </div>
  );
}

// Rocket icon component
function RocketIcon() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-[40%] right-[40%] h-[30%] bg-gradient-to-b from-red-500 to-red-700 rounded-t-full"></div>
      <div className="absolute top-[30%] left-[30%] right-[30%] h-[50%] bg-gradient-to-b from-gray-200 to-gray-400 rounded-lg"></div>
      <div className="absolute top-[80%] left-[30%] right-[30%] h-[10%] bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-lg"></div>
      <div className="absolute top-[85%] left-[20%] w-[20%] h-[15%] bg-gradient-to-b from-red-600 to-red-800 rounded-b-lg"></div>
      <div className="absolute top-[85%] right-[20%] w-[20%] h-[15%] bg-gradient-to-b from-red-600 to-red-800 rounded-b-lg"></div>
      <div className="absolute top-[40%] left-[10%] w-[20%] h-[10%] bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg"></div>
      <div className="absolute top-[40%] right-[10%] w-[20%] h-[10%] bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg"></div>
      <div className="absolute top-[60%] left-[40%] right-[40%] h-[5%] bg-gradient-to-b from-gray-600 to-gray-800 rounded-full"></div>
      <div className="absolute bottom-0 left-[35%] right-[35%] h-[30%] bg-gradient-to-t from-orange-500 to-yellow-500 rounded-b-full opacity-70 blur-md"></div>
    </div>
  );
}
