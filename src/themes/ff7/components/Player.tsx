import { FunctionComponent, h } from 'preact'

import Chat from '../../../components/Chat'
import CutoutWrapper from '../../../components/CutoutWrapper'
import NowPlaying from '../../../components/GameInfo'
import Scene, { Layer } from '../../../components/Scene'
import SocialLinks from '../../../components/SocialLinks'
import { SixteenNineVideoPlaceholder } from '../../../components/VideoPlaceholder'

import Mako from './Mako'

const Player: FunctionComponent = () => (
  <Scene className="c-player-scene">
    <CutoutWrapper>
      <Layer>
        <Mako />
      </Layer>

      <Layer className="c-player-scene__body c-player">
        <div className="c-player__spacer">
          <SocialLinks />
        </div>

        <SixteenNineVideoPlaceholder className="c-player__video" />

        <div className="c-player__spacer">
          <NowPlaying />
        </div>
      </Layer>

      <Layer className="c-player-scene__sidebar">
        <Chat />
      </Layer>
    </CutoutWrapper>
  </Scene>
)

export default Player
