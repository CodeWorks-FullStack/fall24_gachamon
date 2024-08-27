import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('The coins controller is working');
  }

  addCoin() {
    console.log('Adding coin!');
    coinsService.addCoin()
  }
}