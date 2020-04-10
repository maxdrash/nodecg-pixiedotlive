import { BRBStatus } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import Scene, { Layer } from '../../../components/Scene'

import box from '../../../assets/themes/bloodstained/brb-ui.png'
import dani from '../../../assets/themes/bloodstained/dani-2.webm'

const BRB: FunctionComponent = () => {
  const brbStatus: BRBStatus = useSelector((state: any) => state.brb)

  return (
    <Scene showWhenAway className="c-brb-scene">
      <Layer className="c-brb-scene__background" />

      <Layer>
        <img src={box} />
      </Layer>

      <Layer>
        <div className="c-brb-scene__message">{brbStatus.message}</div>
      </Layer>

      <Layer className="c-brb-scene__dani">
        <video autoPlay muted loop className="c-dani">
          <source src={dani} type="video/webm" />
        </video>
      </Layer>
    </Scene>
  )
}

export default BRB
