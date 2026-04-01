/* ==================================================
 * TAG COLORS
 * Assigns consistent colors to tags based on their name
 * Self-contained: includes pill styling + color application
 * ================================================== */
(function tagColors() {
  const PALETTE = [
    ['#e8f0fe', '#1a56db'], ['#fce8f3', '#99154b'], ['#e3f9e5', '#1c7c2e'],
    ['#fef3cd', '#92400e'], ['#f3e8ff', '#6d28d9'], ['#fee2e2', '#991b1b'],
    ['#e0f2fe', '#0369a1'], ['#fef9c3', '#854d0e'], ['#f0fdf4', '#166534'],
    ['#fdf4ff', '#86198f'], ['#fff7ed', '#9a3412'], ['#f0f9ff', '#075985'],
  ];

  // Inject pill styles
  const style = document.createElement('style');
  style.textContent = `
    a[href*="/tags/"],
    .tag-span,
    span[class*="tag"] {
      display: inline-block !important;
      padding: 1px 9px !important;
      border-radius: 99px !important;
      font-size: 12px !important;
      font-weight: 500 !important;
      text-decoration: none !important;
      transition: opacity 0.15s !important;
    }
    a[href*="/tags/"]:hover,
    .tag-span:hover {
      opacity: 0.72 !important;
      text-decoration: none !important;
    }
  `;
  document.head.appendChild(style);

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
