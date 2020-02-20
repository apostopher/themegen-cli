import { Presets } from '../types'

import { figmaColors, testColors } from './colors'
import { majorThird, test } from './scales'

export const presets: Presets = {
  default: {
    colors: [{ name: 'default', colors: figmaColors }],
    spaces: [{ name: 'default', base: 16, values: majorThird }],
    fontSizes: [{ name: 'default', base: 16, values: majorThird }],
    typescript: true,
    rem: true,
  },
  test: {
    colors: [{ name: 'test', colors: testColors }],
    spaces: [{ name: 'test', base: 16, values: test }],
    fontSizes: [{ name: 'test', base: 16, values: test }],
    typescript: true,
    rem: true,
  },
}
