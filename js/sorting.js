const bars = document.getElementById("bars");
const barsLength = document.getElementById("array_length");

function createBars() {
  let arr = [];
  bars.innerHTML = "";
  // Length of the array is the value from range input
  let arraySize = barsLength.value;
  for (var i = 0; i < arraySize; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  // Create bars
  for (var i = 0; i < arraySize; i++) {
    let bar = document.createElement("div");
    bar.classList.add("special");
    bar.style = "width:" + 100 / arraySize + "%;";
    var height = (arr[i] * 5 + 10).toString();
    height = height + "px";
    bar.style.height = height;
    bars.appendChild(bar);
  }
}

createBars();
