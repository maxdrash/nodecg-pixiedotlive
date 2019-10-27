import { FunctionComponent, h } from 'preact'

import CutoutWrapper from '../components/CutoutWrapper'
import NowPlaying from '../components/GameInfo'
import Scene from '../components/Scene'
import SocialLinks from '../components/SocialLinks'
import { SixteenNineVideoPlaceholder } from '../components/VideoPlaceholder'

const Player: FunctionComponent = () => (
  <Scene className="c-player-scene">
    <CutoutWrapper>
      <div className="o-scene__layer" style={{ background: 'black' }} />

      <div className="c-player-scene__body c-player">
        <div className="c-player__spacer">
          <SocialLinks />
        </div>
        <SixteenNineVideoPlaceholder className="c-player__video" />
        <div className="c-player__spacer">
          <NowPlaying />
        </div>
      </div>
    </CutoutWrapper>
  </Scene>
)

export default Player
