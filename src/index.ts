import { flags } from '@oclif/command'
import camelCase from 'lodash/camelCase'
import omit from 'lodash/omit'

import { Base } from './base'
import { generate } from './generators'
import { loadPreset } from './presets'
import { ThemeConfig } from './types'

class ThemegenCli extends Base {
  static description = 'Generate theme based on scales and colors'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    typescript: flags.boolean({
      char: 't',
      description: 'Scaffold a typescript file.',
      default: false,
    }),
    rem: flags.boolean({
      description: 'use REM based units',
      default: false,
    }),
    extends: flags.string({
      description: 'preset name to extend from',
      options: ['default'],
    }),
  }

  static args = [
    { name: 'name', description: 'Name of the theme', default: '' },
    { name: 'config', description: 'theme config file location. e.g ` themegen --config=./themeConfig.js`' },
  ]

  mergeConfig(config: ThemeConfig): ThemeConfig {
    let extendedConfig: ThemeConfig = {}
    if (config.extends) {
      const presetConfig = loadPreset(config.extends)
      if (presetConfig) extendedConfig = this.mergeConfig(presetConfig)
    }
    return { ...extendedConfig, ...omit(config, 'extends') }
  }

  async run() {
    const { args, flags } = this.parse(ThemegenCli)
    let finalConfig: ThemeConfig = { name: args.name }
    // STEP 1: Load config from args
    if (flags.extends) {
      const extendedConfig = this.mergeConfig({ extends: flags.extends })
      finalConfig = { ...finalConfig, ...extendedConfig }
    } else if (args.config) {
      const argsConfig = await this.loadFromFile(args.config)
      if (argsConfig) {
        const extendedConfig = this.mergeConfig(argsConfig)
        finalConfig = { ...finalConfig, ...extendedConfig }
      }
    } else if (this.fileConfig) {
      const extendedConfig = this.mergeConfig(this.fileConfig)
      finalConfig = { ...finalConfig, ...extendedConfig }
    }
    // STEP 3: Load flags
    if (flags.typescript) finalConfig.typescript = true
    if (flags.rem) finalConfig.rem = true

    // Call generator
    generate({ ...finalConfig, name: camelCase(finalConfig.name) })
  }
}

export = ThemegenCli
