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
import { Section} from './components/Section.js';
import { Popup } from './components/Popup.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';
import { PopupWithImage } from './components/PopupWithImage.js';

import { 
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
} from './utils/constants.js';

  const cardTemplate = document.querySelector("#elements_card");
  const cardElement = cardTemplate.cloneNode(true).content.querySelector('.elements__grid-unit');
  const cardImage = cardElement.querySelector('.elements__photo');
  const cardTitle = cardElement.querySelector('.elements__info-place');
  const cardDeleteBtn = cardElement.querySelector('.elements__delete-icon');
  const cardLikeBtn = cardElement.querySelector('.elements__like-icon');
  const cardLikeCount = cardElement.querySelector('.elements__like-count');
  const imagePopup = document.querySelector('.popup-image');
  const imagePopupLink = imagePopup.querySelector('.popup__image');
  const imagePopupTitle = imagePopup.querySelector('.popup__image-title');

let userId;

const config = new Api(apiConfig);

const validation = new FormValidator(validationConfig, avatarPopupForm);
validation.enableValidation();

const changeUserInfo = new UserInfo(profileNameInput, profileDescriptionInput, avatarPopupInput);

const popupPreview = document.querySelector('.popup-image')

cardImage.addEventListener('click', () => {
  console.log('click')
  const imPopup = new PopupWithImage('popup_opened');
  imPopup.open(imagePopup)
})

// function openPopup(item) {
//   item.classList.add('popup_opened');
  // document.addEventListener('keydown', handleEscapeKey);
// };
// function closePopup(item) {
  // item.classList.remove('popup_opened');
  // document.removeEventListener('keydown', handleEscapeKey);
// };

// const createCard = (cardData) => {
//   getCardElement(
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
// };



Promise.all([config.getUserInfo(), config.getCards()])
  .then(([userData, cards]) => {
    const getUserInfo = new UserInfo(userData.name, userData.about, userData.avatar);
    getUserInfo.setUserInfo();
    userId = userData._id;
    
    cards.reverse().forEach((card) => {
      const newCard = new Card(card, '#elements_card', userId);
      const cardUnit = newCard.create();
      const newSection = new Section(cardUnit, '.elements__grid');
      newSection.addItem(cardUnit)
    })
  })
  .catch((err) => {
    console.log(err);
  });


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
  open(profilePopup);
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

// profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

// avatarPopupForm.addEventListener('submit', (evt) => {
//   evt.preventDefault()
//   const user2 = new UserInfo(profileNameInput.value, profileDescriptionInput.value, avatarPopupInput.value);
//   user2.setUserInfo()
// });

export {
  userId,
}