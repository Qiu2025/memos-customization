# Memos Customization

Personal CSS and JavaScript customizations for [Memos](https://github.com/usememos/memos) v0.26.2 to make it more productive and visually pleasant.

## About

This repository contains **independent, copy-paste ready code blocks** that enhance the Memos experience. Each block is:

- ✅ **Self-contained** - Works standalone without dependencies
- ✅ **AI-generated** - Created with assistance from Claude and Gemini
- ✅ **Modular** - Easy to add, remove, or customize
- ✅ **Production-tested** - Used daily in my personal instance

## Repository Structure

```
├── claude/       # Customizations generated with Claude
├── gemini/       # Customizations generated with Gemini
└── production/   # Best-of-both: combined features I actually use
```

## Available Features

### CSS Customizations
- **Full-width layout** - Use all available screen space
- **Better typography** - Inter font with optimized spacing
- **Hover effects** - Subtle card elevation on hover
- **Custom scrollbar** - Minimal, theme-aware design
- **Tag styling** - Pill-style tags with consistent colors

### JavaScript Features
- **Tag Colors** - Consistent hash-based color palette for tags
- **Keyboard Shortcuts**
  - `Alt + F` - Focus search bar
  - `Alt + ↑` - Scroll to top
  - `Alt + ↓` - Scroll to bottom
  - `Alt + N` - Focus editor
- **Auto Focus** - Automatically focus editor on page load
- **Word Counter** - Real-time word/character count with i18n support
- **Compact Attachments** - Optimized grid layout for images/files

## Usage

### Option 1: Use Complete Files
Copy the entire `custom.css` and `custom.js` from the `production/` folder to your Memos instance.

### Option 2: Pick Individual Features
Each feature is wrapped in a self-contained block. Simply:

1. Open the file (`custom.css` or `custom.js`)
2. Find the feature block you want (clearly marked with comments)
3. Copy the entire block
4. Paste it into your custom CSS/JS file

**Example:**
```js
/* ==================================================
 * WORD COUNTER
 * Shows word/char count while typing (auto-hides)
 * ================================================== */
(function wordCounter() {
  // ... entire feature code ...
})();
```

## Installation

1. Go to your Memos settings
2. Find the "Custom CSS" and "Custom JavaScript" sections
3. Paste the desired code blocks
4. Save and reload

## Customization

All features use configurable constants at the top of each block:

```js
const LIST_COLS = 10;        // Adjust attachment columns
const HIDE_DELAY_MS = 2800;  // Word counter visibility time
const DELAY_MS = 300;        // Auto-focus delay
```

## Notes

- Tested on **Memos v0.26.2** - may need adjustments for other versions
- Some features inject CSS dynamically for true independence

## License

MIT - Feel free to use, modify, and share
