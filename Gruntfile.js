module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-typescript');
	grunt.initConfig({
		typescript: {
			main: {
				src: ['ts/**/*.ts'],
				dest: 'js',
				options: {
					module: 'commonjs',
					keepDirectoryHierarchy: true,
					sourceMap: true
				}
			}
		}
	});
	grunt.registerTask('default', ['typescript']);
};
