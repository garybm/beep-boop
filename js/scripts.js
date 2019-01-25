//Businnes logic
// Spec #1	Program replaces 1 with "Beep!"
	// ◦	Example input: 1
	// ◦	Example output: "Beep!"

// function replaceOne(number) {
//   var results = [];
//   for (var i = 0; i <= number; i++) {
//   var inputString = (i.toString()).split("");
//     if (i === 1 && i !== 0) {
//       number.push("beep!");
//     };
// };
//  return numberList;
//
// }




// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var inputNumber =($("input#number").val());
    $(".numberOne").text(inputNumber);
    $("#story").show();

    event.preventDefault();
  });
});
