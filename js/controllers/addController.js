App.AddController = Ember.ObjectController.extend({

	actions: {
		save: function() {
			if(!this.get('first_name') &&
				!this.get('last_name')) {
				return alert('You need to include your name.');
			}

			var newRSVP = this.store.createRecord('rsvp', this.get('model'));

			newRSVP.save();

			newRSVP.one('didCreate', this, function(first) {
				alert('Your RSVP has successfully been saved!');
				this.transitionToRoute('rsvps');
			});
		}
	},
	groom: ['', 'Groom', 'Bride'],
	associations: ['', 'Childhood/High School', 'College', 'Family', 
		'Family Friend', 'Jordan', 'Other Friend', 'Work']
});