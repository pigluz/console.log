// Pobieranie wartości z formularza
var imie = document.getElementById("imie");
var nazw = document.getElementById("nazw");
var wiek = document.getElementById("wiek");
var mail = document.getElementById("mail");
var pass = document.getElementById("pass");
var psel = document.getElementById("psel");

// Nasłuchiwanie kliknięcia przycisku "submit"
document.getElementById("submit").addEventListener("click", function (e) {
  // Pobieranie wybranej płci
  var plec = document.querySelector('input[name="plec"]:checked');
  var plecValue = plec ? plec.value : "";
  
  // Pobieranie wybranych zainteresowań
  var zain = document.querySelectorAll('.checkbox_input');
  var wybraneZain = [];
  for (var i = 0; i < zain.length; i++) {
    // Sprawdzenie, czy checkbox jest zaznaczony i jego wartość nie jest "on"
    if (zain[i].checked && zain[i].value !== "on") {
      // Dodawanie wybranego zainteresowania do tablicy
      wybraneZain.push(zain[i].value);
    }
  }
  
  // Pobieranie statusu checkboxa "rodo"
  var rodo = document.getElementById("rodo");
  var statusRodo = "Not confirmed";
  if (rodo.checked) {
    statusRodo = "Confirmed";
  }
  
  // Wypisanie wszystkich wartości w konsoli
  console.log(
    " Name: " + imie.value + "\n\n",
    "Surname: " + nazw.value + "\n\n",
    "Age: " + wiek.value + "\n\n",
    "E-mail: " + mail.value + "\n\n",
    "Password: " + pass.value + "\n\n",
    "SSN: " + psel.value + "\n\n",
    "Selected gender: " + plecValue + "\n\n",
    // Łączenie wybranych zainteresowań w jedną wartość za pomocą join()
    "Selected interests: " + wybraneZain.join(", ") + "\n\n",
    "Status of rodo: " + statusRodo + "\n\n")
});