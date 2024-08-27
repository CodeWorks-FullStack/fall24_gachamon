import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  coins = 0

  /**@type {Gachamon[]}*/
  gachamons = [
    new Gachamon('Dog', '🐈‍⬛', 'uncommon'),
    new Gachamon('Sinbad', '🧞', 'legendary'),
    new Gachamon('Shrimp', '🦐', 'common'),
    new Gachamon('Jeremy', '🫏', 'epic'),
    new Gachamon('Mick', '🦧', 'uncommon'),
    new Gachamon('Oslo', '🦧', 'common'),
    new Gachamon('Cat', '🐈', 'common'),
    new Gachamon('Herbert', '🐘', 'uncommon'),
    new Gachamon('Jake', '🐍', 'epic')
  ]

  // NOTE there will not be an active Gachamon on page load, so it is nothing
  /**@type {Gachamon}*/
  activeGachamon = null

  /**@type {Gachamon[]}*/
  myGachamons = []

}

export const AppState = createObservableProxy(new ObservableAppState())