import { h } from 'preact'

import OverlayProvider from '../../overlay-provider'

import BRB from './components/BRB'
import Player from './components/Player'

import '../../style/ff7.scss'

const FF7Overlay = () => (
  <OverlayProvider>
    <BRB />
    <Player />
  </OverlayProvider>
)

export default FF7Overlay
