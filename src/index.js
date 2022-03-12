import '../src/index.css';

import './components/card.js';
import './components/modal.js';
import './components/validate.js';
import './components/api.js';

import {
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
  updateAvatarInfo,
 } from './components/api.js';


const cardTemplate = document.querySelector("#elements_card");

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
const avatarPhoto = document.querySelector('.profile__avatar');

const deletePopup = document.querySelector('.popup-delete');
const deletePopupCloseBtn = deletePopup.querySelector('.popup__close');
const deletePopupForm = deletePopup.querySelector('.form');

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
  updateProfileInfo(profileNameInput, profileDescriptionInput);
  closePopup(profilePopup);
  getProfileInfo(profileName, profileDescription, avatarPhoto);
};

function handleAvatarFormSubmit (evt) {
  evt.preventDefault();
  updateAvatarInfo(avatarPopupInput, avatarPhoto);
  getProfileInfo(profileName, profileDescription, avatarPhoto);
  closePopup(avatarPopup);
};

getProfileInfo(profileName, profileDescription, avatarPhoto);
getCardInfo();

placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendCardInfo(placePopupNameInput, placePopupDescriptionInput);
  closePopup(placePopup);
  placePopupNameInput.value = '';
  placePopupDescriptionInput.value = '';
  disableButton(placeSubmitBtn);
});

popupList.forEach((popupElement) => {
  popupElement.addEventListener('mousedown', checkPopup);
});

profileEditBtn.addEventListener('click', () => {
  openPopup(profilePopup);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});
profilePopupCloseBtn.addEventListener('click', () => {
  closePopup(profilePopup);
});

avatarProfileEdit.addEventListener('click', () => {
  openPopup(avatarPopup);
});

avatarPopupCloseBtn.addEventListener('click', () => {
  closePopup(avatarPopup);
});

placeEditBtn.addEventListener('click', () => {
  openPopup(placePopup);
});
placePopupCloseBtn.addEventListener('click', () => {
  closePopup(placePopup);
});

deletePopupCloseBtn.addEventListener('click', () => {
  closePopup(deletePopup);
});

imagePopupCloseBtn.addEventListener('click', () => {
  closePopup(imagePopup);
})

profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

avatarPopupForm.addEventListener('submit', handleAvatarFormSubmit);

export {
  profileNameInput,
  profileDescriptionInput,
  placePopupNameInput,
  placePopupDescriptionInput,
  avatarPopupInput,
  deletePopup,
  cardTemplate,
  deletePopupForm,
}


