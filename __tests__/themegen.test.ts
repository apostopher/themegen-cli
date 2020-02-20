import { test } from '@oclif/test'

describe('themegen command', () => {
  test
    .stdout()
    .command('themegen')
    .it('runs themegen', ctx => {
      expect(ctx.stdout.trim()).toBe('hello egghead people from ./src/index.ts')
    })
})
