import React from 'react';
import { RightArrow, ShapeTwo } from '../svg';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceSix({ serviceData }) {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {serviceData?.data?.service_page_all_services_image_data?.map((item, index) => (
          <div key={index} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item?.service_page_all_services_image}
                    width={2000}
                    height={2000}
                    alt="service-img"
                    style={{ height: '100%' }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{index < 9 ? '0' + (index + 1) : index + 1}</i>
                        {item?.service_page_all_sub_heading}
                      </span>
                      <h2 className="sv-service-title">{item?.service_page_all_heading}</h2>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item?.service_page_all_paragraph}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          <li>{item?.service_page_servive_name_first}</li>
                          <li>{item?.service_page_servive_name_second}</li>
                          <li>{item?.service_page_servive_name_third}</li>
                          <li>{item?.service_page_servive_name_fourth}</li>
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="sv-service-btn tp-btn-zikzak zikzak-inner p-relative"
                          href={`/service/${item?.service_page_servive_slug}`}
                        >
                          <span className="zikzak-content">
                            {/* See <br /> Details */}
                            {item?.service_page_servive_button}
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
