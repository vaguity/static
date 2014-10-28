# Static

## A site framework

This repo:

1. puts all the front-end stuff I've found useful in one place,
1. keeps all of those dependencies tracked by their package managers so they're under version control and can be easily updated, and
1. provides a modifiable workflow in one place that produces an uncluttered static site in `/dist`.


### Quick start

`npm install`  
`gulp init`  
`gulp rebuild`  
`gulp`  


### Dependencies

You'll need npm, a global install of gulp, and some sort of Ruby setup with a global install of bundler.


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

`gulp reset` will clear out all all `node_modules`, `bower_components`, and the `.sass-cache`. You'll need to run `gulp init` again afterwards.

`gulp reinit` runs both reset and init.
