/* =========================================================
   BUONI - SCRIPT
   ========================================================= */


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
   EURO
   ========================================================= */

function euro(valore) {

  return Number(valore).toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " €";

}


/* =========================================================
   CALCOLI
   ========================================================= */

function calcolaDati(nominale) {

  const lordoSenzaPremio =
    nominale * 1210.40 / 900;

  const ritenutaSenzaPremio =
    nominale * 38.80 / 900;

  const nettoSenzaPremio =
    nominale * 1171.60 / 900;

  const premioLordo =
    nominale * 72 / 900;

  const ritenutaPremio =
    nominale * 9 / 900;

  const premioNetto =
    nominale * 63 / 900;

  const lordoConPremio =
    nominale * 1282.40 / 900;

  const ritenutaTotale =
    nominale * 47.80 / 900;

  const nettoConPremio =
    nominale * 1234.60 / 900;

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
   AVVIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  aggiornaRiepilogo();

  generaListaBuoni();

  collegaFrecciaIndietro();

});


/* =========================================================
   RIEPILOGO
   ========================================================= */

function aggiornaRiepilogo() {

  const totale =
    buoni.reduce(function (somma, buono) {

      return somma + buono.nominale;

    }, 0);


  const totaleBuoni =
    document.getElementById("totaleBuoni");

  const valoreNominale =
    document.getElementById("valoreNominale");

  const valoreRimborsoLordo =
    document.getElementById("valoreRimborsoLordo");


  if (totaleBuoni) {

    totaleBuoni.textContent =
      buoni.length + " Buoni";

  }


  if (valoreNominale) {

    valoreNominale.textContent =
      euro(totale);

  }


  if (valoreRimborsoLordo) {

    valoreRimborsoLordo.textContent =
      euro(totale);

  }

}


/* =========================================================
   ICONA BUONO
   MODELLO BIANCO + BLU
   ========================================================= */

function creaIconaBuono() {

  const icona =
    document.createElement("div");

  icona.className =
    "bond-item-icon";


  icona.innerHTML = `

    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      <!-- TESSERA BIANCA -->

      <rect
        x="8"
        y="12"
        width="32"
        height="24"
        rx="4"
        fill="#FFFFFF"
        stroke="#0759C9"
        stroke-width="2.6"
      />


      <!-- EURO -->

      <text
        x="12"
        y="29"
        font-family="Arial, sans-serif"
        font-size="13"
        font-weight="700"
        fill="#0759C9"
      >€</text>


      <!-- RIGHE BLU -->

      <line
        x1="24"
        y1="21"
        x2="35"
        y2="21"
        stroke="#0759C9"
        stroke-width="2.4"
        stroke-linecap="round"
      />

      <line
        x1="24"
        y1="28"
        x2="33"
        y2="28"
        stroke="#0759C9"
        stroke-width="2.4"
        stroke-linecap="round"
      />

    </svg>

  `;


  return icona;

}


/* =========================================================
   LISTA BUONI
   ========================================================= */

function generaListaBuoni() {

  const lista =
    document.getElementById(
      "listaBuoni"
    );


  if (!lista) {
    return;
  }


  lista.innerHTML = "";


  buoni.forEach(function (buono, indice) {


    const riga =
      document.createElement("div");


    riga.className =
      "bond-item";


    const icona =
      creaIconaBuono();


    const informazioni =
      document.createElement("div");


    informazioni.className =
      "bond-item-info";


    informazioni.innerHTML = `

      <div class="data">
        scade il ${buono.scadenza}
      </div>

      <div class="nome">
        Buono 3×4 con premio
      </div>

    `;


    const valore =
      document.createElement("div");


    valore.className =
      "bond-item-value";


    valore.innerHTML = `

      <div class="label">
        valore rimborso lordo
      </div>

      <div class="valore">
        ${euro(buono.nominale)}
      </div>

    `;


    riga.appendChild(icona);

    riga.appendChild(informazioni);

    riga.appendChild(valore);


    /* CLICK */

    riga.addEventListener(
      "click",
      function () {

        apriDettaglio(indice);

      }
    );


    riga.setAttribute(
      "role",
      "button"
    );


    riga.setAttribute(
      "tabindex",
      "0"
    );


    /* TASTIERA */

    riga.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          apriDettaglio(indice);

        }

      }
    );


    lista.appendChild(riga);

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
    calcolaDati(
      buono.nominale
    );


  const paginaPrincipale =
    document.getElementById(
      "paginaPrincipale"
    );


  const paginaDettaglio =
    document.getElementById(
      "paginaDettaglio"
    );


  if (
    !paginaPrincipale ||
    !paginaDettaglio
  ) {

    return;

  }


  /* NASCONDE LISTA */

  paginaPrincipale.style.display =
    "none";


  /* MOSTRA DETTAGLIO */

  paginaDettaglio.style.display =
    "block";


  /* =====================================================
     TITOLO
     ===================================================== */

  const titolo =
    document.getElementById(
      "detailTitolo"
    );


  if (titolo) {

    titolo.textContent =
      "Buono 3×4 con premio";

  }


  /* =====================================================
     RIMBORSO NETTO
     ===================================================== */

  const valoreRimborso =
    document.getElementById(
      "detailRimborso"
    );


  if (valoreRimborso) {

    valoreRimborso.textContent =
      euro(dati.nettoConPremio);

  }


  /* =====================================================
     NOMINALE
     ===================================================== */

  const nominale =
    document.getElementById(
      "detailNominale"
    );


  if (nominale) {

    nominale.textContent =
      euro(buono.nominale);

  }


  /* =====================================================
     DATA SOTTOSCRIZIONE
     ===================================================== */

  const dataSottoscrizione =
    document.getElementById(
      "detailDataSottoscrizione"
    );


  if (dataSottoscrizione) {

    dataSottoscrizione.textContent =
      buono.sottoscritto;

  }


  /* =====================================================
     DATA SCADENZA
     ===================================================== */

  const dataScadenza =
    document.getElementById(
      "detailDataScadenza"
    );


  if (dataScadenza) {

    dataScadenza.textContent =
      buono.scadenza;

  }


  /* =====================================================
     LORDO
     ===================================================== */

  const lordo =
    document.getElementById(
      "detailLordo"
    );


  if (lordo) {

    lordo.textContent =
      euro(dati.lordoConPremio);

  }


  /* =====================================================
     RITENUTA
     ===================================================== */

  const ritenuta =
    document.getElementById(
      "detailRitenuta"
    );


  if (ritenuta) {

    ritenuta.textContent =
      euro(dati.ritenutaTotale);

  }


  /* =====================================================
     NETTO
     ===================================================== */

  const netto =
    document.getElementById(
      "detailNetto"
    );


  if (netto) {

    netto.textContent =
      euro(dati.nettoConPremio);

  }


  /* TORNA IN ALTO */

  window.scrollTo(
    0,
    0
  );

}


/* =========================================================
   TORNA ALLA LISTA
   ========================================================= */

function tornaAllaLista() {

  const paginaPrincipale =
    document.getElementById(
      "paginaPrincipale"
    );


  const paginaDettaglio =
    document.getElementById(
      "paginaDettaglio"
    );


  if (paginaDettaglio) {

    paginaDettaglio.style.display =
      "none";

  }


  if (paginaPrincipale) {

    paginaPrincipale.style.display =
      "block";

  }


  window.scrollTo(
    0,
    0
  );

}


/* =========================================================
   FRECCIA DETTAGLIO
   ========================================================= */

function collegaFrecciaIndietro() {

  const freccia =
    document.querySelector(
      ".detail-back"
    );


  if (!freccia) {
    return;
  }


  freccia.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      event.stopPropagation();

      tornaAllaLista();

    }
  );

}


/* =========================================================
   FUNZIONI GLOBALI
   ========================================================= */

window.apriDettaglio =
  apriDettaglio;

window.tornaAllaLista =
  tornaAllaLista;
