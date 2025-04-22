'use client';
import { gsap } from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from '@/layouts/wrapper';
import AboutUsHero from '@/components/about/about-us-hero';
import AboutUsArea from '@/components/about/about-us-area';
import FunFactOne from '@/components/fun-fact/fun-fact-one';
import BrandFive from '@/components/brand/brand-five';
import AnimationHeader from '@/components/animation_header';

import { charAnimation, fadeAnimation, titleAnimation } from '@/utils/title-animation';
import { hoverBtn } from '@/utils/hover-btn';
import { teamMarqueAnim } from '@/utils/scroll-marque';
import AboutThree from '@/components/about/about-three';
import AboutFour from '@/components/about/about-four';
import FooterFour from '@/layouts/footers/footer-four';
import AboutWork from '@/components/work/about-work';

const AboutUsMain = ({ aboutResponse, bannerResponse }) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <div id="clapat-page-content">{/* <AnimationHeader /> */}</div>

      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
      <main>
        <AboutUsHero bannerResponse={bannerResponse} />

        <AboutUsArea aboutResponse={aboutResponse} />
        <AboutFour aboutResponse={aboutResponse} />
        <AboutThree aboutResponse={aboutResponse} />

        <FunFactOne aboutResponse={aboutResponse} />

        <BrandFive />
        <div className="ab-award-style pt-120 pb-120">
          <AboutWork />
        </div>
      </main>
      <FooterFour />
      {/* </div>
      </div> */}
    </Wrapper>
  );
};

export default AboutUsMain;
