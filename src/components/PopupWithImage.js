import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this.popup.querySelector('.popup__image');
    this._title = this.popup.querySelector('.popup__image-title');
  }

  open(name, link) {

    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
    console.log(name, link)
    super.open()
  }
}