import { h } from 'preact'
import OverlayProvider from '../../overlay-provider'

import BRB from '../../scenes/BRB'
import Player from '../../scenes/Player'

import '../../style/pixie.scss'

const PixieOverlay = () => (
  <OverlayProvider>
    <BRB />
    <Player />
  </OverlayProvider>
)

export default PixieOverlay
