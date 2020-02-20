import { Command } from '@oclif/command'
import { cosmiconfig } from 'cosmiconfig'
import genDebug from 'debug'

const explorer = cosmiconfig('themegen')
const debug = genDebug('themegen:base')

import { Config } from './types'

export abstract class Base extends Command {
  static config: null | Config

  async init() {
    const result = await explorer.search()
    debug('parsing config from', { filepath: result?.filepath })
    this.config = result?.config
  }
}
