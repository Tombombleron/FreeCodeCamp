var temp = "C";
var lat;
var lon;
$(document).ready(function() {
    getLocation();
});
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
       getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
function getWeather(lat, lon) {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon, function(json) {
        $("#weather-str").html();
        $("#location-str").html(json.name + ", " + json.sys.country + " | " + json.weather[0].description);
        $("#img-file").attr("src",json.weather[0].icon);
        $("#js_temp").html(Math.round(json.main.temp));
    });
}
$("#degrees").click(function() {
    getTemp(lat, lon);
    
});
function getTemp(lat, lon) {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon, function(json) {
        if (temp=="C") {
            $("body").animate({"background-color": "#2BBBAD"}, 3000, function(){});
            $("#temp").fadeOut(1500);
            $("#temp").fadeIn(1500);
            setTimeout(function(){
                $("#js_temp").html((1.8*Math.round(json.main.temp))+32);
                $("#degrees").html("°F");
                temp = "F";
            }, 1500);
            
//window.alert(
        } else {
            $("#temp").fadeOut(1500);
            $("#temp").fadeIn(1500);
            $("body").animate({"background-color": "#00695c"}, 3000, function(){});
            setTimeout(function(){
                $("#js_temp").html((Math.round(json.main.temp)));
                $("#degrees").html("°C");
                temp = "C";
            }, 1500);
        }
//        Math.round(json.main.temp);
    });
  }
