import { AppState } from "../AppState.js"

class GachamonsService {
  getRandomGachamon() {
    if (AppState.coins < 1) {
      window.alert("Please put a coin into the machine, or pay off your debt")
      return
    }

    const gachamons = AppState.gachamons
    const randomIndex = Math.floor(Math.random() * gachamons.length)
    const randomGachamon = gachamons[randomIndex]
    console.log('random gachamon!', randomGachamon);
    AppState.activeGachamon = randomGachamon
    AppState.coins--
    console.log(AppState.coins);

    AppState.myGachamons.push(randomGachamon)
  }
  setActiveGachamon(gachamonName) {
    console.log('finding gachamon with the name of ' + gachamonName);
    const foundGachamon = AppState.gachamons.find(gachamon => gachamon.name == gachamonName)
    console.log('found the gachamon!', foundGachamon);
    AppState.activeGachamon = foundGachamon
  }
}

export const gachamonsService = new GachamonsService()