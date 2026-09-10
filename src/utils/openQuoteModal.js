export const openQuoteModal = (productName = '') => {
  window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: { productName } }));
};
