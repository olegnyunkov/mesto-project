function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeByBtn);
};
function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByBtn);
};

function checkPopup(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup')) {
    closePopup(openedPopup);
  };
};

function closeByBtn(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  };
};

export {
  openPopup,
  closePopup,
  checkPopup,
 };
