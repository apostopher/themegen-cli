import { expect, test } from '@oclif/test'

describe('themegen', () => {
  test
    .stdout()
    .command(['themegen'])
    .it('runs themegen command with no arguments', ctx => {
      expect(ctx.stdout).to.contain('hello from ./src/index.ts')
    })
})
