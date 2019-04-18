// 1. Create Firebase link
// 1a. Initialize Firebase


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCYpBOTJB_qFP0KMAu6q0KU3uH63iT9y2w",
    authDomain: "git-grub.firebaseapp.com",
    databaseURL: "https://git-grub.firebaseio.com",
    projectId: "git-grub",
    storageBucket: "git-grub.appspot.com",
    messagingSenderId: "699814957038"
  };

  firebase.initializeApp(config);


// 2. Create variables to store user data in database (You can do this through the Firebase console online)
var database = firebase.database();


var cravings1 = "";
var cravings2 = "";
var cravings3 = "";
var cravings4 = "";
var cravings5 = "";
var zipcode = "";
var members = "";


// 3. Create button for adding new cravings - then update the html + update the database

$("#save").on("click", function(event){
    event.preventDefault()
    var cravings1 = $("#crave-1-input").val().trim();
    var cravings2 = $("#crave-2-input").val().trim();
    var cravings3 = $("#crave-3-input").val().trim();
    var cravings4 = $("#crave-4-input").val().trim();
    var cravings5 = $("#crave-5-input").val().trim();
    var zipcode = $("#zip-input").val().trim();
    var members = $("#party-input").val().trim();

  // make an object to store the user input
    var input = {
  
         crave1: cravings1,
         crave2: cravings2,
         crave3: cravings3,
         crave4: cravings4,
         crave5: cravings5,
         location: zipcode,
         party: members,
  
         
        };
        
        database.ref().push(input);
    });

// 3. weather api key and call
var weatherApiKey = "6fc19ba254fc6bfa17075467ace4ee41";

 
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, + " " + position.coords.longitude);
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid="  + weatherApiKey;
    var weatherWidgetCoords = position.coords.latitude + "," + position.coords.longitude;
    var weatherWidgetUrl = "https://darksky.net/widget/small/" + weatherWidgetCoords + "/us12/en.js?width=100%&height=200&title=alt&textColor=333333&bgColor=FFFFFF&transparency=true&skyColor=undefined&fontFamily=Default&customFont=&units=us";
    console.log(weatherWidgetCoords);
    console.log(weatherWidgetUrl);
    
    
    //4. Ajax call function
    $.ajax({
        url: weatherURL,
        method: "GET",
    }).then(function(weather){
        console.log(weather);
        
        $("#weather").html("The current temperature today is: " + Math.round(weather.main.temp)); 
        $("#weather").addClass("weatherWidget");
        $("#weather").append("img", "https://darksky.net/widget/small/28.595997099999998,-81.3533226/us12/en?domain=&quot;+encodeURIComponent(window.location.href)+&quot;&amp;auth=1555622788_85ca446a1f9b5beb5872beb2dbe05cf3&amp;width=100%25&amp;height=200&amp;title=alt&amp;textColor=333333&amp;bgColor=FFFFFF&amp;transparency=true&amp;skyColor=undefined&amp;fontFamily=Default&amp;customFont=&amp;units=us");
        

        if (weather.weather[0].main == "Thunderstorm"){
            $("#weather").html("The current temperature today is: " + Math.round(weather.main.temp) + "˚F" + " with chances of Thunderstorms "); 
            var weatherImage = $("<img id='widgetImage' src='http://openweathermap.org/img/w/11d.png'>");
            $("#weather").append(weatherImage);
        }
        else if (weather.weather[0].main == "Drizzle"){
            $("#weather").html("The current temperature today is: " + Math.round(weather.main.temp) + "˚F" + " with chances of Drizzle ");                 
            var weatherImage = $("<img id='widgetImage' src='http://openweathermap.org/img/w/09d.png'>");
            $("#weather").append(weatherImage);
        }
        else if (weather.weather[0].main == "Rain"){
            $("#weather").html("The current temperature today is: " + Math.round(weather.main.temp) + "˚F" + " with chances of Rain "); 
            var weatherImage = $("<img id='widgetImage' src='http://openweathermap.org/img/w/10d.png'>");
            $("#weather").append(weatherImage);
        }
        else if (weather.weather[0].main == "Snow"){
            $("#weather").html("The current temperature today is: " + Math.round(weather.main.temp) + "˚F" + " with chances of Snowing "); 
            var weatherImage = $("<img id='widgetImage' src='http://openweathermap.org/img/w/13d.png'>");
            $("#weather").append(weatherImage);
        }
        else if (weather.weather[0].main == "Clouds"){
            $("#weather").html("The current temperature today is: " + Math.round(weather.main.temp) + "˚F" + " with chances of Clouds "); 
            var weatherImage = $("<img id='widgetImage' src='http://openweathermap.org/img/w/02d.png'>");
            $("#weather").append(weatherImage);
        }
        else if (weather.weather[0].main == "Clear"){
            $("#weather").html("The current temperature today is: " + Math.round(weather.main.temp) + "˚F" + " with a Clear Sky "); 
            var weatherImage = $("<img id='widgetImage' src='http://openweathermap.org/img/w/01d.png'>");
            $("#weather").append(weatherImage);
        }
        else if (weather.weather[0].id <= "700" && weather.weather[0].id >= "799"){
                $("#weather").html("The current temperature today is: " + Math.round(weather.main.temp) + "˚F" + " with some unusual Conditions ");
                var weatherImage = $("<img id='widgetImage' src='http://openweathermap.org/img/w/50d.png'>");
                $("#weather").append(weatherImage); 
            }
        else {
            $("#weather").html("This is a Weird Condition at least the temperature is nice: " + Math.round(weather.main.temp)); 

         }
        });	

});

  
 $("#partyConfirm").on("click", function(){
    var members = $("#party-input").val().trim();

    if(members < 2){
        document.getElementById("crave-2-input").style.display = "hidden";
    } else {
        document.getElementById("crave-2-input").style.visibility = "visible"
    }
    if(members >= 3){
        document.getElementById("crave-3-input").style.visibility = "visible";
    } else {
        document.getElementById("crave-3-input").style.visibility = "hidden"
    }
    if(members >= 4){
        document.getElementById("crave-4-input").style.visibility = "visible";
    } else {
        document.getElementById("crave-4-input").style.visibility = "hidden"
    }
    if(members >= 5){
        document.getElementById("crave-5-input").style.visibility = "visible";
    } else {
        document.getElementById("crave-5-input").style.visibility = "hidden"
}

$("#save").on("click", function(event){
  event.preventDefault()
  var cravings1 = $("#crave-1-input").val().trim();
  var cravings2 = $("#crave-2-input").val().trim();
  var cravings3 = $("#crave-3-input").val().trim();
  var cravings4 = $("#crave-4-input").val().trim();
  var cravings5 = $("#crave-5-input").val().trim();
  var zipcode = $("#zip-input").val().trim();
  var members = $("#party-input").val().trim();
// make an object to store the user input
  var input = {

       crave1: cravings1,
       crave2: cravings2,
       crave3: cravings3,
       crave4: cravings4,
       crave5: cravings5,
       location: zipcode,
      party: members,
  
  };

    // ----------- captures ZipCode to generate weather forecast when user denies geolocation ---------

        var weatherApiKey = "6fc19ba254fc6bfa17075467ace4ee41";
        var weatherURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=" + input.location + "&appid="  + weatherApiKey;
       
           //4. Ajax call function
               $.ajax({
               url: weatherURL,
               method: "GET",
               }).then(function(weather){
                console.log(weather);
               });	
       });
});
