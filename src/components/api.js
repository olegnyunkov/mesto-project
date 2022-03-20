const apiConfig = {
  url: 'https://nomoreparties.co/v1/plus-cohort7/',
  headers: {
    authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',
    'Content-Type': 'application/json'
  },
}

function checkResponse(res) {
  if(res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error(res.status));
  };
};

// загрузка информации о профиле при первой загрузке страницы и после внесения изменений в профиль
const getUserInfo = () => {
  return fetch(`${apiConfig.url}users/me`, {
    headers: apiConfig.headers,
  })
  .then(checkResponse)
  };

// изменение аватара
const updateAvatarInfo = (avaUrl) => {
  return fetch(`${apiConfig.url}users/me/avatar`, {
  method: 'PATCH',
  headers: apiConfig.headers,
  body: JSON.stringify({
    avatar: avaUrl,
  })
})
.then(checkResponse)
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
.then(checkResponse)
};

// загрузка карточек при первой загрузке страницы и после внесения изменений
const getCards = () => {
  return fetch(`${apiConfig.url}cards`, {
    headers: apiConfig.headers,
  })
  .then(checkResponse)
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
.then(checkResponse)
};

// удаление карточки
const deleteCard = (cardId) => {
  return fetch(`${apiConfig.url}cards/${cardId}`, {
  method: 'DELETE',
  headers: apiConfig.headers,
})
.then(checkResponse)
};

// постановка лайка
const setLikeCard = (cardId) => {
  return fetch(`${apiConfig.url}cards/likes/${cardId}`, {
  method: 'PUT',
  headers: apiConfig.headers,
})
.then(checkResponse)
};

// снятие лайка
const removeLikeCard = (cardId) => {
  return fetch(`${apiConfig.url}cards/likes/${cardId}`, {
  method: 'DELETE',
  headers: apiConfig.headers,
})
.then(checkResponse)
};

export {
  getUserInfo,
  updateProfileInfo,
  getCards,
  sendCardInfo,
  deleteCard,
  setLikeCard,
  removeLikeCard,
  updateAvatarInfo,
};
