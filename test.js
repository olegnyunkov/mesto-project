const getUserInfo = () => {
  return fetch(`${fetchConfig.baseUrl}/users/me`,{
    headers: fetchConfig.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при получении данных пользователя: ${res.status}`);
    });
}

//getUserInfo и установка id происходят при создании карточки
getUserInfo()
    .then((user) => {
      //установка стиля кнопки Like, если мой пользователь есть среди лайкнувших эту карточку
      if (cardObject.likes.some((userThatLiked) => userThatLiked._id === user._id)) {
        renderLike(newCard);
        newCard.dataset.likedByMe = true;
      }
      else {
        newCard.dataset.likedByMe = false;
      }
  });

newCard.dataset._id = cardObject._id;

//отображение состояния кнопки Like
function renderLike(cardElement) {
  cardElement.querySelector('.element__like').classList.toggle('element__like_active');
}

//функция определения метода для запроса установки лайка
function selectLikeAction(cardElement) {
  if (cardElement.dataset.likedByMe) {
    return 'DELETE';
  }
  else {
    return 'PUT';
  }
}

//обработчик кнопки like
function likeCard(evt) {
  const cardElement = evt.target.closest('.element');
  const cardId = cardElement.dataset._id;
  const action = selectLikeAction(cardElement);
  setLikeOnServer(cardId, action)
    .then((updatedCard) => {
      cardElement.querySelector('.element__like-count').textContent = updatedCard.likes.length;
      cardElement.dataset.likedByMe = !cardElement.dataset.likedByMe;
      renderLike(cardElement);
    });
  }

const setLikeOnServer = (cardId, likeAction) => {
  return fetch(`${fetchConfig.baseUrl}/cards/likes/${cardId}`,{
    headers: fetchConfig.headers,
    method: likeAction,
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при постановке лайка: ${res.status}`);
    });
}




fetch('https://nomoreparties.co/v1/plus-cohort7/cards', {
  headers: {
    authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });
