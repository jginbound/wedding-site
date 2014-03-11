App.AddController = Ember.ObjectController.extend({

	actions: {
		save: function() {
			if(!this.get('first_name') &&
				!this.get('last_name')) {
				return alert('You need to include your name.');
			}

			var guests = +this.get('guests') || 0,
				salmon = +this.get('salmon') || 0,
				bbq	   = +this.get('bbq') || 0,
				veggie = +this.get('veggie') || 0;

			if((guests + 1) != (salmon + bbq + veggie)) {
				console.log(guests + ': ' + salmon + ' ' + bbq + ' ' + veggie);
				return alert('The number of guest must match the number of dinner choices.');
			}
			else {
				var newRSVP = this.store.createRecord('rsvp', this.get('model'));

				newRSVP.save();

				newRSVP.one('didCreate', this, function() {
					//L.marker([ location.lat, location.lng ]).addTo(App.map);
					alert('Your RSVP has successfully been saved!');
					this.transitionToRoute('rsvps');
				});
			}
		}
	},
	groom: ['', 'Groom', 'Bride'],
	associations: ['', 'Childhood/High School', 'College', 'Family', 
		'Family Friend', 'Jordan', 'Other Friend', 'Work']
});
