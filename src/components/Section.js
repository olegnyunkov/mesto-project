export class Section {
   constructor({ items, renderer }, selector) {
      this._cards = items.revers()
      this._renderer = renderer
      this._container = document.querySelector(selector)
   }

   /**
    * карточки першедшие с сервера
    */
   renderElement() {
      //а тут у нас форыч получается
      this._cards.array.forEach(element => {
         this._renderer(element)
      });
   };

   /**
    * карточки пользователя
    */
   addItem(cardElement) {
      this._container.prepend(cardElement)
   };
};