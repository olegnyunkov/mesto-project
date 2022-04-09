import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, formSubmit) {
    super(selector)
    this._selector = selector;
    this._formSubmit = formSubmit;
  }

  _getInputValues() {

  };

  setEventListeners() {

  };

  close() {

  };
};