# Memos Customization

Personal CSS and JavaScript customizations for [Memos](https://github.com/usememos/memos) to make it more productive and visually pleasant.

## About

This repository contains **independent, copy-paste ready code blocks** that enhance the Memos experience. Each block is:

- ✅ **Self-contained** - Works standalone without dependencies
- ✅ **AI-generated** - Created with assistance from Claude and Gemini
- ✅ **Modular** - Easy to add, remove, or customize
- ✅ **Production-tested** - Used daily in my personal instance

> [!NOTE]
> Some code blocks may be more complex than necessary. I lack deep frontend expertise and haven't had time to optimize them, but they work reliably for my needs. Improvements are welcome via PRs.

## Repository Structure

```text
├── v0.26.x/         # Snippets for Memos version 0.26.x
│   ├── blocks/      # Individual feature files (pick & choose)
│   │   ├── css/     # CSS customizations
│   │   └── js/      # JavaScript features
│   ├── custom.css   # My personal setup (selected CSS features)
│   └── custom.js    # My personal setup (selected JS features)
└── v0.27.x/         # Snippets for Memos version 0.27.x (Structure is identical)
```

## Available Features

### 🎨 CSS Customizations

| Feature | Description | v0.26.x | v0.27.x |
|---------|-------------|---------|---------|
| **Typography** | Inter font with optimized spacing | [css](v0.26.x/blocks/css/typography.css) | [css](v0.27.x/blocks/css/typography.css) |
| **Full Width** | Use all available screen space | [css](v0.26.x/blocks/css/full-width.css) | [css](v0.27.x/blocks/css/full-width.css) |
| **Memo Hover** | Subtle card elevation on hover | [css](v0.26.x/blocks/css/memo-hover.css) | [css](v0.27.x/blocks/css/memo-hover.css) |
| **Tag Styling** | Pill-style tags (no colors) | [css](v0.26.x/blocks/css/tags.css) | [css](v0.27.x/blocks/css/tags.css) |
| **Scrollbar** | Minimal, theme-aware scrollbar | [css](v0.26.x/blocks/css/scrollbar.css) | [css](v0.27.x/blocks/css/scrollbar.css) |
| **Hide Scrollbar** | Completely hide scrollbar | [css](v0.26.x/blocks/css/hide-scrollbar.css) | [css](v0.27.x/blocks/css/hide-scrollbar.css) |
| **Hide Explore** | Hide "Explore" sidebar link | [css](v0.26.x/blocks/css/hide-explore.css) | [css](v0.27.x/blocks/css/hide-explore.css) |
| **Hide Inbox** | Hide "Inbox" sidebar link | [css](v0.26.x/blocks/css/hide-inbox.css) | [css](v0.27.x/blocks/css/hide-inbox.css) |

### ⚡ JavaScript Features

| Feature | Description | v0.26.x | v0.27.x |
|---------|-------------|---------|---------|
| **Tag Colors** | Colored pill-style tags (self-contained) | [js](v0.26.x/blocks/js/tag-colors.js) | [js](v0.27.x/blocks/js/tag-colors.js) |
| **Keyboard Shortcuts** | `Alt+F` search, `Alt+T` insert timestamp, `Alt+↑/↓` scroll | [js](v0.26.x/blocks/js/keyboard-shortcuts.js) | [js](v0.27.x/blocks/js/keyboard-shortcuts.js) |
| **Auto Focus** | Focus editor on load + `Alt+N` | [js](v0.26.x/blocks/js/auto-focus.js) | [js](v0.27.x/blocks/js/auto-focus.js) |
| **Compact Attachments** | Smaller image previews (10/5 cols) | [js](v0.26.x/blocks/js/compact-attachments.js) | [js](v0.27.x/blocks/js/compact-attachments.js) |
| **Word Counter** | Real-time word/char count (i18n) | [js](v0.26.x/blocks/js/word-counter.js) | [js](v0.27.x/blocks/js/word-counter.js) |
| **Prevent Close Unsaved** | Warn before exiting with unsaved text | [js](v0.26.x/blocks/js/prevent-close-unsaved.js) | [js](v0.27.x/blocks/js/prevent-close-unsaved.js) |

## 📸 Examples

### Better tags
| Default tags | [Pill-style only](v0.26.x/blocks/css/tags.css) | [Pill with colors](v0.26.x/blocks/js/tag-colors.js) |
| :---: | :---: | :---: |
| <img width="460" height="220" alt="default" src="https://github.com/user-attachments/assets/c2921ce2-d9dd-4b65-a8b2-a70b550229af" /> | <img width="458" height="220" alt="pill-only" src="https://github.com/user-attachments/assets/da245dc8-f573-44ad-9fc8-b3efaac1dffa" /> | <img width="458" height="220" alt="pill-color" src="https://github.com/user-attachments/assets/3c788e82-dc26-4ea8-b9a5-cb51bff30d04" /> |

### Full width
| Before | [After](v0.26.x/blocks/css/full-width.css) |
| :---: | :---: |
| <img width="1460" height="909" alt="before" src="https://github.com/user-attachments/assets/98f33680-563e-4ef9-8114-a3f3f71a3856" /> | <img width="1456" height="907" alt="after" src="https://github.com/user-attachments/assets/912b6943-6169-40a1-8f7c-e0a3275987e7" /> |

### Compact attachments
| Before |  [After](v0.26.x/blocks/js/compact-attachments.js) |
| :---: | :---: |
| <img width="1462" height="908" alt="before" src="https://github.com/user-attachments/assets/5872d6cf-d619-46dd-ab67-33928e62caa4" /> | <img width="1478" height="911" alt="after" src="https://github.com/user-attachments/assets/c847c6b8-6f51-40d3-8b72-acf2bd975713" /> |

### Word counter
<div align="center">
  <video src="https://github.com/user-attachments/assets/5395884f-1e9c-4791-b1ea-a02650a40607"></video>
</div>

For more, check [Available Features](#available-features) section

## 🚀 Installation & Usage

### Option 1: Use My Setup (Recommended)
1. Open your Memos settings
2. Navigate to **Custom CSS** section → Paste the content of your preferred version (`v0.26.x/custom.css` or `v0.27.x/custom.css`)
3. Navigate to **Custom JavaScript** section → Paste the content of your preferred version (`v0.26.x/custom.js` or `v0.27.x/custom.js`)
4. Save and reload

### Option 2: Pick Individual Features
1. Browse the features in the tables above.
2. Click the `[css]` or `[js]` link matching your installed Memos version (v0.26.x or v0.27.x).
3. Copy entire file content.
4. Paste into your Memos **Custom CSS** or **Custom JavaScript** section.
5. Save and reload.

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

- **Version:** Tested on Memos v0.26.x and v0.27.x
- **Independence:** Some features inject their own CSS dynamically
- **Browser:** Best with Chrome/Edge/Firefox (WebKit scrollbar styling)

## 🤝 Contributing

Found a bug or have an improvement? Feel free to open an issue or PR!

## 📄 License

MIT - Use, modify, and share freely
