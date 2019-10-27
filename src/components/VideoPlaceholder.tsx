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
}

const VideoPlaceholder: FunctionComponent<VideoPlaceholderProps> = ({ scale }) => {
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
      className="spacer"
      ref={placeholderRef}
      style={{
        height: placeholderWidth * scale,
      }}
    >
      &nbsp;
    </div>
  )
}

const SquareVideoPlaceholder = () => <VideoPlaceholder scale={SCALE.square} />
const FourThreeVideoPlaceholder = () => <VideoPlaceholder scale={SCALE.fourThree} />
const EightSevenVideoPlaceholder = () => <VideoPlaceholder scale={SCALE.eightSeven} />
const SixteenNineVideoPlaceholder = () => <VideoPlaceholder scale={SCALE.sixteenNine} />

export { SquareVideoPlaceholder, FourThreeVideoPlaceholder, EightSevenVideoPlaceholder, SixteenNineVideoPlaceholder }

export default VideoPlaceholder
