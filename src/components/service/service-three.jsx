'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

// internal imports
import star_icon from '@/assets/img/home-04/service/sv-star-1.png';
import sv_1 from '@/assets/img/home-04/service/sv-icon-1.png';
import sv_2 from '@/assets/img/home-04/service/sv-icon-2.png';
import sv_3 from '@/assets/img/home-04/service/sv-icon-3.png';
import sv_4 from '@/assets/img/home-04/service/sv-icon-4.png';
import sv_5 from '@/assets/img/home-04/service/sv-icon-5.png';
import sv_6 from '@/assets/img/home-04/service/sv-icon-6.png';

// slider setting
const slider_setting = {
  slidesPerView: 4,
  loop: true,
  autoplay: false,
  spaceBetween: 60,
  speed: 1000,
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};
// service data
const service_data = [
  {
    id: 1,
    icon: sv_1,
    title: 'Cloud Migration & Setup',
    subtitle:
      'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
  {
    id: 2,
    icon: sv_2,
    title: 'Server Configuration & Optimization',
    subtitle:
      'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
  {
    id: 3,
    icon: sv_3,
    title: 'Data Security & Backup Solutions',
    subtitle:
      'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
  {
    id: 4,
    icon: sv_4,
    title: 'Hybrid Cloud & On-Premises Solutions',
    subtitle:
      'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
  {
    id: 5,
    icon: sv_5,
    title: 'Performance Monitoring & 24/7 Support',
    subtitle:
      'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
  {
    id: 6,
    icon: sv_6,
    title: 'Disaster Recovery Planning',
    subtitle:
      'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
];
export default function ServiceThree({ serviceBannerData }) {
  return (
    <div
      className="tp-service-4-area pt-30 pb-10 fix"
      data-background="assets/img/home-04/brand/overly.png"
      style={{ backgroundImage: 'url(/assets/img/home-04/brand/overly.png)' }}
    >
      <div className="container">
        <div className="tp-service-4-title-wrap">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="tp-service-4-title-box tp_fade_bottom">
                <h2 className="tp-service-4-title">Our Services Include</h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="tp-service-4-shape-1 text-start text-md-end">
                <Image className="tp-zoom-in-out" src={star_icon} alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-service-4-wrap">
        <Swiper {...slider_setting} className="swiper-container tp-service-4-slider-active">
          {serviceBannerData &&
            serviceBannerData?.server_cloud_service_include_loop_data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="tp-service-4-item">
                  <div className="tp-service-4-icon">
                    <Image src={item?.image} alt="icon" width={100} height={100} />
                  </div>
                  <div className="tp-service-4-content">
                    <h2 className="tp-service-4-title-sm">
                      <Link href="/service">{item?.heading}</Link>
                    </h2>
                    <p>{item?.paragraph}</p>
                    <Link className="tp-service-4-link" href="/service">
                      {item?.button}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
