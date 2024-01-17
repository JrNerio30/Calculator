// Display Value and Event Keys
function dis(val) {
  document.getElementById('result').value += val
}


function myFunction(event) {
  if(event.key == '0' || event.key == '1'
      || event.key == '2' || event.key == '3' 
      || event.key == '4'|| event.key == '5'
      || event.key == '6'|| event.key == '7'
      || event.key == '8'|| event.key == '9'
      || event.key == '+'|| event.key == '-'
      || event.key == '*'|| event.key == '/');
      document.getElementById('result').value += event.key
}

const cal = document.getElementById('calculator');
cal.onkeyup = function (event) { 
  if(event.keycode === 13) {
    console.log("Enter");
    let x = document.getElementById('result').value
    console.log(x);
    solve();
  }
}

// Evaluate The Digit and Return Result
function solve(){
  let x = document.getElementById('result').value
  let y = math.evaluate(x);
  document.getElementById('result').value = y;
}

// Clear Display
function clr(){
  document.getElementById('result').value = "";
}



