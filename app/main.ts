import * as net from "net";

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server: net.Server = net.createServer((connection: net.Socket) => {
  // Handle connection
  connection.on('data', (data: Buffer) => {
    const args = data.toString().split('\r\n')
    const command = args[2].toLowerCase()

    switch(command) {
        case 'ping': connection.write('+PONG\r\n')
        case 'echo': connection.write(`$${args[4].length} ${args[4]}`)
    }
  })
});

server.listen(6379, "127.0.0.1");
