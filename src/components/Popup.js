export class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector)
    this._handleEscapeKey = this._handleEscapeKey.bind(this)
  }

  open() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscapeKey);
  };

  close() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscapeKey);
  };

  _handleEscapeKey (evt) {
    if (evt.key === 'Escape') {
      this.close()
    };
  };

  setEventListeners() {
    this.popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close()
      }
    })
  }
}