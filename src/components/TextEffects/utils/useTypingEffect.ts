import { useCallback, useLayoutEffect, useRef, useState } from 'preact/hooks'

const DEFAULT_INTERVAL = 25
const DEFAULT_DELAY = 0

interface UseTypingEffectOptions {
  interval?: number
  delay?: number
}

const useTypingEffect = (
  effectLength: number,
  { interval = DEFAULT_INTERVAL, delay = DEFAULT_DELAY }: UseTypingEffectOptions
) => {
  const [childIndex, setChildIndex] = useState<number>(0)
  const lastUpdate = useRef<number>(Date.now())
  const animationTimeout = useRef<number>()
  const animationCallback = useRef<() => void>()

  // @ts-ignore
  animationCallback.current = useCallback(() => {
    if (Date.now() > lastUpdate.current + interval) {
      setChildIndex(childIndex + 1)
      lastUpdate.current = Date.now()
    }

    if (childIndex < effectLength) {
      // @ts-ignore
      animationTimeout.current = requestAnimationFrame(animate)
    }
  }, [childIndex, effectLength])

  const animate = useCallback(() => {
    animationCallback.current!()
  }, [])

  const cancelAnimate = useCallback(() => {
    cancelAnimationFrame(animationTimeout.current!)
  }, [])

  useLayoutEffect(() => {
    cancelAnimate()

    setChildIndex(0)
    lastUpdate.current = Date.now() + delay

    // @ts-ignore
    animationTimeout.current = requestAnimationFrame(animate)

    return cancelAnimate
  }, [effectLength])

  return [childIndex, cancelAnimate] as [number, () => void]
}

export default useTypingEffect
