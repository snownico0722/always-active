// Localize static extension pages without modifying their settings or behavior.
document.documentElement.lang = chrome.i18n.getMessage('ui_language') || 'en';
for (const element of document.querySelectorAll('[data-i18n], [data-i18n-value]')) {
  if (element.dataset.i18n) {
    const message = chrome.i18n.getMessage(element.dataset.i18n);
    if (message) {
      element.textContent = message;
    }
  }
  if (element.dataset.i18nValue) {
    const message = chrome.i18n.getMessage(element.dataset.i18nValue);
    if (message) {
      element.value = message;
    }
  }
}
