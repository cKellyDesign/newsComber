module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      // dev tasks
      build_react: {
        cwd: './nc-react-app/',
        cmd: 'webpack --watch'
      },

      serve_public: {
        cwd: './public/',
        cmd: 'http-server -p 9999'
      },

      init_hub_server_env: {
        cwd: './nc-hub-server/',
        cmd: 'source ./bin/activate && python server.py'
      },

      // install tasks
      install_react_app: {
        cwd: './nc-react-app/',
        cmd: 'yarn install'
      },

      install_hub_server: {
        cmd: [
          'virtualenv -p python3 nc-hub-server',
          'source ./nc-hub-server/bin/activate',
          'pip install Flask',
          'deactivate'
        ].join('&&')
      }
    },

    concurrent: {
      dev: {
        tasks: ['exec:serve_public', 'exec:build_react', 'exec:init_hub_server_env'],
        options: {
          logConcurrentOutput: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['run']);

  grunt.registerTask('run', ['concurrent:dev']);
  grunt.registerTask('install', ['exec:install_hub_server', 'exec:install_react_app']);
};
