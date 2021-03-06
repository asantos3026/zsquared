import express from 'express'
import index from './routes/index'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'

const server = express()

//middleware
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')
server.use(logger('dev'))
server.use(express.static(path.join(__dirname + '/public')))
server.use(bodyParser.urlencoded({extended: true}))


server.use('/', index)

server.listen(process.env.PORT || 4000)

module.exports = server