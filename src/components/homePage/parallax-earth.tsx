'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ParallaxEarth() {
  const [scrollY, setScrollY] = useState(0);
  const earthRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);

    // Update window height on resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Update scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate earth position, rotation, and other effects based on scroll
  const earthY = scrollY * 0.2; // Slower parallax effect vertically
  const earthRotation = scrollY * 0.1; // Rotation based on scroll (increase or decrease the multiplier to adjust the speed)
  const earthScale = 1 + scrollY * 0.0005; // Subtle scaling effect
  const earthOpacity = Math.max(0.2, 1 - scrollY / (windowHeight * 1.5));

  // Calculate the 'right' position dynamically based on scroll position
  let earthRight = 0 + (scrollY / windowHeight) * 25; // Will range from -5% to +10% as you scroll
  earthRight = Math.min(Math.max(earthRight, -5), 20); // Keeps the range between -5% to +10%

  // Calculate up and down vertical movement (along with horizontal and rotation)
  const earthUpDown = scrollY * 0.05; // Vertical movement (adjust multiplier for more/less movement)

  return (
    <div ref={earthRef} className="fixed w-full h-full pointer-events-none overflow-hidden">
      <div
        className="absolute transition-transform duration-100 ease-out"
        style={{
          opacity: earthOpacity,
          right: ` ${earthRight ? earthRight : '-5'}%`, // Dynamic 'right' based on scroll
          top: '10%',
          width: '60vw',
          height: '60vw',
          maxWidth: '800px',
          maxHeight: '800px',
        }}
      >
        <div className="relative w-full h-full">
          {/* Rocket */}
          <motion.div
            className="absolute z-20 bottom-1/5 left-1/6 upDown-animation"
            initial={{ y: -300 }} // Start off the screen (slide in)
            animate={{ y: earthUpDown }} // Moves according to scroll
            transition={{ type: 'spring', stiffness: 100, damping: 25 }}
          >
            <Image src="/images/rocket.png" alt="Rocket" fill priority className="object-contain" />
          </motion.div>
          {/* Glow effect around the Earth */}
          <div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(64,150,238,0.3) 0%, rgba(0,0,0,0) 70%)',
              transform: 'scale(1.2)',
            }}
          />
        </div>
      </div>

      {/* Stars background */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 2px)',
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0',
          opacity: 0.5,
          zIndex: -1,
        }}
      />
    </div>
  );
}
