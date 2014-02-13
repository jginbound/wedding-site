App.RsvpsController = Ember.ArrayController.extend({
	sortProperties: ['first_name'],

	actions: {
		add: function() {
			$('#rsvp_button').hide();
			this.transitionToRoute('add');
		}
	},

	reloadModels: function() {
		var rsvps = this.store.find('rsvp');
		this.set('content', rsvps);
	}.observes('model'),

	geoLocations: function(location) {
		console.log('Running geoLocations');
		var locations = this.get('model');
		var coordinates = locations.map( function( location ) {
			var info = location.get('stomping_ground');
			return [ info.lat, info.lng ];
		});

		return coordinates;
	}.property('@each')
});
