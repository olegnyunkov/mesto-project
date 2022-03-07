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
} from './../index.js';

const apiConfig = {
  url: 'https://nomoreparties.co/v1/plus-cohort7/',

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
    name.textContent = data.name;
    about.textContent = data.about;
    //добавить подгрузку аватара
  })
  .catch((err) => {
    console.log(err);
  });
  };

  const updateProfileInfo = () => {
    return fetch('https://nomoreparties.co/v1/plus-cohort7/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
      'Content-Type': 'application/json'
    },
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
    })})
    .catch((err) => {
      console.log(err);
    });
    };

    const sendCardInfo = () => {
      return fetch('https://nomoreparties.co/v1/plus-cohort7/cards', {
      method: 'POST',
      headers: {
        authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: placePopupNameInput.value,
        link: placePopupDescriptionInput.value
      })
    })
    };

  export {
    getProfileInfo,
    updateProfileInfo,
    getCardInfo,
    sendCardInfo,
  };
