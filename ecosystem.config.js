module.exports = {
  apps: [
    {
      name: 'DongA',
      script: 'dist/main.js',
      watch: true,
      ignore_watch: ['node_modules', 'logs', 'dist'],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
