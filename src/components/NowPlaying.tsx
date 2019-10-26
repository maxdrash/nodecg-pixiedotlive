import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import { getGameInfo } from 'nodecg-twitchie-graphics'

const NowPlaying: FunctionComponent = () => {
  const game = useSelector(getGameInfo)

  return <div className="c-game-info">{game.name}</div>
}

export default NowPlaying
