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
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + "33330" + ",us" + "&appid=" + weatherApiKey;
console.log(weatherURL);



// ------------------ functions ----------------
// ------------------ still in progress ------------

//4. Ajax call function
function ajaxCall(search){
  $.ajax({
      url: weatherURL,
      method: "GET"
  }).then(function(weather){
      console.log(weather.data[0]);

      var weatherResults = weather.data;
      console.log(weatherResults);
  });

  (
};
 $("#partyConfirm").on("click", function(){
    var members = $("#party-input").val().trim();

    if(members < 2){
        document.getElementById("crave-2-input").style.visibility = "hidden";
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
    console.log(input);
  
   // $("#partyConfirm").on("click", function(event){
       
});
});


//Form button control

