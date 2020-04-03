import classnames from 'classnames'
import { h } from 'preact'
import { PureComponent } from 'preact/compat'

interface WiggleProps {
  text?: string
  className?: string
}

const random = (min: number, max: number) => (Math.random() * (min - max) + max).toFixed(2)

class Wiggle extends PureComponent<WiggleProps> {
  public render() {
    const { text, className } = this.props

    if (!text) {
      return null
    }

    const characters = text.split('')

    return (
      <span className={classnames('c-wiggle-text', className)}>
        {characters.map(character => (
          <span
            style={{
              transform: `rotate(${random(-3, 3)}deg) translateY(${random(-0.03, 0.03)}em)`,
            }}
            className={classnames('c-wiggle-text__letter', {
              'c-wiggle-text__spacer': character === ' ',
            })}
          >
            {character}
          </span>
        ))}
      </span>
    )
  }
}

export default Wiggle
