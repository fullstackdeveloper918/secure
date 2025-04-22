'use client';

import React, { useEffect, useState } from 'react';
import './PreLoad.css';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';
const PreLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    initOnFirstLoad();
    return () => {
      gsap.killTweensOf('*');
    };
  }, []);
  const shuffleFunctions = {
    startShuffle: (span, { velocity = 50, shuffleIterations = 8, childSelector = 'span' }) => {
      const originalText = span.getAttribute('data-text');
      // console.log("object",originalText)
      let shuffledText = originalText.split(''); // Start with an array
      let currentShuffle = 0;
      // console.log(shuffledText, 'shuffledText');
      let shuffleInterval = setInterval(() => {
        // Ensure shuffledText remains an array and doesn't get converted to a string prematurely
        shuffledText = shuffledText.map(() =>
          Math.random() < 0.5
            ? String.fromCharCode(Math.random() * 26 + 97)
            : originalText.charAt(Math.floor(Math.random() * originalText.length))
        );
        span.innerText = shuffledText.join(''); // Join back into a string after mapping
        currentShuffle++;
        if (currentShuffle >= shuffleIterations) {
          clearInterval(shuffleInterval);
          span.innerText = originalText; // Set back to the original text after shuffling
        }
      }, velocity);
    },
  };
  const initOnFirstLoad = () => {
    imagesLoaded('body', () => {
      shuffleText();
    });
  };
  const shuffleText = () => {
    const divsToAnimate = document.querySelectorAll('.word');
    const animatedDivs = new Set(); // Track animated divs
    const spanAnimationDuration = 0.15;
    const spanDelay = 0.45;
    const divOpacityOutDuration = 0.15;
    const divDelay = 1.5;
    // Ensure all divs and their child spans are hidden initially
    divsToAnimate.forEach((div) => {
      gsap.set(div, { opacity: 0 }); // Hide all divs
      const spans = div.querySelectorAll('span');
      spans.forEach((span) => {
        gsap.set(span, { opacity: 0 }); // Hide all spans inside the div
      });
    });
    const animateDiv = (div, onCompleteCallback) => {
      // if (animatedDivs.has(div)) return; // Skip if already animated
      const words = div.innerText.split(' ');
      div.innerHTML = '';
      words.forEach((word, wordIndex) => {
        const span = document.createElement('span');
        span.classList.add('shuffle-word');
        span.setAttribute('data-text', word);
        span.innerText = word;
        div.appendChild(span);
        gsap.set(span, { opacity: 0 }); // Ensure spans are hidden initially
        if (wordIndex < words.length - 1) {
          div.appendChild(document.createTextNode(' '));
        }
      });
      // Show the div and animate its spans
      gsap.to(div, { opacity: 1, duration: 0.2 }); // Fade in the div
      const spans = div.querySelectorAll('span');
      spans.forEach((span, spanIndex) => {
        const spanDelayTime = spanIndex * spanDelay;
        setTimeout(() => {
          shuffleFunctions.startShuffle(span, {
            velocity: 50,
            shuffleIterations: 8,
            childSelector: 'span',
          });
          gsap.to(span, { opacity: 1, duration: spanAnimationDuration });
        }, spanDelayTime * 1000);
      });
      // Hide the div after the animation
      const totalAnimationTime = spans.length * spanDelay + divDelay;
      setTimeout(() => {
        gsap.to(div, {
          opacity: 0,
          duration: divOpacityOutDuration,
          onComplete: () => {
            if (onCompleteCallback) onCompleteCallback();
          },
        });
      }, totalAnimationTime * 1000);
      animatedDivs?.add(div);
    };
    const startAnimation = (index = 0) => {
      if (index < divsToAnimate.length) {
        animateDiv(divsToAnimate[index], () => {
          startAnimation(index + 1); // Animate the next div after the current one completes
        });
      } else {
        setIsLoaded(true);
        // After the last div animates, restart the animation to create a continuous loop
        // setTimeout(() => {
        //   startAnimation(0);
        // Restart from the first div
        //  }, 0);
        // Delay before restarting
      }
    };
    if (divsToAnimate.length > 0) {
      startAnimation(0); // Start with the first div
    }
  };
  return (
    <div>
      {!isLoaded ? (
        <div className="preloader-wrap">
          <div id="text-container">
            <div className="word">Brewing some cool things</div>
            <div className="word">Hang tight, magic is happening</div>
            <div className="word">Loading your adventure</div>
          </div>
          <div className="loadbar"></div>
          <div className="percentage-wrapper">
            <div className="percentage">Loading...</div>
          </div>
          <div className="percentage-intro">Please wait, content is loading</div>
        </div>
      ) : (
        <div className="main-content"></div>
      )}
    </div>
  );
};
export default PreLoad;
