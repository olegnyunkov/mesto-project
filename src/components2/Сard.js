class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._url = data.url;
    this._selector = selector;
    this._likeCount = data.likes;
    this._isLiked = false;
  }

  _getCardElement() {
    const cardElement = document.querySelector("#elements_card").cloneNode(true).content.querySelector('.elements__grid-unit');
    return cardElement;
  };

  _likeToggle() {
    this._isLiked.classList.toggle('elements__like-icon_active');
  };

  _likeCount(cardElement) {
    const cardLikeCount = cardElement.querySelector('.elements__like-count');
    cardLikeCount.textContent = this._likeCount.length;
  };
  
  setEventListener(likeElement) {
    likeElement.addEventListener('click', () => {
      this._likeToggle()
    })
  };
}

// export class Card {
//    constructor(data, templateSelector, userId, {handleCardClick, handleLikeClick, handleDeleteiconClick}) {
//       this._data = data
//       this._templateSelector = templateSelector
//       this._userId = userId
//       this._handleCardClick = handleCardClick
//       this._handleLikeClick = _handleLikeClick
//       this._handleDeleteiconClick = handleDeleteiconClick
//    }

//    _getTemplate() {
//       const cardElement = document
//       .querySelector(this.templateSelector)
//       .content
//       .querySelector('.card')
//       .cloneNode(true)

//       return cardElement
//    }

//    _setEventListeners() {
//       this._likeButton.addEventListeners('click', () => this._handleLikeClick(this))
//       this._removeButton.addEventListeners('click', () => this._handleLikeClick(this))
//       this._image.addEventListeners('click', () => this._handleCardClick({
//          name: this._data.name,
//          link: this._data.link
//       }))
//    }

//    _updataLikeView() {
//       this._likeContElement.texContent = this._data.like.length
//       this._likeButton.calssList.toggle('elements__like-icon_active', this.isLiked())
//    }

//    setLikesInfo(deta) {
//       this._data = data
//       this._updataLikeView()
//    }

//    isLiked() {
//       return this._data.like.some(item => item._id === this._userId)
//    }

//    id() {
//       return this_data._id
//    }

//    remove() {
//       this._element.remove()
//       this._element = null
//    }

//    crate() {
//       this._element = this._getTemplate()
//       this._image = this._element.querySelector('.card__image')
//       this._title = this._element.querySelector('.card__title')
//       this._removeButton = this._element.querySelector('.card__delete-button')
//       this._likeCountElement = this._element.querySelector('.card__like-count')
//       this._likeButton = this._element.querySelector('card__like-button')

//       this._image.style.backgroundImage = `url(${this._data.link})`
//       this._title.texContent = this.data.name
//       if (this._userId !== this._data.owner._id) {
//          this._removeButton.calssList.add('card__delete-button_hidden')
//       }
//       this._updataLikeView()
//       this._setEventListeners()
//       return this._element
//    }
// }