module.exports = {
    apps: [{
        name: 'app',
        script: 'npm',
        args: 'run start',
        instances: 1,
        autorestart: true,
    }],
}
