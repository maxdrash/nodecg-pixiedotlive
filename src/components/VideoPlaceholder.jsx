import { Component, h } from 'preact'
import { connect } from 'react-redux'

import { updateCutoutAction } from 'nodecg-twitchie-graphics/'

const SCALE = {
  square: 1,
  fourThree: 0.75,
  sixteenNine: 0.5625,
  eightSeven: 0.85,
}

interface VideoPlaceholderProps {
  scale: number
  updateCutout: typeof updateCutoutAction
}

interface VideoPlaceholderState {
  width: number
}

/* tslint: disable */

class VideoPlaceholder extends Component<VideoPlaceholderProps, VideoPlaceholderState> {
  constructor(props: VideoPlaceholderProps) {
    super(props)

    this.state = {
      width: 0,
    }
  }

  public componentDidMount() {
    const { updateCutout } = this.props

    window.requestAnimationFrame(() => {
      this.setState({
        width: this.$spacer.offsetWidth,
      })

      window.requestAnimationFrame(() => {
        const { top, left, bottom, right, width, height } = this.$spacer.getBoundingClientRect()

        updateCutout({
          top,
          left,
          bottom,
          right,
          width,
          height,
        })
      })
    })
  }

  public render() {
    const { scale } = this.props
    const { width } = this.state

    return (
      <div
        className="spacer"
        ref={spacer => {
          this.$spacer = spacer
        }}
        style={{
          height: width * scale,
        }}
      >
        &nbsp;
      </div>
    )
  }
}

VideoPlaceholder.defaultProps = {
  scale: SCALE.sixteenNine,
}

const ConnectedVideoPlaceholder = connect(
  null,
  {
    updateCutout: updateCutoutAction,
  }
)(VideoPlaceholder)

const SquareVideoPlaceholder = () => <ConnectedVideoPlaceholder scale={SCALE.square} />
const FourThreeVideoPlaceholder = () => <ConnectedVideoPlaceholder scale={SCALE.fourThree} />
const EightSevenVideoPlaceholder = () => <ConnectedVideoPlaceholder scale={SCALE.eightSeven} />

export { SquareVideoPlaceholder, FourThreeVideoPlaceholder, EightSevenVideoPlaceholder }

export default ConnectedVideoPlaceholder
