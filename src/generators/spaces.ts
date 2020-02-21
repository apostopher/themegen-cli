import { Scale, GeneratorOptions } from '../types'

function generateSpace(value: number | string, index: number) {
  const padding = {
    [`pa${index}`]: { paddingLeft: value, paddingTop: value, paddingRight: value, paddingBottom: value },
    [`ph${index}`]: { paddingLeft: value, paddingRight: value },
    [`pv${index}`]: { paddingTop: value, paddingBottom: value },
    [`pl${index}`]: { paddingLeft: value },
    [`pt${index}`]: { paddingTop: value },
    [`pr${index}`]: { paddingRight: value },
    [`pb${index}`]: { paddingBottom: value },
  }
  const margin = {
    [`ma${index}`]: { marginLeft: value, marginTop: value, marginRight: value, marginBottom: value },
    [`mh${index}`]: { marginLeft: value, marginRight: value },
    [`mv${index}`]: { marginTop: value, marginBottom: value },
    [`ml${index}`]: { marginLeft: value },
    [`mt${index}`]: { marginTop: value },
    [`mr${index}`]: { marginRight: value },
    [`mb${index}`]: { marginBottom: value },
  }
  return { ...padding, ...margin }
}

export function generateSpacesTheme(scale: Scale, options: GeneratorOptions) {
  const { scale: values, base } = scale
  const { rem = false } = options
  let scaleStyles: any = {}
  if (rem) {
    const scaleValues = values.map(value => `${value}rem`)
    scaleStyles = scaleValues.map(generateSpace)
  } else {
    const scaleValues = values.map(value => value * base)
    scaleStyles = scaleValues.map(generateSpace)
  }
  return Object.assign({}, ...scaleStyles)
}
