# pm2
* install
```
npm install pm2 -g
```

* setting(ecosystem.config.js)
```
pm2 ecosystem
```

* common usage
```
pm2 start ecosystem.config.js --env=production
pm2 list
pm2 kill
pm2 delete production_page
pm2 restart production_page
```

* deploy
```
// git 커밋을 푸쉬먼저 해야함
// ssh key에 암호걸려있으면 실패함
pm2 deploy ecosystem.config.js production setup
pm2 deploy ecosystem.config.js production update
pm2 deploy ecosystem.config.js production
```

* 주의사항
  * ecosystem.config.js의 옵션을 바꾸는 경우 pm2자체를 다시 시작해야함
  