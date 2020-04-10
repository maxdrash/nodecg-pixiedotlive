import { h } from 'preact'
import { useEffect, useMemo, useRef } from 'preact/hooks'

import 'particles.js'

const config = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ['#7ee6c0', '#48ff9e', '#40de80', '#6dffc5', '#38bf76', '#6cffcd'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.4,
        opacity_min: 0.4,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.4,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.35,
      direction: 'top',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
      },
    },
  },
  retina_detect: true,
}

const Mako = () => {
  const divRef = useRef<HTMLDivElement>()
  const id = useMemo(
    () =>
      `mako-${Math.random()
        .toString(36)
        .substring(2, 15)}`,
    []
  )

  useEffect(() => {
    ;(window as any).particlesJS(divRef.current!.id, config)
  }, [])

  return (
    <div className="c-mako">
      <div className="c-mako__particles" ref={divRef} id={id} />
    </div>
  )
}

export default Mako
