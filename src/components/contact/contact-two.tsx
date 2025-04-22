import React from 'react';
import Image from 'next/image';
import ContactForm from '../form/contact-form';
import Social from '../social/social';
// import shape from "@/assets/img/inner-about/about/shape-1.png";
import Phone from '../../../public/images/phonIcon.svg';
import Email from '../../../public/images/email.svg';
import timing from '../../../public/images/timing.svg';

export default function ContactTwo() {
  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pt-50 lg:pb-50 pb-100">
      <div className="ab-2-hero-social-wrap d-none d-xxl-block">
        <div className="ab-2-hero-social">
          <Social />
        </div>
        <div className="ab-2-hero-social-text">
          <span>Follow us</span>
        </div>
      </div>
      <div className="container contact-container">
        <div className="row">
          <div className="conatct-col ab-about-category-title-box p-relative col-xl-5 ">
            <div className="contactDiv">
              <div className="innerDivConatct">
                <span>
                  <Image className="PhoeIcon" src={Phone} alt="shape" />
                </span>
                <div className="Inndericon">
                  <h2 className="h5-title">+(800) 311-5990</h2>
                  <p>Call Now and Get a FREE Consultation</p>
                </div>
              </div>

              <div className="innerDivConatct">
                <span>
                  <Image className="PhoeIcon" src={Email} alt="shape" />
                </span>
                <div className="Inndericon">
                  <h2 className="h5-title">info@secure365.com</h2>
                </div>
              </div>

              <div className="innerDivConatct">
                <span>
                  <Image className="PhoeIcon" src={timing} alt="shape" />
                </span>
                <div className="Inndericon">
                  <h2 className="h5-title">Monday - Friday, 9:00 AM - 5:00 PM CST</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="conatct-col col-xl-7">
            <div className="cn-contactform-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
