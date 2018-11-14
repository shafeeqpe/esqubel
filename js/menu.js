

	$('body').click(function () {
	$('.menu').removeClass('menu-open');

});


$('#menu-btn').click(function(event, handler) {

	event.stopPropagation();
	
	$('.menu').toggleClass('menu-open');
	
	
	});
	
 


