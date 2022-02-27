import {
  closePopup,
 } from './modal.js';

const popupList = Array.from(document.querySelectorAll('.popup'));

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
  popupList,
  checkPopup,
  closeByBtn,
}
