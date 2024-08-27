import { router } from './router-config.js';
import { CoinsController } from './controllers/CoinsController.js';
import { GachamonsController } from './controllers/GachamonsController.js';
const USE_ROUTER = false

class App {
  CoinsController = new CoinsController()
  GachamonsController = new GachamonsController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
