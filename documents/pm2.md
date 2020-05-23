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
pm2 deploy ecosystem.config.js production
```