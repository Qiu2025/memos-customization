/* ==================================================
 * WORD COUNTER
 * Shows word and character count while typing
 * Auto-hides after 2.8 seconds
 * Supports 9 languages (en, es, zh, ja, de, fr, pt, it, ko)
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
