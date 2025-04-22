'use client';
import { gsap } from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from '@/layouts/wrapper';
import HeaderEleven from '@/layouts/headers/header-eleven';
import AboutMeHero from '@/components/about/about-me-hero';
import AboutMeArea from '@/components/about/about-me-area';
import AboutPortfolio from '@/components/portfolio/about-portfolio';
import AboutWork from '@/components/work/about-work';
import { BrandItems } from '@/components/brand/brand-two';
import LineImgSlider from '@/components/line-text/line-img-slider';
// import BigText from "@/components/big-text";
// import BigText from "@/components/big-text";
import FooterTwo from '@/layouts/footers/footer-two';
// animation
import { charAnimation, fadeAnimation, titleAnimation } from '@/utils/title-animation';
import { hoverBtn } from '@/utils/hover-btn';
import { teamMarqueAnim } from '@/utils/scroll-marque';

const AboutMeMain = () => {
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
      <HeaderEleven />

      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
      <main>
        <AboutMeHero />

        <AboutMeArea />

        <AboutPortfolio />

        <AboutWork />

        <div className="tp-brand-4-area">
          <div className="container">
            <div className="row gx-0">
              <BrandItems />
            </div>
          </div>
        </div>

        <LineImgSlider />

        {/* <BigText whyChooseData  cls="char-wrapper" /> */}
      </main>

      <FooterTwo topCls="" />
      {/* </div>
      </div> */}
    </Wrapper>
  );
};

export default AboutMeMain;
