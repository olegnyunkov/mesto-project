import '../src/index.css';

import './components/card.js';
import './components/modal.js';
import './components/validate.js';
import './components/api.js';

import {
  addCard,
  createCard,
  cardContainer,
  imagePopup,
} from './components/card.js';

import {
  closePopup,
  openPopup,
  checkPopup,
 } from './components/modal.js';

 import {
  disableButton,
 } from './components/validate.js';

 import {
  getProfileInfo,
  updateProfileInfo,
  getCardInfo,
  sendCardInfo,
  deleteCard,
  setLikeCard,
  updateAvatarInfo,
 } from './components/api.js';


const profilePopup = document.querySelector('.popup-profile');
const profilePopupCloseBtn = profilePopup.querySelector('.popup__close');
const profilePopupForm = profilePopup.querySelector('.form');
const profileNameInput = profilePopup.querySelector('.form__field-name');
const profileDescriptionInput = profilePopup.querySelector('.form__field-about');
const profileEditBtn = document.querySelector('.profile__edit');

const avatarPopup = document.querySelector('.popup-avatar');
const avatarPopupCloseBtn = avatarPopup.querySelector('.popup__close');
const avatarPopupForm = avatarPopup.querySelector('.form');
const avatarPopupInput = avatarPopup.querySelector('.form__field-about');

const avatarProfileEdit = document.querySelector('.profile__photo');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__text');

const placePopup = document.querySelector('.popup-place');
const placePopupCloseBtn = placePopup.querySelector('.popup__close');
const placePopupForm = placePopup.querySelector('.form');
const placePopupNameInput = placePopup.querySelector('.form__field-name');
const placePopupDescriptionInput = placePopup.querySelector('.form__field-about');
const placeEditBtn = document.querySelector('.profile__add');
const placeSubmitBtn = placePopup.querySelector('.form__save');

const imagePopupCloseBtn = imagePopup.querySelector('.popup__close');

const popupList = Array.from(document.querySelectorAll('.popup'));

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  updateProfileInfo();
  closePopup(profilePopup);
  getProfileInfo(profileName, profileDescription);
};

function handleAvatarFormSubmit (evt) {
  evt.preventDefault();
  updateAvatarInfo();
  closePopup(avatarPopup);
  getProfileInfo(profileName, profileDescription);
}

placePopupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const newCard = createCard(placePopupNameInput.value, placePopupDescriptionInput.value);
  addCard(cardContainer, newCard);
  closePopup(placePopup);
  sendCardInfo();
  placePopupNameInput.value = '';
  placePopupDescriptionInput.value = '';
  disableButton(placeSubmitBtn);
});

popupList.forEach((popupElement) => {
  popupElement.addEventListener('mousedown', checkPopup);
});

profileEditBtn.addEventListener('click', function() {
  openPopup(profilePopup);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});
profilePopupCloseBtn.addEventListener('click', function() {
  closePopup(profilePopup);
});

avatarProfileEdit.addEventListener('click', function() {
  openPopup(avatarPopup);
});

avatarPopupCloseBtn.addEventListener('click', function() {
  closePopup(avatarPopup);
});

placeEditBtn.addEventListener('click', function() {
  openPopup(placePopup);
});
placePopupCloseBtn.addEventListener('click', function() {
  closePopup(placePopup);
});

imagePopupCloseBtn.addEventListener('click', function() {
  closePopup(imagePopup);
})

profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

avatarPopupForm.addEventListener('submit', handleAvatarFormSubmit);

getProfileInfo(profileName, profileDescription);
getCardInfo();

export {
  profileNameInput,
  profileDescriptionInput,
  placePopupNameInput,
  placePopupDescriptionInput,
  avatarPopupInput,
}


