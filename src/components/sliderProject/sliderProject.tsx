'use client'; // Required for Next.js 14+

import { useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from './slide.module.css';
import Image1 from '../../../public/images/just-for.png';
import Image2 from '../../../public/images/just-for.png';
import Image3 from '../../../public/images/just-for.png';
const images = [Image1, Image2, Image3];

const ClapatSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="content-row full light-section" data-bgcolor="#ebebeb">
      <div className="clapat-slider-wrapper">
        <div className="clapat-slider">
          <div className="clapat-slider-viewport">
            {images.map((src, index) => (
              <div
                key={index}
                className={`clapat-slide ${index === currentIndex ? 'clapat-slide-active' : ''}`}
              >
                <div className="slide-img">
                  <Image src={src} alt={`Slide ${index + 1}`} width={1280} height={720} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="clapat-controls">
          <button className="clapat-button-prev slider-button-prev" onClick={goPrev}>
            &lt;
          </button>
          <button className="clapat-button-next slider-button-next" onClick={goNext}>
            &gt;
          </button>
        </div>

        {/* Pagination */}
        <div className="clapat-pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`clapat-pagination-bullet ${
                index === currentIndex ? 'clapat-pagination-bullet-active' : ''
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClapatSlider;
