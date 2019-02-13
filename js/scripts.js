var romanInput;

$(document).ready(function() {
  $("#resultexception").hide();
  $("#romanForm").submit(function(event){
    event.preventDefault();
    ProcessInput();
    Translate();
    printResult();
  });
});

function ProcessInput(){
  romanInput = $("#romanInput").val();
}

function Translate(){
  $("#result").html("");
  $("#resultexception").html("one or more of your characters was not a roman numeral. <br> They have been trimmed from the result.");
  var res = 0;
  var i = 0;
  romanInput.split('').forEach(function(y){
    switch (y) {
      case "i":
      case "I":
      res += 1;
      break;
      case "v":
      case "V":
      res += 5;
      break;
      case "x":
      case "X":
      res += 10;
      break;
      case "L":
      case "l":
      res += 50;
      break;
      case "C":
      case "c":
      res += 100;
      break;
      case "D":
      case "d":
      res += 500;
      break;
      case "M":
      case "m":
      res += 1000;
      break;
      default:
      $("#resultexception").show();
      $("#resultexception").append(" " + y);
      break;
      case NaN:
      romanInput.splice(i,1);
      break;
      i++;
    }
    $("#result").append(" " + y);
  });
  $("#result").html(res);
}
function printResult(){

}
