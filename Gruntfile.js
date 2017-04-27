module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,
        'uglify': {
            src: {
                files: {
                    'src/handy.min.js': ['src/handy.js']
                },
                options: {
                    maxLineLen: 0,
                    indentLevel: 0,
                    beautify: false,
                    mangle: false,
                    wrap: true,
                    banner: '/**\n' +
                            ' * Set of most useful js functions\n' +
                            ' * Autor: Ilian Iliev\n' +
                            ' * \n' +
                            ' * Date: <%= grunt.template.today("dd-mm-yyyy") %>\n' +
                            ' */\n'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};