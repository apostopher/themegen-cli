import { Scale } from '../types'

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

function generateSpaces(scale: Scale) {
  const { name, values, base } = scale
  const scaleValues = values.map(value => value * base)
  const scaleStyles = scaleValues.map(generateSpace)
  return {
    name,
    spaces: Object.assign({}, ...scaleStyles),
  }
}

export function generateSpaceThemes(scales: Scale[]) {
  const spaceThemeList = scales.map(generateSpaces)
  return spaceThemeList.reduce(
    (prev, { name, spaces }) => ({
      ...prev,
      [name]: spaces,
    }),
    {},
  )
}
