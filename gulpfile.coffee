gulp = require 'gulp'
concat = require 'gulp-concat'
fs = require 'fs'
p = require './package.json'

removeBaseDir = (path, baseDir) ->
  regex = new RegExp '^' + baseDir
  path.replace regex, ''

paths =
  js:
    src: 'src/**/*.js'
    customElement: 'bower_components/w3c-custom-element/index.js'
  build:
    componentFiles: ['component.js', 'nyan-cat.gif', 'rainbow.png', 'styles.css']
    component: 'build/component.js'
    manifest: 'build/manifest.json'
    examples: 'build/examples/'
    readme: 'build/README.md'
    dir: 'build/'

gulp.task 'concat', ->
  return gulp.src [paths.js.customElement, paths.js.src]
    .pipe concat(paths.build.component)
    .pipe gulp.dest './'

gulp.task 'watch', ['default'], ->
  gulp.watch paths.js.src, ['default']

gulp.task 'manifest', ->
  manifest =
    id: p.name
    name:
      element: 'sbks-nyancat'
      class: 'SBKSNyancat'
    files: paths.build.componentFiles
    examples: removeBaseDir paths.build.examples, paths.build.dir
    readme: removeBaseDir paths.build.readme, paths.build.dir
    minified: true

  fs.writeFile paths.build.manifest, JSON.stringify(manifest, null, 4), (err) ->
    console.log err if err

gulp.task 'default', ['manifest', 'concat']