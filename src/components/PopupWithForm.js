import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, formSubmit) {
    super(selector)
    this._form = this.popup.querySelector('.form');
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    this._formName = this._form.querySelector('.form__field-name').value;
    this._formAbout = this._form.querySelector('.form__field-about').value;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._formSubmit)
  };

  closeForm() {
    super.close()
    this._form.reset()
  };
};