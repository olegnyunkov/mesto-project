import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, formSubmit) {
    super(selector)
    this._form = this.popup.querySelector('.form');
    this._formSubmit = formSubmit;
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'))
    
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues())
    })};

  close() {
    super.close()
    this._form.reset()
  };
};