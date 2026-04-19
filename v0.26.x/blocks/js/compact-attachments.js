/* ==================================================
 * COMPACT ATTACHMENTS
 * Makes attachment previews smaller based on view mode
 * List view: 10 columns | Masonry view: 5 columns
 * Self-contained: injects its own CSS
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
