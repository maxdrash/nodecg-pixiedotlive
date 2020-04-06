import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

import 'particles.js'

const config = {
  canvas: {
    w: 1280,
    h: 720,
  },
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    opacity: {
      random: true,
      value: 0.4,
      opacity_min: 0.1,
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 0.3,
      direction: 'top',
      out_mode: 'out',
    },
  },
}

const Mako = () => {
  const divRef = useRef<HTMLDivElement>()

  useEffect(() => {
    ;(window as any).particlesJS(divRef.current!.id, config)
  }, [])

  return <div id="mako" className="c-mako" ref={divRef} />
}

export default Mako
