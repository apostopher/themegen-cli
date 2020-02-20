import { Presets } from '../types'

import { figmaColors } from './colors'
import { majorThird } from './scales'

export const presets: Presets = {
  default: {
    colors: [{ name: 'default', colors: figmaColors }],
    spaces: [{ name: 'default', base: 16, values: majorThird }],
    fontSizes: [{ name: 'default', base: 16, values: majorThird }],
    typescript: true,
    rem: true,
  },
}
