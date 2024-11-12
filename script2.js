const updateCounter = function () {
  const counter = document.getElementById("counter");
  let counterValue = sessionStorage.getItem("counter");

  if (counterValue == null) {
    counterValue = 0;
  } else {
    counterValue = parseInt(counterValue);
  }
  counterValue++;
  sessionStorage.setItem("counter", counterValue);
  counter.innerText = counterValue;
};

setInterval(updateCounter, 1000);
