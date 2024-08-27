export class Gachamon {
  constructor(name, emoji, rarity) {
    this.name = name
    this.emoji = emoji
    this.rarity = rarity
  }


  get buttonHTMLTemplate() {
    return `
    <button class="btn btn-outline-dark fs-1" title="See details for ${this.name}">
      ${this.emoji}
    </button>
    `
  }

  get cardHTMLTemplate() {
    return `
     <div class="col-12 d-flex justify-content-center">
      <div class="px-5 py-3 gachamon-card">
        <p class="display-1">
          🐘
        </p>
        <p class="fs-1">
          Herbert
        </p>
        <p class="fs-2">
          Ultra-Rare
        </p>
      </div>
    </div>
    `
  }
}