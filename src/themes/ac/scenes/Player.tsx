import { FunctionComponent, h } from 'preact'

import Chat from '../../../components/Chat'
import CutoutWrapper from '../../../components/CutoutWrapper'
import Scene, { Layer } from '../../../components/Scene'
import { SixteenNineVideoPlaceholder } from '../../../components/VideoPlaceholder'

import Message from '../components/Message'

import sidebarbg from '../../../assets/themes/ac/sidebar.png'

const Player: FunctionComponent = () => (
  <Scene className="c-player-scene">
    <CutoutWrapper>
      <Layer className="c-player-scene__background" />

      <Layer>
        <img src={sidebarbg} />
      </Layer>

      <Layer className="c-player-scene__body c-player">
        <div className="c-player__spacer"></div>

        <SixteenNineVideoPlaceholder className="c-player__video" />

        <div className="c-player__spacer"></div>
      </Layer>
    </CutoutWrapper>

    <Layer className="c-player-scene__sidebar">
      <Chat messageComponent={Message} />
    </Layer>
  </Scene>
)

export default Player
