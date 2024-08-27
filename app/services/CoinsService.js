import { AppState } from "../AppState.js"

class CoinsService {
  addCoin() {
    AppState.coins++
    console.log('Coins go up!', AppState.coins)
  }
}

// singleton
export const coinsService = new CoinsService() 