App.Router.map(function() {
	this.resource('welcome');
	this.resource('story');
	this.resource('wedding');
	this.resource('location');
	this.resource('accommodations');
	this.resource('travel');
	this.resource('rsvps', function() {
		this.resource('rsvp', { path: '/:rsvp_id' }, function() {
			this.resource('edit');
		});
		this.resource('add');
	});
	this.resource('todo');
	this.resource('registry');
	this.resource('follow_us');
});