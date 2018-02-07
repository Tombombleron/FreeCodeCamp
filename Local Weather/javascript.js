$(document).ready(function() {
    getLocation();
});
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
       getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
function getWeather(lat, lon) {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?" + lat + "&" + lon, function(json) {
        $("#weather-str").html(json.weather[0].description);
        $("#weather-location").html(json.name + ", " + json.sys.country);
        $("#img-file").attr("src",json.weather[0].icon);
    });
}