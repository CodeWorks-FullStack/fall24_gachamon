import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";

export class GachamonsController {
  // NOTE constructors for our controller generally run in page load
  constructor() {
    console.log('The gachamons controller is working');
    this.drawGachamons()
  }

  drawGachamons() {
    const gachamons = AppState.gachamons
    let gachamonHTML = ''
    gachamons.forEach(gachamon => gachamonHTML += gachamon.buttonHTMLTemplate)
    const gachamonsButtonsElem = document.getElementById('gachamons-buttons')
    gachamonsButtonsElem.innerHTML = gachamonHTML
  }

  drawActiveGachamon() {
    const gachamon = AppState.activeGachamon
    console.log('active gachamon', gachamon);
    const gachamonDetailsElem = document.getElementById('gachamon-details')
    gachamonDetailsElem.innerHTML = gachamon.cardHTMLTemplate
  }

  setActiveGachamon(gachamonName) {
    console.log('setting active gachamon', gachamonName)
    gachamonsService.setActiveGachamon(gachamonName)
    this.drawActiveGachamon()
  }

  getRandomGachamon() {
    if (AppState.coins < 1) {
      window.alert("Please put a coin into the machine, or pay off your debt")
      return
    }

    gachamonsService.getRandomGachamon()
    this.drawActiveGachamon()
  }
}