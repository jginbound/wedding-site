$(document).ready( function() {
	// start the carousel
	$('.carousel').carousel({
		interval: 4000,
		cycle: true
	});

	// function to change content
	function changeContent( set ) {
		$('.nav > .active').removeClass('active');
		set.link.addClass('active');
		$('.show').removeClass('show').addClass('hide');
		set.content.removeClass('hide').addClass('show');
	};

	// define all of the sections
	var sections = {
		welcome: {
			link:  		$('#welcome_link'),
			content:  	$('#welcome')
		},
		story: {
			link: 		$('#story_link'),
			content: 	$('#story')
		},
		wedding: {
			link: 		$('#wedding_link'),
			content: 	$('#wedding')
		},
		location: {
			link: 		$('#location_link'),
			content: 	$('#location') 
		},
		accommodations: {
			link: 		$('#accommodations_link'),
			content: 	$('#accommodations') 
		},
		travel: {
			link: 		$('#travel_link'),
			content: 	$('#travel') 
		},
		rsvp: {
			link: 		$('#rsvp_link'),
			content: 	$('#rsvp') 
		},
		todo: {
			link: 		$('#todo_link'),
			content: 	$('#todo') 
		},
		registry: {
			link: 		$('#registry_link'),
			content: 	$('#registry') 
		}
	};

	_.each(sections, function(section) {
		section.link.click( function(event) {
			event.preventDefault();
			changeContent(section);
		});
	});
});