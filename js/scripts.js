

// Back-End
var beepBoop = function(userInput){
  var results = [];
  for (var i = 0; i <= userInput; i++) {
    var inputString = (i).toString();
  

//User interface

$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
    var initialInput = parseInt($("#user-input").val());
    var output = beepBoop(initialInput);
    var outputString = output.join("");

    $("#display-field").show();
    $("#display-field").text(outputString);
  });
});
