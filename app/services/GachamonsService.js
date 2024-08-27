import { AppState } from "../AppState.js"

class GachamonsService {
  getRandomGachamon() {
    const gachamons = AppState.gachamons
    const randomIndex = Math.floor(Math.random() * gachamons.length)
    const randomGachamon = gachamons[randomIndex]
    console.log('random gachamon!', randomGachamon);
    AppState.activeGachamon = randomGachamon
    AppState.coins--
    console.log(AppState.coins);
  }
  setActiveGachamon(gachamonName) {
    console.log('finding gachamon with the name of ' + gachamonName);
    const foundGachamon = AppState.gachamons.find(gachamon => gachamon.name == gachamonName)
    console.log('found the gachamon!', foundGachamon);
    AppState.activeGachamon = foundGachamon
  }
}

export const gachamonsService = new GachamonsService()