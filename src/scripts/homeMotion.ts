import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktopHome = document.body.classList.contains('home-desktop');
const isHomePage = Boolean(document.querySelector('.home-page'));
const isDesktopViewport = window.matchMedia('(min-width: 1024px)').matches;
const isMobileViewport = window.matchMedia('(max-width: 1023px)').matches;
const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
const canRunDesktopMotion = isDesktopHome && isDesktopViewport && hasFinePointer && !reduceMotion;
let lenis: Lenis | null = null;

if (isHomePage && !canRunDesktopMotion) {
  document.body.classList.add('home-motion-static');
}

if (canRunDesktopMotion) {
  gsap.registerPlugin(ScrollTrigger);

  lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const revealText = (
    elements: gsap.TweenTarget,
    trigger?: Element | null,
    delay = 0,
    start = 'top 80%'
  ) => {
    gsap.from(elements, {
      autoAlpha: 0,
      y: 24,
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.9,
      delay,
      ease: 'power3.out',
      stagger: 0.08,
      clearProps: 'clipPath,transform,opacity,visibility',
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            once: true,
          }
        : undefined,
    });
  };

  const revealSoft = (elements: gsap.TweenTarget, trigger?: Element | null, delay = 0) => {
    gsap.from(elements, {
      autoAlpha: 0,
      y: 16,
      duration: 0.7,
      delay,
      ease: 'power2.out',
      stagger: 0.06,
      clearProps: 'transform,opacity,visibility',
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 78%',
            once: true,
          }
        : undefined,
    });
  };

  const revealEyebrows = (root: ParentNode | Document = document) => {
    gsap.utils.toArray<HTMLElement>('.eyebrow, .home-motion-kicker', root).forEach((element) => {
      const computedSpacing = window.getComputedStyle(element).letterSpacing;
      const finalSpacing = Number.parseFloat(computedSpacing);
      const isLowerHeading = Boolean(
        element.closest('.services-section, .motion-section, .contact-section, .about-section')
      );
      const isHeroKicker = Boolean(element.closest('.home-hero'));
      gsap.from(element, {
        autoAlpha: 0,
        y: 8,
        letterSpacing: Number.isFinite(finalSpacing)
          ? `${Math.max(0, finalSpacing - 0.7)}px`
          : undefined,
        delay: isLowerHeading ? 0.1 : 0,
        duration: 0.65,
        ease: 'power2.out',
        clearProps: 'transform,opacity,visibility,letterSpacing',
        scrollTrigger: !isHeroKicker
          ? {
              trigger: element,
              start: isLowerHeading ? 'top 82%' : 'top 80%',
              once: true,
            }
          : undefined,
      });
    });
  };

  const heroLines = gsap.utils.toArray<HTMLElement>('.hero-title-line > span');
  const heroSecondary = document.querySelectorAll(
    '.home-hero__content > p, .home-actions, .home-tags, .scroll-cue'
  );
  const heroTimeline = gsap.timeline({ delay: 0.12 });
  heroTimeline.from(heroLines, {
    autoAlpha: 0,
    yPercent: 105,
    duration: 1.18,
    ease: 'power3.out',
    stagger: 0.15,
    clearProps: 'transform,opacity,visibility',
  });
  heroTimeline.from(heroSecondary, {
    autoAlpha: 0,
    y: 16,
    duration: 0.68,
    ease: 'power2.out',
    stagger: 0.06,
    clearProps: 'transform,opacity,visibility',
  }, '-=0.34');

  const projectsSection = document.querySelector<HTMLElement>('.projects-section');
  const projectsRail = document.querySelector<HTMLElement>('.projects-rail');
  const projectsTrack = document.querySelector<HTMLElement>('.projects-track');
  const projectsCounter = document.querySelector<HTMLElement>('.projects-section .rail-progress strong');

  if (projectsSection && projectsRail && projectsTrack) {
    gsap.set(projectsRail, { overflow: 'hidden' });

    const totalProjects = projectsTrack.querySelectorAll('.project-tile').length;
    const projectHoldProgress = 0.14;
    const setProjectCounter = (progress: number) => {
      if (!projectsCounter || totalProjects === 0) return;
      const movementProgress = gsap.utils.clamp(
        0,
        1,
        (progress - projectHoldProgress) / (1 - projectHoldProgress)
      );
      const currentProject = Math.round(movementProgress * (totalProjects - 1)) + 1;
      projectsCounter.textContent = `${String(currentProject).padStart(2, '0')} — ${String(totalProjects).padStart(2, '0')}`;
    };

    const getProjectDistance = () =>
      Math.max(0, projectsTrack.scrollWidth - projectsRail.clientWidth);

    const projectsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSection,
        start: 'top top',
        end: () => `+=${getProjectDistance() * 1.15}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProjectCounter(self.progress),
      },
    });

    setProjectCounter(0);
    projectsTimeline.to({}, { duration: projectHoldProgress });
    projectsTimeline.to(projectsTrack, {
      x: () => -getProjectDistance(),
      ease: 'power2.inOut',
      duration: 0.86,
    });
  }

  const framesSection = document.querySelector<HTMLElement>('.frames-section');
  const frameLayers = gsap.utils.toArray<HTMLElement>('.frames-deck > .frame-layer');
  const framePlates = gsap.utils.toArray<HTMLElement>('.frame-plate');
  const frameShadows = gsap.utils.toArray<HTMLElement>('.frame-top-shadow');
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

  if (framesSection && frameLayers.length >= frameCount) {
    gsap.set(frameLayers, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      yPercent: 0,
      scale: 1,
      transformOrigin: '50% 50%',
    });
    gsap.set(framePlates, {
      x: 0,
      y: 0,
      yPercent: 0,
      scale: 1,
      transformOrigin: '50% 50%',
    });
    gsap.set(frameLayers.slice(1), {
      yPercent: 100,
    });
    gsap.set(frameShadows, { autoAlpha: 0 });
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

    frameLayers.slice(1).forEach((layer, index) => {
      const plate = framePlates[index + 1];
      const shadow = frameShadows[index + 1];
      framesTimeline.to({}, { duration: 0.22 });
      const transitionStart = framesTimeline.duration();
      const transitionDuration = 0.42;
      const transitionHalfDuration = transitionDuration / 2;

      framesTimeline.to(layer, {
        yPercent: 0,
        duration: transitionDuration,
        ease: 'power2.inOut',
      }, transitionStart);
      framesTimeline.to(plate, {
        keyframes: [
          { scale: 1.1, duration: transitionHalfDuration, ease: 'sine.in' },
          { scale: 1, duration: transitionHalfDuration, ease: 'sine.out' },
        ],
        overwrite: 'auto',
      }, transitionStart);
      framesTimeline.to(shadow, {
        keyframes: [
          { autoAlpha: 1, duration: transitionHalfDuration, ease: 'sine.in' },
          { autoAlpha: 0, duration: transitionHalfDuration, ease: 'sine.out' },
        ],
      }, transitionStart);
      framesTimeline.set(layer, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        yPercent: 0,
        scale: 1,
      }, transitionStart + transitionDuration);
      framesTimeline.set(plate, {
        x: 0,
        y: 0,
        yPercent: 0,
        scale: 1,
      }, transitionStart + transitionDuration);
      framesTimeline.set(shadow, {
        autoAlpha: 0,
      }, transitionStart + transitionDuration);
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

  revealEyebrows();

  gsap.utils.toArray<HTMLElement>(
    '.figma-section__heading h2, .services-copy h2, .motion-heading h2, .contact-section h2, .about-copy h2'
  ).forEach((heading) => {
    const isLowerHeading = Boolean(
      heading.closest('.services-section, .motion-section, .contact-section, .about-section')
    );
    revealText(heading, heading, isLowerHeading ? 0.1 : 0, isLowerHeading ? 'top 82%' : 'top 80%');
  });

  const serviceCards = gsap.utils.toArray<HTMLElement>('.service-card');
  if (serviceCards.length) {
    revealSoft(serviceCards, document.querySelector('.services-section'), 0.08);
  }

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

  ScrollTrigger.refresh();
}

if (isHomePage && isMobileViewport) {
  const clampProgress = (value: number) => Math.min(1, Math.max(0, value));
  const formatIndex = (value: number) => String(value).padStart(2, '0');
  const homePage = document.querySelector<HTMLElement>('.home-page');
  const isArabicMobileHome = homePage?.dataset.homeLang === 'ar';
  const isEnglishMobileHome = homePage?.dataset.homeLang === 'en';

  if (!reduceMotion && homePage) {
    const revealGroups = [
      [
        '.home-hero .home-motion-kicker',
        '.home-hero .hero-title-line > span',
        '.home-hero__content > p',
        '.home-actions',
        '.home-tags .home-tag',
      ],
      [
        '.projects-heading .eyebrow',
        '.projects-heading h2',
        '.projects-heading .section-cue',
      ],
      [
        '.frames-heading .eyebrow',
        '.frames-heading h2',
        '.frames-heading .section-cue',
      ],
      [
        '.services-copy .eyebrow',
        '.services-copy h2',
        '.services-copy > p',
        '.service-card header',
        '.service-card h3',
        '.service-card p',
      ],
      [
        '.motion-heading .home-motion-kicker',
        '.motion-heading h2',
        '.motion-heading a',
        '.reel-copy p',
        '.reel-copy h3',
        '.reel-block time',
      ],
      [
        '.about-copy .eyebrow',
        '.about-copy h2',
        '.about-copy > p',
        '.about-stats > div',
      ],
      [
        '.contact-section > .eyebrow',
        '.contact-section h2',
        '.contact-section > p:not(.eyebrow)',
        '.contact-actions',
        '.contact-links',
      ],
      ['.home-mobile-footer p'],
    ];

    const revealRoots = gsap.utils
      .toArray<HTMLElement>(
        '.home-hero, .projects-section, .frames-section, .services-section, .motion-section, .about-section, .contact-section, .home-mobile-footer'
      )
      .map((root, index) => ({
        root,
        items: gsap.utils.toArray<HTMLElement>(revealGroups[index]?.join(',') ?? '', root),
      }))
      .filter(({ items }) => items.length > 0);

    revealRoots.forEach(({ items }) => {
      gsap.set(items, {
        autoAlpha: 0,
        y: 14,
        force3D: true,
      });
    });

    const mobileHeroReveal = isEnglishMobileHome
      ? revealRoots.find(({ root }) => root.classList.contains('home-hero'))
      : undefined;

    if (mobileHeroReveal) {
      const heroImage = mobileHeroReveal.root.querySelector<HTMLElement>('.home-hero__media img');

      if (heroImage) {
        gsap.set(heroImage, {
          scale: 1.2,
          transformOrigin: 'center center',
          force3D: true,
        });

        gsap
          .timeline({ delay: 0.08 })
          .to(heroImage, {
            scale: 1,
            duration: 2.5,
            ease: 'power2.inOut',
            clearProps: 'transform',
          })
          .to(
            mobileHeroReveal.items,
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.24,
              ease: 'power2.out',
              stagger: 0.11,
              clearProps: 'transform,opacity,visibility',
            },
            1.5
          );
      }
    }

    const mobileTextObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const revealRoot = revealRoots.find(({ root }) => root === entry.target);
          if (!revealRoot) return;

          const isServicesReveal = revealRoot.root.classList.contains('services-section');

          gsap.to(revealRoot.items, {
            autoAlpha: 1,
            y: 0,
            duration: isServicesReveal ? 0.48 : 0.62,
            ease: 'power2.out',
            stagger: isServicesReveal ? 0.035 : 0.055,
            clearProps: 'transform,opacity,visibility',
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -6% 0px',
      }
    );

    revealRoots
      .filter(({ root }) => root !== mobileHeroReveal?.root)
      .forEach(({ root }) => mobileTextObserver.observe(root));
  }

  const projectsRail = document.querySelector<HTMLElement>('.projects-rail');
  const projectsTrack = document.querySelector<HTMLElement>('.projects-track');
  const projectTiles = Array.from(document.querySelectorAll<HTMLElement>('.project-tile'));
  const projectsCounter = document.querySelector<HTMLElement>('.projects-section .rail-progress strong');
  const projectProgress = document.querySelector<HTMLElement>('.projects-section .rail-progress i');
  const projectsSection = document.querySelector<HTMLElement>('.projects-section');

  if (projectsRail && projectsTrack && projectTiles.length) {
    const updateMobileProjects = () => {
      const maxScroll = Math.max(1, projectsTrack.scrollWidth - projectsRail.clientWidth);
      const progress = clampProgress(Math.abs(projectsRail.scrollLeft) / maxScroll);
      const currentProject = Math.round(progress * (projectTiles.length - 1)) + 1;

      if (projectsCounter) {
        projectsCounter.textContent = `${formatIndex(currentProject)} — ${formatIndex(projectTiles.length)}`;
      }

      if (projectProgress) {
        projectProgress.style.width = `${Math.max(8, (currentProject / projectTiles.length) * 100)}%`;
      }

      projectTiles.forEach((tile, index) => {
        tile.classList.toggle('is-active', index === currentProject - 1);
      });
    };

    projectsRail.addEventListener('scroll', updateMobileProjects, { passive: true });
    window.addEventListener('resize', updateMobileProjects, { passive: true });

    updateMobileProjects();
  }

  const framesDeck = document.querySelector<HTMLElement>('.frames-deck');
  const frameLayers = Array.from(document.querySelectorAll<HTMLElement>('.frames-deck > .frame-layer'));
  const frameCounter = document.querySelector<HTMLElement>('.frames-caption strong');
  const frameDots = Array.from(document.querySelectorAll<HTMLElement>('.frame-dots span'));

  if (framesDeck && frameLayers.length) {
    if (isArabicMobileHome) {
      const updateArabicFramesFromHorizontalScroll = () => {
        const maxScroll = Math.max(1, framesDeck.scrollWidth - framesDeck.clientWidth);
        const progress = clampProgress(Math.abs(framesDeck.scrollLeft) / maxScroll);
        const currentFrame = Math.round(progress * (frameLayers.length - 1));

        if (frameCounter) {
          frameCounter.textContent = `${formatIndex(currentFrame + 1)} / ${formatIndex(frameLayers.length)}`;
        }

        frameDots.forEach((dot, index) => {
          dot.classList.toggle('is-active', index === currentFrame);
        });
      };

      framesDeck.addEventListener('scroll', updateArabicFramesFromHorizontalScroll, { passive: true });
      window.addEventListener('resize', updateArabicFramesFromHorizontalScroll, { passive: true });
      updateArabicFramesFromHorizontalScroll();
    }
  }
}

if (isDesktopHome) {
  const backToTop = document.querySelector<HTMLButtonElement>('.back-to-top');

  if (backToTop) {
    let isBackToTopVisible = false;

    const updateBackToTop = () => {
      const shouldShow = window.scrollY > window.innerHeight * 0.6;
      if (shouldShow !== isBackToTopVisible) {
        isBackToTopVisible = shouldShow;
        backToTop.classList.toggle('is-visible', shouldShow);
      }
    };

    backToTop.addEventListener('click', () => {
      if (lenis && !reduceMotion) {
        lenis.scrollTo(0);
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    });

    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }
}
