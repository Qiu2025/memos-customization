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
    ed.focus({ preventScroll: true });
    return true; 
  }
  return false;
}

// Solo al cargar la página por primera vez
setTimeout(focusEditor, 300);

// Alt+N para enfocar el editor
document.addEventListener('keydown', e => {
  if (e.altKey && (e.key === 'n' || e.key === 'N')) {
    e.preventDefault();
    focusEditor();
  }
});

/* ---- Detectar modo de vista (masonry vs list) ---- */
function detectViewMode() {
  // Masonry usa grid con múltiples columnas, list usa 1 columna
  const grid = document.querySelector('[style*="grid-template-columns"]');
  if (grid) {
    const style = grid.getAttribute('style') || '';
    const isList = style.includes('repeat(1,');
    document.body.classList.toggle('view-list', isList);
    document.body.classList.toggle('view-masonry', !isList);
  }
}
detectViewMode();
new MutationObserver(detectViewMode).observe(document.body, { 
  childList: true, subtree: true, attributes: true, attributeFilter: ['style'] 
});

})();

/* ---- Contador de palabras y letras ---- */
(function() {
  const pill = document.createElement('div');
  pill.id = 'custom-word-counter';
  
  // Aplicar estilos inline con !important para evitar conflictos
  pill.setAttribute('style', `
    position: fixed !important;
    bottom: 16px !important;
    right: 16px !important;
    background-color: #ffffff !important;
    color: #6b7280 !important;
    font-size: 12px !important;
    padding: 6px 12px !important;
    border-radius: 6px !important;
    opacity: 0 !important;
    z-index: 9999 !important;
    transition: opacity 0.2s !important;
    pointer-events: none !important;
    border: 1px solid #e5e7eb !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
    font-family: system-ui, sans-serif !important;
  `);
  document.body.appendChild(pill);

  // Traducciones
  const i18n = {
    en: { words: 'words', chars: 'chars' },
    es: { words: 'palabras', chars: 'caracteres' },
    zh: { words: '词', chars: '字符' },
    ja: { words: '語', chars: '文字' },
    de: { words: 'Wörter', chars: 'Zeichen' },
    fr: { words: 'mots', chars: 'caractères' },
    pt: { words: 'palavras', chars: 'caracteres' },
    it: { words: 'parole', chars: 'caratteri' },
    ko: { words: '단어', chars: '문자' },
  };

  function getLocale() {
    // Intentar obtener de localStorage (donde Memos guarda preferencias)
    try {
      const stored = localStorage.getItem('locale') || localStorage.getItem('i18n-locale');
      if (stored) return stored;
    } catch(e) {}
    // Fallback a atributo lang del HTML
    return document.documentElement.lang || navigator.language || 'en';
  }
  
  function formatCount(words, chars) {
    const lang = getLocale().toLowerCase().split('-')[0];
    const t = i18n[lang] || i18n.en;
    return `${words} ${t.words} · ${chars} ${t.chars}`;
  }

  // Color neutral que funciona en modo claro y oscuro
  pill.style.setProperty('background-color', '#374151', 'important');
  pill.style.setProperty('color', '#f3f4f6', 'important');
  pill.style.setProperty('border-color', '#4b5563', 'important');

  let timer;
  document.addEventListener('input', e => {
    const el = e.target;
    const isEditor = el.tagName === 'TEXTAREA' || el.isContentEditable;
    if (!isEditor) return;

    const text = el.value || el.innerText || '';
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    pill.textContent = formatCount(words, text.length);
    pill.style.setProperty('opacity', '1', 'important');
    clearTimeout(timer);
    timer = setTimeout(() => pill.style.setProperty('opacity', '0', 'important'), 2800);
  });
})();