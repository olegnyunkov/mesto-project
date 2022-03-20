function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscapeKey);
};
function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscapeKey);
};

function handleOverlayClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
    evt.target.removeEventListener('mousedown', handleOverlayClick);
  };
};

function handleEscapeKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

export {
  openPopup,
  closePopup,
  handleOverlayClick,
 };
