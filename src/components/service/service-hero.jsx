import React from 'react';
import Image from 'next/image';

// image
import ser_hero from '@/assets/img/inner-service/hero/hero-3.jpg';
import ser_hero_shape from '@/assets/img/inner-service/hero/hero-shape-1.jpg';

export default function ServiceHero({ serviceBannerData }) {
  return (
    <div className="sv-hero-area sv-hero-ptb bann-p-block">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h1 className="sv-hero-title tp-char-animation">
                {serviceBannerData?.pages?.banner_data?.banner_heading}{' '}
                <span className="blueColor">
                  {serviceBannerData?.pages?.banner_data?.banner_heading_second}
                </span>{' '}
                <br />
              </h1>
              <h2 className="servicesSub tp-char-animation">
                {serviceBannerData?.pages?.banner_data?.banner_heading_third}
              </h2>
              <p className="tp_fade_bottom">
                {serviceBannerData?.pages?.banner_data?.banner_sub_headline}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{ height: 'auto' }}
                />
              </div>
              <Image
                className="sv-hero-thumb-shape d-none d-lg-block"
                src={ser_hero_shape}
                alt="ser_hero-shape"
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
