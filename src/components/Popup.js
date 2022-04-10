export class Popup {
   constructor(selector) {
      this._selector = document.querySelector(selector)
   }

   open() {
      this._selector.classList.add('popup_opened');
      document.addEventListener('keydown', () => {
         this._handleEscapeKey()
      });
      setEventListeners()
   };

   close() {
      this._selector.classList.remove('popup_opened');
      document.removeEventListener('keydown', () => {
         this._handleEscapeKey
      });
   };

   _handleEscapeKey(evt) {
      if (evt.key === 'Escape') {
         this.close()
      };
   };

   setEventListeners() {
      this._selector.addEventListener("mousedown", (evt) => {
         if (evt.target.classList.contains("popup_opened")) {
            this.close()
         }
         if (evt.target.classList.contains("popup__close")) {
            this.close()
         }
      })
   }
}