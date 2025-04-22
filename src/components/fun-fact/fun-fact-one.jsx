import React from 'react';
import Link from 'next/link';
import CounterItem from '../counter/counter-item';
import { Leaf } from '../svg';

const counter_data = [
  {
    id: 1,
    title: 'PROJECTS COMPLETED',
    count: 200,
    text: '+',
  },
  {
    id: 2,
    title: 'YEARS OF EXPERIENCE',
    count: 17,
    text: '+',
  },
  {
    id: 3,
    title: 'TEAM MEMBERS',
    count: 9,
    text: '+',
  },
  {
    id: 4,
    title: 'GROWING AGENCY',
    count: 194,
    text: '%',
  },
];
export default function FunFactOne({ aboutResponse }) {
  return (
    <div className="ab-funfact-area pb-40">
      <div className="container container-1480">
        <div className="row">
          <div className="ab-fun-title">
            <span className="ab-inner-subtitle mb-25">
              <Leaf />
              {aboutResponse?.data?.about_counter_section_fun_fact}
            </span>
            <h2 className="ab-inner-funfact-title tp_title_anim">
              {aboutResponse?.data?.about_counter_section_fun_agency_heading} <br /> Snapshots
            </h2>

            <div className="btn_sec flex gap-3 flex-wrap mb-7 mt-2">
              {/* <button > */}
              <Link href="/contact-us" className="BtnTwo btnWrapper">
                Explore More
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
              {/* </button> */}
            </div>
          </div>
          <div className="ab-counter flex">
            {counter_data.map((item) => (
              <div key={item.id} className="count">
                <div className="ab-funfact-item mb-90">
                  <span>
                    <CounterItem min={0} max={item.count} />
                    {item.text}
                  </span>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="col-xl-4">
            <div className="ab-funfact-title-box">
              <span className="ab-inner-subtitle mb-25">
                <Leaf />
               {aboutResponse?.data?.about_counter_section_fun_fact}
              </span>
              <h2 className="ab-inner-funfact-title tp_title_anim">
                {aboutResponse?.data?.about_counter_section_fun_agency_heading} <br /> Snapshots
              </h2>
            </div>
          </div> */}
          {/* <div className="col-xl-8">
            <div className="ab-funfact-wrap">
              <div className="row gx-75">
                {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="ab-funfact-item mb-90">
                      <span>
                        <CounterItem min={0} max={item.count} />
                        {item.text}
                      </span>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
