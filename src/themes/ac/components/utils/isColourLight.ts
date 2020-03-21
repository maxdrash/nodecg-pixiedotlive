function hexToRgb(hexCode: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

  const longHex = hexCode.replace(
    shorthandRegex,
    (_: any, r: string, g: string, b: string) => `${r}${r}${g}${g}${b}${b}`
  )

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(longHex)

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const getLuminance = (r: number, g: number, b: number) => 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255

const isColourLight = (hexCode: string) => {
  const rgb = hexToRgb(hexCode)

  if (!rgb) {
    return true
  }

  const { r, g, b } = rgb
  const luminance = getLuminance(r, g, b)

  return luminance < 0.5
}

export default isColourLight
