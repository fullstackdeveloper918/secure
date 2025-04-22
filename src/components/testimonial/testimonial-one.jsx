'use client';
import React from 'react';
import { NextIcon, PrevIcon } from '../svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const testimonial_data = [
  {
    id: 1,
    desc: `“Praesent tincidunt enim et dolor auctor, a tincidunt velit pharetra. Etiam ultrices est vel turpis suscipit, vel interdum quam fringilla.”`,
    name: 'Maria DeLuca',
    designation: 'Marketing Specialist',
  },
  {
    id: 2,
    desc: `“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac mi vitae erat imperdiet dignissim.”`,
    name: 'James',
    designation: 'Product Manager',
  },
];

const slider_setting = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 1000,
  breakpoints: {
    1400: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: '.tp-testimonial-prev',
    nextEl: '.tp-testimonial-next',
  },
};
const TestimonialOne = ({ data }) => {
  return (
    <div className="tp-testimonial-area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 tp_fade_bottom">
            <div className="tp-testimonial-slider-wrapper p-relative">
              <h2 className=" mb-96 text-center">
                {data?.home_testimonials_from_professionals_heading}
              </h2>
              <div className="tp-testimonial-arrow-box d-block d-lg-block">
                <button className="tp-testimonial-prev">
                  <span>
                    <PrevIcon />
                  </span>
                </button>
                <button className="tp-testimonial-next">
                  <span>
                    <NextIcon />
                  </span>
                </button>
              </div>
              <Swiper
                {...slider_setting}
                modules={[Navigation]}
                className="swiper-container tp-testimonial-slider-active fix"
              >
                {data &&
                  data?.home_testimonials_from_professionals_data?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="tp-testimonial-item text-center">
                        <p>{item.testimonials_paragraph}</p>
                        <span>
                          <em>{item.home_client_name}</em> - {item.client_working}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
