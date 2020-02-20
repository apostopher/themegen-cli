import flatten from 'lodash/flatten'

import { Scale, GeneratorOptions } from '../types'

const percentWidths = {
  wp0: { width: '0%' },
  wp10: { width: '10%' },
  wp20: { width: '20%' },
  wp30: { width: '30%' },
  wp40: { width: '40%' },
  wp50: { width: '50%' },
  wp60: { width: '60%' },
  wp70: { width: '70%' },
  wp80: { width: '80%' },
  wp90: { width: '90%' },
  wp100: { width: '100%' },
}

const percentHeights = {
  hp0: { height: '0%' },
  hp10: { height: '10%' },
  hp20: { height: '20%' },
  hp30: { height: '30%' },
  hp40: { height: '40%' },
  hp50: { height: '50%' },
  hp60: { height: '60%' },
  hp70: { height: '70%' },
  hp80: { height: '80%' },
  hp90: { height: '90%' },
  hp100: { height: '100%' },
}

function generateWidthSize(value: number | string, index: number) {
  return {
    [`w${index}`]: { width: value },
  }
}

function generateHeightSize(value: number | string, index: number) {
  return {
    [`h${index}`]: { height: value },
  }
}

const defaultScale = { base: 16, values: [0, 1, 2, 4, 8, 16] }
export function generateSizesTheme(scale: Scale = defaultScale, options: GeneratorOptions) {
  const { values } = scale
  const { rem = false } = options
  let scaleStyles: any = []
  if (rem) {
    const scaleValues = values.map(value => `${value}rem`)
    scaleStyles = [scaleValues.map(generateWidthSize), scaleValues.map(generateHeightSize)]
  }
  return Object.assign({}, ...flatten([percentWidths, percentHeights, ...scaleStyles]))
}
