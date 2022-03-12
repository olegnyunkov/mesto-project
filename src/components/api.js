import {
  createCard,
  addCard,
  cardContainer,
} from './card.js';

const apiConfig = {
  url: 'https://nomoreparties.co/v1/plus-cohort7/',
  myId: 'e5c6b7df9e7fbe0fcc954a79',
  headers: {
    authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
    'Content-Type': 'application/json'
  },

}

// загрузка информации о профиле при первой загрузке страницы и после внесения изменений в профиль
const getProfileInfo = (name, about, ava) => {
  return fetch(`${apiConfig.url}users/me`, {
    headers: apiConfig.headers,
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
    ava.src = data.avatar
  })
  .catch((err) => {
    console.log(err);
  });
  };

// изменение аватара
const updateAvatarInfo = (avaUrl) => {
  return fetch(`${apiConfig.url}users/me/avatar`, {
  method: 'PATCH',
  headers: apiConfig.headers,
  body: JSON.stringify({
    avatar: avaUrl.value,
  })
})
.then((res) => {
  if(res.ok) {
    return res.json();
  } else {
    console.log('ERROR')
  }
})
.catch((err) => {
  console.log(err);
})
};

// изменение данных профиля
const updateProfileInfo = (nameText, aboutText) => {
  return fetch(`${apiConfig.url}users/me`, {
  method: 'PATCH',
  headers: apiConfig.headers,
  body: JSON.stringify({
    name: nameText.value,
    about: aboutText.value
  })
})
.then((res) => {
  if(res.ok) {
    return res.json();
  } else {
    console.log('ERROR')
  }
})
.catch((err) => {
  console.log(err);
})
};

// загрузка карточек при первой загрузке страницы и после внесения изменений
const getCardInfo = () => {
  return fetch(`${apiConfig.url}cards`, {
    headers: apiConfig.headers,
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else {
      console.log('ERROR');
    }})
  .then((data) => {
    data.reverse().forEach((cardData) => {
      const card = createCard(cardData.name, cardData.link);
      addCard(cardContainer, card);
      const cardLikeCount = document.querySelector('.elements__like-count');
      cardLikeCount.textContent = cardData.likes.length;
      if(cardData.owner._id === apiConfig.myId) {
        const cardDeleteBtn = document.querySelector('.elements__delete-icon');
        cardDeleteBtn.classList.add('elements__delete-icon_visible');
      }
      card.dataset.id = cardData._id;
      const likesArr = cardData.likes;
      likesArr.forEach((cardLikes) => {
        if (cardLikes._id === apiConfig.myId) {
          const cardLikeBtn = document.querySelector('.elements__like-icon');
          cardLikeBtn.classList.add('elements__like-icon_active');
        }
      })
  })
})
  .catch((err) => {
    console.log(err);
  });
  };

// добавление новой карточки
const sendCardInfo = (name, about) => {
  return fetch(`${apiConfig.url}cards`, {
  method: 'POST',
  headers: apiConfig.headers,
  body: JSON.stringify({
    name: name.value,
    link: about.value
  })
})
.then((res) => {
  if(res.ok) {
    return res.json();
  } else {
    console.log('ERROR')
  }
})
.then((data) => {
  const newCard = createCard(name.value, about.value);
  addCard(cardContainer, newCard);
  if(data.owner._id === apiConfig.myId) {
    const cardDeleteBtn = document.querySelector('.elements__delete-icon');
    cardDeleteBtn.classList.add('elements__delete-icon_visible');
  }
})
.catch((err) => {
  console.log(err);
})
};

// удаление карточки
const deleteCard = (cardId, cardElement) => {
  return fetch(`${apiConfig.url}cards/${cardId}`, {
  method: 'DELETE',
  headers: apiConfig.headers,
})
.then((res) => {
  if(res.ok) {
    return res.json();
  } else {
    console.log('ERROR')
  }
})
.then(() => {
  cardElement.remove();
})
.catch((err) => {
  console.log(err);
})
};

// постановка лайка
const setLikeCard = (cardId, likeBtn, likeCount) => {
  return fetch(`${apiConfig.url}cards/likes/${cardId}`, {
  method: 'PUT',
  headers: apiConfig.headers,
})
.then((res) => {
  if(res.ok) {
    return res.json();
  } else {
    console.log('ERROR')
  }
})
.then((data) => {
  likeBtn.classList.add('elements__like-icon_active');
  likeCount.textContent = data.likes.length;
})
.catch((err) => {
  console.log(err);
})
};

// снятие лайка
const removeLikeCard = (cardId, likeBtn, likeCount) => {
  return fetch(`${apiConfig.url}cards/likes/${cardId}`, {
  method: 'DELETE',
  headers: apiConfig.headers,
})
.then((res) => {
  if(res.ok) {
    return res.json();
  } else {
    console.log('ERROR')
  }
})
.then((data) => {
  likeBtn.classList.remove('elements__like-icon_active');
  likeCount.textContent = data.likes.length;
})
.catch((err) => {
  console.log(err);
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
  apiConfig,
};
