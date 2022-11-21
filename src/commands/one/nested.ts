import {Command, Flags} from '@oclif/core'

export default class NestedOne extends Command {
  static description = 'Say hello from nested command'

  static flags = {
    name: Flags.string({char: 'n', description: 'name to say hello to', required: false}),
  }

  static args = [
    {
      name: 'name',
      description: 'name to say hello to',
      required: false
    }
  ]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(NestedOne)

    const name = (args.name ?? flags.name) ?? '';

    this.log(`hello ${name ? name + ' ' : ''}from nested one`)
  }
}
