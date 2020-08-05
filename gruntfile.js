module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assemble: {
            options: {
                layout: 'src/_layouts/default.hbs',
                flatten: true,
                partials: 'src/_partials/**/*.hbs',
                data: 'src/data/*.json' 
            },
            pages: {
                files: {
                    'html/': 'src/pages/**/*.hbs'
                }
            }
        },
        clean: {
            all: ['html/*.html', 'html/sitemap.xml', 'html/js/site.min.js', 'html/css/site.min.css']
        },
        sitemap: {
            dist: {
                pattern: ['html/*.html'],
                siteRoot: 'html/',
                homepage: 'http://www.autoplusberkeley.com/',
                changefreq: 'monthly',
                extension: {
                    required: true,
                    trailingSlash: false
                }
            }
        },
        uglify: {
            my_target: {
              files: {
                'html/js/site-min.js': ['html/js/jquery.bxslider.js', 'html/js/script.js']
              }
        }
        },
        cssmin: {
            target: {
                files: {
                    'html/css/site-min.css': ['html/css/styles.css']
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-sitemap');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['clean','assemble', 'sitemap', 'uglify', 'cssmin']);
}