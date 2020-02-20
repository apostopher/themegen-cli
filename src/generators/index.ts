import * as fs from 'fs'

import upperFirst from 'lodash/upperFirst'

import { ThemeConfig } from '../types'

import { generateColorsTheme } from './colors'
import { generateFlexboxStyles } from './flexbox'
import { generateFontSizesTheme } from './font-sizes'
import { generateSpacesTheme } from './spaces'

export function generate({ name = 'theme', colors, spaces, fontSizes, typescript = false, rem = false }: ThemeConfig) {
  const flexboxStyles = generateFlexboxStyles()
  const colorThemes = colors ? generateColorsTheme(colors) : null
  const spaceThemes = spaces ? generateSpacesTheme(spaces, { rem }) : null
  const fsThemes = fontSizes ? generateFontSizesTheme(fontSizes, { rem }) : null

  const codeBlocks: string[] = []
  const themeBlocks: string[] = []
  // Get Flexbox source code
  let flexboxCode = `export const flexbox = ${JSON.stringify(flexboxStyles, null, 2)}${typescript ? ' as const' : ''}`
  if (typescript) flexboxCode += `\nexport type Flexbox = typeof flexbox`
  codeBlocks.push(flexboxCode)
  themeBlocks.push('...flexbox')

  // Get colors source code
  let colorsCode
  if (colorThemes) {
    colorsCode = `export const themeColors = ${JSON.stringify(colorThemes, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) colorsCode += `\nexport type ThemeColors = typeof themeColors`
    codeBlocks.push(colorsCode)
    themeBlocks.push('...themeColors')
  }

  // get space source code
  let spacesCode
  if (spaceThemes) {
    spacesCode = `export const themeSpaces = ${JSON.stringify(spaceThemes, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) spacesCode += `\nexport type ThemeSpaces = typeof themeSpaces`
    codeBlocks.push(spacesCode)
    themeBlocks.push('...themeSpaces')
  }

  // get font size source code
  let fsCode
  if (fsThemes) {
    fsCode = `export const themeFontSizes = ${JSON.stringify(fsThemes, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) fsCode += `\nexport type ThemeFontSizes = typeof themeFontSizes`
    codeBlocks.push(fsCode)
    themeBlocks.push('...themeFontSizes')
  }
  const themeName = `${name}Theme`
  let themeBlock = `export const ${themeName} = {${themeBlocks.join(', ')}}${typescript ? ' as const' : ''}`
  if (typescript) themeBlock += `\nexport type ${upperFirst(themeName)} = typeof ${themeName}`
  codeBlocks.push(themeBlock)

  const themesCode = codeBlocks.join('\n\n')
  fs.writeFileSync(`${name}-theme.${typescript ? 'ts' : 'js'}`, themesCode, { encoding: 'utf8' })
}
