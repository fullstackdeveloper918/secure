'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroBannerAi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();

  const yLayer01 = useTransform(scrollY, [0, 800], [0, -500]);
  const yLayer02 = useTransform(scrollY, [0, 800], [-100, -800]);
  const yLayer03 = useTransform(scrollY, [0, 800], [0, -700]);
  const yLayer04 = useTransform(scrollY, [0, 800], [-100, -600]);
  const yLayer05 = useTransform(scrollY, [0, 800], [0, -400]);
  const yLayer07 = useTransform(scrollY, [0, 800], [0, -600]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('bannersection');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="bannersection"
      style={{
        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        transition: 'transform 0.1s ease-out',
      }}
      id="hero"
    >
      <div className="tp-hero-area main-slider banner-ai" id="hero-styles">
        <div className="container p-relative Zindex100">
          <div className="row justify-content-center">
            <div className="banner-data">
              <div className="tp-hero-title-wrap mb-35 p-relative">
                <div className="tp-hero-title-box text-center p-relative Zindex100">
                  <h1 className="space-title">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className={`p-relative ${isVisible ? 'fadeIn' : ''}`}
                    >
                      <span className="boldHeading">
                        <b>Secure in This Galaxy </b>
                        <motion.div
                          initial={{ opacity: 0, y: 60 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.9, delay: 1 }}
                          className="p-relative"
                        >
                          <div className="boldHeading">
                            <b> and the Next</b>
                          </div>
                        </motion.div>
                      </span>
                    </motion.div>
                  </h1>
                  <h2>From Web Development to Cybersecurity: Chart Your Course with Secure365</h2>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="space-content p-relative Zindex100"
              >
                <div className="btn_sec flex gap-3 flex-wrap justify-center">
                  <Link href="/contact-us" className="btn">
                    Start Your Mission
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bann-imgs-wrap" id="man-section">
          <div className="bann-ai">
            <motion.img
              src="/assets/img/home-01/hero/ai-bg.webp"
              className="hero_parallax layer01"
              style={{ y: yLayer01 }}
            />
            <motion.img
              src="/assets/img/home-01/hero/left-bg.webp"
              className="hero_parallax layer02"
              style={{ y: yLayer02 }}
            />
            <motion.img
              src="/assets/img/home-01/hero/right-bg.webp"
              className="hero_parallax layer03"
              style={{ y: yLayer03 }}
            />
            <motion.img
              src="/assets/img/home-01/hero/middle-rock.webp"
              className="hero_parallax layer04"
              style={{ y: yLayer04 }}
            />
            <motion.img
              src="/assets/img/home-01/hero/light.webp"
              className="hero_parallax layer05"
              style={{ y: yLayer05 }}
            />
            <motion.img
              src="/assets/img/home-01/hero/center-top.webp"
              className="hero_parallax layer07"
              style={{ y: yLayer07 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerAi;
