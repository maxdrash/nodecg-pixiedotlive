import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

import 'particles.js'

const config = {
  particles: {
    number: {
      value: 180,
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
      value: 0.75,
      random: true,
      anim: {
        enable: true,
        speed: 0.33,
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

  useEffect(() => {
    ;(window as any).particlesJS(divRef.current!.id, config)
  }, [])

  return (
    <div className="c-mako">
      <div className="c-mako__particles" ref={divRef} id="mako" />
    </div>
  )
}

export default Mako
