import React from 'react';
import FaqItem from './faq-item';

export default function FaqArea({ whyChooseData }) {
  return (
    <div className="fq-faq-area pt-4">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="tm-hero-content">
                  <h2 className="tm-herointro-title tp-char-animation text-center mb-0">
                    {whyChooseData?.why_choose_sets_us_main_heading}
                  </h2>
                </div>
                <div className="accordion" id="accordionExample">
                  {whyChooseData &&
                    whyChooseData?.why_choose_sets_data?.map((item, index) => (
                      <FaqItem item={item} index={index} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
