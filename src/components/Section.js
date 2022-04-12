export class Section {
   constructor(renderer, selector) {
      this.renderer = renderer
      this._container = document.querySelector(selector)
      // console.log(this.renderer)
   }

   renderElement(cardInfo, id) {
      // console.log(cardInfo, id) // мы получаем!
      cardInfo.reverse().forEach(cardInfo => {
         this.renderer(cardInfo, id)
      })
   }

   addItem(item) {
      this._container.prepend(item)
   };
}