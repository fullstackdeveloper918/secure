import React from 'react';
import Link from 'next/link';
import { BallRound } from '../svg';

export default function AboutFour({ aboutResponse }) {
  return (
    <div className="tp-about-5-area black-bg pt-150 pb-120">
      <div className="container container-1560">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-about-5-title-box lg:pb-90 pb-30">
              <h2 className="tp-about-5-title p-relative tp_fade_bottom">
                <span className="tp-about-5-subtitle tp_fade_left">
                  {aboutResponse?.data?.about_our_servics_heading}
                </span>
                <span className="text-space"></span>
                {aboutResponse?.data?.about_we_offer_heading_first} <br />
                {aboutResponse?.data?.about_we_offer_heading_second}
                <span>
                  <BallRound />
                </span>
                {aboutResponse?.data?.about_our_servics_heading_third}
                <span>
                  <BallRound />
                </span>
                {aboutResponse?.data?.about_our_servics_heading_fourth}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-5-category">
              {aboutResponse &&
                aboutResponse?.data?.about_our_service_cybersecurity_data?.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="tp_fade_bottom">
                      {item?.about_our_service_cybersecurity_loop}
                    </span>
                  </React.Fragment>
                ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-5-text">
              <p className="mb-30 tp_fade_bottom">
                {aboutResponse?.data?.about_our_service_cybersecurity_paragraph_first}
              </p>
              <p className="mb-30 tp_fade_bottom">
                {aboutResponse?.data?.about_our_service_cybersecurity_paragraph_second}
              </p>
            </div>
          </div>

          <div className="btn_sec flex gap-3 flex-wrap text-align-center justify-content-center">
            <Link href="/contact-us" className="tp-btn-white-sm border-style">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
