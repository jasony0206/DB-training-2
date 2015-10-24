function getEarthquakeData(magnitude, period) {
  $.ajax({
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/" 
          + magnitude +"_" + period + ".geojson",
    success: function(data) {
      var length = data.features.length;
      var tabName = "past-" + period;
      $("#" + tabName).html("");
      for (i = 0; i < length; i++) {
        addEntry(tabName, data.features[i]);
      }
    }
  });
}

function addEntry(tabName, feature) {
  var properties = feature.properties;
  var entryData = "<div class='panel'><strong>" + properties.place + "</strong><br>"
                  + new Date(properties.time) + "<br>"
                  + "magnitude: " + properties.mag + "<br></div>";
  $("#" + tabName).append(entryData);
}

// hourly
$("#mag0-hour").click(function() {
  getEarthquakeData("all", "hour");
});

$("#mag1-hour").click(function() {
  getEarthquakeData("1.0", "hour");
});

$("#mag2-hour").click(function() {
  getEarthquakeData("2.5", "hour");
});

$("#mag3-hour").click(function() {
  getEarthquakeData("4.5", "hour");
});


// daily
$("#mag0-day").click(function() {
  getEarthquakeData("all", "day");
});

$("#mag1-day").click(function() {
  getEarthquakeData("1.0", "day");
});

$("#mag2-day").click(function() {
  getEarthquakeData("2.5", "day");
});

$("#mag3-day").click(function() {
  getEarthquakeData("4.5", "day");
});
