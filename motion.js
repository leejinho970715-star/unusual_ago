/* Native sticky + requestAnimationFrame: wheel, touch and reverse scroll share one timeline. */
(() => {
  const story = document.querySelector('.scroll-story');
  const stage = document.querySelector('.story-stage');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const collage = document.querySelector('.collage-scene');
  const heading = document.querySelector('.hero-heading');
  const board = document.querySelector('.board-paper');
  const boardCopy = document.querySelector('.moodboard-copy');
  const archive = document.querySelector('.archive-scene');
  const cards = [...document.querySelectorAll('.collage-card')];
  const files = [...document.querySelectorAll('.archive-file')];
  const clamp = v => Math.max(0, Math.min(1, v));
  const range = (v, a, b) => clamp((v - a) / (b - a));
  const ease = v => v * v * (3 - 2 * v);
  let pending = false, pointerX = 0, pointerY = 0;
  document.querySelectorAll('.letter-line').forEach(line => {
    const title = line.textContent;
    line.setAttribute('aria-label', title);
    line.replaceChildren(...[...title].map((letter, i) => {
      const el = document.createElement('i');
      el.textContent = letter === ' ' ? '\u00a0' : letter;
      el.setAttribute('aria-hidden', 'true');
      el.dataset.offset = String((i % 3 - 1) * 12);
      return el;
    }));
  });
  const letters = [...document.querySelectorAll('.letter-line i')];
  function render() {
    pending = false;
    const rect = story.getBoundingClientRect();
    const p = reduced.matches ? 0 : clamp(-rect.top / Math.max(1, story.offsetHeight - stage.offsetHeight));
    const gather = 1 - ease(range(p, 0, .14));
    const mood = ease(range(p, .17, .32));
    const exit = ease(range(p, .40, .51));
    document.querySelector('.studio-nav').classList.toggle('scrolled', scrollY > 70);
    letters.forEach((letter, i) => {
      const offset = Number(letter.dataset.offset);
      letter.style.transform = `translate(${offset * gather * .3}px,${offset * gather}px) rotate(${offset * gather * .45}deg)`;
    });
    heading.style.opacity = String(1 - mood);
    heading.inert = mood > .8;
    heading.setAttribute('aria-hidden', String(mood > .8));
    board.style.opacity = String(mood);
    boardCopy.style.opacity = String(mood);
    boardCopy.setAttribute('aria-hidden', String(mood < .8));
    collage.style.opacity = String(1 - exit);
    collage.style.transform = `scale(${1 + exit * .35})`;
    collage.inert = exit > .8;
    const rotations = [-13, 12, -9, 8];
    const drift = [[-12, -18], [12, -5], [20, 4], [-8, 5]];
    cards.forEach((card, i) => {
      const x = drift[i][0] * mood + pointerX * (i % 2 ? -5 : 6);
      const y = drift[i][1] * mood + pointerY * (i % 2 ? 6 : -5);
      card.style.transform = `translate(${x}px,${y}px) rotate(${rotations[i] * (1 - mood * .65)}deg) scale(${1 - mood * .08})`;
    });
    archive.style.opacity = String(exit);
    archive.style.visibility = exit > 0 ? 'visible' : 'hidden';
    archive.inert = exit < .8;
    archive.setAttribute('aria-hidden', String(exit < .8));
    const position = range(p, .54, .98) * 4.999;
    const current = Math.min(4, Math.floor(position));
    files.forEach((file, i) => {
      const lifted = i === files.length - 1 ? 0 : ease(clamp(position - i - .32));
      const ahead = Math.max(0, i - current);
      file.style.zIndex = String(9 - i);
      file.style.transform = `translateY(${-lifted * 135 + ahead * 2}%) rotate(${-lifted * 18 + ahead * 2}deg)`;
      file.style.opacity = String(1 - lifted);
      file.setAttribute('aria-hidden', String(i !== current));
    });
    document.querySelector('.archive-count').textContent = String(current + 1).padStart(2, '0');
    document.querySelector('.story-chapter').textContent = p < .22 ? '01 — THE UNUSUAL' : p < .49 ? '02 — THE MOODBOARD' : '03 — THE TYPE FILES';
    document.querySelector('.story-progress').textContent = `${String(Math.round(p * 100)).padStart(2, '0')}—100`;
    document.querySelector('.story-progress-track span').style.transform = `scaleX(${p})`;
  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(render); } }
  document.body.classList.add('motion-ready');
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  reduced.addEventListener('change', () => { pointerX = pointerY = 0; schedule(); });
  stage.addEventListener('pointermove', event => {
    if (reduced.matches || !finePointer.matches) return;
    pointerX = event.clientX / innerWidth - .5;
    pointerY = event.clientY / innerHeight - .5;
    schedule();
  });
  stage.addEventListener('pointerleave', () => { pointerX = pointerY = 0; schedule(); });
  render();
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
  }), { threshold: .1 });
  document.querySelectorAll('.section-title-wrap').forEach(el => { el.classList.add('reveal-ready'); observer.observe(el); });

  const menu = document.querySelector('#mobile-menu');
  const toggle = document.querySelector('.menu-toggle');
  function closeMenu() { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'MENU +'; }
  toggle.addEventListener('click', () => { menu.hidden = !menu.hidden; toggle.setAttribute('aria-expanded', String(!menu.hidden)); toggle.textContent = menu.hidden ? 'MENU +' : 'CLOSE −'; });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });

  // Initialise after the existing application has populated its lookbook.
  document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.querySelector('.lookbook-track-wrap');
    const controls = document.createElement('div');
    controls.className = 'lookbook-controls';
    controls.innerHTML = '<span class="lookbook-position" aria-live="polite">01 / 05</span><button aria-label="이전 룩북">←</button><button aria-label="다음 룩북">→</button>';
    wrap.after(controls);
    wrap.tabIndex = 0;
    wrap.setAttribute('aria-label', '룩북 갤러리, 좌우 방향키로 탐색');
    const [prev, next] = controls.querySelectorAll('button');
    const step = () => (wrap.querySelector('.lookbook-card')?.getBoundingClientRect().width || 340) + 24;
    const move = direction => wrap.scrollBy({ left: step() * direction, behavior: reduced.matches ? 'instant' : 'smooth' });
    prev.addEventListener('click', () => move(-1)); next.addEventListener('click', () => move(1));
    wrap.addEventListener('keydown', event => {
      if (event.target !== wrap || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
    });
    const update = () => {
      const count = wrap.querySelectorAll('.lookbook-card').length;
      const atEnd = wrap.scrollLeft >= wrap.scrollWidth - wrap.clientWidth - 3;
      prev.disabled = wrap.scrollLeft < 3; next.disabled = atEnd;
      controls.querySelector('span').textContent = `${String(atEnd ? count : Math.round(wrap.scrollLeft / step()) + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
    };
    wrap.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update); update();
    let drag = null, suppressClick = false;
    wrap.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'mouse' || event.button !== 0 || event.target.closest('button,a')) return;
      drag = { x: event.clientX, left: wrap.scrollLeft, id: event.pointerId };
      suppressClick = false;
    });
    wrap.addEventListener('pointermove', event => {
      if (!drag) return;
      const delta = event.clientX - drag.x;
      if (Math.abs(delta) > 5) { suppressClick = true; wrap.setPointerCapture(drag.id); wrap.classList.add('dragging'); }
      if (suppressClick) wrap.scrollLeft = drag.left - delta;
    });
    const stopDrag = () => { drag = null; wrap.classList.remove('dragging'); };
    wrap.addEventListener('pointerup', stopDrag); wrap.addEventListener('pointercancel', stopDrag); wrap.addEventListener('lostpointercapture', stopDrag);
    wrap.addEventListener('dragstart', event => event.preventDefault());
    wrap.addEventListener('click', event => { if (suppressClick) { event.preventDefault(); event.stopPropagation(); suppressClick = false; } }, true);
    document.querySelectorAll('.quiz-toggle').forEach((el, index) => {
      el.setAttribute('role', 'switch'); el.tabIndex = 0;
      el.setAttribute('aria-label', ['외향 E / 내향 I', '직관 N / 감각 S', '감정 F / 사고 T', '인식 P / 판단 J'][index]);
      el.setAttribute('aria-checked', String(quizTraits[index] === 1));
      el.querySelector('.quiz-handle').classList.toggle('active', quizTraits[index] === 1);
      el.addEventListener('click', () => el.setAttribute('aria-checked', String(quizTraits[index] === 1)));
      el.addEventListener('keydown', event => { if (['Enter', ' '].includes(event.key)) { event.preventDefault(); el.click(); } });
    });
    document.querySelectorAll('.modal-backdrop,.drawer-backdrop').forEach(overlay => {
      overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true');
      const label = overlay.querySelector('.paper-title');
      if (label?.id) overlay.setAttribute('aria-labelledby', label.id);
      const close = overlay.querySelector('.paper-close');
      close.setAttribute('aria-label', '닫기');
      let returnFocus;
      new MutationObserver(() => {
        if (!overlay.classList.contains('hidden')) { returnFocus = document.activeElement; close.focus(); }
        else if (returnFocus?.isConnected) returnFocus.focus();
        document.body.style.overflow = document.querySelector('.modal-backdrop:not(.hidden),.drawer-backdrop:not(.hidden)') ? 'hidden' : '';
      }).observe(overlay, { attributes: true, attributeFilter: ['class'] });
      overlay.addEventListener('click', event => { if (event.target === overlay) close.click(); });
      overlay.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const focusable = [...overlay.querySelectorAll('button,a[href],input,select,[tabindex="0"]')].filter(el => el.getClientRects().length && !el.disabled);
        const first = focusable[0], last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      });
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (!menu.hidden) { closeMenu(); toggle.focus(); }
    document.querySelectorAll('.modal-backdrop:not(.hidden),.drawer-backdrop:not(.hidden)').forEach(el => el.classList.add('hidden'));
  });
})();
