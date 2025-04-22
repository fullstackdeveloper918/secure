import React from 'react';
import Image from 'next/image';
// images
// import c_img_1 from "@/assets/img/inner-contact/contact/contact-1.jpg";
// import c_img_2 from "@/assets/img/inner-contact/contact/contact-2.jpg";
// import c_img_3 from "@/assets/img/inner-contact/contact/contact-3.jpg";
// import c_img_4 from "@/assets/img/inner-contact/contact/contact-4.jpg";
// import c_img_5 from "@/assets/img/inner-contact/contact/contact-5.jpg";
// import c_img_6 from "@/assets/img/inner-contact/contact/contact-6.jpg";
import c_img_1 from '../../../public/images/expertGuide.svg';
import c_img_2 from '../../../public/images/hassleFree.svg';
import c_img_3 from '../../../public/images/Tailored.svg';
const location_data = [
  {
    id: 1,
    title: 'Expert Guidance',
    img_1: c_img_1,
    map: 'https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu',
    address: 'C26, 99 Jones Street, Ultimo. Sydney. 2007, NSW- Australia',
    phone: '(+91) 76001726',
    email: 'sydney@contact.com',
    content:
      'To create a world where no question goes unanswered and every business has access to expert guidance and the knowledge needed to navigate their operations successfully.',
  },
  {
    id: 2,
    title: 'Hassle-Free Service',
    img_1: c_img_2,
    map: 'https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu',
    address: '86-90 Paul Street. London. EC2A 4NE, I-United Kingdom',
    phone: '(+91) 76001726',
    email: 'london@contact.com',
    content:
      'To create a world where every individual experiences seamless and effortless service, and every business has access to solutions and expertise designed to simplify their operations.',
  },
  {
    id: 3,
    title: 'Tailored Solutions',
    img_1: c_img_3,
    map: 'https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu',
    address: "We're always looking for bright new talent. If you're keen. drop us a note:",
    note: '( no 100mb PDFs please )',
    email: 'Hello@contact.com',
    content:
      'To create a world where every challenge is met with personalized support and every business has access to tailored solutions and expertise to achieve their unique goals.',
  },
];
const ContactLocationTwo = ({ contactData }) => {
  return (
    <div className="cn-contact-2-info-area pb-90 pt-90">
      <div className="container contact-container">
        <div className="row">
          {contactData && contactData?.contact_secure_loop?.length > 0 ? (
            contactData?.contact_secure_loop.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6 contact-col">
                <div
                  className={`cn-contact-2-content ${index + 1 === 2 ? 'mt-20' : ''} text-center`}
                >
                  <div className="cn-contact-2-thumb d-flex justify-content-center">
                    <Image
                      src={item?.contact_secure_image}
                      alt="contact-img"
                      width={100}
                      height={100}
                      style={{ height: 'auto' }}
                    />
                  </div>
                  <h2 className="cn-contact-2-title">{item?.contact_secure_heading}</h2>
                  <div className="cn-contact-2-info-details">
                    <p>{item?.contact_secure_paragraph}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No contact information available</p> // Optional fallback message when data is missing
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactLocationTwo;
