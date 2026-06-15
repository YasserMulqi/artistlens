import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktopHome = document.body.classList.contains('home-desktop');

if (isDesktopHome && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const heroIntro = document.querySelectorAll(
    '.home-hero__content > *, .scroll-cue'
  );
  gsap.from(heroIntro, {
    autoAlpha: 0,
    y: 18,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.08,
    delay: 0.15,
  });

  const projectsSection = document.querySelector<HTMLElement>('.projects-section');
  const projectsRail = document.querySelector<HTMLElement>('.projects-rail');
  const projectsTrack = document.querySelector<HTMLElement>('.projects-track');

  if (projectsSection && projectsRail && projectsTrack) {
    gsap.set(projectsRail, { overflow: 'hidden' });

    const getProjectDistance = () =>
      Math.max(0, projectsTrack.scrollWidth - projectsRail.clientWidth);

    gsap.to(projectsTrack, {
      x: () => -getProjectDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: projectsSection,
        start: 'top top',
        end: () => `+=${getProjectDistance()}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }

  const framesSection = document.querySelector<HTMLElement>('.frames-section');
  const frameImages = gsap.utils.toArray<HTMLImageElement>('.frames-deck > img');
  const frameCounter = document.querySelector<HTMLElement>('.frames-caption strong');
  const frameDots = gsap.utils.toArray<HTMLElement>('.frame-dots span');
  const frameCount = 6;

  const setFrame = (index: number) => {
    const safeIndex = Math.min(frameCount - 1, Math.max(0, index));
    frameImages.forEach((image, imageIndex) => {
      const offset = imageIndex - safeIndex;
      const isActive = imageIndex === safeIndex;
      gsap.to(image, {
        autoAlpha: isActive ? 1 : imageIndex < safeIndex ? 0 : 0.34,
        y: isActive ? 0 : Math.max(0, offset) * 18,
        scale: isActive ? 1 : 0.985,
        duration: 0.32,
        ease: 'power1.out',
        overwrite: true,
      });
    });
    if (frameCounter) {
      frameCounter.textContent = `${String(safeIndex + 1).padStart(2, '0')} / 06`;
    }
    frameDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === safeIndex);
    });
  };

  if (framesSection && frameImages.length >= frameCount) {
    setFrame(0);

    ScrollTrigger.create({
      trigger: framesSection,
      start: 'top top',
      end: `+=${window.innerHeight * (frameCount - 1)}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        setFrame(Math.round(self.progress * (frameCount - 1)));
      },
    });
  }

  gsap.utils
    .toArray<HTMLElement>('.services-section, .motion-section, .contact-section, .about-section')
    .forEach((section) => {
      gsap.from(section.children, {
        autoAlpha: 0,
        y: 18,
        duration: 0.55,
        ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          once: true,
        },
      });
    });

  const reelButton = document.querySelector<HTMLElement>('.reel-play');
  if (reelButton) {
    reelButton.setAttribute('role', 'button');
    reelButton.setAttribute('tabindex', '0');
    reelButton.setAttribute('aria-label', 'Play motion reel');
    const pulse = () =>
      gsap.fromTo(
        reelButton,
        { scale: 1 },
        { scale: 1.06, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.out' }
      );
    reelButton.addEventListener('pointerenter', pulse);
    reelButton.addEventListener('focus', pulse);
  }
}
