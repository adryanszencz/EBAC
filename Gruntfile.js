module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compila o LESS para CSS (comprimido)
        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/css/main.min.css': 'src/less/main.less'
                }
            }
        },

        // Comprime o JavaScript
        uglify: {
            target: {
                files: {
                    'dist/js/main.min.js': 'src/scripts/main.js'
                }
            }
        },

        // Refaz as tarefas quando os arquivos mudam
        watch: {
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            },
            js: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify']);
};
