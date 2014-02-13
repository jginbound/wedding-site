Ember.Handlebars.helper('addMap', function(geoLocations) {
  window.setTimeout( function() {
    App.map = L.map('map').setView([39.50, -98.35], 4);

    L.tileLayer('http://b.tile.cloudmade.com/fbfb72f9015f4e148a776df196c03e4c/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(App.map);

    geoLocations.forEach( function(geo) {
      L.marker(geo).addTo(App.map);
    });
  });
});


