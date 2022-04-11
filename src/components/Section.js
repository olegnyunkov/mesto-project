export class Section {
   constructor(selector) {
      
      // this._renderer = renderer;
      this._container = document.querySelector(selector);
   }

   // renderElement(cardInfo) {
   //    cardInfo.reverse().forEach((element) => {
   //       this.addItem(this._renderer(element))
   //    });
   // };

   addItem(item) {
      this._container.prepend(item)
   };
};