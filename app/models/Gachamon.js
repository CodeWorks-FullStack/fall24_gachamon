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
}