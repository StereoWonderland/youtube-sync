const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const roomRouter = require('./controllers/rooms')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/rooms', roomRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
