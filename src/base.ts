import { Command } from '@oclif/command'
import { cosmiconfig } from 'cosmiconfig'
import genDebug from 'debug'

const explorer = cosmiconfig('themegen')
const debug = genDebug('themegen:base')

import { Config } from './types'

export abstract class Base extends Command {
  fileConfig: Config | undefined

  async init() {
    const result = await explorer.search()
    if (!result) return
    debug('parsing config from', { filepath: result.filepath })
    this.fileConfig = result.config
  }

  async loadFromFile(filePath: string): Promise<Config | undefined> {
    const result = await explorer.load(filePath)
    if (!result) return
    debug('parsing config from', { filepath: result.filepath })
    return result.config
  }
}
