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


  setActiveGachamon(gachamonName) {
    console.log('setting active gachamon', gachamonName)
    gachamonsService.setActiveGachamon(gachamonName)
  }
}