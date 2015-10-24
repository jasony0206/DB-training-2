function initializeMap() {
  var mapCanvas = document.getElementById('map');
  var losAngeles = {lat: 34.05, lng: -118.25};
  var africa = {lat: 7.18, lng: 21.09};
  var mapOptions = {
    center: africa,
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(mapCanvas, mapOptions)

  getEarthquakeData("1.0", "hour");
  //getEarthquakeData("4.5", "day");
}

function pinDown(latitude, longitude) {
  new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map
  });
}
