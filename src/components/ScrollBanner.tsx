import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
const ScrollBanner = () => {
  const [style, setStyle] = useState({
    firstImage: {
      translateY: 0,
      scale: 1,
      height: 120,
      width: 180,
      margin: 20,
    },
    secondImage: {
      translateY: 0,
      scale: 1,
      height: 120,
      width: 180,
      margin: 20,
    },
    thirdImage: {
      translateY: 0,
      scale: 1,
      height: 120,
      width: 180,
      margin: 20,
    },
    gap: 50, // Initial gap between the divs
  });
  const [isScrollPassed, setIsScrollPassed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log('ScrollY:', scrollY);
      if (scrollY >= 900) {
        setIsScrollPassed(true); // Set the flag when scroll passes 410
      } else {
        setIsScrollPassed(false); // Reset the flag when scroll is less than 410
      }
      if (scrollY >= 900) {
        // Move images to specific positions
        gsap.to('.first-image', {
          x: '-1px', // Move left
          y: '260px',
          scale: 1,
          height: 500,
          width: 250,
          duration: 0.5,
          ease: 'power2.out',
        });
        gsap.to('.second-image', {
          x: '0px', // Stay centered
          y: '260px',
          scale: 1,
          height: 500,
          width: 700,
          duration: 0.5,
          ease: 'power2.out',
        });
        gsap.to('.third-image', {
          x: '1px', // Move right
          y: '260px',
          scale: 1,
          height: 500,
          width: 250,
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        // Dynamically increase width and height based on scroll
        const firstImageHeight = Math.min(500, 120 + scrollY / 2);
        // const firstImageWidth = Math.min(400, 180 + scrollY / 3);
        const secondImageHeight = Math.min(500, 120 + scrollY / 2.5);
        const secondImageWidth = Math.min(600, 180 + scrollY / 2);
        const thirdImageHeight = Math.min(500, 120 + scrollY / 3);
        // const thirdImageWidth = Math.min(400, 180 + scrollY / 4);
        setStyle({
          firstImage: {
            translateY: Math.min(300, scrollY / 2),
            scale: 1 + scrollY / 1000,
            height: firstImageHeight,
            width: 150,
            // width: firstImageWidth,
            margin: Math.min(50, 20 + scrollY / 100),
          },
          secondImage: {
            translateY: Math.min(200, scrollY / 3),
            scale: 1 + scrollY / 1000,
            height: secondImageHeight,
            width: secondImageWidth,
            margin: Math.min(50, 20 + scrollY / 100),
          },
          thirdImage: {
            translateY: Math.min(100, scrollY / 4),
            scale: 1 + scrollY / 1000,
            height: thirdImageHeight,
            width: 150,
            // width: thirdImageWidth,
            margin: Math.min(50, 20 + scrollY / 100),
          },
          gap: Math.min(10, 50 + scrollY / 200),
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const scrollYMove = window.scrollY;
  // if(scrollYMove >= 410){
  const handleMouseEnterFirst = () => {
    if (isScrollPassed) {
      gsap.to('.first-image', {
        x: '-50px',
        width: 700,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to('.second-image', {
        width: 220,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };
  const handleMouseLeaveFirst = () => {
    if (isScrollPassed) {
      gsap.to('.first-image', {
        x: '-50px',
        width: 220,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to('.second-image', {
        width: 700,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };
  const handleMouseEnterThird = () => {
    if (isScrollPassed) {
      gsap.to('.third-image', {
        x: '0px', // Move right
        width: 700, // Increase width
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to('.second-image', {
        width: 220, // Decrease width
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };
  const handleMouseLeaveThird = () => {
    if (isScrollPassed) {
      gsap.to('.third-image', {
        x: '0px', // Reset position
        width: 220, // Reset width
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to('.second-image', {
        width: 700, // Reset width
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };
  // }
  useEffect(() => {
    // Apply GSAP animations for smooth adjustments with easing
    gsap.to('.first-image', {
      y: style.firstImage.translateY,
      scale: style.firstImage.scale,
      height: style.firstImage.height,
      width: style.firstImage.width,
      margin: style.firstImage.margin,
      duration: 0.5, // Increased duration for smoothness
      ease: 'power2.out', // Easing for smooth transition
    });
    gsap.to('.second-image', {
      y: style.secondImage.translateY,
      scale: style.secondImage.scale,
      height: style.secondImage.height,
      width: style.secondImage.width,
      margin: style.secondImage.margin,
      duration: 0.5, // Increased duration for smoothness
      ease: 'power2.out', // Easing for smooth transition
    });
    gsap.to('.third-image', {
      y: style.thirdImage.translateY,
      scale: style.thirdImage.scale,
      height: style.thirdImage.height,
      width: style.thirdImage.width,
      margin: style.thirdImage.margin,
      duration: 0.5, // Increased duration for smoothness
      ease: 'power2.out', // Easing for smooth transition
    });
    // Apply gap animation with easing
    gsap.to('.scroll-banner-container', {
      gap: `${style.gap}px`,
      scrub: true,
      duration: 0.5, // Increased duration for smoothness
      ease: 'power2.out', // Easing for smooth transition
    });
  }, [style]);
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        gap: '20px',
        justifyContent: 'space-around',
        position: 'relative',
        backgroundColor: '#F5F5F5',
      }}
    >
      <div
        className="scroll-banner-container"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
        }}
      >
        {/* First Image */}
        <div
          className="image-wrapper first-image"
          style={{
            // width: `${style.firstImage.width}px`,
            width: '180px',
            height: `${style.firstImage.height}px`,
            backgroundColor: '#FF66CC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 20,
            margin: `${style.firstImage.margin}px`,
          }}
          onMouseEnter={handleMouseEnterFirst}
          onMouseLeave={handleMouseLeaveFirst}
        >
          <img
            src="/assets/img/home-01/project/project-1-1.jpg"
            alt="First"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Second Image */}
        <div
          className="image-wrapper second-image"
          style={{
            width: `${style.secondImage.width}px`,
            height: `${style.secondImage.height}px`,
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 15,
            margin: `${style.secondImage.margin}px`,
          }}
        >
          <img
            src="/assets/img/home-01/project/project-1-2.jpg"
            alt="Second"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Third Image */}
        <div
          className="image-wrapper third-image"
          style={{
            // width: `${style.thirdImage.width}px`,
            width: '180px',
            height: `${style.thirdImage.height}px`,
            backgroundColor: '#FFFF00',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 10,
            margin: `${style.thirdImage.margin}px`,
          }}
          onMouseEnter={handleMouseEnterThird}
          onMouseLeave={handleMouseLeaveThird}
        >
          <img
            src="/assets/img/home-01/project/project-1-3.jpg"
            alt="Third"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};
export default ScrollBanner;
