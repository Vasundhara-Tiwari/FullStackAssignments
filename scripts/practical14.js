let count = 0;
let button1, button2;
function increase() {
  button1 = document.getElementById("plus-button");
  var value = document.getElementById("value");
  button1.onclick = function () {
    count += 1;
    value.innerHTML = count;
    if (button2.disabled == true && count > 0) {
      button2.disabled = false;
    }
  };
}

function decrease() {
  button2 = document.getElementById("minus-button");
  var value = document.getElementById("value");
  button2.onclick = function () {
    if (count > 0) {
      button2.disabled = false;
      count -= 1;
      value.innerHTML = count;
    }
    if (count < 1) {
      button2.disabled = true;
    }
  };
}
