// ------------------------------------
// Site scripts
// ------------------------------------

$(document).ready(function() {
	enquire.register("screen and (max-width: 1100px)", {
		match : function() {
			$('body').css('background', 'blue');
		}
	});
});

console.log('yolo');