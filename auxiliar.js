(function() {

/* ---- Colores de tags (paleta 12) ---- */
const P = [
  ['#e8f0fe','#1a56db'],['#fce8f3','#99154b'],['#e3f9e5','#1c7c2e'],
  ['#fef3cd','#92400e'],['#f3e8ff','#6d28d9'],['#fee2e2','#991b1b'],
  ['#e0f2fe','#0369a1'],['#fef9c3','#854d0e'],['#f0fdf4','#166534'],
  ['#fdf4ff','#86198f'],['#fff7ed','#9a3412'],['#f0f9ff','#075985'],
];
function hash(s) {
  let a = 0x9e3779b9, b = 0x6c62272e;
  for (let i = 0; i < s.length; i++) {
    a ^= s.charCodeAt(i) * 0x9e3779b9;
    b ^= s.charCodeAt(i) * 0x6c62272e;
    a = (a << 5 | a >>> 27) ^ b;
  }
  return Math.abs(a) % P.length;
}
function colorTags() {
  document.querySelectorAll('a[href*="/tags/"], .tag-span, span[class*="tag"]')
    .forEach(el => {
      if (el.dataset.tc) return;
      el.dataset.tc = '1';
      const t = el.textContent.trim().replace(/^#/, '');
      if (!t) return;
      const [bg, c] = P[hash(t)];
      el.style.background = bg;
      el.style.color = c;
    });
}
colorTags();
new MutationObserver(colorTags).observe(document.body, { childList: true, subtree: true });

/* ---- Atajos de teclado ---- */
document.addEventListener('keydown', e => {
  if (!e.altKey) return;
  if (['ArrowUp','ArrowDown','f','F'].includes(e.key)) e.preventDefault();
  if (e.key === 'f' || e.key === 'F') {
    const s = document.querySelector('input[type=search], input[placeholder*="earch"], input[placeholder*="uscar"]');
    s?.focus(); s?.select();
  }
  if (e.key === 'ArrowUp') window.scrollTo({ top: 0, behavior: 'smooth' });
  if (e.key === 'ArrowDown') window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

/* ---- Foco automático en editor ---- */
function focusEditor() {
  const ed = document.querySelector('textarea.w-full.text-base.resize-none');
  if (ed && document.body.contains(ed)) { 
    ed.focus({ preventScroll: true }); // No mover scroll al enfocar
    return true; 
  }
  return false;
}

// Al cargar la página
setTimeout(focusEditor, 300);

// Al volver a la pestaña (cambio de tab)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    setTimeout(focusEditor, 100);
  }
});

// Al volver a la ventana (window focus)
window.addEventListener('focus', () => {
  setTimeout(focusEditor, 100);
});

})();

/* ---- Contador de palabras y letras ---- */
(function() {
  const pill = document.createElement('div');
  Object.assign(pill.style, {
    position: 'fixed', bottom: '18px', right: '18px',
    background: 'rgba(15,15,15,0.7)', color: '#fff',
    fontSize: '11px', padding: '4px 12px',
    borderRadius: '99px', opacity: '0', zIndex: '9999',
    transition: 'opacity 0.2s', pointerEvents: 'none',
    fontFamily: 'monospace', backdropFilter: 'blur(4px)'
  });
  document.body.appendChild(pill);

  let timer;
  document.addEventListener('input', e => {
    const el = e.target;
    const isEditor = el.tagName === 'TEXTAREA' || el.isContentEditable;
    if (!isEditor) return;

    const text = el.value || el.innerText || '';
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    pill.textContent = `${words} palabras · ${text.length} chars`;
    pill.style.opacity = '1';
    clearTimeout(timer);
    timer = setTimeout(() => pill.style.opacity = '0', 2800);
  });
})();