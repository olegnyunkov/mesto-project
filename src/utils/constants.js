const validationConfig = {
   formSelector: '.form',
   inputSelector: '.form__input',
   buttonSelector: '.form__save',
   inputErrorClass: 'form__input_error',
   textErrorClass: 'form__error_visible',
   buttonErrorClass: 'form__save_disabled',
};

const profilePopup = document.querySelector('.popup-profile');
const profilePopupForm = profilePopup.querySelector('.form');
const profileNameInput = profilePopup.querySelector('.form__field-name');
const profileDescriptionInput = profilePopup.querySelector('.form__field-about');
const profileSaveBtn = profilePopup.querySelector('.form__save');
const profileEditBtn = document.querySelector('.profile__edit');

const avatarPopup = document.querySelector('.popup-avatar');
const avatarPopupForm = avatarPopup.querySelector('.form');
const avatarSaveBtn = avatarPopup.querySelector('.form__save');
const avatarProfileEdit = document.querySelector('.profile__photo');

const placePopup = document.querySelector('.popup-place');
const placePopupForm = placePopup.querySelector('.form');
const placeEditBtn = document.querySelector('.profile__add');
const placeSubmitBtn = placePopup.querySelector('.form__save');

export {
  validationConfig, 
  profilePopupForm,
  profileNameInput,
  profileDescriptionInput,
  profileSaveBtn,
  profileEditBtn,
  avatarPopupForm,
  avatarSaveBtn,
  avatarProfileEdit,
  placePopupForm,
  placeEditBtn,
  placeSubmitBtn,
}