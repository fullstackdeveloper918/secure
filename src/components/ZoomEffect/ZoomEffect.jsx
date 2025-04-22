'use client';
import styles from './styles.module.css';
import Picture2 from '../../../public/assets/img/home-01/award/hp.svg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const maskOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Adjust mask opacity dynamically

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        <div
          className={styles.imageContainer}
          style={{
            WebkitMaskImage: `url(${Picture2.src})`, // Use Webkit for broader browser support
            WebkitMaskSize: 'cover',
            WebkitMaskRepeat: 'no-repeat',
            maskImage: `url(${Picture2.src})`, // Standard mask-image property
            maskSize: 'cover',
            maskRepeat: 'no-repeat',
            opacity: maskOpacity,
          }}
        >
          <video
            loop={true}
            muted={true}
            autoPlay={true}
            playsInline={true}
            className={styles.video}
          >
            <source
              src="/assets/video/Cyber Security Opener (After Effects template).mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
