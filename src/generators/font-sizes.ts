import { Scale, GeneratorOptions } from '../types'

function generateFontSize(value: number | string, index: number) {
  return {
    [`f${index}`]: value,
    [`fs${index}`]: { fontSize: value },
  }
}

export function generateFontSizesTheme(scale: Scale, options: GeneratorOptions) {
  const { values, base } = scale
  const { rem = false } = options
  let scaleStyles: any = {}
  if (rem) {
    const scaleValues = values.map(value => `${value}rem`)
    scaleStyles = scaleValues.map(generateFontSize)
  } else {
    const scaleValues = values.map(value => value * base)
    scaleStyles = scaleValues.map(generateFontSize)
  }
  return Object.assign({}, ...scaleStyles)
}
