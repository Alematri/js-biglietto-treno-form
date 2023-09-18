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
    testo = "N°: "
  } else {
    min=1000;
    max=9999;
    testo = "ID: "
  }
  return testo + Math.floor(Math.random() * (max - min +1) +min);
}

function calcolaPrezzo() {
  const km = parseInt(document.getElementById("kmInput").value);
  const ageSelect = document.getElementById("ageSelect");
  const selectedValue = ageSelect.options[ageSelect.selectedIndex].value;
  const prezzoAlKm = 0.21;

  let prezzoTotale = km * prezzoAlKm;
  const scontoUnderage = 0.8;
  const scontoOverage = 0.6;

  switch (selectedValue) {
    case "underage":
      prezzoTotale *= scontoUnderage; // Sconto del 20% per i minorenni
      break;
    case "adult":
      // Nessuno sconto
      break;
    case "overage":
      prezzoTotale *= scontoOverage; // Sconto del 40% per gli over 65
      break;
  }

  const risultato = document.getElementById("risultato");
  risultato.innerHTML = "€" + prezzoTotale.toFixed(2);
}

// Aggiungi un eventListener al bottone "Genera il tuo biglietto" (btn-gen)
document.getElementById("btn-gen").addEventListener("click", function() {
  stamparisultato();
  // Rimuovi la classe "d-none" dall'elemento resultRow per renderlo visibile
  document.getElementById("resultRow").classList.remove("d-none");
});

// Aggiungi un eventListener al bottone "Annulla" (btn-null)
document.getElementById("btn-null").addEventListener("click", function() {
  // Aggiungi la classe "d-none" al click dell'elemento resultRow per nasconderlo
  document.getElementById("resultRow").classList.add("d-none");
});