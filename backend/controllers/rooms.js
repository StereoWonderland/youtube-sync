const room = require('../lib/room')
const roomRouter = require('express').Router()

roomRouter.post('/', async (request, response) => {
  const videoUrl = request.body.videoUrl
  const roomId = room.makeNewRoom(videoUrl)
  response.json({roomId})
})

roomRouter.get('/:roomId', async (request, response) => {
  const roomId = request.params.roomId
  const videoUrl = room.getVideoUrl(roomId)

  if (!videoUrl) {
    return response.status(404).end()
  }

  response.json({videoUrl})
})

module.exports = roomRouter
