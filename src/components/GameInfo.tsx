import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import { getGameInfo } from 'nodecg-twitchie-graphics'

const GameInfo: FunctionComponent = () => {
  const game = useSelector(getGameInfo)

  return (
    <div className="c-game-info">
      we're playing <span className="c-game-info__name">{game.name}</span>
    </div>
  )
}

export default GameInfo
