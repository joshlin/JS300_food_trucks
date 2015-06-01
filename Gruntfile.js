module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            files: ['GruntFile.js', 'app/**/*.js', 'test/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                globals: {
                    afterEach: true,
                    after: true
                }
            }
        }        
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');    
    grunt.registerTask('default', ['jshint']);
};