App.RsvpsController = Ember.ArrayController.extend({
	sortProperties: ['first_name'],
	rsvpsCount: function() {
		return this.get('model.length');
	}.property('@each'),

	actions: {
		add: function() {
			$('#rsvp_button').hide();
			this.transitionToRoute('add');
		}
	}
});