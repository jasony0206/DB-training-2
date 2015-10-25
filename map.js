function initializeMap() {
  var mapCanvas = document.getElementById('map');
  var losAngeles = {lat: 34.05, lng: -118.25};
  var africa = {lat: 7.18, lng: 21.09};
  var italy = {lat: 41.90, lng: 12.48};
  var mapOptions = {
    center: italy,
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(mapCanvas, mapOptions);
  markers = [];

  getEarthquakeData("1.0", "hour");
}

function putMarker(latitude, longitude) {
  var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map
  });

  markers.push(marker);
}

function removeMarkers() {
  var length = markers.length;
  for (i = 0; i < length; i++) {
    markers[i].setMap(null);
  }
}
