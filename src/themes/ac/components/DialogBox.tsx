import Color from 'color'
import { FunctionComponent, h } from 'preact'
import { useMemo } from 'preact/hooks'

interface DialogBoxProps {
  name?: string
  colour?: string
}

const useUserColours = (userColour?: string) => {
  if (!userColour) {
    return ['default', 'default']
  }

  const parsedColour = Color(userColour).hsl()
  const hsl = parsedColour.object()
  const normalizedColour = Color({
    ...hsl,
    s: hsl.s > 65 ? 65 : hsl.s,
  })

  const textColour = normalizedColour.isLight()
    ? normalizedColour
        .mix(Color('#000'), 0.7)
        .lighten(0.4)
        .saturate(0.2)
    : normalizedColour.mix(Color('#fff'), 0.6).lighten(0.2)

  return [normalizedColour.hsl().string(), textColour.hsl().string()]
}

const DialogBox: FunctionComponent<DialogBoxProps> = ({ name, colour, children }) => {
  const [bgColour, fgColour] = useMemo(() => useUserColours(colour), [colour])

  return (
    <div className="c-dialog">
      {name && (
        <div className="c-dialog__nameplate">
          <div className="c-nameplate">
            <div className="c-nameplate__bg" style={{ color: bgColour }}>
              <svg className="c-nameplate__bg-end" xmlns="http://www.w3.org/2000/svg">
                <use href="#nameplate-left" />
              </svg>
              <svg className="c-nameplate__bg-middle" xmlns="http://www.w3.org/2000/svg">
                <use href="#nameplate-middle" />
              </svg>
              <svg className="c-nameplate__bg-end" xmlns="http://www.w3.org/2000/svg">
                <use href="#nameplate-right" />
              </svg>
            </div>

            <span style={{ color: fgColour }}>{name}</span>
          </div>
        </div>
      )}

      <div className="c-dialog__message c-message">
        <div className="c-message__bg">
          <svg className="c-message__bg-end" xmlns="http://www.w3.org/2000/svg">
            <use href="#chat-top" />
          </svg>
          <svg className="c-message__bg-middle" xmlns="http://www.w3.org/2000/svg">
            <use href="#chat-middle" />
          </svg>
          <svg className="c-message__bg-end" xmlns="http://www.w3.org/2000/svg">
            <use href="#chat-bottom" />
          </svg>
        </div>

        <div>{children}</div>
      </div>
    </div>
  )
}

export default DialogBox
