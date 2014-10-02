# Static site framework

This repo

1. puts all the front-end stuff I've found useful in one place,
1. keeps all of those dependencies tracked by their package managers so they're under version control and can be easily updated, and
1. provides a modifiable workflow in one place that produces an uncluttered static site in `/dist`.


## The Ruby gems

_Compass, Susy and Breakpoint_

`gem install bundler`
`bundle install`


## The Node packages

_Gulp, and scripts in support of Gulp_

`npm install`


## The Bower components

_jQuery, Modernizr, jQuery UI_
_Normalize, HTML5 Boilerplate, Bootstrap_

`bower install`


## All together now

`gulp rebuild` to move all dependencies over
`gulp build` to run everything
`gulp watch` to watch for file changes
`gulp` to build and watch
