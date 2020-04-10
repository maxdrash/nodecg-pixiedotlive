import { BRBStatus } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import Scene, { Layer } from '../../../components/Scene'

import facility from '../../../assets/themes/ff7/bg-facility.png'
import glow from '../../../assets/themes/ff7/bg-glow.png'
import logo from '../../../assets/themes/ff7/bg-logo.png'
import squad from '../../../assets/themes/ff7/bg-squad.png'

import Mako from '../components/Mako'

const BRB: FunctionComponent = () => {
  const brbStatus: BRBStatus = useSelector((state: any) => state.brb)

  return (
    <Scene showWhenAway className="c-brb-scene">
      <Layer>
        <img src={facility} />
      </Layer>
      <Layer>
        <img src={glow} />
      </Layer>
      <Layer>
        <Mako />
      </Layer>
      <Layer>
        <img src={squad} />
      </Layer>
      <Layer>
        <img src={logo} />
      </Layer>
      <Layer className="c-brb-scene__message">
        <div className="c-dialog">
          <div className="c-dialog__nameplate">Dani</div>
          <div className="c-dialog__divider"></div>
          <div className="c-dialog__message">{brbStatus.message}</div>
        </div>
      </Layer>
    </Scene>
  )
}

export default BRB
