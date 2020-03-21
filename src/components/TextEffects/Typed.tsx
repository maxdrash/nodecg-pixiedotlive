import { FunctionComponent, h } from 'preact'
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks'

const DEFAULT_INTERVAL = 25
const DEFAULT_DELAY = 0

interface TypedProps {
  interval?: number
  delay?: number
  message: string
}

const Typed: FunctionComponent<TypedProps> = ({ interval = DEFAULT_INTERVAL, delay = DEFAULT_DELAY, message }) => {
  const messageArray = useMemo(() => Array.from(message), [message])

  const [characterIndex, setCharacterIndex] = useState<number>(0)
  const lastUpdate = useRef<number>(Date.now())
  const animationTimeout = useRef<number>()
  const animationCallback = useRef<() => void>()

  const typedMessage = useMemo(() => messageArray.slice(0, characterIndex + 1).join(''), [characterIndex, messageArray])

  // @ts-ignore
  animationCallback.current = useCallback(() => {
    if (Date.now() > lastUpdate.current + interval) {
      setCharacterIndex(characterIndex + 1)
      lastUpdate.current = Date.now()
    }

    if (characterIndex < messageArray.length) {
      // @ts-ignore
      animationTimeout.current = requestAnimationFrame(animate)
    }
  }, [characterIndex, messageArray])

  const animate = () => {
    animationCallback.current!()
  }

  useLayoutEffect(() => {
    cancelAnimationFrame(animationTimeout.current!)
    setCharacterIndex(0)
    lastUpdate.current = Date.now() + delay

    // @ts-ignore
    animationTimeout.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationTimeout.current!)
  }, [message])

  return (
    <span className="c-typed-text">
      <span className="c-typed-text__placeholder">{message}</span>
      <span className="c-typed-text__typing">{typedMessage}</span>
    </span>
  )
}

export default Typed
