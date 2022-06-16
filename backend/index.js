const http = require('http')
const app = require('./app')
const logger = require('./utils/logger')
const socketio = require('socket.io')
const connection = require('./lib/connection')

const server = http.createServer(app)
const io = new socketio.Server(server)

io.on('connection', (socket) => {
    new connection.Connection(io, socket)
})

server.listen(3001, () => {
    logger.info('Listening on port 3001')
})
