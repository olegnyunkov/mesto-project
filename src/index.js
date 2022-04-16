import '../src/index.css';

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
  profilePopupForm,
  profileSaveBtn,
  avatarPopupForm,
  avatarSaveBtn,
  avatarProfileEdit,
  placePopupForm,
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

const avatarValidation = new FormValidator(validationConfig, avatarPopupForm);
avatarValidation.enableValidation();

const userValidation = new FormValidator(validationConfig, profilePopupForm);
userValidation.enableValidation();

const placeValidation = new FormValidator(validationConfig, placePopupForm);
placeValidation.enableValidation();


const popupImageOpen = new PopupWithImage('.popup-image');

const popupAvatarOpen = new PopupWithForm('.popup-avatar',
  (info) => {
    avatarSaveBtn.textContent = 'Сохранение...';
    config.updateAvatarInfo({
      avatar: info.avatar_link
    })
      .then((data) => {
        userInfo.setAvatarInfo(data.avatar);
        popupAvatarOpen.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarSaveBtn.textContent = 'Сохранить';
      })
  });

const popupUserOpen = new PopupWithForm('.popup-profile',
  (info) => {
    profileSaveBtn.textContent = 'Сохранение...';
    config.updateProfileInfo({
      name: info.name,
      about: info.about
    })
      .then((data) => {
        userInfo.setUserInfo(data);
        popupUserOpen.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        profileSaveBtn.textContent = 'Сохранить';
      })
  });

const popupPlaceOpen = new PopupWithForm('.popup-place',
  (info) => {
    placeSubmitBtn.textContent = 'Сохранение...';
    config.sendCardInfo({
      name: info.place_name,
      link: info.place_link
    })
      .then((data) => {
        section.addItem(createCard(data));
        popupPlaceOpen.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        placeSubmitBtn.textContent = 'Создать';
      })
  });

  function handleLike(card) {
    api.likeCard(card.getId())
        .then((res) => {
            card.updateLikes(res)
        })
        .catch((err) => {
            console.log(err);
        });
}

const createCard = (card) => {
  const itemCard = new Card(card, userId, '#elements_card',
    (likeBtn, likeCount, cardId) => {
      // config.changeLikeCard(info._idCard(), info.checkLike())
      // .then(() => {
      //   console.log('here')        
      // })
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
    (info) => {
      config.deleteCard(info._idCard())
        .then(() => {
          info.removeCard();
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
    section.renderElements(cards);
  })
  .catch((err) => {
    console.log(err);
  });

profileEditBtn.addEventListener('click', () => {
  popupUserOpen.open();
  userValidation.resetValidation();
  const editUserInfo = userInfo.getUserInfo()
  profileNameInput.value = editUserInfo.name
  profileDescriptionInput.value = editUserInfo.about
});

avatarProfileEdit.addEventListener('click', () => {
  popupAvatarOpen.open();
  avatarValidation.resetValidation();
});

placeEditBtn.addEventListener('click', () => {
  popupPlaceOpen.open();
  placeValidation.resetValidation();
});


