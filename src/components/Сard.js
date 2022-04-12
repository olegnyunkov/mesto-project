export class Card {
  constructor(card, id, selector, likeCard, deleteCard, handleCardClick) {
    this._card = card
    console.log(this._card)
    this._id = id
    console.log(this._id)
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._likeCard = likeCard;
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

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      this._likeCard()
    });
    this._deleteBtn.addEventListener('click', () => {
      this._deleteCard(this._element, this._cardId)
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._title.textContent, this._image.src);
    });
  }

  // toggleLike() {
  //   console.log(this._data.likes)
  //   if(this._likeBtn.classList.contains('elements__like-icon_active')) {
  //     this._likeBtn.classList.remove('elements__like-icon_active');
  //     this._like.textContent = this._data.likes.length;
  //   } else {
  //     this._likeBtn.classList.add('elements__like-icon_active');
  //     this._like.textContent = this._data.likes.length;
  //   }
  // };

  // userId(id) {
  //   this._userId = id;
  // };

  cardId() {
    this._element.dataset.id = this._data._id;
    this._cardId = this._element.dataset.id;
    // console.log(this._cardId)
    return this._cardId;    
  }

  create(data) {
    this._data = data;
    this._element = this._getCardElement();
    this._image = this._element.querySelector('.elements__photo');
    this._title = this._element.querySelector('.elements__info-place');
    this._deleteBtn = this._element.querySelector('.elements__delete-icon');
    this._likeBtn = this._element.querySelector('.elements__like-icon');
    this._like = this._element.querySelector('.elements__like-count');    

    this.cardId()
    // this.toggleLike()
    // this._generateCard();
    this._setEventListeners();
    // this._setDeleteButton();
    
    return this._element;
  };
}