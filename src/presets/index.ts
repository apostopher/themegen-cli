import { Presets, ColorPreset, ScalePreset, ThemeConfig } from '../types'

import * as colors from './colors'
import * as scales from './scales'

export const colorPresets = colors as ColorPreset
export const scalePresets = scales as ScalePreset

export const presets: Presets = {
  default: {
    name: 'default',
    colors: colors.figmaColors,
    spaces: { base: 16, scale: scales.majorThird },
    fontSizes: { base: 16, scale: scales.majorThird },
    typescript: true,
    rem: true,
  },
  test: {
    name: 'test',
    colors: colors.testColors,
    spaces: { base: 16, scale: scales.test },
    fontSizes: { base: 16, scale: scales.test },
    typescript: true,
    rem: true,
  },
}

export function loadPreset(name: string): ThemeConfig | null {
  const hasConfig = Object.prototype.hasOwnProperty.call(presets, name)
  if (hasConfig) {
    return presets[name]
  }
  return null
}
