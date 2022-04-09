export class Popup {
   constructor(selector) {
      this.selector = document.querySelector(selector)
      console.log(this.selector)
   }

   open() {
      this.selector.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscapeKey);
      setEventListeners()
   };

   close() {
      this.selector.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscapeKey);
   };

   _handleEscapeKey(evt) {
      if (evt.key == 'Escape') {
         this.close()
      };
   };

   setEventListeners() {
      this.selector.addEventListener("mousedown", (evt) => {
         if (evt.target.classList.contains("popup_opened")) {
            this.close(this.selector)
         }
         if (evt.target.classList.contains("popup__close")) {
            this.close(this.selector)
         }
      })
   }
}