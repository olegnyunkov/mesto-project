import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
   constructor(selector, formSubmit) {
      super(selector)
      this._form = this.popup.querySelector('.form');
      this._formSubmit = formSubmit;
   }

   _getInputValues() {
      this._formName = this._form.querySelector('.form__field-name');
      this._formAbout = this._form.querySelector('.form__field-about');
   };

   setEventListeners() {
      super.setEventListeners()
   };

   closeForm() {
      super.close()
      this._form.reset()
   };
};