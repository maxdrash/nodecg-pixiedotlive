import { h } from 'preact'
import OverlayProvider from '../../overlay-provider'

import BRB from '../../scenes/BRB'
import Player from '../../scenes/Player'
import Scene, { Layer } from '../../components/Scene'

import '../../style/ff7.scss'

const FF7Overlay = () => (
  <OverlayProvider>
    <Scene>
      <Layer className="c-mako" />
    </Scene>

    <BRB />
    <Player />
  </OverlayProvider>
)

export default FF7Overlay
