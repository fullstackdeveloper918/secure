import { useEffect } from 'react';
import styles from './RealEstateSection.module.css'; // We will use CSS Modules for styling
import Link from 'next/link';

const WebDevelopment = () => {
  return (
    <section id="real-estate-section" className={styles.section_services}>
      <div
        // className={` ${styles.containerlarge} ${styles.isbento} `}
        className="container-1630 mx-auto"
      >
        <div className={styles.services_content}>
          <div className={styles.services_contentLeft}>
            <span>Leistungen</span>
            <h2>One Small Step for Your Brand, One Giant Leap for Your Online Presence</h2>
            <p>
              Every expedition to new frontiers begins with a reliable launchpad—and your website is
              no exception. Our web development team designs visually captivating, high-performing
              platforms that capture your audience’s imagination and hold strong, no matter how far
              you travel. Because when your ambition spans galaxies, your website needs to keep
              pace.
            </p>
          </div>

          <div className={styles.services_contentright}>
            <div className={styles.columnTab}>
              <h4>Cosmic Design Aesthetic</h4>
              <p>We fuse creativity with function to build unique, user-friendly interfaces.</p>
            </div>

            <div className={styles.columnTab}>
              <h4>Mobile-Responsive & Stellar Performance</h4>
              <p>Your website looks and operates flawlessly on any device.</p>
            </div>

            <div className={styles.columnTab}>
              <h4>Search Visibility in Any Orbit</h4>
              <p>Enjoy SEO-friendly architecture that helps your site shine among the stars.</p>
            </div>

            <div className={styles.columnTab}>
              <h4>Future-Ready Tech</h4>
              <p>
                Our code is built to evolve—so your site can boldly go wherever your business leads.
              </p>
            </div>

            <Link href="/contact-us" className="BtnFour btnWrapper">
              Let's Connect
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
      <div className={styles.rocketContainer}></div>

      <div className={styles.cloudImage}>
        <img src="/images/clouds-2x.png" width={1920} height={1000} />
      </div>
    </section>
  );
};

export default WebDevelopment;
