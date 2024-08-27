import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('The coins controller is working');
    // 💂‍♀️ --------> AppState.coins
    // 💂‍♀️ AppState.coins++ / AppState.coins--
    // 💂‍♀️ !!!!!!! this.drawCoins()
    AppState.on('coins', this.drawCoins)
  }

  addCoin() {
    console.log('Adding coin!');
    coinsService.addCoin()
    // this.drawCoins() listener will handle draw for us now
  }

  drawCoins() {
    console.log('drawing coins!');

    const coins = AppState.coins

    let coinEmojis = ''
    for (let i = 0; i < coins; i++) {
      coinEmojis += '🪙'
    }

    const coinsElem = document.getElementById('coinsCount')
    coinsElem.innerText = coinEmojis
  }
}