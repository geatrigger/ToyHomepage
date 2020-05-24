const express = require('express')
const app = express()
const http = require('http').Server(app)
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const helmet = require('helmet')

// const config = require('./config.json')[process.env.NODE_ENV || 'dev']

const port = 3000

app.use(helmet.hsts({
  maxAge: 5184000,
  includeSubDomains: true,
  preload: true
}))
app.use(cookieParser())
app.use(session({
  name: 'toy_session_name', 
  key: 'toy_session_key', // 세션키
  secret: 'toy_session_secret', // 비밀키
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  },
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  })
}))

app.get('/', function (req, res) {
  res.send('Hello World3')
})

http.listen(port, () => {
  console.log('listening at port ', port)
})
