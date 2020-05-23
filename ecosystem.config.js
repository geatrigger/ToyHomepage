module.exports = {
  apps : [{
    name: 'ToyHomepage',
    script: 'server.js',
    autorestart: true,
    watch: true,
    ignore_watch: ['node_modules', '.git', 'documents', ],
    env: {
      name: 'production_page',
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key  : '/home/kweb/.ssh/id_rsa.pub',
      user : 'kweb',
      host : 'gch0123.iptime.org',
      ref  : 'origin/master',
      // branch : 'master',
      repo : 'git@github.com:geatrigger/ToyHomepage.git',
      path : '/home/kweb/production',
      // 'ssh_options': ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};