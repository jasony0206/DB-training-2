$(document).foundation();

function getEarthquakeData(magnitude, period) {
  $.ajax({
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/" 
          + magnitude +"_" + period + ".geojson",

    success: function(data) {
      var length = data.features.length;
      var tabName = "past-" + period;
      
      // Clean up content from previous calls
      $("#" + tabName).html("");
      removeMarkers();

      // Add en entry for each earthquake
      for (i = 0; i < length; i++) {
        addEntry(tabName, data.features[i]);
      }
    }
  });
}

function addEntry(tabName, feature) {
  var properties = feature.properties;
  var entryData = "<div class='panel'><p><strong>" + properties.place + "</strong><br>"
                  + new Date(properties.time) + "<br>"
                  + "magnitude: " + properties.mag + "</p></div>";
  $("#" + tabName).append(entryData);

  var coordinates = feature.geometry.coordinates;
  putMarker(coordinates[1], coordinates[0]);
}

// when click day tab, make a call
$("#tab-title-hour").click(function() {
  $("#mag0-hour").click();
});

$("#tab-title-day").click(function() {
  $("#mag2-day").click();
});

$("#tab-title-week").click(function() {
  $("#mag3-week").click();
});

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

// daily
$("#mag0-week").click(function() {
  getEarthquakeData("all", "week");
});

$("#mag1-week").click(function() {
  getEarthquakeData("1.0", "week");
});

$("#mag2-week").click(function() {
  getEarthquakeData("2.5", "week");
});

$("#mag3-week").click(function() {
  getEarthquakeData("4.5", "week");
});
