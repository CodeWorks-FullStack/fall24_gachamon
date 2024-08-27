export class Gachamon {
  constructor(name, emoji, rarity) {
    this.name = name
    this.emoji = emoji
    this.rarity = rarity
  }


  get buttonHTMLTemplate() {
    return `
    <button onclick="app.GachamonsController.setActiveGachamon('${this.name}')" class="btn btn-outline-dark fs-1" title="See details for ${this.name}">
      ${this.emoji}
    </button>
    `
  }

  get cardHTMLTemplate() {
    return /*html*/`
     <div class="col-12 d-flex justify-content-center">
      <div class="px-5 py-3 gachamon-card text-center">
        <p class="display-1">
          ${this.emoji}
        </p>
        <p class="fs-1">
          ${this.name}
        </p>
        <p class="fs-2">
          ${this.rarity}
        </p>
      </div>
    </div>
    `
  }
}