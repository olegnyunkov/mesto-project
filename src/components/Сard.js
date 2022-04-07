export class Card {
  constructor(data, selector, userId) {
    this._name = data.name;
    this._url = data.link;
    this._selector = selector;
    this._likeCount = data.likes;
    this._userId = userId;
    this._isLiked = false;
  }

  _getCardElement() {
    const cardElement = document.querySelector(this._selector).cloneNode(true).content.querySelector('.elements__grid-unit');
    return cardElement;
  };
  
  _generateCard() {
    this.title.textContent = this._name;
    this.image.src = this._url;
    this.image.alt = this._name;
    this.like.textContent = this._likeCount.length;
  };

  _setDeleteButton() {
    if(data.owner._id === userId) {
      this.deleteBtn.classList.add('elements__delete-icon_visible');
    };
  };

  _setEventListeners() {
    this.likeBtn.addEventListener('click', () => {
      this.toggleLike()
    });
    this.deleteBtn.addEventListener('click', () => {

    });
    this.image.addEventListener('click', () => {

    });
  }

  toggleLike() {
    this.likeBtn.classList.toggle('elements__like-icon_active');
  };

  createCard() {
    this._element = this._getCardElement();
    this.image = this._element.querySelector('.elements__photo');
    this.title = this._element.querySelector('.elements__info-place');
    this.deleteBtn = this._element.querySelector('.elements__delete-icon');
    this.likeBtn = this._element.querySelector('.elements__like-icon');
    this.like = this._element.querySelector('.elements__like-count');

    this._generateCard();
    this._setEventListeners();
    return this._element;
  };
}