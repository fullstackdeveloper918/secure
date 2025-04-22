import $ from 'jquery';
import { gsap } from 'gsap';
import { SplitText, chroma } from '@/plugins';

function footerOneAnimation() {
  if (typeof window !== 'undefined') {
    document
      .querySelectorAll('.tp-text-anim > li > a')
      .forEach(
        (button) =>
          (button.innerHTML =
            '<div class="tp-menu-text"><span>' +
            button.textContent!.split('').join('</span><span>') +
            '</span></div>')
      );

    setTimeout(() => {
      const menuText = document.querySelectorAll<HTMLSpanElement>('.tp-menu-text span');
      menuText.forEach((item) => {
        const fontSizes = window.getComputedStyle(item, null);
        const fontSize = fontSizes.getPropertyValue('font-size');
        const sizeInNumber = parseInt(fontSize.replace('px', ''));
        let newSize = String(sizeInNumber / 3);
        newSize = newSize + 'px'; // Corrected to string conversion
        if (item.innerHTML === ' ') {
          item.style.width = newSize;
        }
      });
    }, 1000);
  }
}

function footerTwoAnimation() {
  if (document.querySelector('.footer-big-text')) {
    const cta = gsap.timeline({
      repeat: -1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.footer-big-text',
        start: 'bottom 100%-=50px',
      },
    });
    gsap.set('.footer-big-text', {
      opacity: 0,
    });
    gsap.to('.footer-big-text', {
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.footer-big-text',
        start: 'bottom 100%-=50px',
        once: true,
      },
    });

    const mySplitText = new SplitText('.footer-big-text', { type: 'words,chars' });
    const chars = mySplitText.chars;
    const endGradient = (chroma as any).scale(['#FFF', '#FFF', '#FFF', '#FFF', '#FFF']);
    cta.to(chars, {
      duration: 0.5,
      scaleY: 0.6,
      ease: 'power1.out',
      stagger: 0.04,
      transformOrigin: 'center bottom',
    });
    cta.to(
      chars,
      {
        yPercent: -20,
        ease: 'elastic',
        stagger: 0.03,
        duration: 0.8,
      },
      0.5
    );
    cta.to(
      chars,
      {
        scaleY: 1,
        ease: 'elastic.out',
        stagger: 0.03,
        duration: 1.5,
      },
      0.5
    );
    cta.to(
      chars,
      {
        color: (i, el, arr) => {
          return endGradient(i / arr.length).hex();
        },
        ease: 'power1.out',
        stagger: 0.03,
        duration: 0.3,
      },
      0.5
    );
    cta.to(
      chars,
      {
        yPercent: 0,
        ease: 'back',
        stagger: 0.03,
        duration: 0.8,
      },
      0.7
    );
    cta.to(chars, {
      color: '#fff',
      duration: 1.4,
      stagger: 0.05,
    });
  }
}

export { footerOneAnimation, footerTwoAnimation };
