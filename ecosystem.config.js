module.exports = {
    apps: [{
        name: 'app',
        script: 'pm2 start npm --name "app" -- start',
        instances: 1,
        autorestart: true
    }],
}
