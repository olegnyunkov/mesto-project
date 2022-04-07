import '../src/index.css';

import './components/card.js';
import './components/modal.js';
import './components/validate.js';
import './components/api.js';

import {
  cardContainer,
  getCardElement,
} from './components/card.js';

import { Card } from './components2/Сard';
import { UserInfo } from './components2/UserInfo';

import {
  closePopup,
  openPopup,
} from './components/modal.js';

import {
  disableButton,
  validationConfig,
} from './components/validate.js';

import {
  Api
} from './components/api.js';

import {
  apiConfigs
} from './utils/constants';

const apiConfig = new Api({
  url: 'https://nomoreparties.co/v1/plus-cohort7/',
  headers: {
    authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
    'Content-Type': 'application/json'
  },
})

let userId;



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

function changeAvatar(avaUrl) {
  avatarPhoto.src = avaUrl;
};

function changeProfileInfo(name, about) {
  profileName.textContent = name.value;
  profileDescription.textContent = about.value;
  console.log(name.value, about.value)
};

//меняет профиль
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileSaveBtn.textContent = 'Сохранение...';
  console.log(apiConfig.updateProfileInfo)
  console.log(profileNameInput.value)
  console.log(profileDescriptionInput.value)
  apiConfig.updateProfileInfo(profileNameInput.value, profileDescriptionInput.value)
    .then(() => {
      changeProfileInfo(profileNameInput, profileDescriptionInput);
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileSaveBtn.textContent = 'Сохранить';
    })
};

//меняет аватар
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  avatarSaveBtn.textContent = 'Сохранение...';
  apiConfig.updateAvatarInfo(avatarPopupInput.value)
    .then(() => {
      changeAvatar(avatarPopupInput.value);
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarSaveBtn.textContent = 'Сохранить';
    })
};

const createCard = (cardData, container) => {
  const htmlCardElement = getCardElement(
    {
      ...cardData,
      currentUserId: userId,
    },
    (cardElement, cardId) => {
      const cardLikeBtn = cardElement.querySelector('.elements__like-icon');
      const cardLikeCount = cardElement.querySelector('.elements__like-count');
      if (cardLikeBtn.classList.contains('elements__like-icon_active')) {
        apiConfig.removeLikeCard(cardId)
          .then((data) => {
            cardLikeBtn.classList.remove('elements__like-icon_active');
            cardLikeCount.textContent = data.likes.length;
          })
          .catch(err => console.log(err));
      } else {
        apiConfig.setLikeCard(cardId)
          .then((data) => {
            cardLikeBtn.classList.add('elements__like-icon_active');
            cardLikeCount.textContent = data.likes.length;
          })
          .catch(err => console.log(err));
      }
    },
    (cardElement, cardId) => {
      apiConfig.deleteCard(cardId)
        .then(() => {
          cardElement.remove();
        })
        .catch(err => console.log(err));
    })
  container.prepend(htmlCardElement);
};

Promise.all([apiConfig.getUserInfo(), apiConfig.getCards()])
  .then(([userData, cards]) => {
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    avatarPhoto.src = userData.avatar
    userId = userData._id;

    cards.reverse().forEach((cardData) => {
      // createCard(cardData, cardContainer);
      const cardElem = new Card(cardData, '#elements_card', userId);
      const card1 = cardElem.createCard();
      cardContainer.prepend(card1)
    })
  })
  .catch((err) => {
    console.log(err);
  });

placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  placeSubmitBtn.textContent = 'Сохранение...';
  apiConfig.sendCardInfo(placePopupNameInput, placePopupDescriptionInput)
    .then((data) => {
      createCard(data, cardContainer);
      closePopup(placePopup);
      placePopupNameInput.value = '';
      placePopupDescriptionInput.value = '';
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      placeSubmitBtn.textContent = 'Создать';
      disableButton(placeSubmitBtn, validationConfig)
    })
});

profileEditBtn.addEventListener('click', () => {
  openPopup(profilePopup);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

avatarProfileEdit.addEventListener('click', () => {
  openPopup(avatarPopup);
});

placeEditBtn.addEventListener('click', () => {
  openPopup(placePopup);
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

avatarPopupForm.addEventListener('submit', handleAvatarFormSubmit);

export {
  userId,
}






















const userInfo = new UserInfo(profileNameInput, profileDescriptionInput, avatarPhoto, avatarPopupInput)
// const userInfo = new UserInfo({
//   profileNameInput : ".form__field-name",
//   profileDescriptionInput : ".form__field-about",
//   avatarPhoto : ".profile__avatar",

// })
// UserInfo.test()

userInfo.setUserAvatar()
// UserInfo.test()