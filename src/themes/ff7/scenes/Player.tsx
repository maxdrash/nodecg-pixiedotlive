import { FunctionComponent, h } from 'preact'

import Chat from '../../../components/Chat'
import CutoutWrapper from '../../../components/CutoutWrapper'
import Scene, { Layer } from '../../../components/Scene'
import SocialLinks from '../../../components/SocialLinks'
import { SixteenNineVideoPlaceholder } from '../../../components/VideoPlaceholder'

import status from '../../../assets/themes/ff7/bg-status.png'
import mako from '../../../assets/themes/ff7/mako.mp4'

const Player: FunctionComponent = () => (
  <Scene className="c-player-scene">
    <CutoutWrapper>
      <Layer className="c-player-scene__background">
        <video autoPlay muted loop className="c-dani">
          <source src={mako} type="video/mp4" />
        </video>
      </Layer>

      <Layer>
        <img src={status} />
      </Layer>

      <Layer className="c-player-scene__body c-player">
        <div className="c-player__spacer">
          <SocialLinks />
        </div>

        <SixteenNineVideoPlaceholder className="c-player__video" />

        <div className="c-player__spacer"></div>
      </Layer>
    </CutoutWrapper>

    <Layer className="c-player-scene__sidebar">
      <Chat />
    </Layer>
  </Scene>
)

export default Player
