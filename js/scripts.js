

//This is the backend functionality of the website
var beepBoop = function(userInput, name){
  var results = [];
  for (var i = 0; i <= userInput; i++) {
    var inputString = (i).toString();
    if (i === 1) {
      results.push(" Beep! ");
    } else if (inputString.includes("2")) {
      results.push(" Boop! ")
    } else if (inputString.includes("3")) {
      results.push(" I'm sorry " + name + " I'm afraid I can't do that. ");
    } else {
      results.push(""+ i +". ")
    }
  }
  return results;
}

//This is the User logic//

$(document).ready(function(){
  $("#input-form").submit(function(event){
    var userInput = parseInt($("#user-input").val());
    var userName= $("#name").val();
    var output = beepBoop(userInput, userName);
    var outputString = output.join("");

    $("#results").show();
    $("#results").text(outputString);
      event.preventDefault();
  });
});
