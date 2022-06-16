const logger = require('../utils/logger')

class Connection {
  constructor(io, socket) {
    this.io = io
    this.socket = socket

    logger.info(`client connected: ${socket.id}`)

    socket.join('test-room')

    socket.on('disconnect', () => {
      logger.info(`client disconnected: ${socket.id}`)
    })

    socket.on('resume video', (room) => {
      //this.resumeVideo(room)
      this.resumeVideo('test-room')
    })

    socket.on('pause video', (room) => {
      //this.pauseVideo(room)
      this.pauseVideo('test-room')
    })
  }

  resumeVideo = (room) => {
    logger.info(`${this.socket.id} resumed video`)
    this.io.to(room).emit('resume video')
  }

  pauseVideo = (room) => {
    logger.info(`${this.socket.id} paused video`)
    this.io.to(room).emit('pause video')
  }
}

module.exports = { Connection }
