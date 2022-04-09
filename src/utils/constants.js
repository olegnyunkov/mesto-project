const validationConfig = {
   formSelector: '.form',
   inputSelector: '.form__input',
   buttonSelector: '.form__save',
   inputErrorClass: 'form__input_error',
   textErrorClass: 'form__error_visible',
   buttonErrorClass: 'form__save_disabled',
};

const apiConfig = {
   url: 'https://nomoreparties.co/v1/plus-cohort7/',
   headers: {
     authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
     'Content-Type': 'application/json'
   },
 };

const profilePopup = document.querySelector('.popup-profile');
const profilePopupForm = profilePopup.querySelector('.form');
const profileNameInput = profilePopup.querySelector('.form__field-name');
const profileDescriptionInput = profilePopup.querySelector('.form__field-about');
const profileSaveBtn = profilePopup.querySelector('.form__save');
const profileEditBtn = document.querySelector('.profile__edit');

const avatarPopup = document.querySelector('.popup-avatar');
const avatarPopupForm = avatarPopup.querySelector('.form');
const avatarPopupInput = avatarPopup.querySelector('.form__field-about');
const avatarSaveBtn = avatarPopup.querySelector('.form__save');

const avatarProfileEdit = document.querySelector('.profile__photo');
const avatarPhoto = document.querySelector('.profile__avatar');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__text');

const placePopup = document.querySelector('.popup-place');
const placePopupForm = placePopup.querySelector('.form');
const placePopupNameInput = placePopup.querySelector('.form__field-name');
const placePopupDescriptionInput = placePopup.querySelector('.form__field-about');
const placeEditBtn = document.querySelector('.profile__add');
const placeSubmitBtn = placePopup.querySelector('.form__save');

const popups = document.querySelectorAll('.popup');

const cardContainer = document.querySelector('.elements__grid');

export {
  validationConfig, 
  apiConfig,
  profilePopup,
  profilePopupForm,
  profileNameInput,
  profileDescriptionInput,
  profileSaveBtn,
  profileEditBtn,
  avatarPopup,
  avatarPopupForm,
  avatarPopupInput,
  avatarSaveBtn,
  avatarProfileEdit,
  avatarPhoto,
  profileName,
  profileDescription,
  placePopup,
  placePopupForm,
  placePopupNameInput,
  placePopupDescriptionInput,
  placeEditBtn,
  placeSubmitBtn,
  popups,
  cardContainer,
}