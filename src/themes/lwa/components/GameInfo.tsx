import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import { getGameInfo } from 'nodecg-twitchie-graphics'

import WiggleText from './WiggleText'

const GameInfo: FunctionComponent = () => {
  const game = useSelector(getGameInfo)

  return (
    <div className="c-game-info">
      we're playing <WiggleText className="c-game-info__name" text={game.name} />
    </div>
  )
}

export default GameInfo
