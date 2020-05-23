module.exports = {
  apps : [{
    name: 'ToyHomepage',
    script: 'server.js',
    watch: true,
    ignore_watch: ['node_modules', '.git', 'documents', ],
    env: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'kweb',
      host : 'gch0123.iptime.org',
      ref  : 'origin/master',
      repo : 'git@github.com:geatrigger/ToyHomepage.git',
      path : '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    staging : {
      user : 'kweb',
      host : 'gch0123.iptime.org',
      ref  : 'origin/master',
      repo : 'git@github.com:geatrigger/ToyHomepage.git',
      path : '/var/www/development',
      'ssh_options': ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
      'post-deploy' : 'pm2 startOrRestart ecosystem.json --env dev',
      'env'  : {
        'NODE_ENV': 'staging'
      }
    }
  }
};
