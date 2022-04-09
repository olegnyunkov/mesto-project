export class Card {
  constructor(data, selector, userId) {
    this._data = data;
    this._selector = selector;
    this._userId = userId;
  }

  _getCardElement() {
    const cardElement = document.querySelector(this._selector).cloneNode(true).content.querySelector('.elements__grid-unit');
    return cardElement;
  };
  
  _generateCard() {
    this.title.textContent = this._data.name;
    this.image.src = this._data.link;
    this.image.alt = this._data.name;
    // this.like.textContent = this._data.likes.length;
  };

  _setDeleteButton() {
    if(this._data.owner._id === userId) {
      this.deleteBtn.classList.add('elements__delete-icon_visible');
    };
  };

  // _setEventListeners() {
  //   this.likeBtn.addEventListener('click', () => {
  //     this.toggleLike()
  //   });
  //   this.deleteBtn.addEventListener('click', () => {

  //   });
  //   this.image.addEventListener('click', () => {

  //   });
  // }

  toggleLike() {
    this.likeBtn.classList.toggle('elements__like-icon_active');
  };

  create() {
    this._element = this._getCardElement();
    this.image = this._element.querySelector('.elements__photo');
    this.title = this._element.querySelector('.elements__info-place');
    this.deleteBtn = this._element.querySelector('.elements__delete-icon');
    this.likeBtn = this._element.querySelector('.elements__like-icon');
    this.like = this._element.querySelector('.elements__like-count');

    this._generateCard();
    // this._setEventListeners();
    return this._element;
  };
}