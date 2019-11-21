import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'
import { useMemo } from 'preact/hooks'
import { useSelector } from 'react-redux'

import { getBRB } from 'nodecg-twitchie-graphics'

interface SceneProps {
  hideWhenAway?: boolean
  showWhenAway?: boolean
  className?: string
}

interface LayerProps {
  style?: Record<string, string>
  className?: string
}

const Scene: FunctionComponent<SceneProps> = ({ className, hideWhenAway, showWhenAway, children }) => {
  const brb = useSelector(getBRB)

  const isVisible = useMemo(() => {
    if (showWhenAway) {
      return brb.away
    }

    if (hideWhenAway) {
      return !brb.away
    }

    return true
  }, [brb])

  return (
    <div
      className={classnames('o-scene', className, {
        'is-visible': isVisible,
      })}
    >
      {children}
    </div>
  )
}

const Layer: FunctionComponent<LayerProps> = ({ style, className, children }) => (
  <div style={style} className={classnames('o-scene__layer', className)}>
    {children}
  </div>
)

export { Layer }
export default Scene
