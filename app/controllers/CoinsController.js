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
    const coinsElem = document.getElementById('coinsCount')
    coinsElem.innerText = coins.toString()
  }
}