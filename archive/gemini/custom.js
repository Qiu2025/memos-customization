// 拦截浏览器刷新和关闭标签页操作
window.addEventListener('beforeunload', function (e) {
    // 检查页面中是否存在 textarea（输入框）且内容不为空
    const editor = document.querySelector('textarea');
    if (editor && editor.value.trim() !== '') {
        e.preventDefault();
        e.returnValue = '你有未保存的内容，确定要离开吗？';
    }
});

// ---------------------------------------------------------

// 1. 监听输入，实时写入浏览器本地存储
document.addEventListener('input', (e) => {
    if (e.target.tagName === 'TEXTAREA') {
        localStorage.setItem('memos_draft_backup', e.target.value);
    }
});
// 2. 监听快捷键 Alt + Z，强制恢复草稿并触发 React 更新
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 'Z') {
        const draft = localStorage.getItem('memos_draft_backup');
        const editor = document.querySelector('textarea');
        
        if (draft && editor) {
            editor.value = draft;
            // 必须派发 input 事件，否则 React 无法识别值已改变，点击发送会发空内容
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
});

// ---------------------------------------------------------

// 监听快捷键 Alt + T 插入当前时间戳
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 't') {
        const editor = document.querySelector('textarea');
        if (editor) {
            e.preventDefault();
            // 生成形如 2026-03-31 23:20:54 的时间戳
            const now = new Date();
            const timestamp = now.getFullYear() + '-' + 
                String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                String(now.getDate()).padStart(2, '0') + ' ' + 
                String(now.getHours()).padStart(2, '0') + ':' + 
                String(now.getMinutes()).padStart(2, '0') + ':' + 
                String(now.getSeconds()).padStart(2, '0');
            
            // 插入时间戳并触发事件
            const startPos = editor.selectionStart;
            const endPos = editor.selectionEnd;
            editor.value = editor.value.substring(0, startPos) + timestamp + editor.value.substring(endPos);
            editor.dispatchEvent(new Event('input', { bubbles: true }));
            
            // 将光标移动到插入的时间戳之后
            editor.selectionStart = editor.selectionEnd = startPos + timestamp.length;
        }
    }
});

// ---------------------------------------------------------

// 1. 初次打开网页时，等待 React 渲染完成并自动聚焦
const observer = new MutationObserver((mutations, obs) => {
    const editor = document.querySelector('textarea');
    if (editor) {
        editor.focus();
        obs.disconnect(); // 找到输入框并聚焦后，立刻停止监听以节省性能
    }
});
observer.observe(document.body, { childList: true, subtree: true });

// 2. 切换窗口回来时自动聚焦
window.addEventListener('focus', () => {
    const editor = document.querySelector('textarea');
    if (editor && document.activeElement !== editor) {
        editor.focus();
    }
});