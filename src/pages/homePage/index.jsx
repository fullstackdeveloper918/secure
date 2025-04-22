'use client';
import AboutSection from '@/components/homePage/about-section';
import HeroSection from '@/components/homePage/hero-section';
import LoadingPage from '@/components/homePage/loading-section';
import ParallaxEarth from '@/components/homePage/parallax-earth';
import WebDevSection from '@/components/homePage/web-dev-section';
import { useState, useEffect } from 'react';
import '../../app//globals.css';
import AnimationHeader from '@/components/animation_header';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <main className="relative overflow-hidden home-main-section">
      {/* Parallax Earth component that follows scroll */}
      <ParallaxEarth />

      {/* Main content sections */}
      <div className="relative z-10 containerfull mx-auto">
        {/* 
        <AnimationHeader /> */}
        <HeroSection />
        <AboutSection />
        <WebDevSection />
      </div>
    </main>
  );
}
