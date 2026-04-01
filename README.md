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
├── blocks/          # Individual feature files (pick & choose)
│   ├── css/         # CSS customizations
│   └── js/          # JavaScript features
├── custom.css       # Complete bundle (all CSS features)
├── custom.js        # Complete bundle (all JS features)
└── archive/         # Original AI outputs for reference
```

## Available Features

### 🎨 CSS Customizations

| Feature | File | Description |
|---------|------|-------------|
| **Typography** | [`blocks/css/typography.css`](blocks/css/typography.css) | Inter font with optimized spacing |
| **Full Width** | [`blocks/css/full-width.css`](blocks/css/full-width.css) | Use all available screen space |
| **Memo Hover** | [`blocks/css/memo-hover.css`](blocks/css/memo-hover.css) | Subtle card elevation on hover |
| **Tags** | [`blocks/css/tags.css`](blocks/css/tags.css) | Pill-style tag appearance |
| **Scrollbar** | [`blocks/css/scrollbar.css`](blocks/css/scrollbar.css) | Minimal, theme-aware scrollbar |
| **Hide Scrollbar** | [`blocks/css/hide-scrollbar.css`](blocks/css/hide-scrollbar.css) | Completely hide scrollbar |
| **Hide Explore** | [`blocks/css/hide-explore.css`](blocks/css/hide-explore.css) | Hide "Explore" sidebar link |
| **Hide Inbox** | [`blocks/css/hide-inbox.css`](blocks/css/hide-inbox.css) | Hide "Inbox" sidebar link |

### ⚡ JavaScript Features

| Feature | File | Description |
|---------|------|-------------|
| **Tag Colors** | [`blocks/js/tag-colors.js`](blocks/js/tag-colors.js) | Consistent hash-based color palette |
| **Keyboard Shortcuts** | [`blocks/js/keyboard-shortcuts.js`](blocks/js/keyboard-shortcuts.js) | `Alt+F` search, `Alt+↑/↓` scroll |
| **Auto Focus** | [`blocks/js/auto-focus.js`](blocks/js/auto-focus.js) | Focus editor on load + `Alt+N` |
| **Compact Attachments** | [`blocks/js/compact-attachments.js`](blocks/js/compact-attachments.js) | Smaller image previews (10/5 cols) |
| **Word Counter** | [`blocks/js/word-counter.js`](blocks/js/word-counter.js) | Real-time word/char count (i18n) |

## 🚀 Installation & Usage

### Option 1: Use Everything (Recommended)
1. Open your Memos settings
2. Navigate to **Custom CSS** section → Paste [`custom.css`](custom.css) content
3. Navigate to **Custom JavaScript** section → Paste [`custom.js`](custom.js) content
4. Save and reload

### Option 2: Pick Individual Features
1. Browse [`blocks/css/`](blocks/css/) or [`blocks/js/`](blocks/js/)
2. Click the feature file you want
3. Copy entire file content
4. Paste into your Memos **Custom CSS** or **Custom JavaScript** section
5. Save and reload

## ⚙️ Customization

Features have configurable constants at the top:

```js
// In compact-attachments.js
const LIST_COLS = 10;        // Change attachment columns (default: 10)
const MASONRY_COLS = 5;      // Masonry view columns (default: 5)

// In word-counter.js
const HIDE_DELAY_MS = 2800;  // Counter visibility time in ms
```

## 📌 Notes

- **Version:** Tested on Memos v0.26.2
- **Performance:** MutationObservers have minimal impact
- **Independence:** Some features inject their own CSS dynamically
- **Browser:** Best with Chrome/Edge/Firefox (WebKit scrollbar styling)

## 🤝 Contributing

Found a bug or have an improvement? Feel free to open an issue or PR!

## 📄 License

MIT - Use, modify, and share freely
