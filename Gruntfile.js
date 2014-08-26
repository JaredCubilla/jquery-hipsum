module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("hipsum.jquery.json"),

		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title %> - <%= pkg.description %>\n" +
				" *  Made by <%= pkg.author.name %>, licensed under <%= pkg.licenses[0].type %> \n" +
				" */\n"
		},

		jshint: {
			files: ["hipsum.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		uglify: {
			my_target: {
				src: ["hipsum.js"],
				dest: "hipsum.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		
		watch: {
		    files: ['hipsum.js'],
		    tasks: ['jshint', 'uglify']
		}

	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "uglify", "watch"]);
};