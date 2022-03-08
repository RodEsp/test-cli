import {Command, Flags} from '@oclif/core'

export default class NestedOne extends Command {
  static description = 'Say hello from nested command'

  static flags = {
    name: Flags.string({char: 'n', description: 'name to say hello to', required: true}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(NestedOne)

    this.log(`hello ${flags.name} from nested one`)
  }
}
