import { Scale } from '../types'

function generateFontSize(value: number, index: number) {
  return {
    [`f${index}`]: value,
    [`fs${index}`]: { fontSize: value },
  }
}

function generateFontSizes(scale: Scale) {
  const { name, values, base } = scale
  const scaleValues = values.map(value => value * base)
  const scaleStyles = scaleValues.map(generateFontSize)
  return {
    name,
    fontSizes: Object.assign({}, ...scaleStyles),
  }
}

export function generateFontSizeThemes(scales: Scale[]) {
  const fsThemeList = scales.map(generateFontSizes)
  return fsThemeList.reduce(
    (prev, { name, fontSizes }) => ({
      ...prev,
      [name]: fontSizes,
    }),
    {},
  )
}
