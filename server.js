const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const helmet = require('helmet')
const fs = require('fs')
const https = require('https')

const privateKey = fs.readFileSync('certificates/key.pem', 'utf8')
const certificate = fs.readFileSync('certificates/cert.pem', 'utf8')
const credentials = {key: privateKey, cert: certificate}
const httpsServer = https.createServer(credentials, app)

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

app.set('view engine', 'ejs')

app.use('/', require('./routes/app'))

httpsServer.listen(port, () => {
  console.log('https listening at port ', port)
})
