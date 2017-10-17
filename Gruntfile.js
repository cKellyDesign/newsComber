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

      init_hub_server: {
        cwd: './nc-hub-server/',
        cmd: 'source ./bin/activate && python server.py'
      },

      init_psql_server: {
        cwd: './nc-psql-server',
        cmd: 'source ./bin/activate && python psql.py'
      },

      start_psql: {
        cmd: 'pg_ctl -D ./nc-psql-server/db -l logfile start'
      },

      stop_psql: {
        cmd: 'pg_ctl -D ./nc-psql-server/db -l logfile stop'
      },

      // install tasks
      install_react_app: {
        cwd: './nc-react-app/',
        cmd: 'yarn install'
      },

      init_db: {
        cmd: 'initdb ./nc-psql-server/db'
      },

      install_hub_server: {
        cmd: [
          'virtualenv -p python3 nc-hub-server',
          'source ./nc-hub-server/bin/activate',
          'pip install Flask',
          'deactivate'
        ].join('&&')
      },

      install_psql_server: {
        cmd: [
          'virtualenv -p python3 nc-psql-server',
          'source ./nc-psql-server/bin/activate',
          'pip install Flask',
          'pip install flask_sqlalchemy',
          'deactivate'
        ].join('&&')
      }
    },

    concurrent: {
      dev: {
        tasks: [
          'exec:serve_public', 
          'exec:build_react',
          'servers'
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      servers: {
        tasks: ['exec:init_psql_server', 'exec:init_hub_server'],
        options: {
          logConcurrentOutput: true
        }
      },
      install: {
        tasks: [
          'exec:install_hub_server',
          'exec:install_react_app',
          ['exec:install_psql_server', 'exec:init_db']
        ],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['run']);

  grunt.registerTask('servers', ['exec:start_psql', 'concurrent:servers'])

  grunt.registerTask('run', ['concurrent:dev']);
  grunt.registerTask('kill', ['exec:stop_psql']);
  grunt.registerTask('install', ['concurrent:install']);
};
