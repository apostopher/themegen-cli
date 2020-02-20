import { flags } from '@oclif/command'

import { Base } from './base'
import { presets } from './presets'
import { Config } from './types'

class ThemegenCli extends Base {
  static description = 'Generate theme based on scales and colors'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    typescript: flags.boolean({
      char: 't',
      description: 'Scaffold a typescript file.',
    }),
    rem: flags.boolean({
      description: 'use rem based scale',
    }),
    extends: flags.string({
      description: 'preset name to extend from',
      options: ['default'],
    }),
  }

  static args = [
    { name: 'config', description: 'theme config file location. e.g ` themegen --config=./themeConfig.js`' },
  ]

  async run() {
    const { args, flags } = this.parse(ThemegenCli)
    // STEP 1: Load config from file
    let finalConfig: Config = this.fileConfig ? { ...this.fileConfig } : {}
    // STEP 2: Load config from args
    if (args.config) {
      const argsConfig = await this.loadFromFile(args.config)
      if (argsConfig) finalConfig = { ...finalConfig, ...argsConfig }
    }
    // STEP 3: Load flags
    if (flags.typescript) finalConfig.typescript = flags.typescript
    if (flags.rem) finalConfig.rem = flags.rem
    if (flags.extends) {
      const hasConfig = Object.prototype.hasOwnProperty.call(presets, flags.extends)
      if (hasConfig) {
        const presetConfig = presets[flags.extends]
        finalConfig = { ...finalConfig, ...presetConfig }
      }
    }
  }
}

export = ThemegenCli
