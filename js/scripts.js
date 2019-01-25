

//This is the backend functionality of the website
var beepBoop = function(userInput){
  var results = [];
  for (var i = 0; i <= userInput; i++) {
    var inputString = (i).toString();
    if (i === 1) {
      results.push("Beep!");
    } else if (inputString.includes("2")) {
      results.push("Boop! ")
  
  return results;
}

//This is the User logic

$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
    var initialInput = parseInt($("#user-input").val());
    var output = beepBoop(initialInput);
    var outputString = output.join("");

    $("#results").show();
    $("#results").text(outputString);
  });
});
