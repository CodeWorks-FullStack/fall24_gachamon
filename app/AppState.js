import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  coins = 0

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

}

export const AppState = createObservableProxy(new ObservableAppState())