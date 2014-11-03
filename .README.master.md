# Static

## A front-end framework

This repo:

1. puts all the front-end stuff I've found useful in one place,
1. keeps all of those dependencies tracked by their package managers so they're under version control and can be easily updated, and
1. provides a modifiable workflow in one place that produces an uncluttered static front-end setup in `/dist`.


### Quick start

`npm install`  
`gulp init`  
`gulp rebuild`  
`gulp`  


### Dependencies

You'll need npm and a global install of gulp. You'll also need Ruby and a global install of sass (`gem install sass`).


### Installation

In the root directory:

`npm install`  
`gulp init`

This initializes the root `gulpfile.js` to include the tasks from `/gulp/gulpfile.js`. Then run:

`gulp rebuild`


### Usage

`gulp rebuild` will download all Bower packages and prep their core files for usage  
`gulp build` runs (nearly) all tasks  
`gulp watch` watches for JS and SCSS file changes  
`gulp` will build and then watch

Edit JS or SCSS files in `/src` while watching and they will build to `/dist/assets`.


### Reset

`gulp reset` will clear out all all `node_modules`, `bower_components`, and the `.sass-cache`. You'll need to run `gulp init` again afterwards. Note that `gulp init` and `gulp reset` will remove/add this README in the root directory.

`gulp reinit` runs both reset and init.


### Notes

- The `gulp-livereload` plugin works with the LiveReload brower extension.
- The `gulp-imagemin` plugin currently throws errors due to optional node dependencies. See [this issue](https://github.com/vaguity/static/issues/4).
- CSScomb doesn't have proper support for ordering of SASS @include statements. There's an ugly workaround that could work, but it would be better if CSScomb added support for this. Issue is [tracked here](https://github.com/csscomb/csscomb.js/issues/204).
