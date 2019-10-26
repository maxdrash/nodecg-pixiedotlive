import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import { getCutout } from 'nodecg-twitchie-graphics'

const generateClipPath = ({ top = '0', bottom = '100%', left = '0', right = '100%' } = {}) =>
  `polygon(0 0, 0 100%, 100% 100%, 100% 0, 0 0, ${left}px ${top}px, ${right}px ${top}px, ${right}px ${bottom}px, ${left}px ${bottom}px, ${left}px ${top}px)`

const CutoutWrapper: FunctionComponent = ({ children }) => {
  const cutout = useSelector(getCutout)

  return (
    <div
      className="layer"
      style={{
        '-webkit-clip-path': generateClipPath(cutout),
      }}
    >
      {children}
    </div>
  )
}

export default CutoutWrapper
