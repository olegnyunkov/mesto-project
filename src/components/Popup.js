export class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._handleEscClose();
  };

  close() {
    this._popup.classList.remove(this._selector);
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      openedPopup.classList.remove(this._selector);
    };
  };

  setEventListeners(popups) {
    popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains(this._selector)) {
          closePopup(popup);
        };
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup);
        };
      });
    });
  };
};