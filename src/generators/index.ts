import * as fs from 'fs'

import has from 'lodash/has'
import isString from 'lodash/isString'
import upperFirst from 'lodash/upperFirst'

import { colorPresets, scalePresets } from '../presets'
import { ThemeConfig, Scale, ScaleConfig, KeyValue } from '../types'

import { generateColorsTheme } from './colors'
import { generateFlexboxStyles } from './flexbox'
import { generateFontSizesTheme } from './font-sizes'
import { generateSizesTheme } from './sizes'
import { generateSpacesTheme } from './spaces'

function resolveScale(scale: ScaleConfig | undefined): Scale | undefined {
  if (!scale) return
  if (isString(scale.scale)) {
    const name = scale.scale
    return has(scalePresets, name) ? { ...scale, scale: scalePresets[name] } : undefined
  }
  return scale as Scale
}

function resolveColors(colors: KeyValue | string | undefined): KeyValue | undefined {
  if (!colors) return
  if (isString(colors)) {
    return has(colorPresets, colors) ? colorPresets[colors] : undefined
  }
  return colors
}

// eslint-disable-next-line complexity
export function generate({
  name = 'theme',
  colors,
  spaces,
  fontSizes,
  sizes,
  typescript = false,
  rem = false,
}: ThemeConfig) {
  const flexboxStyles = generateFlexboxStyles()
  const colorsConfig = resolveColors(colors)
  const spacesConfig = resolveScale(spaces)
  const fontSizesConfig = resolveScale(fontSizes)
  const sizesConfig = resolveScale(sizes)
  const colorTheme = colorsConfig ? generateColorsTheme(colorsConfig) : null
  const spaceTheme = spacesConfig ? generateSpacesTheme(spacesConfig, { rem }) : null
  const fsTheme = fontSizesConfig ? generateFontSizesTheme(fontSizesConfig, { rem }) : null
  const sizeTheme = generateSizesTheme(sizesConfig, { rem })

  const codeBlocks: string[] = []
  const themeBlocks: string[] = []
  // Get Flexbox source code
  let flexboxCode = `export const flexbox = ${JSON.stringify(flexboxStyles, null, 2)}${typescript ? ' as const' : ''}`
  if (typescript) flexboxCode += `\nexport type Flexbox = typeof flexbox`
  codeBlocks.push(flexboxCode)
  themeBlocks.push('...flexbox')

  // Get colors source code
  let colorsCode
  if (colorTheme) {
    colorsCode = `export const themeColors = ${JSON.stringify(colorTheme, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) colorsCode += `\nexport type ThemeColors = typeof themeColors`
    codeBlocks.push(colorsCode)
    themeBlocks.push('...themeColors')
  }

  // get space source code
  let spacesCode
  if (spaceTheme) {
    spacesCode = `export const themeSpaces = ${JSON.stringify(spaceTheme, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) spacesCode += `\nexport type ThemeSpaces = typeof themeSpaces`
    codeBlocks.push(spacesCode)
    themeBlocks.push('...themeSpaces')
  }

  // get font size source code
  let fsCode
  if (fsTheme) {
    fsCode = `export const themeFontSizes = ${JSON.stringify(fsTheme, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) fsCode += `\nexport type ThemeFontSizes = typeof themeFontSizes`
    codeBlocks.push(fsCode)
    themeBlocks.push('...themeFontSizes')
  }

  // get font size source code
  let sizeCode
  if (sizeTheme) {
    sizeCode = `export const themeSizes = ${JSON.stringify(sizeTheme, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) sizeCode += `\nexport type ThemeSizes = typeof themeSizes`
    codeBlocks.push(sizeCode)
    themeBlocks.push('...themeSizes')
  }

  const themeName = name === '' ? 'theme' : `${name}Theme`
  let themeBlock = `export const ${themeName} = { name: '${name || 'theme'}', ${themeBlocks.join(', ')}}${
    typescript ? ' as const' : ''
  }`
  if (typescript) themeBlock += `\nexport type ${upperFirst(themeName)} = typeof ${themeName}`
  codeBlocks.push(themeBlock)

  const themesCode = codeBlocks.join('\n\n')
  const fileName = name === '' ? 'theme' : `${name}-theme`
  fs.writeFileSync(`${fileName}.${typescript ? 'ts' : 'js'}`, themesCode, { encoding: 'utf8' })
}
