import {
  addCard,
  createCard,
} from './card.js';

const profilePopup = document.querySelector('.popup-profile');
const profilePopupCloseBtn = profilePopup.querySelector('.popup__close');
const profilePopupForm = profilePopup.querySelector('.form');
const profileNameInput = profilePopup.querySelector('.form__field-name');
const profileDescriptionInput = profilePopup.querySelector('.form__field-about');
const profileEditBtn = document.querySelector('.profile__edit');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__text');

const placePopup = document.querySelector('.popup-place');
const placePopupCloseBtn = placePopup.querySelector('.popup__close');
const placePopupForm = placePopup.querySelector('.form');
const placePopupNameInput = placePopup.querySelector('.form__field-name');
const placePopupDescriptionInput = placePopup.querySelector('.form__field-about');
const placeEditBtn = document.querySelector('.profile__add');

const imagePopup = document.querySelector('.popup-image');
const imagePopupCloseBtn = imagePopup.querySelector('.popup__close');
const imagePopupLink = imagePopup.querySelector('.popup__image');
const imagePopupTitle = imagePopup.querySelector('.popup__image-title');

function openPopup(item) {
  item.classList.add('popup_opened');
}
function closePopup(item) {
  item.classList.remove('popup_opened');
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profilePopup);
}

placePopupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const newCard = createCard(placePopupNameInput.value, placePopupDescriptionInput.value);
  addCard(cardContainer, newCard);
  closePopup(placePopup);
  placePopupNameInput.value = '';
  placePopupDescriptionInput.value = '';
});

export {
  profilePopupCloseBtn,
  placeEditBtn,
  placePopupCloseBtn,
  imagePopupCloseBtn,
  profilePopupForm,
  profileEditBtn,
  openPopup,
  closePopup,
  handleProfileFormSubmit,
  imagePopupLink,
  imagePopupTitle,
  profilePopup,
  placePopup,
  imagePopup,
 }
