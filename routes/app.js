const express = require('express')
const router = express.Router()
const path = require('path')

router.all('*', async (req, res, next) => {
  const ip2 = req.headers['x-real-ip'] || req.connection.remoteAddress
  console.log(ip2, req.originalUrl)
  await next()
})

const auth = async (req, res, next) => {
  next()
}

router.get('/', auth, async (req, res) => {
  try {
    await res.render('main.ejs', {'message': 'hey hello'})
  }
  catch (err) {
    throw err
  }
})

module.exports = router