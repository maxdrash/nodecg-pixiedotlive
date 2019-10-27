import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'
import { useSelector } from 'react-redux'

import { Cutout, getCutout } from 'nodecg-twitchie-graphics'

interface CutoutWrapperProps {
  className?: string
}

const generateClipPath = ({ top = 0, bottom = 0, left = 0, right = 0 }: Cutout) =>
  `polygon(0 0, 0 100%, 100% 100%, 100% 0, 0 0, ${left}px ${top}px, ${right}px ${top}px, ${right}px ${bottom}px, ${left}px ${bottom}px, ${left}px ${top}px)`

const CutoutWrapper: FunctionComponent<CutoutWrapperProps> = ({ className, children }) => {
  const cutout = useSelector(getCutout)

  return (
    <div
      className={classnames('o-scene__layer', className)}
      style={{
        '-webkit-clip-path': generateClipPath(cutout),
      }}
    >
      {children}
    </div>
  )
}

export default CutoutWrapper
