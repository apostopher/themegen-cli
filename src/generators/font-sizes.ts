import { Scale, GeneratorOptions } from '../types'

function generateFontSize(value: number | string, index: number) {
  return {
    [`f${index}`]: value,
    [`fs${index}`]: { fontSize: value },
  }
}

function generateFontSizes(scale: Scale, options: GeneratorOptions) {
  const { name, values, base } = scale
  const { rem = false } = options
  let scaleStyles: any = {}
  if (rem) {
    const scaleValues = values.map(value => `${value}rem`)
    scaleStyles = scaleValues.map(generateFontSize)
  } else {
    const scaleValues = values.map(value => value * base)
    scaleStyles = scaleValues.map(generateFontSize)
  }
  return {
    name,
    fontSizes: Object.assign({}, ...scaleStyles),
  }
}

export function generateFontSizeThemes(scales: Scale[], options: GeneratorOptions) {
  const fsThemeList = scales.map(scale => generateFontSizes(scale, options))
  return fsThemeList.reduce(
    (prev, { name, fontSizes }) => ({
      ...prev,
      [name]: fontSizes,
    }),
    {},
  )
}
