import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hand } from '../svg';

// images
import shape from '@/assets/img/inner-about/about/shape-1.png';
import ab_1 from '@/assets/img/inner-about/about/about-1a.png';
import ab_2 from '@/assets/img/inner-about/about/about-3.png';
import ab_3 from '@/assets/img/inner-about/about/about-2.png';

export default function AboutUsArea({ aboutResponse }) {
  console.log(aboutResponse, 'aboutResponse');
  return (
    <div className="ab-about-area ab-about-mt lg:pb-90 pb-5 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image data-speed=".7" src={ab_1} alt="about-img" style={{ height: 'auto' }} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: 'auto' }}
                />
                <Image data-speed="0.9" src={ab_3} alt="about-img" style={{ height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="about-info-wrap row">
          <div className="about-title text-center">
            <div className="ab-about-content p-relative">
              {/* <span>
                <Hand />
                Hi!
              </span> */}
              <p className="tp-dropcap tp_fade_bottom">
                {/* Our Core Values */}
                {aboutResponse?.data?.about_our_core_headning_main}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="about-inner row">
                {/* <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h2 className="ab-about-category-title">
                    {aboutResponse?.data?.about_our_core_something_section} <br />
                    <span>{aboutResponse?.data?.about_our_core_what_i_do}</span>
                  </h2>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div> */}
                <div className="about-category">
                  <div className="row">
                    {/* <div className="col-xl-6 col-lg-6 col-md-6"> */}
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul className="md:flex gap-4">
                        {aboutResponse &&
                          aboutResponse?.data?.about_page_customer_approach_data?.map(
                            (item, index) => (
                              <React.Fragment key={index}>
                                <li>
                                  <h3 className="h5-title">
                                    {item?.about_page_customer_first_approach}
                                  </h3>
                                  <p>{item?.about_page_customer_integrity_transparency}</p>
                                </li>
                              </React.Fragment>
                            )
                          )}

                        {aboutResponse &&
                          aboutResponse?.data?.about_page_security_responsibility_data?.map(
                            (item, index) => (
                              <React.Fragment key={index}>
                                <li>
                                  <h3 className="h5-title">{item?.about_page_security_heading}</h3>
                                  <p>{item?.about_page_security_paragraph}</p>
                                </li>
                              </React.Fragment>
                            )
                          )}
                      </ul>

                      <div className="btn_sec flex gap-3 flex-wrap text-align-center justify-content-center">
                        <Link href="/contact-us" className="BtnTwo btnWrapper">
                          Learn More
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
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
