import '../src/index.css';

import './components/card.js';
import './components/modal.js';
import './components/utils.js';
import './components/validate.js';

import {
  addCard,
  createCard,
  cardContainer,
} from './components/card.js';

import {
  profilePopupCloseBtn,
  placeEditBtn,
  placePopupCloseBtn,
  imagePopupCloseBtn,
  profilePopupForm,
  profileEditBtn,
  closePopup,
  openPopup,
  profilePopup,
  placePopup,
  imagePopup,
  profileName,
  profileDescription,
  profileNameInput,
  profileDescriptionInput,
  placePopupForm,
  placePopupNameInput,
  placePopupDescriptionInput,
  placeSubmitBtn,
 } from './components/modal.js';

 import {
  popupList,
  checkPopup,
 } from './components/utils.js';

 import {
  disableButton,
 } from './components/validate.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.reverse().forEach(function (cardData) {
  const card = createCard(cardData.name, cardData.link);
  addCard(cardContainer, card);
});

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profilePopup);
};

placePopupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const newCard = createCard(placePopupNameInput.value, placePopupDescriptionInput.value);
  addCard(cardContainer, newCard);
  closePopup(placePopup);
  placePopupNameInput.value = '';
  placePopupDescriptionInput.value = '';
  disableButton(placeSubmitBtn);
});

popupList.forEach((popupElement) => {
  popupElement.addEventListener('mousedown', checkPopup);
});

profileEditBtn.addEventListener('click', function() {
  openPopup(profilePopup);
  profilePopupForm.reset();
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
