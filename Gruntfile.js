module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-typescript');
	grunt.initConfig({
		typescript: {
			main: {
				src: ['ts/**/*.ts'],
				dest: 'js',
				options: {
					keepDirectoryHierarchy: true
				}
			}
		}
	});
	grunt.registerTask('default', ['typescript']);
};
