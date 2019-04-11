var weatherApiKey = "6fc19ba254fc6bfa17075467ace4ee41";
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + "" + ",us" + "&appid=" + weatherApiKey;

$.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function(weatherNow) {
    console.log(weatherNow)
  }); 
