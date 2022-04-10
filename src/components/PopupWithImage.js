import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this._selector.querySelector('.popup__image');
    this._title = this._selector.querySelector('.popup__image-title');
  }

  open({ name, link }) {
    // this._selector.classList.add('popup_opened');
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
    super.open()
  }
}