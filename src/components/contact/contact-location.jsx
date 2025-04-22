import React from 'react';
import Image from 'next/image';
// images
import location_1 from '../../../public/images/info-1.png';
import location_2 from '@/assets/img/inner-contact/contact/info-2.jpg';
import location_3 from '@/assets/img/inner-contact/contact/info-3.jpg';
import expertGuide from '../../../public/images/expertGuide.svg';
import Tailored from '../../../public/images/Tailored.svg';
import Hassle from '../../../public/images/hassleFree.svg';

// data
const location_data = [
  {
    id: 1,
    img: location_1,
    country: 'Our Location',
    time: 'While we proudly serve clients across the globe, our primary office is located in Arlington Heights, IL. We also offer remote consultations and services to ensure that wherever you are, Secure365 is there to support you',
    location_title: '',
    address: '1512 E Algonquin Rd Arlington Heights, IL 60005',
    phone: '+(800) 311-5990',
    email: 'info@secure365.com',
  },
];

const ContactLocation = ({ contactData }) => {
  return (
    <div className="cn-contact-info-area">
      <div className="">
        <div className="textColorwhite">
          <div className="cn-contact-info-item">
            <div className="row">
              <div className="col-xl-12">
                <div className="cn-contact-left grid flex-wrap align-items-center grid-cols-1 gap-14">
                  <div className="container container-1530">
                    <div className="cn-contact-left-info grid grid-cols-2 gap-4 justify-content-center md:pr-20 md:px-10 px-4 pt-20 pb-0">
                      <div className="cn-contact-left-wrap">
                        <h2 className="cn-contact-left-title">
                          {contactData?.contact_our_location_heading}
                        </h2>
                        <span className="pb-10 d-block">
                          {/* <i className="fa-regular fa-clock"></i> */}
                          {/* {item.time} */}
                          {contactData?.contact_our_location_heading_paragraph}
                        </span>
                      </div>
                      <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between flex-wrap flex-col text-left">
                        <div className="cn-contact-right">
                          <h2>{contactData?.contact_map_location}</h2>
                          <div className="cn-contact-location sm:mb-6 :mb-5">
                            <span className="cn-contact-location-title">
                              {/* {item.location_title} */}
                              {contactData?.contact_map_loction_details}
                            </span>
                            <a
                              href="https://www.google.com/maps"
                              target="_blank"
                              // dangerouslySetInnerHTML={{ __html: item.address }}
                            ></a>
                          </div>
                          {/* <div className="cn-contact-map mb-10 xl:mb-0">
                        <a href="#">Google Maps</a>
                      </div> */}
                        </div>
                        {/* <div className="cn-contact-right-info md:text-start text-left md:text-md-end">
                      <a href="tel:(+91)76001726">phon</a> <br />
                      <a href="mailto:Hello@contact.com">email</a>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  {/* new cdide */}
                  <div className="cn-contact-thumb">
                    {/* <Image src={item.img} alt="image" style={{ height: "auto" }} /> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <a
                          href="https://www.google.com/maps"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></a>
                      </div>
                      <div className="cn-contact-map">
                        <a href="#">Google Maps</a>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <a href="tel:(+91)76001726">{item.phone}</a> <br />
                      <a href="mailto:Hello@contact.com">{item.email}</a>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>

        {/* <div className="contactInfosec">
          <div className="infoDiv">
          <span><Image src={expertGuide} alt="image" style={{ height: "auto" }} /></span>
          <h5>Expert Guidance</h5>
          <p>To create a world where no question goes unanswered and every business has access to expert guidance and the knowledge needed to navigate their operations successfully.</p>
          </div>

          <div className="infoDiv">
          <span><Image src={Hassle} alt="image" style={{ height: "auto" }} /></span>
          <h5>Hassle-Free Service</h5>
          <p>To create a world where every individual experiences seamless and effortless service, and every business has access to solutions and expertise designed to simplify their operations.</p>
          </div>

          <div className="infoDiv">
          <span><Image src={Tailored} alt="image" style={{ height: "auto" }} /></span>
          <h5>Tailored Solutions</h5>
          <p>To create a world where every challenge is met with personalized support and every business has access to tailored solutions and expertise to achieve their unique goals.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactLocation;
