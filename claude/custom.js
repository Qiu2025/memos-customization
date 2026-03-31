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
  const ed = document.querySelector('.ProseMirror[contenteditable="true"]');
  if (ed) { ed.focus(); return true; }
  return false;
}
if (!focusEditor()) {
  const o = new MutationObserver(() => { if (focusEditor()) o.disconnect(); });
  o.observe(document.body, { childList: true, subtree: true });
  setTimeout(() => o.disconnect(), 5000);
}

/* ---- Autosave de borrador ---- */
const KEY = 'memos_draft';
let _st;
function getEd() { return document.querySelector('.ProseMirror[contenteditable="true"]'); }
function saveDraft() {
  const ed = getEd(); if (!ed) return;
  const text = ed.innerText.trim();
  text ? localStorage.setItem(KEY, JSON.stringify({ text, html: ed.innerHTML, ts: Date.now() }))
       : localStorage.removeItem(KEY);
}
function showToast(msg) {
  const t = document.createElement('div');
  Object.assign(t.style, {
    position:'fixed', bottom:'20px', left:'50%', transform:'translateX(-50%)',
    background:'rgba(15,15,15,0.82)', color:'#fff', padding:'8px 18px',
    borderRadius:'99px', fontSize:'12px', zIndex:'9999',
    transition:'opacity 0.3s', fontFamily:'system-ui'
  });
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.style.opacity = '0', 3000);
  setTimeout(() => t.remove(), 3400);
}
function restoreDraft() {
  const raw = localStorage.getItem(KEY); if (!raw) return;
  try {
    const { text, html, ts } = JSON.parse(raw);
    const age = Math.round((Date.now() - ts) / 60000);
    if (!text) return;
    const ed = getEd();
    if (!ed || ed.innerText.trim()) return;
    ed.innerHTML = html; ed.focus();
    const r = document.createRange(); r.selectNodeContents(ed); r.collapse(false);
    const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
    showToast(`Borrador restaurado (hace ${age} min)`);
  } catch(e) {}
}
document.addEventListener('click', e => {
  const btn = e.target.closest('button'); if (!btn) return;
  const t = btn.textContent.trim().toLowerCase();
  if (['save','guardar','send','enviar'].includes(t)) localStorage.removeItem(KEY);
});
document.addEventListener('input', e => {
  if (!e.target.closest('.ProseMirror')) return;
  clearTimeout(_st); _st = setTimeout(saveDraft, 1000);
});
function tryRestore() {
  if (restoreDraft()) return;
  const o = new MutationObserver(() => {
    if (getEd()) { o.disconnect(); setTimeout(restoreDraft, 300); }
  });
  o.observe(document.body, { childList: true, subtree: true });
  setTimeout(() => o.disconnect(), 6000);
}
tryRestore();

})();