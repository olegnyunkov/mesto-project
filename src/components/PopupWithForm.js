import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
   constructor(selector, formSubmit) {
      super(selector)
      this.form = this.popup.querySelector('.form')
   }

   _getInputValues() {

   };

   setEventListeners() {
      super.setEventListeners()
   };

   closeForm() {
      super.close()
      this.form.reset()
   };
};