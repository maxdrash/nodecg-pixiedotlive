import { getBRB } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import Scene, { Layer } from '../../../components/Scene'
import Wiggle from '../../../components/TextEffects/Wiggle'

import dani from '../../../assets/themes/lwa/dani.png'
import logo from '../../../assets/themes/lwa/little-witch-academia-logo.png'
import yen from '../../../assets/themes/lwa/yen.png'

const BRB: FunctionComponent = () => {
  const brbStatus = useSelector(getBRB)

  return (
    <Scene showWhenAway className="c-brb-scene">
      <Layer className="c-clouds c-clouds--back" />
      <Layer className="c-clouds c-clouds--middle" />
      <Layer className="c-clouds c-clouds--front" />

      <Layer className="c-brb__text">
        <img src={logo} className="c-brb__logo" />
        <div className="c-brb__message">
          <Wiggle text={brbStatus.message} />
        </div>
      </Layer>

      <img className="c-witch c-witch--dani" src={dani} />
      <img className="c-witch c-witch--yen" src={yen} />
    </Scene>
  )
}

export default BRB
