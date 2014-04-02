module.exports = function (grunt) {
	grunt.initConfig({

		copy: {
			dist: {
				cwd: 'src/', expand: true, src: '**', dest: 'dist/'
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/js/compiled.min.js': ['src/js/jquery.js', 'src/js/*.js'] // make sure jquery is loaded first
				}
			}
		},

		uncss: {
			dist: {
				files: [
					{ src: 'src/*.html', dest: 'dist/css/compiled.min.css' }
				]
			}
		},

		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['src/index.html']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('default', ['copy', 'uglify', 'uncss', 'processhtml']);
}