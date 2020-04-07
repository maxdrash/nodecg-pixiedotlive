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
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#7ee6c0',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#7ee6c0',
      },
    },
    opacity: {
      value: 0.75,
      random: true,
      anim: {
        enable: true,
        speed: 0.25,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 9,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: false,
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

  useEffect(() => {
    ;(window as any).particlesJS(divRef.current!.id, config)
  }, [])

  return <div id="mako" className="c-mako" ref={divRef} />
}

export default Mako
