# Static, a front-end framework

This project:

1. puts a number of useful front-end utilities in a task runner,
1. keeps those dependencies tracked by package managers so they're under version control and can be easily updated, and
1. provides a flexible, modifiable workflow in one place that produces an uncluttered front-end setup.


## Quick start

`npm install`  
`bower install`  
`gulp rebuild`  
`gulp`  


## Dependencies

You'll need npm and a global install of gulp. You'll also need Ruby and a global install of sass (`gem install sass`).


## Installation

In the root directory:

`npm install`  
`bower intsall`

This installs all the Node modules and Bower components from `package.json` and `bower.json` respectively.

`gulp rebuild`

The rebuild task will pull process the Bower dependencies listed with the parameters supplied in `gulp/config.js`.


## Configuration

The `gulp/config.js` file sets up the project directories and how dependencies are managed.

### dist, src

The `dist` and `src` variables set the project's development and production directories.

### packageType

Defines where a package type should go in the source directory. For example, Sass partials can be placed so they're available in a particular subdirectory. New packageTypes can be added and used in the Bower configuration.

### config.sass

Sets the source and destination directories for Sass.

### config.bower

`.src` sets the directory where Bower components are copied for use by the dependency tasks.

`.packages` defines the type of package each Bower package is, and any path traversal that the processor must use to get to the main files. Main files are defined in the Bower component's `bower.json` under `main` or in the project's `bower.json` under `overrides`. See the [main-bower-files](https://www.npmjs.org/package/main-bower-files) package for details.

### config.browserify

Defines the Browserify bundles by their source, destination and filename.


## Usage

`gulp`  
Runs `build` and `watch`

`gulp build`  
Processes Browserify bundles and Sass

`gulp watch`  
Watches for changes to Sass files and any source files of Browserify packages

`gulp rebuild`  
Processes all dependencies as defined by `config.bower`

`gulp browserify`  
Processes Browserify bundles as defined by `config.browserify`

`gulp sass`  
Processes Sass files
