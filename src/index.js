import '../src/index.css';

// по идеи это можно удалить
// import './components/Api.js';
// import './components/Сard';
// import './components/Section.js';
// import './components/UserInfo.js';
// import './components/FormValidator.js';
// import './components/Popup.js';
// import './components/PopupWithForm.js';
// import './components/PopupWithImage.js';

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

  // const cardTemplate = document.querySelector("#elements_card");
  // const cardElement = cardTemplate.cloneNode(true).content.querySelector('.elements__grid-unit');
  // const cardImage = cardElement.querySelector('.elements__photo');
  // const cardTitle = cardElement.querySelector('.elements__info-place');
  // const cardDeleteBtn = cardElement.querySelector('.elements__delete-icon');
  // const cardLikeBtn = cardElement.querySelector('.elements__like-icon');
  // const cardLikeCount = cardElement.querySelector('.elements__like-count');
  // const imagePopup = document.querySelector('.popup-image');
  // const imagePopupLink = imagePopup.querySelector('.popup__image');
  // const imagePopupTitle = imagePopup.querySelector('.popup__image-title');
  // const test = cardElement.querySelector('.')
  
  

let userId;

const config = new Api(apiConfig);

const validation = new FormValidator(validationConfig, avatarPopupForm);
validation.enableValidation();

const userInfo = new UserInfo({
  profileName : ".profile__name",
  profileDescription : ".profile__text",
  avatarPhoto : ".profile__avatar",
})

const createSection = new Section('.elements__grid');

const popupImageOpen = new PopupWithImage('.popup-image');

const popupAvatarOpen = new PopupWithForm('.popup-avatar', 
  avatarPopupForm.addEventListener('submit', (evt) => {
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
  }));

const popupUserOpen = new PopupWithForm('.popup-profile', 
  profilePopupForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    config.updateProfileInfo(profileNameInput.value, profileDescriptionInput.value)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupUserOpen.close();
    })
    .catch(err => console.log(err))
  }));

const popupPlaceOpen = new PopupWithForm('.popup-place', 
placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  placeSubmitBtn.textContent = 'Сохранение...';
  config.sendCardInfo(placePopupNameInput, placePopupDescriptionInput)
    .then((data) => {
      createSection.addItem(createCard.create(data));
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
}));

const createCard = new Card( 
  '#elements_card',
  (cardLikeBtn, cardLikeCount, cardId) => {
    if (cardLikeBtn.classList.contains('elements__like-icon_active')) {
      config.removeLikeCard(cardId)
        .then((data) => {
          cardLikeBtn.classList.remove('elements__like-icon_active');
          cardLikeCount.textContent = data.likes.length;
        })
      .catch(err => console.log(err));
    } else {
      config.setLikeCard(cardId)
        .then((data) => {
          cardLikeBtn.classList.add('elements__like-icon_active');
          cardLikeCount.textContent = data.likes.length;
        })
      .catch(err => console.log(err));
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

Promise.all([config.getUserInfo(), config.getCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatarInfo(userData);
    userId = userData._id;
    createCard.userId(userId)    
    
    cards.reverse().forEach((card) => {
      createSection.addItem(createCard.create(card));
    })
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