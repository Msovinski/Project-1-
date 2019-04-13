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


// 2. Create initial train data in database (You can do this through the Firebase console online)
var database = firebase.database();



// 3. weather api key and call
var weatherApiKey = "6fc19ba254fc6bfa17075467ace4ee41";
var userZip;
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + userZip + ",us" + "&appid=" + weatherApiKey;




// ------------------ functions ----------------
// ------------------ still in progress ------------

//4. Ajax call function
$.ajax({
    url: weatherURL 
    method: "GET"
}).then(function(weatherNow) {


// ----------- method I found on Stack overflow, but havent gotten it to work either ---------

//   $(document).on("click", "btn-primary", function(event){
//     console.log( "click" ); 
//   });
    

// -------------- My method -----------------

    //   $(".btn-primary").on("click", function(event){
    //      event.preventDefault()
    //     userZip = $("#saveChangesButton").val().trim()
    //     console.log("click");
    // });

    $("#addTrain").on("click", function(event){
      event.preventDefault();
    firstCraving = $("#trainInput").val().trim();
    trainDestination = $("#destinationInput").val().trim();
    startTime = $("#firstTrainTimeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    
    $("#addTrain").val()
