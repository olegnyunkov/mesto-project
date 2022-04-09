export class Popup {
   constructor(selector) {
      this.selector = document.querySelector(selector)
   }
   open() {
      this.selector.classList.add('popup_opened');
      document.addEventListener('keydown', _handleEscapeKey);
      setEventListeners()
   };

   close() {
      this.selector.classList.remove('popup_opened');
      document.removeEventListener('keydown', _handleEscapeKey);
   };

   _handleEscapeKey(evt) {
      evt.preventDefault() //нужно попробывать без него, когда будет работать
      if (evt.key == 'Escape') {
         this.close()
      };
   };

   setEventListeners() {
      this.selector.addEventListener("mousedown", (evt) => {
         if (evt.target.classList.contains("popup_opened")) {
            closePopup(popup)
         }
         if (evt.target.classList.contains("popup__close")) {
            closePopup(popup)
         }
      })
   }
   // isLoading //?
}