const div = document.getElementById("section1");
const getName = function () {
  const nomi = JSON.parse(localStorage.getItem("nomi"));
  if (nomi === null) {
    div.innerHTML = "";
    const alert = document.createElement("p");
    alert.style = " background-color:red; color:black;margin-bottom:20px;";
    alert.innerText = "!! Nessun nome precedentemente inserito.";
    div.appendChild(alert);
  } else {
    div.innerHTML = "";
    const previousName = document.createElement("p");
    previousName.style = "margin-bottom:20px;";
    previousName.innerText = nomi[nomi.length - 1];
    div.appendChild(previousName);
  }
};

// localStorage.removeItem("nomi");
window.addEventListener("DOMContentLoaded", function () {
  const removeButton = document.getElementById("removeLast");
  const form = document.getElementById("form");

  getName();

  form.onsubmit = function (e) {
    e.preventDefault();
    const nameArray = JSON.parse(localStorage.getItem("nomi")) || [];

    const nameValue = document.getElementById("input-name").value;

    nameArray.push(nameValue);

    localStorage.setItem("nomi", JSON.stringify(nameArray));
    getName();
    form.reset();
  };
  removeButton.onclick = function () {
    let nomi = JSON.parse(localStorage.getItem("nomi")) || [];
    if (nomi.length > 1) {
      nomi.pop();
      localStorage.setItem("nomi", JSON.stringify(nomi));
      getName();
    } else if (nomi.length === 1) {
      nomi.pop();
      localStorage.setItem("nomi", JSON.stringify(nomi));
      div.innerHTML = "";
      const alert = document.createElement("p");
      alert.style = " background-color:red; color:black;margin-bottom:20px;";
      alert.innerText = "!! nessun nome da rimuovere";
      div.appendChild(alert);
    } else {
      div.innerHTML = "";
      const alert = document.createElement("p");
      alert.style = " background-color:red; color:black;margin-bottom:20px;";
      alert.innerText = "!! nessun nome da rimuovere";
      div.appendChild(alert);
    }
  };
});
