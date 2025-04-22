import { useEffect, useState } from 'react';
import styles from './RealEstateSection.module.css'; // We will use CSS Modules for styling

const RealEstateSection = () => {
  useEffect(() => {
    const section = document.querySelector('#real-estate-section');
    const rocket = document.querySelector('.rocket');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            rocket.style.animationPlayState = 'running'; // Start animation when in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    observer.observe(section);
  }, []);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Adjust the formula to move the rocket further upwards
  const rocketPosition = Math.min(scrollY / 4, 400); // Adjust 300 to move the rocket higher (the larger the value, the higher it moves)

  return (
    <section id="real-estate-section" className={styles.realEstateSection}>
      <div className={styles.content}>
        <h2>Navigating Your Business Through the Stars… and Safeguarding Every Step</h2>
        <p>
          Think of Secure365 as your interstellar co-pilot, guiding you safely through the
          ever-expanding cosmos of modern technology. We blend visionary web development with
          rock-solid IT services, cloud solutions, and cybersecurity—ensuring that no matter which
          galaxy (or market) you’re aiming for, you’ll arrive unscathed. Our mission? Simple: to
          help your brand thrive and remain secure, from initial launch to the far reaches of
          tomorrow.
        </p>
      </div>
      <div className={styles.rocketContainer}>
        <div
          className={styles.rocket}
          style={{
            transform: `translateY(-${rocketPosition}px)`, // Adjust the translateY to move up more
            opacity: Math.max(1 - rocketPosition / 400, 0), // Optional: fade out effect as it moves up
          }}
        >
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="980"
            height="1988"
            fill="none"
            viewBox="0 0 980 1988"
          >
            <g clipPath="url(#clip0_1390_111)">
              <mask
                id="mask0_1390_111"
                width="980"
                height="1988"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: 'luminance' }}
              >
                <path fill="#fff" d="M980 0H0v1988h980z"></path>
              </mask>
              <g mask="url(#mask0_1390_111)">
                <g filter="url(#filter0_f_1390_111)" opacity="0.73">
                  <path
                    fill="url(#paint0_linear_1390_111)"
                    d="m583.915 235.078-72.78-58.11c-13.32-10.62-32.25-10.56-45.51.21l-71.13 57.9a52.06 52.06 0 0 0-19.11 40.2v541.77h228v-541.56a52.03 52.03 0 0 0-19.47-40.41"
                  ></path>
                  <path
                    fill="url(#paint1_linear_1390_111)"
                    d="m583.915 235.078-72.78-58.11c-13.32-10.62-32.25-10.56-45.51.21l-71.13 57.9a52.06 52.06 0 0 0-19.11 40.2v541.77h228v-541.56a52.03 52.03 0 0 0-19.47-40.41"
                  ></path>
                </g>
                <path
                  fill="url(#paint2_linear_1390_111)"
                  d="m565.96 248.506-58.95-46.98c-10.8-8.61-26.13-8.55-36.87.15l-57.63 46.83c-9.78 7.95-15.45 19.89-15.48 32.49v438h184.71v-437.82a41.94 41.94 0 0 0-15.78-32.67"
                ></path>
                <path
                  fill="url(#paint3_linear_1390_111)"
                  d="m565.96 248.506-58.95-46.98c-10.8-8.61-26.13-8.55-36.87.15l-33.18 27 58.2 46.41c9.96 7.95 15.75 20.01 15.78 32.76v411.12h70.8v-437.79a41.94 41.94 0 0 0-15.78-32.67"
                ></path>
                <path
                  fill="url(#paint4_linear_1390_111)"
                  d="m569.2 332.95 12.54-20.61 12.51 20.61c5.88 9.66 9 20.79 9 32.1V758.5H560.2V365.05c0-11.31 3.12-22.44 9-32.1"
                ></path>
                <path
                  fill="url(#paint5_linear_1390_111)"
                  d="m594.25 332.95-12.51-20.61-9 14.55 3.66 6c5.88 9.66 9 20.79 9 32.1V758.5h17.7V365.05c.06-11.31-3-22.41-8.85-32.1"
                  style={{ mixBlendMode: 'multiply' }}
                ></path>
                <path
                  fill="url(#paint6_linear_1390_111)"
                  d="m384.52 332.95 12.51-20.61 12.54 20.61c5.88 9.66 9 20.79 9 32.1V758.5h-43.05V365.05c0-11.31 3.12-22.44 9-32.1"
                ></path>
                <path
                  fill="url(#paint7_linear_1390_111)"
                  d="m409.57 332.95-12.54-20.61-8.82 14.55 3.66 6c5.88 9.66 9 20.79 9 32.1V758.5h17.7V365.05c0-11.31-3.12-22.44-9-32.1"
                  style={{ mixBlendMode: 'multiply' }}
                ></path>
                <path
                  fill="url(#paint8_linear_1390_111)"
                  d="M418.57 772.63h-43.05l8.85-14.13h27.12z"
                ></path>
                <path
                  fill="url(#paint9_linear_1390_111)"
                  d="M510.04 354.436c-4.65-9.66-15.15-15.03-25.71-13.2a24.46 24.46 0 0 0-17.67 13.83l-25.5 53.19a85.9 85.9 0 0 0-8.4 37.02v285h111.48v-285c0-12.81-2.88-25.47-8.4-37.02z"
                ></path>
                <path
                  fill="url(#paint10_linear_1390_111)"
                  d="M544.24 471.61v13.5H432.76v-13.5z"
                ></path>
                <path
                  fill="url(#paint11_linear_1390_111)"
                  d="M544.24 570.94v13.5H432.76v-13.5z"
                ></path>
                <path
                  fill="url(#paint12_linear_1390_111)"
                  d="M613.27 682.54c0-14.85-5.82-29.1-16.17-39.72l-52.86-54.21v141.57h69z"
                ></path>
                <path
                  fill="url(#paint13_linear_1390_111)"
                  d="m603.43 636.67-52.86-54.24-6.33-6.48v12.66l52.86 54.21a56.93 56.93 0 0 1 16.17 39.72v47.64h8.85v-47.64c.03-17.16-6.66-33.63-18.69-45.87"
                ></path>
                <path
                  fill="url(#paint14_linear_1390_111)"
                  d="M363.729 682.54c0-14.85 5.82-29.1 16.17-39.72l52.86-54.21v141.57h-69z"
                ></path>
                <path
                  fill="url(#paint15_linear_1390_111)"
                  d="m373.57 636.67 52.86-54.24 6.33-6.48v12.66l-52.86 54.21a56.93 56.93 0 0 0-16.17 39.72v47.64h-8.85v-47.64c-.03-17.16 6.66-33.63 18.69-45.87"
                ></path>
                <path
                  fill="url(#paint16_linear_1390_111)"
                  d="M533.5 700.12c0-24.45-19.8-44.25-44.25-44.25-11.73 0-22.98 4.65-31.29 12.96a44.33 44.33 0 0 0-12.93 31.29v43.38h88.47z"
                ></path>
                <path
                  fill="url(#paint17_linear_1390_111)"
                  d="M453.52 772.63h71.73c2.22 0 4.35-.9 5.94-2.46a8.48 8.48 0 0 0 2.43-5.94V743.5h-88.47v20.76c0 2.22.87 4.35 2.46 5.91a8.26 8.26 0 0 0 5.91 2.46"
                ></path>
                <path
                  fill="url(#paint18_linear_1390_111)"
                  d="M503.56 660.821v80.64c0 7.616-6.184 13.8-13.8 13.8h-.72c-7.616 0-13.8-6.184-13.8-13.8v-80.64c0-7.617 6.184-13.8 13.8-13.8h.72c7.616 0 13.8 6.183 13.8 13.8"
                ></path>
                <path
                  fill="url(#paint19_linear_1390_111)"
                  d="M603.28 389.17v14.46H560.2v-14.46z"
                ></path>
                <path
                  fill="url(#paint20_linear_1390_111)"
                  d="M603.28 521.051v14.46H560.2v-14.46z"
                ></path>
                <path
                  fill="url(#paint21_linear_1390_111)"
                  d="M418.6 389.17v14.46h-43.08v-14.46z"
                ></path>
                <path
                  fill="url(#paint22_linear_1390_111)"
                  d="M418.6 521.051v14.46h-43.08v-14.46z"
                ></path>
                <path
                  fill="url(#paint23_linear_1390_111)"
                  d="M603.31 772.63h-43.08l8.85-14.13h27.15z"
                ></path>
                <path
                  fill="url(#paint24_linear_1390_111)"
                  d="M509.77 397.36h-42.6c-3.99.03-7.62 2.37-9.27 6l-9.42 21h80.04c-.63-1.95-6-13.71-9.45-21-1.65-3.66-5.28-6-9.3-6"
                ></path>
                <path
                  fill="url(#paint25_linear_1390_111)"
                  d="M413.92 772.631v305.119h-32.61V772.631z"
                ></path>
                <path
                  fill="url(#paint26_linear_1390_111)"
                  d="M598.03 772.631v305.119h-32.61V772.631z"
                ></path>
                <path
                  fill="url(#paint27_linear_1390_111)"
                  d="M516.778 772.631v484.479h-56.526V772.631z"
                ></path>
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1390_111"
                x1="489.385"
                x2="489.385"
                y1="169.048"
                y2="708.85"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8ECCF1"></stop>
                <stop offset="0.24" stopColor="#4793E5"></stop>
                <stop offset="0.47" stopColor="#0059DA"></stop>
                <stop offset="0.74" stopColor="#002D6D"></stop>
                <stop offset="1"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_1390_111"
                x1="489.385"
                x2="489.385"
                y1="169.048"
                y2="300.37"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7EC4EF"></stop>
                <stop offset="0.11" stopColor="#BEE1F7"></stop>
                <stop offset="0.22" stopColor="#fff"></stop>
                <stop offset="0.61" stopColor="#8B99A8" stopOpacity="0.5"></stop>
                <stop offset="1" stopColor="#173351" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_1390_111"
                x1="489.385"
                x2="489.385"
                y1="195.106"
                y2="631.516"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="0.08" stopColor="#FBC488"></stop>
                <stop offset="0.17" stopColor="#F78812"></stop>
                <stop offset="0.37" stopColor="#E25517"></stop>
                <stop offset="0.57" stopColor="#CD231D"></stop>
                <stop offset="0.79" stopColor="#A22824"></stop>
                <stop offset="1" stopColor="#772D2B"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_1390_111"
                x1="490.564"
                x2="509.35"
                y1="195.106"
                y2="718.96"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFFEFC"></stop>
                <stop offset="0.06" stopColor="#FFDCB5"></stop>
                <stop offset="0.13" stopColor="#FFB96E"></stop>
                <stop offset="0.29" stopColor="#F59342"></stop>
                <stop offset="0.45" stopColor="#EB6C15"></stop>
                <stop offset="0.73" stopColor="#B4451A"></stop>
                <stop offset="1" stopColor="#7D1E1E"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_1390_111"
                x1="581.725"
                x2="581.725"
                y1="312.34"
                y2="758.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="0.5" stopColor="#DFDFDF"></stop>
                <stop offset="1" stopColor="silver"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_1390_111"
                x1="587.92"
                x2="587.92"
                y1="312.34"
                y2="758.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ACD4FF"></stop>
                <stop offset="0.5" stopColor="#D5EAFF"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_1390_111"
                x1="397.045"
                x2="397.045"
                y1="312.34"
                y2="758.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="0.5" stopColor="#DFDFDF"></stop>
                <stop offset="1" stopColor="silver"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_1390_111"
                x1="403.39"
                x2="403.39"
                y1="312.34"
                y2="758.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ACD4FF"></stop>
                <stop offset="0.5" stopColor="#D5EAFF"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient
                id="paint8_linear_1390_111"
                x1="397.045"
                x2="397.045"
                y1="758.5"
                y2="772.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#161B28"></stop>
                <stop offset="0.5" stopColor="#86521D"></stop>
                <stop offset="1" stopColor="#F78812"></stop>
              </linearGradient>
              <linearGradient
                id="paint9_linear_1390_111"
                x1="488.5"
                x2="488.5"
                y1="340.876"
                y2="730.27"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CEF0FF"></stop>
                <stop offset="0.5" stopColor="#E7F8FF"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient
                id="paint10_linear_1390_111"
                x1="544.24"
                x2="432.76"
                y1="478.36"
                y2="478.36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#006BED"></stop>
                <stop offset="0.5" stopColor="#054897"></stop>
                <stop offset="1" stopColor="#0A2642"></stop>
              </linearGradient>
              <linearGradient
                id="paint11_linear_1390_111"
                x1="544.24"
                x2="432.76"
                y1="577.69"
                y2="577.69"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#006BED"></stop>
                <stop offset="0.5" stopColor="#054897"></stop>
                <stop offset="1" stopColor="#0A2642"></stop>
              </linearGradient>
              <linearGradient
                id="paint12_linear_1390_111"
                x1="613.27"
                x2="544.24"
                y1="659.395"
                y2="659.395"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="0.5" stopColor="#D7D9DE"></stop>
                <stop offset="1" stopColor="#AFB3BC"></stop>
              </linearGradient>
              <linearGradient
                id="paint13_linear_1390_111"
                x1="583.18"
                x2="583.18"
                y1="575.95"
                y2="730.18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#006BED"></stop>
                <stop offset="0.5" stopColor="#054897"></stop>
                <stop offset="1" stopColor="#0A2642"></stop>
              </linearGradient>
              <linearGradient
                id="paint14_linear_1390_111"
                x1="363.729"
                x2="432.759"
                y1="659.395"
                y2="659.395"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="0.5" stopColor="#D7D9DE"></stop>
                <stop offset="1" stopColor="#AFB3BC"></stop>
              </linearGradient>
              <linearGradient
                id="paint15_linear_1390_111"
                x1="393.82"
                x2="393.82"
                y1="575.95"
                y2="730.18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#006BED"></stop>
                <stop offset="0.5" stopColor="#054897"></stop>
                <stop offset="1" stopColor="#0A2642"></stop>
              </linearGradient>
              <linearGradient
                id="paint16_linear_1390_111"
                x1="489.265"
                x2="489.265"
                y1="743.5"
                y2="655.87"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D8D8D8"></stop>
                <stop offset="0.5" stopColor="#ECECEC"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient
                id="paint17_linear_1390_111"
                x1="489.385"
                x2="489.385"
                y1="743.5"
                y2="772.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0A2642"></stop>
                <stop offset="0.5" stopColor="#1B3859"></stop>
                <stop offset="1" stopColor="#2B4A70"></stop>
              </linearGradient>
              <linearGradient
                id="paint18_linear_1390_111"
                x1="489.4"
                x2="489.4"
                y1="647.021"
                y2="755.261"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E1E3E7"></stop>
                <stop offset="0.5" stopColor="#F0F1F3"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient
                id="paint19_linear_1390_111"
                x1="560.2"
                x2="603.28"
                y1="396.4"
                y2="396.4"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F78812"></stop>
                <stop offset="0.5" stopColor="#E25517"></stop>
                <stop offset="1" stopColor="#CD231D"></stop>
              </linearGradient>
              <linearGradient
                id="paint20_linear_1390_111"
                x1="560.2"
                x2="603.28"
                y1="528.281"
                y2="528.281"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F78812"></stop>
                <stop offset="0.5" stopColor="#E25517"></stop>
                <stop offset="1" stopColor="#CD231D"></stop>
              </linearGradient>
              <linearGradient
                id="paint21_linear_1390_111"
                x1="375.52"
                x2="418.6"
                y1="396.4"
                y2="396.4"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F78812"></stop>
                <stop offset="0.5" stopColor="#E25517"></stop>
                <stop offset="1" stopColor="#CD231D"></stop>
              </linearGradient>
              <linearGradient
                id="paint22_linear_1390_111"
                x1="375.52"
                x2="418.6"
                y1="528.281"
                y2="528.281"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F78812"></stop>
                <stop offset="0.5" stopColor="#E25517"></stop>
                <stop offset="1" stopColor="#CD231D"></stop>
              </linearGradient>
              <linearGradient
                id="paint23_linear_1390_111"
                x1="581.77"
                x2="581.77"
                y1="758.5"
                y2="772.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#161B28"></stop>
                <stop offset="0.5" stopColor="#86521D"></stop>
                <stop offset="1" stopColor="#F78812"></stop>
              </linearGradient>
              <linearGradient
                id="paint24_linear_1390_111"
                x1="488.5"
                x2="488.5"
                y1="397.36"
                y2="424.36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3E84B9"></stop>
                <stop offset="0.5" stopColor="#24557D"></stop>
                <stop offset="1" stopColor="#0A2642"></stop>
              </linearGradient>
              <linearGradient
                id="paint25_linear_1390_111"
                x1="397.615"
                x2="397.615"
                y1="772.631"
                y2="1077.75"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7EC4EF"></stop>
                <stop offset="0.11" stopColor="#BEE1F7"></stop>
                <stop offset="0.22" stopColor="#fff"></stop>
                <stop offset="0.61" stopColor="#8B99A8" stopOpacity="0.5"></stop>
                <stop offset="1" stopColor="#173351" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint26_linear_1390_111"
                x1="581.725"
                x2="581.725"
                y1="772.631"
                y2="1077.75"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7EC4EF"></stop>
                <stop offset="0.11" stopColor="#BEE1F7"></stop>
                <stop offset="0.22" stopColor="#fff"></stop>
                <stop offset="0.61" stopColor="#8B99A8" stopOpacity="0.5"></stop>
                <stop offset="1" stopColor="#173351" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint27_linear_1390_111"
                x1="488.515"
                x2="488.515"
                y1="772.631"
                y2="1257.11"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7EC4EF"></stop>
                <stop offset="0.11" stopColor="#BEE1F7"></stop>
                <stop offset="0.22" stopColor="#fff"></stop>
                <stop offset="0.61" stopColor="#8BA2B9" stopOpacity="0.5"></stop>
                <stop offset="1" stopColor="#174672" stopOpacity="0"></stop>
              </linearGradient>
              <clipPath id="clip0_1390_111">
                <path fill="#fff" d="M0 0h980v1988H0z"></path>
              </clipPath>
              <filter
                id="filter0_f_1390_111"
                width="631.2"
                height="1051.2"
                x="173.785"
                y="-32.548"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_1390_111"
                  stdDeviation="100.8"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className={styles.cloudImage}>
        <img src="/images/clouds-2x.png" width={1920} height={1000} />
      </div>
    </section>
  );
};

export default RealEstateSection;
