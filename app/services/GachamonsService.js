import { AppState } from "../AppState.js"

class GachamonsService {
  setActiveGachamon(gachamonName) {
    console.log('finding gachamon with the name of ' + gachamonName);
    const foundGachamon = AppState.gachamons.find(gachamon => gachamon.name == gachamonName)
    console.log('found the gachamon!', foundGachamon);
    AppState.activeGachamon = foundGachamon
  }
}

export const gachamonsService = new GachamonsService()