/* ==================================================
 * KEYBOARD SHORTCUTS
 * Alt+F: Focus search bar
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
