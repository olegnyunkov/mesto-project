export class Card {
  constructor(selector, userId, likeCard, deleteCard, handleCardClick) {
    console.log(userId)
    this._selector = selector;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._likeCard = likeCard;
  }

  _getCardElement() {
    const cardElement = document.querySelector(this._selector).cloneNode(true).content.querySelector('.elements__grid-unit');
    return cardElement;
  };
  
  _generateCard(data) {
    this._data = data;
    this._title.textContent = this._data.name;
    this._image.src = this._data.link;
    this._image.alt = this._data.name;
    this._like.textContent = this._data.likes.length;
  };

  _setDeleteButton(data) {
    this._data = data;
    if(this._data.owner._id === this._userId) {
      this._deleteBtn.classList.add('elements__delete-icon_visible');
    };
  };

  _setEventListeners(data) {
    this._data = data;
    this._likeBtn.addEventListener('click', () => {
      this._likeCard(this._element, this._data._id)
    });
    this._deleteBtn.addEventListener('click', () => {
      this._deleteCard(this._element, this._data._id)
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _toggleLike() {
    this._likeBtn.classList.toggle('elements__like-icon_active');
  };

  create(data) {
    this._data = data;
    this._element = this._getCardElement();
    this._image = this._element.querySelector('.elements__photo');
    this._title = this._element.querySelector('.elements__info-place');
    this._deleteBtn = this._element.querySelector('.elements__delete-icon');
    this._likeBtn = this._element.querySelector('.elements__like-icon');
    this._like = this._element.querySelector('.elements__like-count');
    this._element.dataset.id = this._data._id;

    this._generateCard(data);
    this._setEventListeners(data);
    this._setDeleteButton(data);
    return this._element;
  };
}