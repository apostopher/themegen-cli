import { Presets, ThemeConfig } from '../types'

import { figmaColors, testColors } from './colors'
import { majorThird, test } from './scales'

export const presets: Presets = {
  default: {
    name: 'default',
    colors: figmaColors,
    spaces: { base: 16, values: majorThird },
    fontSizes: { base: 16, values: majorThird },
    typescript: true,
  },
  test: {
    name: 'test',
    colors: testColors,
    spaces: { base: 16, values: test },
    fontSizes: { base: 16, values: test },
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
