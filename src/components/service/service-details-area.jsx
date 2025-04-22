import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// images
import sv_1 from '@/assets/img/inner-service/sercive-details/sv-details-1.jpg';
import sv_2 from '@/assets/img/inner-service/sercive-details/sv-details-1.png';
import sv_3 from '@/assets/img/inner-service/sercive-details/sv-details-2.png';

export default function ServiceDetailsArea({ serviceBannerData }) {
  console.log(serviceBannerData, 'serviceBannerData');
  return (
    <div className="service-details__area service-details__space bann-p-block">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-10">
              <span className="service-details__subtitle tp-char-animation">
                Secure, Scalable, and Hassle-Free
              </span>
              <h2 className="sv-hero-title tp-char-animation">
                Server & <span className="blueColor">Cloud Management</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className=" col-xl-5">
              <div className="service-details__banner-text mb-8">
                <p className="mb-30 tp_title_anim">
                  Optimize your business’s operations
                  <br /> with managed server solutions and secure <br /> cloud infrastructure.{' '}
                </p>
                <p className="tp_title_anim">
                  Explore our achievements and let yourself be <br /> convinced!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-50">
              <div className="service-details__tab-thumb">
                <Image data-speed="0.4" src={sv_1} alt="service-img" style={{ height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-6">
                <h2 className="tp_title_anim">Benefits of Choosing Secure365</h2>
                <p>
                  Choosing Secure365 ensures your data remains protected, your systems stay
                  resilient, and your peace of mind is guaranteed!
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {serviceBannerData &&
                    serviceBannerData?.service_inner_benefits_of_choosing_section_data?.map(
                      (item, index) => (
                        <React.Fragment key={index}>
                          {console.log(item, 'item')}
                          <li>
                            <h3 className="h5-title">{item?.heading}</h3>
                            <p>{item?.paragraph}</p>
                          </li>
                        </React.Fragment>
                      )
                    )}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap md:mb-10 mb-4">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="service-details__sm-thumb">
                      <Image src={sv_2} alt="service-img" style={{ height: 'auto' }} />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="service-details__sm-thumb">
                      <Image src={sv_3} alt="service-img" style={{ height: 'auto' }} />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="service-details__left-text">
                <p>
                  Great user experience design lets users focus on the task they
                  have to complete & evokes emotion without distracting them.
                  Bonus points for when it also looks & feels aesthetically
                  pleasing!{" "}
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>{serviceBannerData?.full_list_of_services_heading}</span>
              </div>
              <div className="service-details__right-category">
                {serviceBannerData?.management_full_list_right_section_services?.map(
                  (item, index) => (
                    <React.Fragment key={index}>
                      <Link href="#">{item?.full_list_of_services_loop}</Link>
                    </React.Fragment>
                  )
                )}
                {/* <a href="#">Server Configuration & Optimization</a>
                <a href="#">Data Security & Backup Solutions</a>
                <a href="#">Hybrid Cloud & On-Premises Solutions</a>
                <a href="#">Performance Monitoring & 24/7 Support</a>
                <a href="#">Disaster Recovery Planning</a> */}
              </div>
              <div className="service-details__right-text-box">
                <h2>
                  Why Choose Secure365 <br /> for Server & Cloud Management?
                </h2>
                <p className="mb-10">
                  {serviceBannerData?.service_details_right_why_choose_section_heading_paragraph}
                </p>
                <Link className="tp-btn-white background-black" href="/contact">
                  {serviceBannerData?.service_details_right_why_choose_section_button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
