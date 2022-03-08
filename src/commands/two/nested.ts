import {Command} from '@oclif/core'

export default class NestedTwo extends Command {
  static description = 'Say hello from nested command'

  async run(): Promise<void> {
    this.log('hello from nested two')
  }
}
