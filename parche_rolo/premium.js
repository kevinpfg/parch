(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const buzz = p => { try { navigator.vibrate && navigator.vibrate(p); } catch {} };

  // Inclinación 3D + brillo holográfico que sigue el dedo o el mouse
  function tilt(el, max) {
    if (reduce || el.dataset.tilt) return;
    el.dataset.tilt = '1';
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--ry', ((x - .5) * max * 2).toFixed(2) + 'deg');
      el.style.setProperty('--rx', ((.5 - y) * max * 2).toFixed(2) + 'deg');
      el.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
      el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
      el.classList.add('is-tilting');
    });
    const reset = () => {
      el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg');
      el.classList.remove('is-tilting');
    };
    el.addEventListener('pointerleave', reset);
    el.addEventListener('pointercancel', reset);
  }
  document.querySelectorAll('#categoryChoiceScreen .category-card').forEach(c => tilt(c, 10));
  const card = $('#gameCard');
  if (card) {
    const stage = document.createElement('div');
    stage.className = 'card-stage';
    card.parentNode.insertBefore(stage, card);
    stage.appendChild(card);
    tilt(card, 9);
  }

  // Animación de reparto: la carta se voltea al salir
  function deal() {
    const c = $('#gameCard'), s = $('#cardScreen');
    if (!c || !s || !s.classList.contains('active')) return;
    c.classList.remove('dealing'); void c.offsetWidth; c.classList.add('dealing');
    buzz(25);
    setTimeout(() => c.classList.remove('dealing'), 1000);
  }
  if (typeof window.chooseCard === 'function') {
    const original = window.chooseCard;
    window.chooseCard = function (...args) { const r = original.apply(this, args); deal(); return r; };
  }

  // Vibración suave en móviles
  document.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.matches('.category-card')) buzz(15);
    else if (b.id === 'nextButton' || b.id === 'modalDoneButton') buzz([20, 40, 20]);
    else if (b.id === 'skipButton') buzz(60);
  });
})();
