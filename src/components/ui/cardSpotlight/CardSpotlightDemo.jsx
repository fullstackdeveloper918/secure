import React, { useState, useRef } from "react";
import { GraduationCap, Sparkles, Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
function SpotlightCard({ icon: Icon, title, description }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl border border-gray-800 bg-black px-8 py-8 shadow-lg transition-all duration-500 minheight400 ${
        isFocused ? "scale-[1.02]" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(231, 228, 228, 0.15), transparent 40%)`,
        }}
      />
      <Icon className="h-10 w-10 text-white" />
      <h3 className="mt-4 text-xl font-medium text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      {/* <button className="mt-4 flex items-center text-white ">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </button> */}
    </div>
  );
}

function CardSpotlightDemo() {
  const cards = [
    {
      icon: Code2,
      title: "Information Security Solutions",
      description:
        "Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.",
    },
    {
      icon: Sparkles,
      title: "Comprehensive Solutions",
      description:
        "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies.",
    },
    {
      icon: GraduationCap,
      title: "Victim Approach",
      description:
        "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing real-world strategies.",
    },
    {
      icon: Sparkles,
      title: "Advanced Protection",
      description:
        "Secure365 provides innovative approaches to combat cyber threats, ensuring the highest security standards.",
    },
  ];
  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicatedCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] ">
            <SpotlightCard {...card} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CardSpotlightDemo;
