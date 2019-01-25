

// Back-End
var beepBoop = function(userInput){
  var results = [];
  for (var i = 0; i <= userInput; i++) {
    var inputString = (i).toString();
    if (i0) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that. ");
  //   } else if (inputString.includes("1")) {
  //     results.push("Boop! ")
  //   } else if (inputString.includes("0")) {
  //     results.push("Beep! ");
  //   } else {
  //     results.push(""+ i +". ")
  //   }
  // }
  return results;
}

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
