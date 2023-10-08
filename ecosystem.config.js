module.exports = {
    apps: [{
        name: 'app',
        script: 'npm',
        args: 'run serve',
        instances: 1,
        autorestart: true,
    }],
}
