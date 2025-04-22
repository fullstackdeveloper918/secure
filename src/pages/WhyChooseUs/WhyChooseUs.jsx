'use client';
import { gsap } from 'gsap';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from '@/layouts/wrapper';

import BigText from '@/components/big-text';
import { charAnimation, titleAnimation } from '@/utils/title-animation';
import FaqArea from '@/components/faq/faq-area';
import ContactForm from '@/components/contact-form/contact-form';
import AnimationHeader from '@/components/animation_header';
import bannerDiv from '../../../public/assets/img/inner-faq/faq/InnerDiv.png';
import bannerDiv2 from '../../../public/assets/img/inner-faq/faq/InnerDiv_1.png';

import ServiceFour from '@/components/service/service-four';
import FooterFour from '@/layouts/footers/footer-four';

const FaqMain = ({ whyChooseData }) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* <AnimationHeader /> */}

      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
      {/* <div
        className="inner-bg"
        style={{
          backgroundImage: "url(/assets/img/home-01/team/team-details-bg.png)",
        }}
      > */}
      <main>
        <div className="tm-hero-area tm-hero-ptb bann-p-block pb-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tm-hero-content">
                  <span className="tm-hero-subtitle">Secure 365</span>
                  <h2 className="tm-hero-title sv-hero-title tp-char-animation">
                    {whyChooseData?.title}{' '}
                    <span className="blueColor">
                      {whyChooseData?.why_choose_right_partner_heading_secure}?
                    </span>
                  </h2>
                </div>
                <div className="tm-hero-text tp_title_anim">
                  <p>
                    Expertise, reliability, and a commitment to your success—discover why businesses
                    choose Secure365 for all their IT and security needs
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="heroIntro py-10">
          <div className="container">
            <div className="row align-center justify-between flex-col-reverse md:gap-0 gap-8">
              <div className="col-xl-6 col-md-6 col-sm-12  max-w-full md:max-w-2xl">
                <div className="tm-hero-content">
                  <h2 className="tm-herointro-title tp-char-animation">
                    {whyChooseData?.why_choose_right_partner_heading}{' '}
                    <span className="blueColor">
                      {whyChooseData?.why_choose_right_partner_heading_secure}
                    </span>{' '}
                    {whyChooseData?.why_choose_right_partner_business}
                  </h2>
                </div>
                <div className="instropara tp_title_anim">
                  <p>
                    When it comes to choosing an IT partner, you need more than just someone to set
                    up your systems or install a firewall—you need a trusted advisor who understands
                    your business, anticipates your needs, and has the expertise to solve complex
                    challenges. At Secure365, we bring together years of experience in
                    cybersecurity, IT management, and digital strategy to deliver solutions that are
                    tailored, proactive, and focused on driving results.
                  </p>
                </div>

                <div className="btn_sec flex gap-3 flex-wrap">
                  <Link href="/contact-us" className="BtnTwo btnWrapper">
                    Request a Consultation
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
                </div>
              </div>

              <div className="col-xl-6 col-md-6 col-sm-12">
                <Image
                  className="rightImage"
                  src={bannerDiv}
                  alt="shape"
                  width={1920}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="heroIntro py-10">
          <div className="container">
            <div className="row align-center justify-between md:gap-0 gap-8">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <Image
                  className="rightImage"
                  src={bannerDiv2}
                  alt="shape"
                  width={1920}
                  height={500}
                />
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12  max-w-full md:max-w-2xl">
                <div className="tm-hero-content">
                  <h2 className="tm-herointro-title tp-char-animation">
                    {whyChooseData?.our_commitment_section_heading}
                  </h2>
                </div>
                <div className="instropara tp_title_anim">
                  <p>{whyChooseData?.our_commitment_section_paragraph}</p>
                  <br />
                  <p>{whyChooseData?.our_commitment_section_paragraph_second}</p>
                </div>
                <div className="btn_sec flex gap-3 flex-wrap">
                  <Link href="/contact-us" className="BtnTwo btnWrapper">
                    Start With Us
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqArea whyChooseData={whyChooseData} />
        <ServiceFour whyChooseData={whyChooseData} />
        <ContactForm whyChooseData={whyChooseData} />

        {/* <BigText whyChooseData={whyChooseData} /> */}
      </main>
      <FooterFour />
      {/* </div> */}
      {/* </div>
      </div> */}
    </Wrapper>
  );
};

export default FaqMain;
