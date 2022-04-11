export class Section {
  constructor(selector) {      
    this._container = document.querySelector(selector);
  }

  renderElement(cardInfo, renderer) {
    this._renderer = renderer;
    cardInfo.reverse().forEach((element) => {
      this._addItem(this._renderer(element))
    });
  };

  _addItem(item) {
    this._container.prepend(item)
  };
};