'use client';
import { gsap } from 'gsap';
import React from 'react';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from '@/layouts/wrapper';
import HeaderEleven from '@/layouts/headers/header-eleven';
import ContactTwo from '@/components/contact/contact-two';
import ContactLocation from '@/components/contact/contact-location';
import FooterTwo from '@/layouts/footers/footer-two';
import AnimationHeader from '@/components/animation_header';

// animation
import { charAnimation } from '@/utils/title-animation';
import FooterFour from '@/layouts/footers/footer-four';
import ContactLocationTwo from '@/components/contact/contact-location-2';

const ContactMain = ({ contactData }) => {
  console.log(contactData, 'contactData');
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      {/* <HeaderEleven /> */}
      {/* <AnimationHeader /> */}

      {/* header area end */}

      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
      <div
        className="inner-bg"
        style={{
          backgroundImage: 'url(/assets/img/home-01/team/team-details-bg.png)',
        }}
      >
        <main>
          {/* hero area start */}

          <div className="tm-hero-area tm-hero-ptb p-relative bann-p-block contact-banner">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tm-hero-content">
                    <span className="tm-hero-subtitle">Secure 365</span>
                    <h1 className="tp-char-animation sv-hero-title">
                      {contactData?.reach_contact_section_heading}
                    </h1>
                    <p>{contactData?.reach_contact_section_paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactTwo />
          <ContactLocationTwo contactData={contactData} />

          {/* <ContactLocation contactData={contactData} /> */}
        </main>

        <FooterFour />
      </div>
      {/* </div>
      </div> */}
    </Wrapper>
  );
};

export default ContactMain;
