import { h } from 'preact'

import OverlayProvider from '../../overlay-provider'

import Scene from '../../components/Scene'
import BRB from '../../scenes/BRB'
import Player from '../../scenes/Player'
import Mako from './components/Mako'

import '../../style/ff7.scss'

const FF7Overlay = () => (
  <OverlayProvider>
    <Scene>
      <Mako />
    </Scene>

    <BRB />
    <Player />
  </OverlayProvider>
)

export default FF7Overlay
