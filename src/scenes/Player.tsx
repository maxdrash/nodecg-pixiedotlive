import { FunctionComponent, h } from 'preact'

import CutoutWrapper from '../components/CutoutWrapper'
import Scene from '../components/Scene'
import { SixteenNineVideoPlaceholder } from '../components/VideoPlaceholder'

const Player: FunctionComponent = () => (
  <Scene className="c-player-scene">
    <CutoutWrapper>
      <div className="o-scene__layer" style={{ background: 'black' }} />
      <div className="c-player-scene__body">
        <header>dani!</header>
        <SixteenNineVideoPlaceholder />
        <footer>now playing!</footer>
      </div>
    </CutoutWrapper>
  </Scene>
)

export default Player
