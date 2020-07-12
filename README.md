# ToyHomepage
1. what to use
  - nodejs
    - expressjs
    - pm2
  - js
    - leaflet
    - chartjs
  - MongoDB
  - css
    - bootstrap
  - html
  - jquery
  - react

# pm2
* [pm2](./documents/pm2.md)
* start
```
npm install pm2 -g
```

# Security(cookie-parser, express-session, helmet)
* cookie-parser
  * Parse Cookie header and populate req.cookies with an object keyed by the cookie names
* express-session
  * 세션 관리용 미들웨어, 로그인 등에 사용
  * memorystore : express-session에서 session을 expire하는 방법이 없기 때문에 memory leak가 생긴다. checkPeriod로 expire time 지정 가능(production에서는 꼭 해야함)
* helmet
  * https로 접근한 사용자의 브라우저에게 maxAge동안 https를 사용하라는 헤더를 보내줌

# HTTPS connection(Security)
* [https](./documents/https.md)
* usage
```js
const privateKey = fs.readFileSync('certificates/key.pem', 'utf8')
const certificate = fs.readFileSync('certificates/cert.pem', 'utf8')
const credentials = {key: privateKey, cert: certificate}
const httpsServer = https.createServer(credentials, app)
const port = 3000

httpsServer.listen(port, () => {
  console.log('https listening at port ', port)
})
```

