$.ajax({
  url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
  success: function(data) {
    var length = data.features.length;
    for (i = 0; i < length; i++) {
      addEntry("past-hour", data.features[i]);
    }
  }
});

$.ajax({
  url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson",
  success: function(data) {
    var length = data.features.length;
    for (i = 0; i < length; i++) {
      addEntry("past-day", data.features[i]);
    }
  }
});

function addEntry(tabName, feature) {
  var properties = feature.properties;
  var entryData = "<div class='panel'><strong>" + properties.place + "</strong><br>"
                  + new Date(properties.time) + "<br>"
                  + "magnitude: " + properties.mag + "<br></div>";
  $("#" + tabName).append(entryData);
}

$('[data-slider]').on('change.fndtn.slider', function(){
  // do something when the value changes
  console.log($('[data-slider]').attr('data-slider'));
});