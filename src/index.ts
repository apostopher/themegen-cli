import { flags } from '@oclif/command'
import isArray from 'lodash/isArray'
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
  }

  static args = [
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
    const { args } = this.parse(ThemegenCli)
    let finalConfigs: ThemeConfig[] = []
    // STEP 1: Load config from args
    if (args.config) {
      const argsConfig = (await this.loadFromFile(args.config)) as ThemeConfig | ThemeConfig[]
      if (argsConfig) {
        const configs = isArray(argsConfig) ? argsConfig : [argsConfig]
        finalConfigs = configs.map(config => this.mergeConfig(config))
      }
    } else if (this.fileConfig) {
      const configs = isArray(this.fileConfig) ? this.fileConfig : [this.fileConfig]
      finalConfigs = (configs as ThemeConfig[]).map(config => this.mergeConfig(config))
    }

    // Call generator
    for (const config of finalConfigs) {
      generate(config)
    }
  }
}

export = ThemegenCli
