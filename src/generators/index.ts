import * as fs from 'fs'

import { Config } from '../types'

import { generateColorThemes } from './colors'
import { generateFlexboxStyles } from './flexbox'
import { generateFontSizeThemes } from './font-sizes'
import { generateSpaceThemes } from './spaces'

export function generate({ colors, spaces, fontSizes, typescript = false, rem = false }: Config) {
  const flexboxStyles = generateFlexboxStyles()
  const colorThemes = colors ? generateColorThemes(colors) : null
  const spaceThemes = spaces ? generateSpaceThemes(spaces, { rem }) : null
  const fsThemes = fontSizes ? generateFontSizeThemes(fontSizes, { rem }) : null

  // Get Flexbox source code
  const flexboxCode = `export const flexbox = ${JSON.stringify(flexboxStyles, null, 2)}${typescript ? ' as const' : ''}`

  // Get colors source code
  let colorsCode
  if (colorThemes) {
    colorsCode = `export const themeColors = ${JSON.stringify(colorThemes, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) colorsCode += `\nexport type ThemeColors = typeof themeColors`
  }

  // get space source code
  let spacesCode
  if (spaceThemes) {
    spacesCode = `export const themeSpaces = ${JSON.stringify(spaceThemes, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) spacesCode += `\nexport type ThemeSpaces = typeof themeSpaces`
  }

  // get font size source code
  let fsCode
  if (fsThemes) {
    fsCode = `export const themeFontSizes = ${JSON.stringify(fsThemes, null, 2)}${typescript ? ' as const' : ''}`
    if (typescript) fsCode += `\nexport type ThemeFontSizes = typeof themeFontSizes`
  }

  const themesCode = [flexboxCode, colorsCode, spacesCode, fsCode].filter(Boolean).join('\n\n')
  fs.writeFileSync(`themes.${typescript ? 'ts' : 'js'}`, themesCode, { encoding: 'utf8' })
}
