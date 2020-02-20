import { Command, flags } from '@oclif/command'

class ThemegenCli extends Command {
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
    preset: flags.string({
      description: 'preset name',
      options: ['default'],
    }),
  }

  static args = [
    { name: 'config', description: 'theme config file location. e.g ` themegen --config=./themeConfig.js`' },
  ]

  async run() {
    const { args, flags } = this.parse(ThemegenCli)

    this.log(`hello from ./src/index.ts`)
    if (args.file && flags.typescript) {
      this.log(`you input --typescript and --file: ${args.file}`)
    }
  }
}

export = ThemegenCli
