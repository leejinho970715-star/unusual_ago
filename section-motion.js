/* GSAP section choreography. Layout and horizontal gallery scrolling stay native. */
document.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap || !window.ScrollTrigger) return;
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  const sections = [...document.querySelectorAll('main > .section-container')];
  const media = gsap.matchMedia();
  media.add({
    desktop: '(min-width: 901px)',
    mobile: '(max-width: 900px)',
    reduced: '(prefers-reduced-motion: reduce)'
  }, context => {
    if (context.conditions.reduced) return;
    const distance = context.conditions.desktop ? 42 : 20;
    const entrances = new WeakMap();
    const grids = new Map();
    const observers = [];
    const meters = [];
    let refreshFrame;
    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    function reveal(elements, options = {}) {
      gsap.utils.toArray(elements).forEach((element, index) => {
        const tween = gsap.from(element, {
          y: distance,
          opacity: 0,
          duration: .75,
          delay: (index % (context.conditions.desktop ? 3 : 2)) * .06,
          ease: 'power3.out',
          ...options,
          scrollTrigger: {
            trigger: element,
            start: 'top 94%',
            once: true
          },
          clearProps: 'transform,opacity'
        });
        entrances.set(element, tween);
      });
    }
    sections.forEach(section => {
      section.dataset.scrollMotion = 'gsap';
      reveal(section.querySelectorAll('.section-title-wrap'), { y: distance * .65 });
      const meter = document.createElement('div');
      meter.className = 'section-scroll-meter';
      meter.setAttribute('aria-hidden', 'true');
      section.prepend(meter);
      meters.push(meter);
      gsap.fromTo(meter, { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top 85%', end: 'bottom 45%', scrub: .35 }
      });
    });
    // Each section uses different pacing while leaving interactive controls stable.
    reveal('.quiz-row', { duration: .6 });
    reveal('.quiz-result-paper', { scale: .96, duration: .9 });
    reveal('.weekly-info > *', { duration: .85 });
    reveal('.selector-card', { scale: .96 });
    reveal('.match-result-paper', { duration: .9 });
    reveal('.mood-pill', { y: distance * .5, duration: .55 });
    reveal('.mood-mapped-mbti');
    reveal('.lookbook-card', { scale: .97, duration: .9 });
    reveal('.community-actions');
    reveal('.footer-brand, .footer-links');
    // Images move within clipped containers, never beyond the viewport.
    gsap.fromTo('.weekly-img', { scale: 1.08, yPercent: 3 }, {
      scale: 1.02, yPercent: -3, ease: 'none',
      scrollTrigger: { trigger: '#weekly-spotlight', start: 'top bottom', end: 'bottom top', scrub: .6 }
    });
    gsap.fromTo('.lookbook-card-img', { scale: 1.06 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: '#lookbook', start: 'top bottom', end: 'bottom top', scrub: .5 }
    });
    // Filters replace cards; keep triggers bound to the current DOM and release old ones.
    const bindGrid = grid => {
      grids.get(grid)?.revert();
      grids.set(grid, gsap.context(() => reveal([...grid.children])));
      refresh();
    };
    ['types-grid', 'product-grid', 'community-grid'].forEach(id => {
      const grid = document.getElementById(id);
      if (!grid) return;
      bindGrid(grid);
      const observer = new MutationObserver(() => bindGrid(grid));
      observer.observe(grid, { childList: true });
      observers.push(observer);
    });
    // Keyboard navigation must never land on an invisible, delayed entrance.
    const revealFocused = event => {
      let element = event.target;
      while (element instanceof Element) {
        entrances.get(element)?.progress(1);
        element = element.parentElement;
      }
    };
    document.addEventListener('focusin', revealFocused);
    window.addEventListener('load', refresh);
    const resizeObserver = new ResizeObserver(refresh);
    sections.forEach(section => resizeObserver.observe(section));
    refresh();
    return () => {
      cancelAnimationFrame(refreshFrame);
      observers.forEach(observer => observer.disconnect());
      resizeObserver.disconnect();
      grids.forEach(gridContext => gridContext.revert());
      meters.forEach(meter => meter.remove());
      sections.forEach(section => delete section.dataset.scrollMotion);
      document.removeEventListener('focusin', revealFocused);
      window.removeEventListener('load', refresh);
    };
  });
});
