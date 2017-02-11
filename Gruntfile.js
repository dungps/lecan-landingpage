'use strict';
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	var jsList = [
		'assets/vendors/jquery/dist/jquery.js',
		'assets/vendors/bootstrap/js/affix.js',
		'assets/vendors/bootstrap/js/alert.js',
		'assets/vendors/bootstrap/js/button.js',
		'assets/vendors/bootstrap/js/carousel.js',
		'assets/vendors/bootstrap/js/collapse.js',
		'assets/vendors/bootstrap/js/dropdown.js',
		'assets/vendors/bootstrap/js/modal.js',
		'assets/vendors/bootstrap/js/tooltip.js',
		'assets/vendors/bootstrap/js/popover.js',
		'assets/vendors/bootstrap/js/scrollspy.js',
		'assets/vendors/bootstrap/js/tab.js',
		'assets/vendors/bootstrap/js/transition.js',
		'assets/js/_main.js'
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			build: {
				files: {
					'assets/css/style.css': ['assets/less/main.less']
				},
				options: {
					compress: false,
					sourceMap: true,
					sourceMapURL: 'style.css.map',
					sourceMapBasepath: 'assets/',
					sourceMapRootpath: './'
				}
			},

			dev: {
				files: {
					'assets/css/style.css': ['assets/less/main.less']
				},
				options: {
					compress: true
				}
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [jsList],
				dest: 'assets/js/scripts.js'
			}
		},

		watch: {
			less: {
				files: [
					'assets/less/**'
				],
				tasks: ['less:build']
			},
			js: {
				files: [
					'assets/js/_*.js'
				],
				tasks: ['concat']
			},
			livereload: {
				options: {
					livereload: false
				},
				files: [
					'assets/css/**',
					'assets/js/**',
					'*.html',
					'**/*.html'
				]
			}
		},

		modernizr: {
			dist: {
				devFile: 'assets/vendor/modernizr/modernizr.js',
				outputFile: 'assets/js/modernizr.min.js',
				files: {
					src: [
						'assets/js/_*.js',
						'*/assets/css/*.css'
					]
				}
			}
		},

		copy: {
			assets: {
				expand: true,
				cwd: 'assets/vendors/font-awesome/fonts/',
				src: ['**'],
				dest: 'assets/fonts/',
				filter: 'isFile'
			}
		}
	});

	grunt.registerTask('default',['dev']);

	grunt.registerTask('dev', [
		'copy:assets',
		'less:dev',
		'concat',
	]);

	grunt.registerTask('build', [
		'copy:assets',
		'less',
		'concat'
	]);
}