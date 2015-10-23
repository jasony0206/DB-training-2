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

getEarthquakeData("1.0", "hour");
getEarthquakeData("4.5", "day");

// hourly
$("#hour-mag0").click(function() {
  getEarthquakeData("all", "hour");
});

$("#hour-mag1").click(function() {
  getEarthquakeData("1.0", "hour");
});

$("#hour-mag2").click(function() {
  getEarthquakeData("2.5", "hour");
});

$("#hour-mag3").click(function() {
  getEarthquakeData("4.5", "hour");
});


// daily
$("#day-mag0").click(function() {
  getEarthquakeData("all", "day");
});

$("#day-mag1").click(function() {
  getEarthquakeData("1.0", "day");
});

$("#day-mag2").click(function() {
  getEarthquakeData("2.5", "day");
});

$("#day-mag3").click(function() {
  getEarthquakeData("4.5", "day");
});