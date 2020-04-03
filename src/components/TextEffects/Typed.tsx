import classnames from 'classnames'
import { ComponentChildren, FunctionComponent, h, toChildArray } from 'preact'

import useTypingEffect from './utils/useTypingEffect'

interface TypedOptions {
  interval?: number
  delay?: number
}

type TypedMessageProps = TypedOptions & {
  message: string
}

type TypedProps = TypedOptions & {
  children: ComponentChildren
}

const TypedMessage: FunctionComponent<TypedMessageProps> = ({ message, ...props }) => (
  <Typed {...props}>{Array.from(message)}</Typed>
)

const Typed: FunctionComponent<TypedProps> = ({ interval, delay, children }) => {
  const childArray = toChildArray(children)
  const [typingIndex] = useTypingEffect(childArray.length, { interval, delay })

  return (
    <span className="c-typed">
      {childArray.map((child, idx) => (
        <span
          className={classnames('c-typed__token', {
            'c-typed__token--visible': typingIndex >= idx,
          })}
        >
          {child}
        </span>
      ))}
    </span>
  )
}

export { TypedMessage }
export default Typed
