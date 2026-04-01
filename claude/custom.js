/**
 * Memos v0.26.2 Custom JavaScript
 * 
 * Each block below is INDEPENDENT and self-contained.
 * Copy/paste any block you need to the end of your script.
 */


/* ==================================================
 * TAG COLORS
 * Assigns consistent colors to tags based on their name
 * ================================================== */
(function tagColors() {
  const PALETTE = [
    ['#e8f0fe', '#1a56db'], ['#fce8f3', '#99154b'], ['#e3f9e5', '#1c7c2e'],
    ['#fef3cd', '#92400e'], ['#f3e8ff', '#6d28d9'], ['#fee2e2', '#991b1b'],
    ['#e0f2fe', '#0369a1'], ['#fef9c3', '#854d0e'], ['#f0fdf4', '#166534'],
    ['#fdf4ff', '#86198f'], ['#fff7ed', '#9a3412'], ['#f0f9ff', '#075985'],
  ];

  function hash(str) {
    let a = 0x9e3779b9, b = 0x6c62272e;
    for (let i = 0; i < str.length; i++) {
      a ^= str.charCodeAt(i) * 0x9e3779b9;
      b ^= str.charCodeAt(i) * 0x6c62272e;
      a = (a << 5 | a >>> 27) ^ b;
    }
    return Math.abs(a) % PALETTE.length;
  }

  function apply() {
    document.querySelectorAll('a[href*="/tags/"], .tag-span, span[class*="tag"]').forEach(el => {
      if (el.dataset.colored) return;
      el.dataset.colored = '1';
      const tag = el.textContent.trim().replace(/^#/, '');
      if (!tag) return;
      const [bg, color] = PALETTE[hash(tag)];
      el.style.backgroundColor = bg;
      el.style.color = color;
    });
  }

  apply();
  new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
})();


/* ==================================================
 * KEYBOARD SHORTCUTS
 * Alt+F: Focus search | Alt+↑: Scroll top | Alt+↓: Scroll bottom
 * ================================================== */
(function keyboardShortcuts() {
  document.addEventListener('keydown', e => {
    if (!e.altKey) return;
    
    if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      const search = document.querySelector('input[type=search], input[placeholder*="earch"]');
      if (search) { search.focus(); search.select(); }
    }
    
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  });
})();


/* ==================================================
 * AUTO FOCUS EDITOR
 * Focus editor on page load + Alt+N shortcut
 * ================================================== */
(function autoFocusEditor() {
  function focus() {
    const editor = document.querySelector('textarea.w-full.text-base.resize-none');
    if (editor) editor.focus({ preventScroll: true });
  }

  setTimeout(focus, 300);

  document.addEventListener('keydown', e => {
    if (e.altKey && (e.key === 'n' || e.key === 'N')) {
      e.preventDefault();
      focus();
    }
  });
})();


/* ==================================================
 * COMPACT ATTACHMENTS
 * Makes attachment previews smaller based on view mode
 * List view: 10 columns | Masonry view: 5 columns
 * Self-contained: includes its own CSS
 * ================================================== */
(function compactAttachments() {
  const GRID_SELECTOR = '.grid.grid-cols-2';
  const LIST_COLS = 10;
  const MASONRY_COLS = 5;

  // Inject CSS once
  const style = document.createElement('style');
  style.textContent = `
    body.view-list ${GRID_SELECTOR} { grid-template-columns: repeat(${LIST_COLS}, 1fr) !important; }
    body.view-masonry ${GRID_SELECTOR} { grid-template-columns: repeat(${MASONRY_COLS}, 1fr) !important; }
  `;
  document.head.appendChild(style);

  // Detect view mode and apply class
  function detect() {
    const grid = document.querySelector('[style*="grid-template-columns"]');
    if (!grid) return;
    const isList = (grid.getAttribute('style') || '').includes('repeat(1,');
    document.body.classList.toggle('view-list', isList);
    document.body.classList.toggle('view-masonry', !isList);
  }

  detect();
  new MutationObserver(detect).observe(document.body, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['style']
  });
})();


/* ==================================================
 * WORD COUNTER
 * Shows word/char count while typing (auto-hides)
 * ================================================== */
(function wordCounter() {
  const TRANSLATIONS = {
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

  const pill = document.createElement('div');
  pill.setAttribute('style', `
    position: fixed; bottom: 16px; right: 16px;
    background: #374151; color: #f3f4f6; border: 1px solid #4b5563;
    font: 12px system-ui, sans-serif; padding: 6px 12px; border-radius: 6px;
    opacity: 0; z-index: 9999; transition: opacity 0.2s; pointer-events: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  `);
  document.body.appendChild(pill);

  let timer;
  document.addEventListener('input', e => {
    if (e.target.tagName !== 'TEXTAREA' && !e.target.isContentEditable) return;
    
    const text = e.target.value || e.target.innerText || '';
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const lang = (localStorage.getItem('locale') || navigator.language || 'en').split('-')[0];
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    
    pill.textContent = `${words} ${t.words} · ${text.length} ${t.chars}`;
    pill.style.opacity = '1';
    clearTimeout(timer);
    timer = setTimeout(() => pill.style.opacity = '0', 2800);
  });
})();