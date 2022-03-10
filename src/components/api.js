import {
  createCard,
  addCard,
  cardContainer,
} from './card.js';

import {
  profileNameInput,
  profileDescriptionInput,
  placePopupNameInput,
  placePopupDescriptionInput,
  avatarPopupInput,
} from './../index.js';

const apiConfig = {
  url: 'https://nomoreparties.co/v1/plus-cohort7/',
  myId: 'e5c6b7df9e7fbe0fcc954a79',
  headers: {
    authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
    'Content-Type': 'application/json'
  },

}

const getProfileInfo = (name, about) => {
  return fetch('https://nomoreparties.co/v1/plus-cohort7/users/me', {
    headers: {
      authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
    },
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else {
      console.log('ERROR');
    }})
  .then((data) => {
    const profileAvatar = document.querySelector('.profile__avatar');
    name.textContent = data.name;
    about.textContent = data.about;
    profileAvatar.src = data.avatar
  })
  .catch((err) => {
    console.log(err);
  });
  };

const updateAvatarInfo = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort7/users/me/avatar', {
  method: 'PATCH',
  headers: apiConfig.headers,
  body: JSON.stringify({
    avatar: avatarPopupInput.value,
  })
})
}

const updateProfileInfo = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort7/users/me', {
  method: 'PATCH',
  headers: apiConfig.headers,
  body: JSON.stringify({
    name: profileNameInput.value,
    about: profileDescriptionInput.value
  })
})
};

const getCardInfo = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort7/cards', {
    headers: {
      authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
    },
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else {
      console.log('ERROR');
    }})
  .then((data) => {
    data.forEach((cardData) => {
      const card = createCard(cardData.name, cardData.link);
      addCard(cardContainer, card);
      const cardLikeCount = document.querySelector('.elements__like-count');
      cardLikeCount.textContent = cardData.likes.length;
      if(cardData.owner._id === apiConfig.myId) {
        const cardDeleteBtn = document.querySelector('.elements__delete-icon');
        cardDeleteBtn.classList.add('elements__delete-icon_visible');
      }
  })})
  .catch((err) => {
    console.log(err);
  });
  };

const sendCardInfo = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort7/cards', {
  method: 'POST',
  headers: apiConfig.headers,
  body: JSON.stringify({
    name: placePopupNameInput.value,
    link: placePopupDescriptionInput.value
  })
})
};

const deleteCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort7/cards/${cardId}`, {
  method: 'DELETE',
  headers: apiConfig.headers,
})
};

const setLikeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort7/cards/likes/${cardId}`, {
  method: 'PUT',
  headers: apiConfig.headers,
})
};

const removeLikeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort7/cards/likes/${cardId}`, {
  method: 'DELETE',
  headers: apiConfig.headers,
})
};

export {
  getProfileInfo,
  updateProfileInfo,
  getCardInfo,
  sendCardInfo,
  deleteCard,
  setLikeCard,
  removeLikeCard,
  updateAvatarInfo,
};
