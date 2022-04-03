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