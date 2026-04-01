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
├── custom.css       # My personal setup (selected CSS features)
├── custom.js        # My personal setup (selected JS features)
└── archive/         # Original AI outputs for reference
```

## Available Features

### 🎨 CSS Customizations

| Feature | File | Description |
|---------|------|-------------|
| **Typography** | [`blocks/css/typography.css`](blocks/css/typography.css) | Inter font with optimized spacing |
| **Full Width** | [`blocks/css/full-width.css`](blocks/css/full-width.css) | Use all available screen space |
| **Memo Hover** | [`blocks/css/memo-hover.css`](blocks/css/memo-hover.css) | Subtle card elevation on hover |
| **Tag Styling** | [`blocks/css/tags.css`](blocks/css/tags.css) | Pill-style tags (no colors) |
| **Scrollbar** | [`blocks/css/scrollbar.css`](blocks/css/scrollbar.css) | Minimal, theme-aware scrollbar |
| **Hide Scrollbar** | [`blocks/css/hide-scrollbar.css`](blocks/css/hide-scrollbar.css) | Completely hide scrollbar |
| **Hide Explore** | [`blocks/css/hide-explore.css`](blocks/css/hide-explore.css) | Hide "Explore" sidebar link |
| **Hide Inbox** | [`blocks/css/hide-inbox.css`](blocks/css/hide-inbox.css) | Hide "Inbox" sidebar link |

### ⚡ JavaScript Features

| Feature | File | Description |
|---------|------|-------------|
| **Tag Colors** | [`blocks/js/tag-colors.js`](blocks/js/tag-colors.js) | Colored pill-style tags (self-contained) |
| **Keyboard Shortcuts** | [`blocks/js/keyboard-shortcuts.js`](blocks/js/keyboard-shortcuts.js) | `Alt+F` search, `Alt+↑/↓` scroll |
| **Auto Focus** | [`blocks/js/auto-focus.js`](blocks/js/auto-focus.js) | Focus editor on load + `Alt+N` |
| **Compact Attachments** | [`blocks/js/compact-attachments.js`](blocks/js/compact-attachments.js) | Smaller image previews (10/5 cols) |
| **Word Counter** | [`blocks/js/word-counter.js`](blocks/js/word-counter.js) | Real-time word/char count (i18n) |

## 📸 Examples

### Better tags
| Default tags | [Pill-style only](blocks/css/tags.css) | [Pill with colors](blocks/js/tag-colors.js) |
| :---: | :---: | :---: |
| <img width="460" height="220" alt="default" src="https://github.com/user-attachments/assets/c2921ce2-d9dd-4b65-a8b2-a70b550229af" /> | <img width="458" height="220" alt="pill-only" src="https://github.com/user-attachments/assets/da245dc8-f573-44ad-9fc8-b3efaac1dffa" /> | <img width="458" height="220" alt="pill-color" src="https://github.com/user-attachments/assets/3c788e82-dc26-4ea8-b9a5-cb51bff30d04" /> |

### Full width
| Before | [After](blocks/css/full-width.css) |
| :---: | :---: |
| <img width="1460" height="909" alt="before" src="https://github.com/user-attachments/assets/98f33680-563e-4ef9-8114-a3f3f71a3856" /> | <img width="1456" height="907" alt="after" src="https://github.com/user-attachments/assets/912b6943-6169-40a1-8f7c-e0a3275987e7" /> |

### Compact attachments
| Before |  [After](blocks/js/compact-attachments.js) |
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
- **Independence:** Some features inject their own CSS dynamically
- **Browser:** Best with Chrome/Edge/Firefox (WebKit scrollbar styling)

## 🤝 Contributing

Found a bug or have an improvement? Feel free to open an issue or PR!

## 📄 License

MIT - Use, modify, and share freely
