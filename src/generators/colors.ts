import { KeyValue, ColorTheme } from '../types'

export function generateColor(name: string, color: string) {
  return {
    [name]: color,
    [`${name}Text`]: { color },
    [`${name}Fill`]: { backgroundColor: color },
    [`${name}Stroke`]: { borderColor: color },
  }
}

function generateColors(colors: KeyValue): KeyValue {
  const colorSpecs = Object.entries(colors)
  const colorStyles = colorSpecs.map(([name, value]) => generateColor(name, value))
  return Object.assign({}, ...colorStyles)
}

export function generateColorThemes(colors: ColorTheme[]) {
  const colorThemeList = colors.map(({ name, colors }) => ({ name, colors: generateColors(colors) }))
  return colorThemeList.reduce(
    (prev, { name, colors }) => ({
      ...prev,
      [name]: colors,
    }),
    {},
  )
}
