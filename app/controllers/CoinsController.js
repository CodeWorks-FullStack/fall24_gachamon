import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('The coins controller is working');
  }

  addCoin() {
    console.log('Adding coin!');
    coinsService.addCoin()
    this.drawCoins()
  }

  drawCoins() {
    const coins = AppState.coins

    let coinEmojis = ''
    for (let i = 0; i < coins; i++) {
      coinEmojis += '🪙'
    }

    const coinsElem = document.getElementById('coinsCount')
    coinsElem.innerText = coinEmojis
  }
}