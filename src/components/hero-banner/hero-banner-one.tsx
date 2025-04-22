'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { fadeAnimation } from '@/utils/title-animation';
import Link from 'next/link';

const HeroBannerOne = () => {
  useGSAP(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation();
      }, 7000);
    }
  }, {});

  // nothing dvvdssv jhbsdcdbsbs

  return (
    <div className="bannersection">
      <div
        className="tp-hero-area main-slider bannerVideo "
        style={{
          background: 'url(../assets/img/home-01/hero/section-bg-1.jpg)',
        }}
      >
        <div className="container p-relative Zindex100">
          <div className="row justify-content-center ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="tp-hero-title-wrap mb-35 p-relative">
                <div className="tp-hero-title-box text-center p-relative Zindex100">
                  <h1 className="tp-hero-title">
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 8 }}
                        className="p-relative "
                      >
                        {/* Expert<b> Business</b> */}
                        <br />
                        <span className="boldHeading">
                          <b>IT Services</b>
                          <motion.div
                            initial={{ opacity: 0, y: 250 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 8 }}
                            className="p-relative "
                          >
                            <div className="boldHeading">
                              <b> All in</b> <b className="textblue"> One Place</b>
                            </div>
                          </motion.div>
                        </span>
                      </motion.div>
                    </div>
                  </h1>
                </div>
                <div className="tp-hero-shape-1 p-relative videoV">
                  {/* <video
                      muted={true}
                      autoPlay={true}
                      playsInline={true}
                      loop={true}
                      width={700}
                      height={700}
                    >
                      <source src="/assets/video/Cyber Security Opener (After Effects template).mp4" type="video/mp4" />
                    </video> */}
                  {/* <img src="/assets/img/home-01/hero/Animation - 1736142446618.gif" /> */}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 7 }}
                className="tp-hero-content p-relative Zindex100"
              >
                <p>
                  Your Global Digital Partner, Empowering the Brands of Tomorrow with Security and
                  Innovation.
                </p>

                <div className="btn_sec flex gap-3 flex-wrap">
                  {/* <button className="BtnOne btnWrapper"> */}
                  <Link href="/contact-us" className="BtnOne btnWrapper">
                    Get started
                  </Link>
                  {/* </button> */}
                  {/* <button > */}
                  <Link href="/contact-us" className="BtnTwo btnWrapper">
                    Let's Connect
                    <span>
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.35008 3.5972C8.46253 3.25663 8.2776 2.8894 7.93704 2.77695L2.38722 0.944577C2.04665 0.832133 1.67942 1.01706 1.56697 1.35763C1.45453 1.69819 1.63946 2.06543 1.98002 2.17787L6.91319 3.80665L5.28441 8.73982C5.17197 9.08039 5.3569 9.44762 5.69746 9.56006C6.03803 9.67251 6.40526 9.48758 6.51771 9.14702L8.35008 3.5972ZM1.06551 7.47844L8.02551 3.9736L7.44137 2.8136L0.481368 6.31844L1.06551 7.47844Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                  {/* </button> */}
                </div>
              </motion.div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              {/* <div className="lotify">
                <DotLottieReact
                  src="https://lottie.host/689453fd-ff31-4b30-a7a0-c19fef568787/1ayzmshZ9X.lottie"
                  loop
                  autoplay
                />
              </div> */}
              <div className="videoSec">
                <video
                  muted={true}
                  autoPlay={true}
                  playsInline={true}
                  loop={true}
                  width={700}
                  height={700}
                >
                  <source src="/assets/video/secure-bann.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="lotify">
                <DotLottieReact
                    src="https://lottie.host/689453fd-ff31-4b30-a7a0-c19fef568787/1ayzmshZ9X.lottie"
                    loop
                    autoplay
                  />
                </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* 
      <div className="flipelements">
        <div className="fleiptag">
          <div className="button-text sticky left">
            <span className="starsvg">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={20} height={20}><title/><g data-name="Layer 2" id="Layer_2"><path d="M23.05,22a1,1,0,0,0-1.41,0L17,26.56V3a1,1,0,1,0-2,0V26.53L10.47,22a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l6.37,6.37a.9.9,0,0,0,1.27,0l6.36-6.37A1,1,0,0,0,23.05,22Z"/></g></svg></span>
          <span data-hover="Scroll to Explore">Scroll to Explore</span> 
          </div>
        </div>

      <div className="flip-thumbs-wrapper">
        <div className="flip-move-thumb show-counter">
           <img src="/assets/img/home-01/project/project-1-1.jpg" className="grid__item-img grid__item-img--large" alt="project-1-1" />
        </div>
        <div className="flip-move-thumb show-counter">
          <img src="/assets/img/home-01/project/project-1-2.jpg" className="grid__item-img grid__item-img--large" alt="project-1-2" /> 
        </div>
        <div className="flip-move-thumb show-counter">
        <img src="/assets/img/home-01/project/project-1-3.jpg" className="grid__item-img grid__item-img--large" alt="project-1-3" />
        </div>
      </div>

      <div className="projects">
<span>Featured Projects</span>
        </div>
    </div> */}
    </div>
  );
};

export default HeroBannerOne;
