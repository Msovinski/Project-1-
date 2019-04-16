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

// 3. weather api key and call
var weatherApiKey = "6fc19ba254fc6bfa17075467ace4ee41";
var weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?zip=" +
  "33330" +
  ",us" +
  "&appid=" +
  weatherApiKey;
console.log(weatherURL);

// ------------------ functions ----------------
// ------------------ still in progress ------------

//4. Ajax call function
function ajaxCall(search) {
  $.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function(weather) {
    console.log(weather.data[0]);

    var weatherResults = weather.data;
    console.log(weatherResults);
  });
}

$("#partyConfirm").on("click", function() {
  var members = $("#party-input")
    .val()
    .trim();

  if (members < 2) {
    document.getElementById("crave-2-input").style.visibility = "hidden";
  } else {
    document.getElementById("crave-2-input").style.visibility = "visible";
  }
  if (members >= 3) {
    document.getElementById("crave-3-input").style.visibility = "visible";
  } else {
    document.getElementById("crave-3-input").style.visibility = "hidden";
  }
  if (members >= 4) {
    document.getElementById("crave-4-input").style.visibility = "visible";
  } else {
    document.getElementById("crave-4-input").style.visibility = "hidden";
  }
  if (members >= 5) {
    document.getElementById("crave-5-input").style.visibility = "visible";
  } else {
    document.getElementById("crave-5-input").style.visibility = "hidden";
  }

  $("#save").on("click", function(event) {
    event.preventDefault();
   
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

    
    // pick the majority selected, push it to empty array
  picks.forEach((element) => {
    cuisine[element].picks++;
  });
  // variable for most selected cuisine
  var maxPick = 0;
  //variable to set a default in case nothing is clicked
  var bestChoice = "Greek";
  for (var property in cuisine) {
    var currentPick = cuisine[property].picks
    console.log(currentPick);
    if (currentPick > maxPick) {
      bestChoice = property;
      maxPick = currentPick;
    }
  }

  console.log("Survey says... " + bestChoice);

 // put the majority in the api call

  });
});

// // event listener to store button value
 $(".btnChoice").on("click", function(event) {
  var buttonValue = $(this).text();
  console.log(buttonValue);
  picks.push(buttonValue);
 });
 // global variable for picking cuisines
 var picks = ["Italian","American", "Chinese", "Mexican", "Indian"];
// global object of cuisine types
var cuisine = {
  "Italian": {
    picks: 0,
    name: "Italian"
  },
  "American": {
    picks: 0,
    name: "American"
  },
  "Chinese": {
    picks: 0,
    name: "Chinese"
  },
  "Mexican": {
    picks: 0,
    name: "Mexican"
  },
  "Indian": {
    picks: 0,
    name: "Indian"
  },
};
console.log(cuisine);



 
 
 
// yelp call
//  var queryUrl = "https://api.yelp.com/v3/businesses/{id}&apiTguaEbsqVv3hvtSt41pPee4Y5t5Gey8ZsSdbkgvmVjPXoN3xOjbUIH-1rXcwhfVk9DResP7FUTSWoWePZqzLi4WMfP1VbRA0fuxRx-vC9uA_GM6VH4sAidogGJCuXHYx"

//  $.ajax({
//      url: queryUrl, 
//      method: "GET"
 
//  }).done(function(response){
//    console.log(response);
// });

