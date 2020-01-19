import { FunctionComponent, h } from 'preact'

import Chat from '../../../components/Chat'
import CutoutWrapper from '../../../components/CutoutWrapper'
import Scene, { Layer } from '../../../components/Scene'
import { SixteenNineVideoPlaceholder } from '../../../components/VideoPlaceholder'

import status from '../../../assets/themes/bloodstained/status.png'

const Player: FunctionComponent = () => (
  <Scene className="c-player-scene">
    <CutoutWrapper>
      <Layer className="c-player-scene__background">
        <div className="c-petals">
          <div className="c-petals__layer c-petals__layer--back" />
          <div className="c-petals__layer c-petals__layer--middle" />
          <div className="c-petals__layer c-petals__layer--front" />
        </div>
      </Layer>

      <Layer className="c-player-scene__body c-player">
        <div className="c-player__spacer"></div>
        <SixteenNineVideoPlaceholder className="c-player__video" />

        <div className="c-player__spacer"></div>
      </Layer>
    </CutoutWrapper>

    <Layer className="c-player-scene__body c-player">
      <div className="c-social-status">
        <img className="c-social-status__background" src={status} />
      </div>
    </Layer>

    <Layer className="c-player-scene__sidebar">
      <Chat />
    </Layer>
  </Scene>
)

export default Player
