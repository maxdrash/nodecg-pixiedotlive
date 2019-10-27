import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import { useDispatch } from 'react-redux'

import { Cutout, updateCutoutAction } from 'nodecg-twitchie-graphics/'

const SCALE = {
  square: 1,
  fourThree: 0.75,
  sixteenNine: 0.5625,
  eightSeven: 0.85,
}

interface VideoPlaceholderProps {
  scale: number
  className: string
}

const VideoPlaceholder: FunctionComponent<VideoPlaceholderProps> = ({ scale, className }) => {
  const dispatch = useDispatch()
  const updateCutout = useCallback((cutout: Cutout) => dispatch(updateCutoutAction(cutout)), [dispatch])

  const placeholderRef = useRef<HTMLDivElement>()
  const [placeholderWidth, setWidth] = useState(0)

  useEffect(() => {
    if (!placeholderRef.current) {
      return
    }

    setWidth(placeholderRef.current.offsetWidth)
  })

  useEffect(() => {
    if (!placeholderRef.current) {
      return
    }

    const { top, left, bottom, right, width, height } = placeholderRef.current.getBoundingClientRect()

    updateCutout({
      top,
      left,
      bottom,
      right,
      width,
      height,
    })
  }, [placeholderWidth])

  return (
    <div
      className={classnames('o-spacer', className)}
      ref={placeholderRef}
      style={{
        height: placeholderWidth * scale,
      }}
    >
      &nbsp;
    </div>
  )
}

const SquareVideoPlaceholder = (props: any) => <VideoPlaceholder scale={SCALE.square} {...props} />
const FourThreeVideoPlaceholder = (props: any) => <VideoPlaceholder scale={SCALE.fourThree} {...props} />
const EightSevenVideoPlaceholder = (props: any) => <VideoPlaceholder scale={SCALE.eightSeven} {...props} />
const SixteenNineVideoPlaceholder = (props: any) => <VideoPlaceholder scale={SCALE.sixteenNine} {...props} />

export { SquareVideoPlaceholder, FourThreeVideoPlaceholder, EightSevenVideoPlaceholder, SixteenNineVideoPlaceholder }

export default VideoPlaceholder
