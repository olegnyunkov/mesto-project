export class Card {
  constructor(data, id, selector, likeCard, deleteCard, handleCardClick) {
    this._data = data
    this._userId = id
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._likeCard = likeCard;
    this._element = this._getCardElement();
    this._image = this._element.querySelector('.elements__photo');
    this._title = this._element.querySelector('.elements__info-place');
    this._deleteBtn = this._element.querySelector('.elements__delete-icon');
    this._likeBtn = this._element.querySelector('.elements__like-icon');
    this._like = this._element.querySelector('.elements__like-count');
  }

  _getCardElement() {
    const cardElement = document.querySelector(this._selector).cloneNode(true).content.querySelector('.elements__grid-unit');

    return cardElement;
  };
  
  _generateCard() {
    this._title.textContent = this._data.name;
    this._image.src = this._data.link;
    this._image.alt = this._data.name;
    this._like.textContent = this._data.likes.length;
  };

  _setDeleteButton() {
    if(this._data.owner._id === this._userId) {
      this._deleteBtn.classList.add('elements__delete-icon_visible');
    };
  };

  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      this._likeCard(this)
    });
    this._deleteBtn.addEventListener('click', () => {
      this._deleteCard(this)
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._title.textContent, this._image.src);
    });
  }

  checkLike() {
    return this._likeBtn.classList.contains('elements__like-icon_active')
  }

  updateLikes(unit) {
    this._data = unit;
    this._like.textContent = this._data.likes.length;
    this._likeBtn.classList.toggle('elements__like-icon_active', !this.checkLike())
  }

  _isLiked() {
    this._data.likes.forEach((like) => {
    if(like._id === this._userId) {
      this._likeBtn.classList.add('elements__like-icon_active')
    }})
    }

  idCard() {
    this._element.dataset.id = this._data._id;
    this._cardId = this._element.dataset.id;

    return this._cardId;
  }

  create() {
    this.idCard();
    this._isLiked();
    this._generateCard();
    this._setEventListeners();
    this._setDeleteButton();

    return this._element;
  };
}