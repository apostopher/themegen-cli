import { KeyValue } from '../types'

export function generateColor(name: string, color: string) {
  return {
    [name]: color,
    [`${name}Text`]: { color },
    [`${name}Fill`]: { backgroundColor: color },
    [`${name}Stroke`]: { borderColor: color },
  }
}

export function generateColorsTheme(colors: KeyValue): KeyValue {
  const colorSpecs = Object.entries(colors)
  const colorStyles = colorSpecs.map(([name, value]) => generateColor(name, value))
  return Object.assign({}, ...colorStyles)
}
