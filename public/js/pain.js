document.addEventListener('DOMContentLoaded', function (event) {
  window.addEventListener(
    'load',
    function (e) {
      gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
      //gsap.set(window, {scrollTo: 0});
      let media = gsap.matchMedia();
      // We Know Your Pain

      media.add('(min-width:992px)', () => {
        const pain = gsap.timeline({
          scrollTrigger: {
            trigger: '.weknowpain-main-outer',
            start: 'top top',
            end: 'bottom',
            scrub: 0.25,
            markers: false,
            pin: '.weknowpain-main-outer',
            pinSpacing: false,
            // snap: true,
            invalidateOnRefresh: true,
          },
        });

        media.add('(min-width: 1600px)', () => {
          pain.to('.experience-show', {
            '--progress1': 90,
            '--translateX': '-4px',
            duration: 5,
            delay: 0.5,
            ease: 'power1.inOut',
          });
          pain.to(
            '.painheading',
            {
              duration: 1.2,
              autoAlpha: 1,
              delay: 2.9,
            },
            '<'
          );
        });

        media.add('(max-width: 1599px)', () => {
          pain.to('.experience-show', {
            '--progress1': 29,
            '--translateX': '-4px',
            duration: 5,
            delay: 0.5,
            ease: 'power1.inOut',
          });
          pain.to(
            '.painheading',
            {
              duration: 1.2,
              autoAlpha: 1,
              delay: 2.9,
            },
            '<'
          );
        });
      });

      ///What we Do

      media.add('(min-width:768px)', () => {
        gsap.set('.what-we-do-list-outer', { zIndex: (i, target, targets) => targets.length - i });

        let texts = gsap.utils.toArray('.what-we-do-list-outer');
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.what-we-do-sec-inner',
            start: 'top top+=180',
            end: 'bottom+=600',
            scrub: true,
            pin: '.what-we-do-sec-inner',
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });

        texts.forEach((text, i) => {
          if (i == 4) return;
          var next = parseInt(i + 1);
          var next2 = parseInt(i + 2);

          tl.to('.what-we-do-list-out-' + next, {
            delay: 1,
            duration: 4,
            y: '-80vh',
            ease: 'none',
          });
          tl.to(
            '.what-we-do-list-outdetail-' + next,
            {
              duration: 1,
              className: 'what-we-do-list-out-' + next,
            },
            '<'
          );
          tl.to(
            '.what-we-do-list-outdetail-' + next2,
            {
              duration: 1,
              className: 'what-we-do-list-out-' + next2 + ' active',
            },
            '<'
          );
        });
      });

      // Partner Stories

      const partner = gsap.timeline({
        scrollTrigger: {
          trigger: '.partner-success-stories-sec',
          start: 'top center',
          end: 'bottom',
          pin: false,
        },
      });

      partner.to('.partner-list-box-1', {
        duration: 0.2,
        y: -110,
      });
      partner.to(
        '.partner-list-box-3',
        {
          duration: 0.2,
          y: 110,
        },
        '<'
      );
    },
    false
  );
});
