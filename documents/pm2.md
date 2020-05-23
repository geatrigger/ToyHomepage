# pm2
* install
```
npm install pm2 -g
```

* setting(ecosystem.config.js)
```
pm2 ecosystem
```

* deploy
```
// git 커밋을 푸쉬먼저 해야함
// ssh key에 암호걸려있으면 실패함
pm2 deploy ecosystem.config.js production setup
pm2 deploy ecosystem.config.js production

```