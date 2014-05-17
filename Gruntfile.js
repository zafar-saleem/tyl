module.exports = function (grunt) {
	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			target: {
				src: 'src/js/*.js'
			}
		},

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			target: {
				src: 'src/css/*.css'
			}
		},

		copy: {
			dist: {
				cwd: 'src/', expand: true, src: '**', dest: 'dist/'
			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: 'dist/js',
					mainConfigFile: 'dist/js/main.js',
					out: 'dist/scripts/scripts.min.js',
					include: ['libs/requirejs/require.js']
				}
			}
		},

		uncss: {
			dist: {
				files: [
					{ src: 'src/*.html', dest: 'dist/css/styles.min.css' }
				]
			}
		},

		cssmin: {
			options: {},
			target: {
				src: 'dist/css/**/*.css',
				dest: 'dist/styles/styles.min.css'
			}
		},

		// Deletes all .js files, but skips min.js files
		clean: ['dist/js/', 'dist/css/'],

		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['src/index.html']
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'dist/index.html'
				}
			}
		}

	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	
	grunt.registerTask('default', [
			'jshint', 
			'csslint', 
			'copy', 
			'requirejs', 
			'cssmin', 
			'clean', 
			'processhtml', 
			'htmlmin'
		]
	);
}
