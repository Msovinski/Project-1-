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
var zipcode = "";
var members = "";




// 3. weather api key and call
var weatherApiKey = "6fc19ba254fc6bfa17075467ace4ee41";

 
navigator.geolocation.getCurrentPosition(function(position) {

    if (navigator.geolocation.getCurrentPosition){

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid="  + weatherApiKey;
    var weatherWidgetCoords = position.coords.latitude + "," + position.coords.longitude;
   console.log(weatherWidgetCoords);
    
  
    
    
    //4. Ajax call function
    $.ajax({
        url: weatherURL,
        method: "GET",
    }).then(function(weather){
        console.log(weather);
        
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
    }
    else{
        console.log("could not obtain Geolocation, require user input")
    };
});

  
 $("#partyConfirm").on("click", function(){
    var members = $("#party-input").val().trim();

    if(members < 2){
        document.getElementById("crave-2-input").style.display = "none";
    } else {
        document.getElementById("crave-2-input").style.visibility = "visible"
    }
    if(members >= 3){
        document.getElementById("crave-3-input").style.display = "none";
    } else {
        document.getElementById("crave-3-input").style.visibility = "hidden"
    }
    if(members >= 4){
        document.getElementById("crave-4-input").style.display = "none";
    } else {
        document.getElementById("crave-4-input").style.visibility = "hidden"
    }
    if(members >= 5){
        document.getElementById("crave-5-input").style.display = "none";
    } else {
        document.getElementById("crave-5-input").style.visibility = "hidden"
};


// ------------- diana's code ---------------


// click function/event listener for save changes
$("#save").on("click", function(event) {
    event.preventDefault();
    
    // obtain zip code and party size values
    var zipcode = $("#zip-input")
    .val()
    .trim();
    var members = $("#party-input")
    .val()
    .trim();
    
    // make an object to store the user input
    var input = {
        location: zipcode,
        party: members
    };
    console.log(input);

    database.ref().push(input);
    
      // ----------- captures ZipCode to generate weather forecast when user denies geolocation ---------
    
          var weatherApiKey = "6fc19ba254fc6bfa17075467ace4ee41";
          var weatherURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=" + input.location + "&appid="  + weatherApiKey;
         
             //4. Ajax call function
                 $.ajax({
                 url: weatherURL,
                 method: "GET",
                 }).then(function(weather){
                     console.log(weather);

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
    // variable to set a default in case nothing is clicked
    var bestChoice;
    // pick the majority selected
  
    picks.forEach(element => {
      cuisine[element].picks++;
  
      // variable for most selected cuisine
      var maxPick = 0;
  
      // iterating through the cuisines clicked and selecting the most clicked
      for (var property in cuisine) {
        var currentPick = cuisine[property].picks;
        console.log(currentPick);
        if (currentPick > maxPick) {
          bestChoice = property.toLowerCase();
          maxPick = currentPick;
        }
      }
    });
    
    console.log("Survey says... " + bestChoice); // console logging the result
    // put the majority and zipcode in the api call
    $.ajax({
      async: true,
      crossDomain: true,
      url:
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=" +
        bestChoice +
        "&location=" +
        zipcode,
      method: "GET",
      headers: {
        authorization:
          "Bearer TguaEbsqVv3hvtSt41pPee4Y5t5Gey8ZsSdbkgvmVjPXoN3xOjbUIH-1rXcwhfVk9DResP7FUTSWoWePZqzLi4WMfP1VbRA0fuxRx-vC9uA_GM6VH4sAidogGJCuXHYx",
        "cache-control": "no-cache"
      }
    }).done(function(response) {
      console.log(response);
    });
    // response.business[i].categories[i]
  });
  
  // // event listener to store button value
  $(".btnChoice").on("click", function(event) {
    var buttonValue = $(this).text();
    console.log(buttonValue);
    picks.push(buttonValue);
  });
  
  // global variable for picking cuisines
  var picks = ["Italian", "American", "Chinese", "Mexican", "Indian"];
  // global object of cuisine types
  var cuisine = {
    Italian: {
      picks: 0,
      name: "Italian"
    },
    American: {
      picks: 0,
      name: "American"
    },
    Chinese: {
      picks: 0,
      name: "Chinese"
    },
    Mexican: {
      picks: 0,
      name: "Mexican"
    },
    Indian: {
      picks: 0,
      name: "Indian"
    }
};
    console.log(cuisine);

