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
import { Section } from './components/Section.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';
import { PopupWithImage } from './components/PopupWithImage.js';

import {
  validationConfig,
  profileNameInput,
  profileDescriptionInput,
  profileEditBtn,
  avatarPopupForm,
  avatarPopupInput,
  avatarSaveBtn,
  avatarProfileEdit,
  profileName,
  profileDescription,
  placePopupNameInput,
  placePopupDescriptionInput,
  placeEditBtn,
  placeSubmitBtn,
} from './utils/constants.js';

const apiConfig = {
  url: 'https://nomoreparties.co/v1/plus-cohort7/',
  headers: {
    authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
    'Content-Type': 'application/json'
  },
};

let userId;

const config = new Api(apiConfig);

const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileDescription: ".profile__text",
  avatarPhoto: ".profile__avatar",
})

const validation = new FormValidator(validationConfig, avatarPopupForm);
validation.enableValidation();

const popupImageOpen = new PopupWithImage('.popup-image');

const popupAvatarOpen = new PopupWithForm('.popup-avatar',
  (evt) => {
    evt.preventDefault();
    config.updateAvatarInfo(avatarPopupInput.value)
      .then((data) => {
        userInfo.setAvatarInfo(data);
        popupAvatarOpen.closeForm();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarSaveBtn.disabled = true;
        avatarSaveBtn.classList.add('form__save_disabled');
      })
  });

const popupUserOpen = new PopupWithForm('.popup-profile',
  (evt) => {
    evt.preventDefault();
    config.updateProfileInfo(profileNameInput.value, profileDescriptionInput.value)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupUserOpen.close();
      })
      .catch(err => console.log(err))
  });

const popupPlaceOpen = new PopupWithForm('.popup-place',
  (evt) => {
    evt.preventDefault();
    placeSubmitBtn.textContent = 'Сохранение...';
    config.sendCardInfo(placePopupNameInput, placePopupDescriptionInput)
      .then((data) => {
        section.addItem(createCard(data));
        popupPlaceOpen.close();
        placePopupNameInput.value = '';
        placePopupDescriptionInput.value = '';
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        placeSubmitBtn.textContent = 'Создать';
        placeSubmitBtn.disabled = true;
        placeSubmitBtn.classList.add('form__save_disabled');
      })
  });

const createCard = (card) => {
  const itemCard = new Card(card, userId, '#elements_card',
    (likeBtn, likeCount, cardId) => {
      if (likeBtn.classList.contains('elements__like-icon_active')) {
        config.removeLikeCard(cardId)
          .then((data) => {
            likeBtn.classList.remove('elements__like-icon_active');
            likeCount.textContent = data.likes.length;
          })
          .catch(err => console.log(err))
      } else {
        config.setLikeCard(cardId)
          .then((data) => {
            likeBtn.classList.add('elements__like-icon_active');
            likeCount.textContent = data.likes.length;
          })
          .catch(err => console.log(err))
      }
    },
    (cardElement, cardId) => {
      config.deleteCard(cardId)
        .then(() => {
          cardElement.remove();
        })
        .catch(err => console.log(err));
    },
    (name, link) => {
      popupImageOpen.open(name, link);
    }
  )
  return itemCard.create();
}

const section = new Section(createCard, '.elements__grid')


// Вешаем слушатели на все 4 попапа
popupImageOpen.setEventListeners()
popupAvatarOpen.setEventListeners()
popupUserOpen.setEventListeners()
popupPlaceOpen.setEventListeners()


Promise.all([config.getUserInfo(), config.getCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setAvatarInfo(userData);
    section.renderElement(cards);
  })
  .catch((err) => {
    console.log(err);
  });

profileEditBtn.addEventListener('click', () => {
  popupUserOpen.open();
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

avatarProfileEdit.addEventListener('click', () => {
  popupAvatarOpen.open();
});

placeEditBtn.addEventListener('click', () => {
  popupPlaceOpen.open();
});