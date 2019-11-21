import { FunctionComponent, h } from 'preact'

import Scene, { Layer } from '../../../components/Scene'

import dani from '../../../assets/themes/bloodstained/dani.webm'
import logo from '../../../assets/themes/bloodstained/logo.png'

const BRB: FunctionComponent = () => (
  <Scene showWhenAway className="c-brb-scene">
    <Layer className="c-brb-scene__background" />

    <Layer className="c-brb-scene__logo">
      <img src={logo} className="c-logo" />
    </Layer>

    <Layer className="c-brb-scene__dani">
      <video autoPlay muted loop className="c-dani">
        <source src={dani} type="video/webm" />
      </video>
    </Layer>
  </Scene>
)

export default BRB
