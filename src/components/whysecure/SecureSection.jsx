'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import projectImages from '../../../public/images/deliverProject.png';
import Secure100 from '../../../public/images/secure100+.svg';
import secureYear from '../../../public/images/secureYear.svg';
import countryImage from '../../../public/images/country.png';
import logoImg from '../../../public/images/secure365-logo-black.png';
import styles from './SecureSection.module.css';
import Link from 'next/link';

const SecureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('secure-section').getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 10; // Increased movement
      const y = (e.clientY - rect.top - rect.height / 2) / 10; // Increased movement
      setMousePosition({ x, y });
    };

    const section = document.getElementById('secure-section');
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('secure-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    handleScroll(); // Check immediately on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log('mousePositon', mousePosition);
  // console.log("mousePositona",mousePositiona)
  return (
    <section id="secure-section" className={styles.secureSection}>
      <div
        className={`${styles.statsContainer}`}
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h2>
          <strong>but, why </strong>Secure365?{' '}
        </h2>
        <p className={isVisible ? styles.fadeIn : ''}>
          At Secure 365, we understand that navigating the digital world can be overwhelming. That's
          why we've designed our services to be a one-stop solution, covering everything from cloud
          management and IT support to marketing and cybersecurity. Our approach combines expertise,
          proactive management, and industry-leading technology to deliver seamless experiences,
          minimize risk, and maximize efficiency.
          <br></br>
          <br></br>
          <br></br>
          With our dedicated team of professionals, you can rest assured that your digital
          infrastructure is in capable hands. Whether you're a small business or a large enterprise,
          we are committed to helping you thrive in the ever-evolving digital world. With a focus on
          innovation and excellence, we ensure that your organization remains ahead of the curve.
        </p>

        <div className="btn_sec flex gap-3 flex-wrap justify-center mt-0">
          <Link href="/contact-us" className="Btnthree btnWrapper">
            Discuss Your Requirement
          </Link>
        </div>
      </div>

      {/* Stats Boxes with enhanced animations */}
      <div
        className={`${styles.statBox} ${styles.statbox1} ${isVisible ? styles.fadeIn : ''}`}
        style={{
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className={styles.changePosition}>
          <Image src={Secure100} width={100} height={100} alt="Projects Icon" />
        </div>
        <h3>100+</h3>
        <p>Projects</p>
      </div>

      <div
        className={`${styles.statBox} ${styles.statbox2} ${isVisible ? styles.fadeIn : ''}`}
        style={{
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className={styles.changePosition}>
          <Image src={projectImages} width={100} height={100} alt="Projects Delivered Icon" />
        </div>
        <h3>2500+</h3>
        <p>Projects Delivered</p>
      </div>

      <div
        className={`${styles.statBox} ${styles.statbox3} ${isVisible ? styles.fadeIn : ''}`}
        style={{
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className={styles.yearImages}>
          <Image src={secureYear} width={100} height={100} alt="Years Icon" />
        </div>
        <h3>13+</h3>
        <p>Years & Counting</p>
      </div>

      <div
        className={`${styles.statBox} ${styles.statbox4} ${isVisible ? styles.fadeIn : ''}`}
        style={{
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className={styles.addbgImages}>
          <Image src={countryImage} width={300} height={300} alt="Countries Served Icon" />
        </div>
        <h3>32+</h3>
        <p>Countries Served</p>
      </div>
    </section>
  );
};

export default SecureSection;
