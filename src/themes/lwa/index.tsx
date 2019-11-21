import { h } from 'preact'
import OverlayProvider from '../../overlay-provider'

import BRB from './scenes/BRB'
import Player from './scenes/Player'

import '../../style/lwa.scss'

const WitchOverlay = () => (
  <OverlayProvider>
    <BRB />
    <Player />
  </OverlayProvider>
)

export default WitchOverlay
