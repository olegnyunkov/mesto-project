import '../src/index.css';

import './components/Api.js';
import './components/Сard';
import './components/Section.js';
import './components/UserInfo.js';
import './components/FormValidator.js';
import './components/Popup.js';
import './components/PopupWithForm.js';
import './components/PopupWithImage.js';

import { Card } from './components/Сard';

import { Api } from './components/Api.js';

import { FormValidator } from './components/FormValidator.js';

import { Section} from './components/Section.js'

import { validationConfig} from './utils/constants.js';
import { UserInfo } from './components/UserInfo.js';

const config = new Api ({
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

function openPopup(item) {
  item.classList.add('popup_opened');
  // document.addEventListener('keydown', handleEscapeKey);
};
function closePopup(item) {
  item.classList.remove('popup_opened');
  // document.removeEventListener('keydown', handleEscapeKey);
};

// function changeAvatar(avaUrl) {
//   avatarPhoto.src = avaUrl;
// };

// function changeProfileInfo(name, about) {
//   profileName.textContent = name.value;
//   profileDescription.textContent = about.value;
// };

// //меняет профиль
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileSaveBtn.textContent = 'Сохранение...';
//   apiConfig.updateProfileInfo(profileNameInput.value, profileDescriptionInput.value)
//     .then(() => {
//       changeProfileInfo(profileNameInput, profileDescriptionInput);
//       closePopup(profilePopup);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       profileSaveBtn.textContent = 'Сохранить';
//     })
// };

// //меняет аватар
// function handleAvatarFormSubmit(evt) {
//   evt.preventDefault();
//   avatarSaveBtn.textContent = 'Сохранение...';
//   apiConfig.updateAvatarInfo(avatarPopupInput.value)
//     .then(() => {
//       changeAvatar(avatarPopupInput.value);
//       closePopup(avatarPopup);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       avatarSaveBtn.textContent = 'Сохранить';
//     })
// };

// const createCard = (cardData, container) => {
//   const htmlCardElement = getCardElement(
//     {
//       ...cardData,
//       currentUserId: userId,
//     },
//     (cardElement, cardId) => {
//       const cardLikeBtn = cardElement.querySelector('.elements__like-icon');
//       const cardLikeCount = cardElement.querySelector('.elements__like-count');
//       if (cardLikeBtn.classList.contains('elements__like-icon_active')) {
//         apiConfig.removeLikeCard(cardId)
//           .then((data) => {
//             cardLikeBtn.classList.remove('elements__like-icon_active');
//             cardLikeCount.textContent = data.likes.length;
//           })
//           .catch(err => console.log(err));
//       } else {
//         apiConfig.setLikeCard(cardId)
//           .then((data) => {
//             cardLikeBtn.classList.add('elements__like-icon_active');
//             cardLikeCount.textContent = data.likes.length;
//           })
//           .catch(err => console.log(err));
//       }
//     },
//     (cardElement, cardId) => {
//       apiConfig.deleteCard(cardId)
//         .then(() => {
//           cardElement.remove();
//         })
//         .catch(err => console.log(err));
//     })
//   container.prepend(htmlCardElement);
// };
const cardContainer = document.querySelector('.elements__grid');

Promise.all([config.getUserInfo(), config.getCards()])
  .then(([userData, cards]) => {
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    avatarPhoto.src = userData.avatar
    userId = userData._id;

    cards.reverse().forEach((cardData) => {
      const cardElem = new Card(cardData, '#elements_card', userId);
      const card1 = cardElem.createCard();
      cardContainer.prepend(card1)
      // const cardCont = new Section([], '.elements__grid')
      // cardCont.addItem(card1)
    })
  })
  .catch((err) => {
    console.log(err);
  });

const valid = new FormValidator(validationConfig, avatarPopupForm);
valid.enableValidation();





// placePopupForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   placeSubmitBtn.textContent = 'Сохранение...';
//   apiConfig.sendCardInfo(placePopupNameInput, placePopupDescriptionInput)
//     .then((data) => {
//       createCard(data, cardContainer);
//       closePopup(placePopup);
//       placePopupNameInput.value = '';
//       placePopupDescriptionInput.value = '';
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       placeSubmitBtn.textContent = 'Создать';
//       disableButton(placeSubmitBtn, validationConfig)
//     })
// });

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

// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup_opened')) {
//       closePopup(popup);
//     };
//     if (evt.target.classList.contains('popup__close')) {
//       closePopup(popup);
//     };
//   });
// });

// profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

// avatarPopupForm.addEventListener('submit', (evt) => {
//   evt.preventDefault()
//   const user2 = new UserInfo(profileNameInput.value, profileDescriptionInput.value, avatarPopupInput.value);
//   user2.setUserInfo()
// });

export {
  userId,
}

// const userInfo = new UserInfo(profileNameInput, profileDescriptionInput, avatarPhoto, avatarPopupInput)
const userInfo = new UserInfo({
  profileNameInput : ".form__field-name",
  profileDescriptionInput : ".form__field-about",
  avatarPhoto : ".profile__avatar",

})
// UserInfo.test()

// userInfo.setUserAvatar()
// UserInfo.test()