// Theme persistence shared by the React navigation component.
export function readSavedTheme() {
  try {
    const saved = localStorage.getItem('th_full');
    return saved === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}
export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('th_full', theme);
  } catch {
    // Theme still works when browser storage is unavailable.
  }
}
