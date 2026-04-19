/* ==================================================
 * PREVENT CLOSE UNSAVED
 * Warns the user before exiting if there is unsaved content
 * ================================================== */
(function preventCloseUnsaved() {
  window.addEventListener('beforeunload', function (e) {
    // Select all textareas on the page (both new and edit dialogs)
    const textareas = document.querySelectorAll('textarea');
    let hasUnsavedContent = false;

    // Check if any textarea contains unsaved text
    textareas.forEach(textarea => {
      if (textarea.value.trim() !== '') {
        hasUnsavedContent = true;
      }
    });

    if (hasUnsavedContent) {
      // Display the native browser warning
      e.preventDefault();
      e.returnValue = 'You have unsaved content. Are you sure you want to leave?';
    }
  });
})();
