export class Popup {
   constructor(selector) {
      this._selector = document.querySelector(selector)
   }


   open() {
      this._selector.classList.add('popup_opened');
      document.addEventListener('keydown', _handleEscapeKey);
   };

   close() {
      this._selector.classList.remove('popup_opened');
      document.removeEventListener('keydown', _handleEscapeKey);
   };


   _handleEscapeKey(evt) {
      evt.preventDefault() //нужно попробывать без него, когда будет работать
      if (evt.key == 'Escape') {
         this.close()
      };
   };

   setEventListeners() {
      //Содержит публичный метод setEventListeners, 
      //который добавляет слушатель клика иконке закрытия попапа. 
      //Модальное окно также закрывается при клике на затемнённую область вокруг формы.
      this._selector.addEventListener('click', (evt) => {
         //тело
      })
   }
   // isLoading //?


   //вот этот комбаин куда запихнуть?
   //все попапы
   // nen либо дербанить этот комбаин, либо его как то вставлять в метод... не понимаю как
   combain() {
      const popups = document.querySelectorAll(".popup")

      //шедевр инженерной мысли закрытия и открытия попапов по кнопке и клику вне окна
      popups.forEach((popup) => {
         popup.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains("popup_opened")) {
               closePopup(popup)
            }
            if (evt.target.classList.contains("popup__close")) {
               closePopup(popup)
            }
         })
      })
   }
}