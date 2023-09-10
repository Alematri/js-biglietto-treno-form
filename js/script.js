function stamparisultato(){
  nomecognome()
  calcolaPrezzo()
  document.getElementById("numerocarro").innerHTML = randomgen("carrozza");
  document.getElementById("codicebiglietto").innerHTML = randomgen("biglietto");
 }

function nomecognome() {
  const name = document.getElementById("nameInput").value;
  const nomecognome = document.getElementById("nomecognome");
  nomecognome.innerHTML = name;
}

function randomgen(tiponumero) {
  let min= 0;
  let max= 0;
  let testo = ""

  if (tiponumero == "carrozza") {
    min=1;
    max=7;
    testo = "la tua carrozza è la numero: "
  } else {
    min=1000;
    max=9999;
    testo = "il numero del tuo biglietto è: "
  }
    return testo + Math.floor(Math.random() * (max - min +1) +min);
}

function calcolaPrezzo() {
  const km = parseInt(document.getElementById("kmInput").value);
  const age = parseInt(document.getElementById("ageInput").value);
  const prezzoAlKm = 0.21;

  let prezzoTotale = km * prezzoAlKm;
  let underage = 0.8;
  let overage = 0.6;

  if (age < 18) {
    prezzoTotale *= underage; // Sconto del 20% per i minorenni
  } else if (age >= 65) {
    prezzoTotale *= overage; // Sconto del 40% per gli over 65
  }

  const risultato = document.getElementById("risultato");
  risultato.innerHTML = "Il prezzo del biglietto è: €" + prezzoTotale.toFixed(2);
}
