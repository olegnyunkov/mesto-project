import '../src/index.css';

import './components/card.js';
import './components/modal.js';
import './components/validate.js';
import './components/api.js';

import {
  imagePopup,
  cardContainer,
  createCard,
  addCard,
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

let userId;

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

function changeAvatar(avaUrl) {
  avatarPhoto.src = avaUrl;
};

function changeProfileInfo(name, about) {
  profileName.textContent = name.value;
  profileDescription.textContent = about.value;
};

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  updateProfileInfo(profileNameInput, profileDescriptionInput)
  .then(() => {
    changeProfileInfo(profileNameInput, profileDescriptionInput);
    closePopup(profilePopup);
  })
  .catch((err) => {
    console.log(err);
  });
};

function handleAvatarFormSubmit (evt) {
  evt.preventDefault();
  updateAvatarInfo(avatarPopupInput.value)
  .then(() => {
  changeAvatar(avatarPopupInput.value);
  closePopup(avatarPopup);
  })
  .catch((err) => {
    console.log(err);
  })};

getProfileInfo()
.then((data) => {
  profileName.textContent = data.name;
  profileDescription.textContent = data.about;
  avatarPhoto.src = data.avatar
  userId = data._id;
})
.catch((err) => {
  console.log(err);
});

getCardInfo()
.then((data) => {
  data.reverse().forEach((cardData) => {
    const card = createCard(cardData.name, cardData.link);
    addCard(cardContainer, card);
    const cardLikeCount = document.querySelector('.elements__like-count');
    cardLikeCount.textContent = cardData.likes.length;
    if(cardData.owner._id === userId) {
      const cardDeleteBtn = document.querySelector('.elements__delete-icon');
      cardDeleteBtn.classList.add('elements__delete-icon_visible');
    }
    card.dataset.id = cardData._id;
    const likesArr = cardData.likes;
    likesArr.forEach((cardLikes) => {
      if (cardLikes._id === userId) {
        const cardLikeBtn = document.querySelector('.elements__like-icon');
        cardLikeBtn.classList.add('elements__like-icon_active');
      }
    })
})
})
.catch((err) => {
  console.log(err);
});

placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendCardInfo(placePopupNameInput, placePopupDescriptionInput)
  .then((data) => {
    const newCard = createCard(placePopupNameInput.value, placePopupDescriptionInput.value);
    addCard(cardContainer, newCard);
    if(data.owner._id === userId) {
      const cardDeleteBtn = document.querySelector('.elements__delete-icon');
      cardDeleteBtn.classList.add('elements__delete-icon_visible');
    };
    newCard.dataset.id = data._id;
    closePopup(placePopup);
    placePopupNameInput.value = '';
    placePopupDescriptionInput.value = '';
    disableButton(placeSubmitBtn);
  })
  .catch((err) => {
    console.log(err);
  });
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


