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
    if (frameCounter) {
      frameCounter.textContent = `${String(safeIndex + 1).padStart(2, '0')} / 06`;
    }
    frameDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === safeIndex);
    });
  };

  if (framesSection && frameImages.length >= frameCount) {
    gsap.set(frameImages, {
      autoAlpha: 1,
      yPercent: 0,
      scale: 1,
      filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
      transformOrigin: '50% 50%',
    });
    gsap.set(frameImages.slice(1), {
      yPercent: 100,
      scale: 1,
      filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
    });
    setFrame(0);

    const framesTimeline = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      scrollTrigger: {
        trigger: framesSection,
        start: 'top top',
        end: `+=${window.innerHeight * frameCount * 1.15}`,
        pin: true,
        scrub: 0.65,
        anticipatePin: 1,
        onUpdate: (self) => {
          setFrame(Math.floor(self.progress * frameCount));
        },
      },
    });

    frameImages.slice(1).forEach((image) => {
      framesTimeline.to({}, { duration: 0.22 });
      framesTimeline.to(image, {
        yPercent: 18,
        scale: 1.1,
        filter: 'drop-shadow(0 72px 108px rgba(0, 0, 0, 0.95))',
        duration: 0.2,
        ease: 'power2.out',
      });
      framesTimeline.to(image, {
        yPercent: 0,
        scale: 1,
        filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
        duration: 0.22,
        ease: 'power3.in',
      });
    });
    framesTimeline.to({}, { duration: 0.28 });

    ScrollTrigger.create({
      trigger: framesSection,
      start: 'top top',
      end: `+=${window.innerHeight * frameCount * 1.15}`,
      onLeave: () => setFrame(frameCount - 1),
      onEnterBack: () => setFrame(frameCount - 1),
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
