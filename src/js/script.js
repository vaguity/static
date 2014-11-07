// ------------------------------------
// Site scripts
// ------------------------------------

$(document).ready(function() {
	enquire.register("screen and (max-width: 1100px)", {
		match : function() {
			$('body').css('background', 'red');
		}
	});
});

console.log('yo');