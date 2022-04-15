export class Section {
  constructor(renderer, selector) {
    this._renderer = renderer
    this._container = document.querySelector(selector)
  }

  renderElements(cardInfo) {
    cardInfo.reverse().forEach((card) => {
      this.addItem(this._renderer(card))
    })
  }

  addItem(item) {
    this._container.prepend(item)
  };
}

// это если потеряется https://imgur.com/7Pi60YX