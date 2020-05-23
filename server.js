const express = require('express')
const app = express()
// const http = require('http').Server(app)

// const config = require('./config.json')[process.env.NODE_ENV || 'dev']

const port = 3000
// http.listen(port, (req, res) => {
//   console.log('listening at port', port)
//   res.send('hello')
// })

app.get('/', function (req, res) {
  res.send('Hello World2')
})

app.listen(port)
