/* ==================================================
 * AUTO FOCUS EDITOR
 * Automatically focuses the editor on page load
 * Alt+N: Manually focus editor anytime
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
