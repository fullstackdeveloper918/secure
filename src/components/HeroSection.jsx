import React from 'react';
import HeroBannerOne from './hero-banner/hero-banner-one';

const HeroSection = ({ data }) => {
  return (
    <div id="hero">
      <div id="hero-styles">
        <HeroBannerOne />
        {/* <div id="hero-footer" className="has-border">
          <div className="hero-footer-left">
              <div className="button-wrap left scroll-down">
                    <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                            <i className="fa-solid fa-arrow-down"></i>
                        </div>
                    </div>
                    <div className="button-text sticky left"><span data-hover="Scroll to Explore">Scroll to Explore</span></div> 
                </div>
            </div>
            <div className="hero-footer-right">
        <span>{data}</span>
            </div>
        </div>    */}
      </div>
    </div>
  );
};

export default HeroSection;
