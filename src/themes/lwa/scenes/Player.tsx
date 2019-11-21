import { FunctionComponent, h } from 'preact'

import Chat from '../../../components/Chat'
import CutoutWrapper from '../../../components/CutoutWrapper'
import Scene, { Layer } from '../../../components/Scene'
import { SixteenNineVideoPlaceholder } from '../../../components/VideoPlaceholder'
import NowPlaying from '../components/GameInfo'
import Message from '../components/Message'
import SocialLinks from '../components/SocialLinks'

const Player: FunctionComponent = () => (
  <Scene className="c-player-scene">
    <CutoutWrapper>
      <Layer className="c-clouds c-clouds--back" />

      <Layer className="c-player-scene__body c-player">
        <div className="c-player__spacer">
          <SocialLinks />
        </div>

        <SixteenNineVideoPlaceholder className="c-player__video" />

        <div className="c-player__spacer">
          <NowPlaying />
        </div>
      </Layer>
    </CutoutWrapper>

    <Layer className="c-player-scene__sidebar">
      <Chat messageComponent={Message} />
    </Layer>
  </Scene>
)

export default Player
