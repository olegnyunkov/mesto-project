export class Api {
  constructor(options) {
    this._url = options.url
    this._headers = options.headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(res.status));
    };
  };

  // загрузка информации о профиле при первой загрузке страницы и после внесения изменений в профиль
  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  // изменение аватара
  updateAvatarInfo({avatar}) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      })
    })
      .then(this._checkResponse)
  };

  // изменение данных профиля
  updateProfileInfo({name, about}) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      })
    })
      .then(this._checkResponse)
  };

  // загрузка карточек при первой загрузке страницы и после внесения изменений
  getCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  // добавление новой карточки
  sendCardInfo({name, link}) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      })
    })
      .then(this._checkResponse)
  };

  // удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  // постановка лайка
  setLikeCard(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  // снятие лайка
  removeLikeCard(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  // changeLikeCard(cardId, isLiked) {
  //   if(isLiked) {
  //     this.setLikeCard(cardId)
  //   } else {
  //     this.removeLikeCard(cardId)
  //   }
  // }
}