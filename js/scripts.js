//Businnes logic
// Spec #1	Program replaces 1 with "Beep!"
	// ◦	Example input: 1
	// ◦	Example output: "Beep!"

function replaceOne(number) {
  for (var i = 0; i <= number; i++) {
  var numberList = (i.toString()).split("");
    if (i === 0 && i !== 0) {
      numberList.push("I'm sorry, " + name + ". I'm afraid I can't do that.")
    }
};
 return numberList;

}




// User Interface Logic
$(document).ready(function() {
  $("#beepBoop").submit(function(event) {
    var number = parseInt($("input#number").val());
      event.preventDefault();
  });
});
