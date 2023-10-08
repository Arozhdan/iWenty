module.exports = {
    apps: [{
        name: 'app',
        script: 'pnpm',
        args: 'serve',
        instances: 1,
        autorestart: true,
    }],
}
