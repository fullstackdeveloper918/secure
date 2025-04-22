import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import shape from '@/assets/img/inner-about/about/shape-1.png';

const work_data = [
  {
    id: 1,
    title: 'Real-World Experience',
    // subtitle: "Design Studio",
    text: 'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
  {
    id: 2,
    title: 'Comprehensive Solutions',
    // subtitle: "Design Studio",
    text: 'Write modern, perform ant, maintainable code for a diverse array of client and internal projects',
  },
  {
    id: 3,
    title: 'Victim-Centric Approach',
    // subtitle: "Design Studio",
    text: 'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
  {
    id: 4,
    title: 'Expert Team',
    // subtitle: "Design Studio",
    text: 'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.',
  },
];
export default function AboutWork() {
  return (
    <div className="ab-2-work-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-5">
            <div className="ab-2-work-title-box p-relative text-left w-full">
              <h2 className="ab-2-work-title tp_title_anim text-left">
                Why Choose <span className="blueColor">Secure365?</span>
              </h2>
              {/* <span className="ab-2-work-subtitle tp_title_anim">
                About My Biography
              </span> */}
              <Image className="ab-2-work-shape d-none d-lg-block" src={shape} alt="shape" />
            </div>
          </div>
          <div className="col-xl-12 col-lg-7 row pt-20 grid grid-cols-2 gap-5">
            {work_data.map((item) => (
              <div
                key={item.id}
                className="ab-2-work-item tp_fade_bottom col-xl-12 col-lg-12 col-md-12"
              >
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>{item.id < 9 ? '0' + item.id : item.id}</i>
                      {/* {item.subtitle} */}
                    </span>
                    <h2 className="sv-service-title">{item.title}</h2>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      </div>
    </div>
  );
}
