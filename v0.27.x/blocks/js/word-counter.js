/* ==================================================
 * WORD COUNTER
 * Shows word and character count while typing
 * Auto-hides after 2.8 seconds
 * Supports multiple languages (all Memos supported locales)
 * ================================================== */
(function wordCounter() {
  const TRANSLATIONS = {
    ar: { words: 'كلمات', chars: 'أحرف' },
    cs: { words: 'slov', chars: 'znaků' },
    da: { words: 'ord', chars: 'tegn' },
    de: { words: 'Wörter', chars: 'Zeichen' },
    en: { words: 'words', chars: 'chars' },
    es: { words: 'palabras', chars: 'caracteres' },
    fr: { words: 'mots', chars: 'caractères' },
    hi: { words: 'शब्द', chars: 'वर्ण' },
    hr: { words: 'riječi', chars: 'znakova' },
    id: { words: 'kata', chars: 'karakter' },
    it: { words: 'parole', chars: 'caratteri' },
    ja: { words: '語', chars: '文字' },
    ko: { words: '단어', chars: '문자' },
    nl: { words: 'woorden', chars: 'tekens' },
    no: { words: 'ord', chars: 'tegn' },
    pl: { words: 'słów', chars: 'znaków' },
    pt: { words: 'palavras', chars: 'caracteres' },
    ro: { words: 'cuvinte', chars: 'caractere' },
    ru: { words: 'слов', chars: 'символов' },
    sl: { words: 'besed', chars: 'znakov' },
    sv: { words: 'ord', chars: 'tecken' },
    th: { words: 'คำ', chars: 'ตัวอักษร' },
    tr: { words: 'kelime', chars: 'karakter' },
    uk: { words: 'слів', chars: 'символів' },
    vi: { words: 'từ', chars: 'ký tự' },
    zh: { words: '词', chars: '字符' },
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
  
  function getLanguage() {
    // Try multiple localStorage keys that Memos might use
    const keys = ['locale', 'i18n-locale', 'language', 'lang'];
    for (const key of keys) {
      const value = localStorage.getItem(key);
      if (value) return value.toLowerCase().split('-')[0];
    }
    
    // Try HTML lang attribute
    if (document.documentElement.lang) {
      return document.documentElement.lang.toLowerCase().split('-')[0];
    }
    
    // Fallback to browser language
    return (navigator.language || 'en').toLowerCase().split('-')[0];
  }
  
  document.addEventListener('input', e => {
    if (e.target.tagName !== 'TEXTAREA' && !e.target.isContentEditable) return;
    
    const text = e.target.value || e.target.innerText || '';
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const lang = getLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    
    pill.textContent = `${words} ${t.words} · ${text.length} ${t.chars}`;
    pill.style.opacity = '1';
    clearTimeout(timer);
    timer = setTimeout(() => pill.style.opacity = '0', 2800);
  });
})();
