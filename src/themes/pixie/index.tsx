import { h } from 'preact'
import OverlayProvider from '../../overlay-provider'

import './pixie.scss'

const PixieOverlay = () => (
  <OverlayProvider>
    <div>hello :)</div>
  </OverlayProvider>
)

export default PixieOverlay
