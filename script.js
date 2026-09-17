/* =========================================================
   DATI DEI 20 BUONI
   ========================================================= */

const buoni = [

  {
    nominale: 500,
    sottoscritto: "16 Settembre 2026",
    scadenza: "16 Settembre 2038"
  },

  {
    nominale: 1500,
    sottoscritto: "14 Luglio 2026",
    scadenza: "14 Luglio 2038"
  },

  {
    nominale: 1000,
    sottoscritto: "12 Giugno 2026",
    scadenza: "12 Giugno 2038"
  },

  {
    nominale: 1500,
    sottoscritto: "16 Aprile 2026",
    scadenza: "16 Aprile 2038"
  },

  {
    nominale: 1500,
    sottoscritto: "11 Febbraio 2026",
    scadenza: "11 Febbraio 2038"
  },

  {
    nominale: 1200,
    sottoscritto: "15 Novembre 2025",
    scadenza: "15 Novembre 2037"
  },

  {
    nominale: 800,
    sottoscritto: "13 Ottobre 2025",
    scadenza: "13 Ottobre 2037"
  },

  {
    nominale: 900,
    sottoscritto: "11 Ottobre 2025",
    scadenza: "11 Ottobre 2037"
  },

  {
    nominale: 800,
    sottoscritto: "18 Giugno 2025",
    scadenza: "18 Giugno 2037"
  },

  {
    nominale: 800,
    sottoscritto: "14 Maggio 2025",
    scadenza: "14 Maggio 2037"
  },

  {
    nominale: 500,
    sottoscritto: "11 Aprile 2025",
    scadenza: "11 Aprile 2037"
  },

  {
    nominale: 800,
    sottoscritto: "16 Marzo 2025",
    scadenza: "16 Marzo 2037"
  },

  {
    nominale: 700,
    sottoscritto: "12 Febbraio 2025",
    scadenza: "12 Febbraio 2037"
  },

  {
    nominale: 500,
    sottoscritto: "15 Gennaio 2025",
    scadenza: "15 Gennaio 2037"
  },

  {
    nominale: 1000,
    sottoscritto: "13 Dicembre 2024",
    scadenza: "13 Dicembre 2036"
  },

  {
    nominale: 500,
    sottoscritto: "11 Novembre 2024",
    scadenza: "11 Novembre 2036"
  },

  {
    nominale: 800,
    sottoscritto: "10 Ottobre 2024",
    scadenza: "10 Ottobre 2036"
  },

  {
    nominale: 700,
    sottoscritto: "18 Settembre 2024",
    scadenza: "18 Settembre 2036"
  },

  {
    nominale: 500,
    sottoscritto: "10 Luglio 2024",
    scadenza: "10 Luglio 2036"
  },

  {
    nominale: 500,
    sottoscritto: "12 Maggio 2024",
    scadenza: "12 Maggio 2036"
  }

];


/* =========================================================
   FORMATO EURO
   ========================================================= */

function euro(numero) {

  return numero.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " €";

}


/* =========================================================
   CALCOLI DEL BUONO
   ========================================================= */

function calcolaDati(nominale) {

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


/* =========================================================
   TOTALE
   ========================================================= */

const totaleBuoni = buoni.reduce(
  (totale, buono) => totale + buono.nominale,
  0
);


/* =========================================================
   AGGIORNA IL RIEPILOGO
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const titoloRiepilogo =
    document.getElementById("totaleBuoni");

  const valoreNominale =
    document.getElementById("valoreNominale");

  const valoreRimborsoLordo =
    document.getElementById("valoreRimborsoLordo");


  if (titoloRiepilogo) {

    titoloRiepilogo.textContent =
      buoni.length + " Buoni";

  }


  if (valoreNominale) {

    valoreNominale.textContent =
      euro(totaleBuoni);

  }


  if (valoreRimborsoLordo) {

    valoreRimborsoLordo.textContent =
      euro(totaleBuoni);

  }


  generaListaBuoni();

});


/* =========================================================
   GENERA LA LISTA
   ========================================================= */

function generaListaBuoni() {

  /*
     Supporta entrambi gli ID:
     - listaBuoni
     - buoni
  */

  const listaBuoni =
    document.getElementById("listaBuoni") ||
    document.getElementById("buoni");


  if (!listaBuoni) {
    return;
  }


  listaBuoni.innerHTML = "";


  buoni.forEach(function (buono, indice) {

    const elemento =
      document.createElement("div");

    elemento.className = "bond-item";


    /*
       Usiamo un vero BUTTON:
       così ogni Buono è realmente cliccabile
       anche su iPhone.
    */

    elemento.innerHTML = `

      <button
        type="button"
        class="bond-item-button"
        onclick="apriDettaglio(${indice})"
      >

        <div class="bond-icon">

          <svg
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
          >

            <circle
              cx="40"
              cy="40"
              r="40"
              fill="#f0f7ff"
            />

            <rect
              x="19"
              y="24"
              width="42"
              height="32"
              rx="4"
              fill="none"
              stroke="#0759c9"
              stroke-width="3"
            />

            <path
              d="M27 33H53"
              stroke="#0759c9"
              stroke-width="3"
              stroke-linecap="round"
            />

            <path
              d="M27 41H53"
              stroke="#0759c9"
              stroke-width="3"
              stroke-linecap="round"
            />

            <path
              d="M27 49H43"
              stroke="#0759c9"
              stroke-width="3"
              stroke-linecap="round"
            />

          </svg>

        </div>


        <div class="bond-info">

          <div class="bond-date">
            Scade il ${buono.scadenza}
          </div>

          <div class="bond-type">
            Buono 3×4 con premio
          </div>

        </div>


        <div class="bond-value">

          <span class="bond-value-label">
            Valore rimborso lordo
          </span>

          <strong>
            ${euro(calcolaDati(buono.nominale).lordoConPremio)}
          </strong>

        </div>

      </button>

    `;


    listaBuoni.appendChild(elemento);

  });

}


/* =========================================================
   APRI DETTAGLIO
   ========================================================= */

function apriDettaglio(indice) {

  const buono =
    buoni[indice];


  if (!buono) {
    return;
  }


  const dati =
    calcolaDati(buono.nominale);


  /*
     Supporta sia la versione nuova
     sia quella precedente dell'HTML.
  */

  const paginaPrincipale =
    document.getElementById("mainPage") ||
    document.getElementById("paginaPrincipale");


  const paginaDettaglio =
    document.getElementById("detailPage") ||
    document.getElementById("paginaDettaglio");


  if (paginaPrincipale) {

    paginaPrincipale.style.display =
      "none";

  }


  if (paginaDettaglio) {

    paginaDettaglio.style.display =
      "block";

  }


  /* =====================================================
     DATI PRINCIPALI
     ===================================================== */

  const detailTitolo =
    document.getElementById("detailTitolo");


  const detailValoreRimborso =
    document.getElementById("detailValoreRimborso");


  const detailSottoscritto =
    document.getElementById("detailSottoscritto");


  const detailScadenza =
    document.getElementById("detailScadenza");


  const detailNominale =
    document.getElementById("detailNominale");


  const detailNetto =
    document.getElementById("detailNetto");


  if (detailTitolo) {

    detailTitolo.textContent =
      "Buono 3×4 con premio";

  }


  /*
     Valore grande nella card:
     valore di rimborso lordo
  */

  if (detailValoreRimborso) {

    detailValoreRimborso.textContent =
      euro(dati.lordoConPremio);

  }


  if (detailSottoscritto) {

    detailSottoscritto.textContent =
      buono.sottoscritto;

  }


  if (detailScadenza) {

    detailScadenza.textContent =
      buono.scadenza;

  }


  if (detailNominale) {

    detailNominale.textContent =
      euro(buono.nominale);

  }


  if (detailNetto) {

    detailNetto.textContent =
      euro(dati.nettoConPremio);

  }


  /* =====================================================
     DETTAGLIO CALCOLI
     ===================================================== */

  const detailLordoSenzaPremio =
    document.getElementById(
      "detailLordoSenzaPremio"
    );


  const detailRitenutaScadenza =
    document.getElementById(
      "detailRitenutaScadenza"
    );


  const detailNettoSenzaPremio =
    document.getElementById(
      "detailNettoSenzaPremio"
    );


  const detailPremioLordo =
    document.getElementById(
      "detailPremioLordo"
    );


  const detailRitenutaPremio =
    document.getElementById(
      "detailRitenutaPremio"
    );


  const detailPremioNetto =
    document.getElementById(
      "detailPremioNetto"
    );


  const detailLordoConPremio =
    document.getElementById(
      "detailLordoConPremio"
    );


  const detailRitenutaTotale =
    document.getElementById(
      "detailRitenutaTotale"
    );


  const detailNettoConPremio =
    document.getElementById(
      "detailNettoConPremio"
    );


  if (detailLordoSenzaPremio) {

    detailLordoSenzaPremio.textContent =
      euro(dati.lordoSenzaPremio);

  }


  if (detailRitenutaScadenza) {

    detailRitenutaScadenza.textContent =
      euro(dati.ritenutaSenzaPremio);

  }


  if (detailNettoSenzaPremio) {

    detailNettoSenzaPremio.textContent =
      euro(dati.nettoSenzaPremio);

  }


  if (detailPremioLordo) {

    detailPremioLordo.textContent =
      euro(dati.premioLordo);

  }


  if (detailRitenutaPremio) {

    detailRitenutaPremio.textContent =
      euro(dati.ritenutaPremio);

  }


  if (detailPremioNetto) {

    detailPremioNetto.textContent =
      euro(dati.premioNetto);

  }


  if (detailLordoConPremio) {

    detailLordoConPremio.textContent =
      euro(dati.lordoConPremio);

  }


  if (detailRitenutaTotale) {

    detailRitenutaTotale.textContent =
      euro(dati.ritenutaTotale);

  }


  if (detailNettoConPremio) {

    detailNettoConPremio.textContent =
      euro(dati.nettoConPremio);

  }


  /* =====================================================
     TORNA IN CIMA
     ===================================================== */

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

}


/* =========================================================
   TORNA ALLA LISTA
   ========================================================= */

function tornaAllaLista() {

  const paginaPrincipale =
    document.getElementById("mainPage") ||
    document.getElementById("paginaPrincipale");


  const paginaDettaglio =
    document.getElementById("detailPage") ||
    document.getElementById("paginaDettaglio");


  if (paginaDettaglio) {

    paginaDettaglio.style.display =
      "none";

  }


  if (paginaPrincipale) {

    paginaPrincipale.style.display =
      "block";

  }


  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

}


/* =========================================================
   OPERAZIONI
   ========================================================= */

function operationMessage(nome) {

  alert(
    nome + " — operazione simulata."
  );

}


/* =========================================================
   ESPORTAZIONE FUNZIONI
   ========================================================= */

window.apriDettaglio =
  apriDettaglio;

window.tornaAllaLista =
  tornaAllaLista;

window.operationMessage =
  operationMessage;
