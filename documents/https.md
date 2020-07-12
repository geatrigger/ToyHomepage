# https
* install
```
npm install https --save
```

* get ssl certificate using openssl(client certificate authentication)
  * 현재 방법(유효하지 않은 인증서 뜸) : https://ourcodeworld.com/articles/read/343/how-to-create-required-pem-certificates-for-https-connection-in-node-web-server
  * 다른 방법(client에 인증서를 ok하는 crt파일 update) : https://kubernetes.io/docs/concepts/cluster-administration/certificates/
```shell
# key.pem, cert.pem 생성 후 홈페이지 폴더에 옮김
sudo openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout /key.pem -out /cert.pem
#openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout c:/key.pem -out c:/cert.pem -config C:\Program Files\GnuWin32\share\openssl.cnf
#openssl req -newkey rsa:2048 -new -nodes -keyout c:/key.pem -out c:/csr.pem
```

* use ssl in expressjs
```js
const express = require('express')
const app = express()

const fs = require('fs')
const https = require('https')

const privateKey = fs.readFileSync('certificates/key.pem', 'utf8')
const certificate = fs.readFileSync('certificates/cert.pem', 'utf8')
const credentials = {key: privateKey, cert: certificate}
const httpsServer = https.createServer(credentials, app)
const port = 3000

httpsServer.listen(port, () => {
  console.log('https listening at port ', port)
})
```

* add gitignore
```gitignore
certificates/
```