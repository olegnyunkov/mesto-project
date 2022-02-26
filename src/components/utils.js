import {
  profilePopupCloseBtn,
  placeEditBtn,
  placePopupCloseBtn,
  imagePopupCloseBtn,
  profilePopupForm,
  profileEditBtn,
  handleProfileFormSubmit,
  closePopup,
  openPopup,
  profilePopup,
  placePopup,
  imagePopup,
 } from './modal.js';

const popupList = Array.from(document.querySelectorAll('.popup'));

function checkPopup(evt) {
  if (evt.target.classList.contains('popup')) {
    evt.target.classList.remove('popup_opened');
  };
};

function closeByBtn(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  };
};

popupList.forEach((popupElement) => {
  popupElement.addEventListener('click', checkPopup);
  document.addEventListener('keydown', closeByBtn);
});

profileEditBtn.addEventListener('click', function() {
  openPopup(profilePopup);
});
profilePopupCloseBtn.addEventListener('click', function() {
  closePopup(profilePopup);
});

placeEditBtn.addEventListener('click', function() {
  openPopup(placePopup);
});
placePopupCloseBtn.addEventListener('click', function() {
  closePopup(placePopup);
});

imagePopupCloseBtn.addEventListener('click', function () {
  closePopup(imagePopup);
})

profilePopupForm.addEventListener('submit', handleProfileFormSubmit);
