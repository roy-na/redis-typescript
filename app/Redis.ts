class Redis {

    private command: string
    private content: string

    constructor(args: string) {
        const [actions, , command, ,content] = args.split('\r\n')
        this.command = command
        this.content = content
    }

    getCommand() {
        return this.command
    }

    echo() {
        return `$${this.content.length}\r\n${this.content}\r\n`
    }
}