const buoni = [
  {
    sottoscritto: "12 Agosto 2026",
    scadenza: "12 Agosto 2038",
    nominale: 900
  },
  {
    sottoscritto: "03 Settembre 2026",
    scadenza: "03 Settembre 2038",
    nominale: 500
  },
  {
    sottoscritto: "22 Agosto 2026",
    scadenza: "22 Agosto 2038",
    nominale: 1200
  }
];


// =========================
// FORMATO EURO
// =========================

function euro(valore) {
  return valore.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " €";
}


// =========================
// CREAZIONE ELENCO BUONI
// =========================

function mostraBuoni() {

  const contenitore = document.getElementById("buoni");

  if (!contenitore) return;

  contenitore.innerHTML = "";

  buoni.forEach((buono, indice) => {

    const elemento = document.createElement("div");

    elemento.className = "buono";

    elemento.onclick = function () {
      apriDettaglio(indice);
    };

    elemento.innerHTML = `
      <div class="buono-icon">
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">

          <circle
            cx="40"
            cy="40"
            r="36"
            fill="#f1f8ff"
          />

          <rect
            x="22"
            y="27"
            width="36"
            height="25"
            rx="4"
            fill="white"
            stroke="#1261b9"
            stroke-width="3"
          />

          <line
            x1="30"
            y1="35"
            x2="49"
            y2="35"
            stroke="#1261b9"
            stroke-width="3"
            stroke-linecap="round"
          />

          <line
            x1="30"
            y1="43"
            x2="43"
            y2="43"
            stroke="#1261b9"
            stroke-width="3"
            stroke-linecap="round"
          />

          <circle
            cx="51"
            cy="43"
            r="3"
            fill="#1261b9"
          />

        </svg>
      </div>

      <div class="buono-info">

        <div class="buono-scadenza">
          Scade il ${buono.scadenza}
        </div>

        <div class="buono-titolo">
          Buono 3×4 con premio
        </div>

      </div>

      <div class="buono-valore">
        ${euro(buono.nominale)}
      </div>
    `;

    contenitore.appendChild(elemento);

  });
}


// =========================
// DATI DETTAGLIO
// =========================

function calcolaDati(nominale) {

  const fattore = nominale / 900;

  return {
    lordoSenzaPremio: 1210.40 * fattore,
    ritenutaScadenza: 38.80 * fattore,
    nettoSenzaPremio: 1171.60 * fattore,
    premioLordo: 72.00 * fattore,
    ritenutaPremio: 9.00 * fattore,
    premioNetto: 63.00 * fattore,
    lordoConPremio: 1282.40 * fattore,
    ritenutaTotale: 47.80 * fattore,
    nettoConPremio: 1234.60 * fattore
  };

}


// =========================
// APRI DETTAGLIO
// =========================

function apriDettaglio(indice) {

  const buono = buoni[indice];

  if (!buono) return;

  const dati = calcolaDati(buono.nominale);

  document.getElementById("detailTitolo").textContent =
    "Buono 3×4 con premio";

  document.getElementById("detailValoreRimborso").textContent =
    euro(buono.nominale);

  document.getElementById("detailSottoscritto").textContent =
    buono.sottoscritto;

  document.getElementById("detailScadenza").textContent =
    buono.scadenza;

  document.getElementById("detailNominale").textContent =
    euro(buono.nominale);

  document.getElementById("detailNetto").textContent =
    euro(buono.nominale);

  document.getElementById("detailLordoSenzaPremio").textContent =
    euro(dati.lordoSenzaPremio);

  document.getElementById("detailRitenutaScadenza").textContent =
    euro(dati.ritenutaScadenza);

  document.getElementById("detailNettoSenzaPremio").textContent =
    euro(dati.nettoSenzaPremio);

  document.getElementById("detailPremioLordo").textContent =
    euro(dati.premioLordo);

  document.getElementById("detailRitenutaPremio").textContent =
    euro(dati.ritenutaPremio);

  document.getElementById("detailPremioNetto").textContent =
    euro(dati.premioNetto);

  document.getElementById("detailLordoConPremio").textContent =
    euro(dati.lordoConPremio);

  document.getElementById("detailRitenutaTotale").textContent =
    euro(dati.ritenutaTotale);

  document.getElementById("detailNettoConPremio").textContent =
    euro(dati.nettoConPremio);


  // Nasconde pagina principale
  document.getElementById("paginaPrincipale").style.display = "none";

  // Mostra pagina dettaglio
  document.getElementById("paginaDettaglio").style.display = "block";

  // Torna in cima alla schermata
  window.scrollTo(0, 0);

}


// =========================
// TORNA ALLA LISTA
// =========================

function tornaAllaLista() {

  document.getElementById("paginaDettaglio").style.display = "none";

  document.getElementById("paginaPrincipale").style.display = "block";

  window.scrollTo(0, 0);

}


// =========================
// OPERAZIONI
// =========================

function operationMessage(testo) {

  alert(testo);

}


// =========================
// AVVIO
// =========================

document.addEventListener("DOMContentLoaded", function () {

  mostraBuoni();

});
