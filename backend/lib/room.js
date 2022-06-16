const { v4: uuidv4 } = require('uuid')

const uuidToVideo = {}

const addSocketToRoom = (roomId, socket) => {
  return socket.join(roomId)
}

const makeNewRoom = (videoUrl) => {
  const uuid = uuidv4()
  uuidToVideo[uuid] = videoUrl
  return uuid
}

const getVideoUrl = (roomId) => {
  return uuidToVideo[roomId]
}

module.exports = {
  addSocketToRoom,
  makeNewRoom,
  getVideoUrl
}
