// var Modernizr = require('modernizr');
var $ = require('jquery');
var enquire = require('enquire');

$(document).ready(function() {
	console.log('hello');
});

enquire.register("screen and (max-width:800px)", {
	match : function() {
		console.log('hello');
	},

	unmatch : function() {
		console.log('hello again');
	}
});
