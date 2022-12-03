function evenOrOdd() {
  var input = document.getElementById("evenOrOdd").value;
  var output = document.getElementById("result");
  if (input % 2 == 0) {
    output.value = "Your result is even";
  } else if (input % 2 != 0) {
    output.value = "Your result is odd";
  } else {
    output.value = "Your entered 0";
  }
}
