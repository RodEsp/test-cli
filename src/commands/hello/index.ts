import {Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', summary: 'Who is saying hello?\nDo the like newlines\nin their flag summaries?', required: true}),
  }

  static args = [{name: 'person', description: 'Person to say hello to', required: true}]

  static aliases = ['hello-alias'];

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
