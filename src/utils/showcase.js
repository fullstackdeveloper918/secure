import { gsap } from 'gsap';

import $ from 'jquery';

function ShowcasePortfolio() {
  const showcasePortfolio = document.querySelector('.showcase-portfolio');

  if (showcasePortfolio.classList.contains('filp-grid')) {
    const clapatItems = showcasePortfolio.querySelectorAll('.clapat-item');
    clapatItems.forEach((item) => {
      const pixelsWrapper = item.querySelector('.pixels-wrapper');
      if (pixelsWrapper) {
        pixelsWrapper.remove();
      }
    });
  }

  gsap.set('.flip-thumb-effects', { opacity: 0, yPercent: 50 });

  if (!$('body').hasClass('show-loader')) {
    let preloaderTimeout = 3000;
    if (typeof window.preloaderTimeout !== 'undefined') {
      preloaderTimeout = window.preloaderTimeout + 300; // Ajustare preloader timeout
    }

    setTimeout(animateFlipThumbEffects, preloaderTimeout);
  } else {
    animateFlipThumbEffects();
  }

  function animateFlipThumbEffects() {
    gsap.to('.flip-thumb-effects', {
      duration: 0.4,
      delay: 0.7,
      opacity: 1,
      yPercent: 0,
      stagger: 0.1,
      ease: 'power3.out',
    });

    gsap.utils.toArray('.flip-thumb-effects').forEach((_, index) => {
      gsap.delayedCall(0.8 + index * 0.1, () => {
        $('.flip-move-thumb').eq(index).addClass('show-counter');
      });
    });
  }
}
export { ShowcasePortfolio };
