/* ==================================================
 * KEYBOARD SHORTCUTS
 * Alt+F: Focus search bar
 * Alt+T: Insert current timestamp YYYY-MM-DD HH:mm
 * Alt+↑: Scroll to top
 * Alt+↓: Scroll to bottom
 * ================================================== */
(function keyboardShortcuts() {
  document.addEventListener('keydown', e => {
    if (!e.altKey) return;
    
    if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      const search = document.querySelector('input[type=search], input[placeholder*="earch"]');
      if (search) { search.focus(); search.select(); }
    }

    if (e.key === 't' || e.key === 'T') {
      e.preventDefault();
      const el = document.activeElement;
        
      if (el && (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT')) {
        const d = new Date();
        const pad = n => n.toString().padStart(2, '0');
        const timestamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())} `;
        const start = el.selectionStart;
        const end = el.selectionEnd;
        el.value = el.value.substring(0, start) + timestamp + el.value.substring(end);
        el.selectionStart = el.selectionEnd = start + timestamp.length;
        el.dispatchEvent(new Event('input', { bubbles: true }));
      }
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
