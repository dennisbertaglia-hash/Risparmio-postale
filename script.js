/* =========================================
   DATI DEI BUONI
   ========================================= */

const buoni = [
  {
    sottoscrizione: "12 Agosto 2026",
    scadenza: "12 Agosto 2038",
    nominale: 900
  },

  {
    sottoscrizione: "03 Settembre 2026",
    scadenza: "03 Settembre 2038",
    nominale: 500
  },

  {
    sottoscrizione: "22 Agosto 2026",
    scadenza: "22 Agosto 2038",
    nominale: 1200
  }
];


/* =========================================
   ELEMENTI PAGINA
   ========================================= */

const contenitore = document.getElementById("buoni");

const paginaPrincipale =
  document.getElementById("paginaPrincipale");

const paginaDettaglio =
  document.getElementById("paginaDettaglio");


/* =========================================
   FORMATTAZIONE EURO
   ========================================= */

function euro(numero) {

  return numero.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " €";

}


/* =========================================
   CALCOLO DATI DETTAGLIO
   ========================================= */

function calcolaDati(nominale) {

  /*
    I valori del primo Buono sono quelli
    mostrati nelle schermate.

    Gli altri Buoni vengono proporzionati
    in base al loro valore nominale.
  */

  const lordoSenzaPremio =
    nominale * (1210.40 / 900);

  const ritenutaSenzaPremio =
    nominale * (38.80 / 900);

  const nettoSenzaPremio =
    nominale * (1171.60 / 900);

  const premioLordo =
    nominale * (72 / 900);

  const ritenutaPremio =
    nominale * (9 / 900);

  const premioNetto =
    nominale * (63 / 900);

  const lordoConPremio =
    nominale * (1282.40 / 900);

  const ritenutaTotale =
    nominale * (47.80 / 900);

  const nettoConPremio =
    nominale * (1234.60 / 900);


  return {

    lordoSenzaPremio,
    ritenutaSenzaPremio,
    nettoSenzaPremio,

    premioLordo,
    ritenutaPremio,
    premioNetto,

    lordoConPremio,
    ritenutaTotale,
    nettoConPremio

  };

}


/* =========================================
   CREA ELENCO BUONI
   ========================================= */

buoni.forEach((buono, indice) => {

  const elemento =
    document.createElement("div");

  elemento.className = "buono";


  elemento.innerHTML = `

    <div class="buono-icon">

      <svg
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >

        <circle
          cx="30"
          cy="30"
          r="30"
          fill="#eef7ff"
        />

        <rect
          x="12"
          y="19"
          width="36"
          height="23"
          rx="4"
          fill="none"
          stroke="#1261b9"
          stroke-width="3"
        />

        <text
          x="17"
          y="35"
          font-size="15"
          font-family="Arial"
          font-weight="bold"
          fill="#1261b9"
        >€</text>

        <line
          x1="30"
          y1="27"
          x2="43"
          y2="27"
          stroke="#1261b9"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        <line
          x1="30"
          y1="33"
          x2="40"
          y2="33"
          stroke="#1261b9"
          stroke-width="2.5"
          stroke-linecap="round"
        />

      </svg>

    </div>


    <div class="buono-info">

      <div class="data">
        Scade il ${buono.scadenza}
      </div>

      <div class="nome">
        Buono 3×4 con premio
      </div>

    </div>


    <div class="valore">
      ${euro(buono.nominale)}
    </div>

  `;


  /* CLICK SUL BUONO */

  elemento.addEventListener("click", () => {

    apriDettaglio(indice);

  });


  contenitore.appendChild(elemento);

});


/* =========================================
   APRI DETTAGLIO
   ========================================= */

function apriDettaglio(indice) {

  const buono = buoni[indice];

  const dati =
    calcolaDati(buono.nominale);


  /* TITOLO */

  document.getElementById(
    "detailTitolo"
  ).textContent =
    "Buono 3×4 con premio";


  /* RIMBORSO */

  document.getElementById(
    "detailValoreRimborso"
  ).textContent =
    euro(buono.nominale);


  /* DATE */

  document.getElementById(
    "detailSottoscritto"
  ).textContent =
    buono.sottoscrizione;


  document.getElementById(
    "detailScadenza"
  ).textContent =
    buono.scadenza;


  /* NOMINALE */

  document.getElementById(
    "detailNominale"
  ).textContent =
    euro(buono.nominale);


  /* VALORI ECONOMICI */

  document.getElementById(
    "detailNetto"
  ).textContent =
    euro(buono.nominale);


  document.getElementById(
    "detailLordoSenzaPremio"
  ).textContent =
    euro(dati.lordoSenzaPremio);


  document.getElementById(
    "detailRitenutaScadenza"
  ).textContent =
    euro(dati.ritenutaSenzaPremio);


  document.getElementById(
    "detailNettoSenzaPremio"
  ).textContent =
    euro(dati.nettoSenzaPremio);


  document.getElementById(
    "detailPremioLordo"
  ).textContent =
    euro(dati.premioLordo);


  document.getElementById(
    "detailRitenutaPremio"
  ).textContent =
    euro(dati.ritenutaPremio);


  document.getElementById(
    "detailPremioNetto"
  ).textContent =
    euro(dati.premioNetto);


  document.getElementById(
    "detailLordoConPremio"
  ).textContent =
    euro(dati.lordoConPremio);


  document.getElementById(
    "detailRitenutaTotale"
  ).textContent =
    euro(dati.ritenutaTotale);


  document.getElementById(
    "detailNettoConPremio"
  ).textContent =
    euro(dati.nettoConPremio);


  /* CAMBIO PAGINA */

  paginaPrincipale.style.display = "none";

  paginaDettaglio.classList.add("active");


  /* TORNA IN CIMA ALLA PAGINA */

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* =========================================
   TORNA ALLA LISTA
   ========================================= */

function tornaAllaLista() {

  paginaDettaglio.classList.remove("active");

  paginaPrincipale.style.display = "block";


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* =========================================
   OPERAZIONI
   ========================================= */

function operationMessage(nome) {

  alert(
    nome +
    "\n\nQuesta funzione è simulata."
  );

}
