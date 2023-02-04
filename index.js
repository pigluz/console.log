var imie = document.getElementById("imie");
var nazw = document.getElementById("nazw");
var wiek = document.getElementById("wiek");
var mail = document.getElementById("mail");
var pass = document.getElementById("pass");
var psel = document.getElementById("psel");
const selected = [];

document.getElementById("submit").addEventListener("click", function (e) {
    var plec = document.querySelector('input[name="plec"]:checked');
    var plecValue = plec ? plec.value : "";

    const rodo = document.querySelector('#rodo');
    var rodoMessage = rodo.checked ? "Zgoda na przetwarzanie danych osobowych została wyrażona." : "Zgoda na przetwarzanie danych osobowych nie została wyrażona.";
    
    console.log(
        " Imie: "                   +   imie.value + "\n\n",
        "Nazwisko: "                +   nazw.value + "\n\n",
        "Wiek: "                    +   wiek.value + "\n\n",
        "E-mail: "                  +   mail.value + "\n\n",
        "Hasło: "                   +   pass.value + "\n\n",
        "Pesel: "                   +   psel.value + "\n\n",
        "Wybrana płeć: "            +   plecValue + "\n\n",
        "Wybrane zainteresowania: " +   selected.join(", ") + "\n\n",
        "Status rodo: "             +   rodoMessage + "\n\n"
    );
});

const checkboxes = document.querySelectorAll('.checkbox_input');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      selected.push(this.value);
    } else {
      for (var i = 0; i < selected.length; i++) {
        if (selected[i] === this.value) {
          selected.splice(i, 1);
        }
      }
    }
  });
});