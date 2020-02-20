import { flags } from '@oclif/command'
import camelCase from 'lodash/camelCase'

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
    { name: 'name', description: 'Name of the theme', default: 'theme' },
    { name: 'config', description: 'theme config file location. e.g ` themegen --config=./themeConfig.js`' },
  ]

  async run() {
    const { args, flags } = this.parse(ThemegenCli)
    let finalConfig: ThemeConfig = { name: args.name }
    // STEP 1: Load config from file
    if (this.fileConfig) {
      if (this.fileConfig.extends) {
        const presetConfig = loadPreset(this.fileConfig.extends)
        finalConfig = { ...finalConfig, ...presetConfig }
      }
      finalConfig = { ...finalConfig, ...this.fileConfig }
    }
    // STEP 2: Load config from args
    if (args.config) {
      const argsConfig = await this.loadFromFile(args.config)
      if (argsConfig) finalConfig = { ...finalConfig, ...argsConfig }
    }
    // STEP 3: Load flags
    if (flags.typescript) finalConfig.typescript = true
    if (flags.rem) finalConfig.rem = true
    if (flags.extends) {
      const presetConfig = loadPreset(flags.extends)
      if (presetConfig) finalConfig = { ...finalConfig, ...presetConfig }
    }
    if (Object.keys(finalConfig).length === 0) {
      throw new Error('Theme config is not provided')
    }
    // Call generator
    generate({ ...finalConfig, name: camelCase(finalConfig.name) })
  }
}

export = ThemegenCli
