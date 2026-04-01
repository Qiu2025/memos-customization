/* ==================================================
 * TAG COLORS
 * Assigns consistent colors to tags based on their name
 * Uses hash function for deterministic color selection
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
