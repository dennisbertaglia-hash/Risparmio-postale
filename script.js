/* =========================================================
   BUONI - SCRIPT DEFINITIVO
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
   ICONA BUONO
   MODELLO BLU
   ========================================================= */

function iconaBuonoSVG() {

  return `
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">

      <rect
        x="7"
        y="11"
        width="34"
        height="26"
        rx="5"
        fill="#FFFFFF"
        stroke="#0759C9"
        stroke-width="2.8"/>

      <text
        x="11"
        y="30"
        font-family="Arial, sans-serif"
        font-size="14"
        font-weight="700"
        fill="#0759C9">
        €
      </text>

      <line
        x1="24"
        y1="21"
        x2="36"
        y2="21"
        stroke="#0759C9"
        stroke-width="2.5"
        stroke-linecap="round"/>

      <line
        x1="24"
        y1="28"
        x2="34"
        y2="28"
        stroke="#0759C9"
        stroke-width="2.5"
        stroke-linecap="round"/>

    </svg>
  `;

}


/* =========================================================
   ICONA ACQUISTA
   ========================================================= */

function iconaAcquistaSVG() {

  return `
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">

      <!-- BUONO POSTERIORE -->

      <rect
        x="18"
        y="17"
        width="39"
        height="26"
        rx="4"
        transform="rotate(-8 18 17)"
        fill="#FFD400"/>

      <path
        d="M20 17L24.5 16.35L28.5 42L24 42.65L20 17Z"
        fill="#0759C9"/>


      <!-- BUONO ANTERIORE -->

      <rect
        x="18"
        y="25"
        width="39"
        height="26"
        rx="3.5"
        fill="#FFD400"/>

      <rect
        x="18"
        y="25"
        width="6"
        height="26"
        fill="#0759C9"/>


      <!-- RIGHE BIANCHE -->

      <rect
        x="32"
        y="35"
        width="18"
        height="3"
        rx="1.5"
        fill="#FFFFFF"/>

      <rect
        x="32"
        y="42"
        width="13"
        height="3"
        rx="1.5"
        fill="#FFFFFF"/>


      <!-- PLUS VERDE -->

      <circle
        cx="56"
        cy="53"
        r="11"
        fill="#45C96B"/>

      <path
        d="M56 47V59M50 53H62"
        stroke="#FFFFFF"
        stroke-width="3.2"
        stroke-linecap="round"/>

    </svg>
  `;

}


/* =========================================================
   ICONA RIMBORSO
   ========================================================= */

function iconaRimborsoSVG() {

  return `
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">

      <!-- MONETE -->

      <circle
        cx="38"
        cy="24"
        r="8"
        fill="#FFD400"/>

      <circle
        cx="47"
        cy="25"
        r="8"
        fill="#FFD400"/>

      <circle
        cx="30"
        cy="28"
        r="7"
        fill="#FFD400"/>


      <!-- PORTAFOGLIO -->

      <path
        d="M25 31H51C54.3 31 57 33.7 57 37V51C57 54.3 54.3 57 51 57H25C21.7 57 19 54.3 19 51V37C19 33.7 21.7 31 25 31Z"
        fill="#FFD400"/>


      <!-- FRECCIA VERDE -->

      <path
        d="M18 39L30 28L43 39L31 49V57H18V39Z"
        fill="#45C96B"/>


      <!-- CHIUSURA BLU -->

      <rect
        x="45"
        y="39"
        width="14"
        height="13"
        rx="5"
        fill="#0759C9"/>

      <circle
        cx="53"
        cy="45.5"
        r="2"
        fill="#FFFFFF"/>

    </svg>
  `;

}


/* =========================================================
   IMPOSTA LE ICONE OPERAZIONI
   ========================================================= */

function aggiornaIconeOperazioni() {

  const contenitori =
    document.querySelectorAll(
      ".operation-button .operation-icon"
    );

  if (contenitori.length >= 1) {

    contenitori[0].innerHTML =
      iconaAcquistaSVG();

  }

  if (contenitori.length >= 2) {

    contenitori[1].innerHTML =
      iconaRimborsoSVG();

  }

}


/* =========================================================
   RIEPILOGO
   ========================================================= */

function aggiornaRiepilogo() {

  const totale =
    buoni.reduce(
      function (somma, buono) {
        return somma + buono.nominale;
      },
      0
    );


  const totaleBuoni =
    document.getElementById(
      "totaleBuoni"
    );

  const valoreNominale =
    document.getElementById(
      "valoreNominale"
    );

  const valoreRimborsoLordo =
    document.getElementById(
      "valoreRimborsoLordo"
    );


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
   CREA ICONA BUONO
   ========================================================= */

function creaIconaBuono() {

  const icona =
    document.createElement("div");

  icona.className =
    "bond-item-icon";

  icona.innerHTML =
    iconaBuonoSVG();

  return icona;

}


/* =========================================================
   GENERA LISTA BUONI
   ========================================================= */

function generaListaBuoni() {

  const lista =
    document.getElementById(
      "listaBuoni"
    );


  if (!lista) {

    console.error(
      "Elemento #listaBuoni non trovato."
    );

    return;

  }


  lista.innerHTML = "";


  buoni.forEach(
    function (buono, indice) {

      const riga =
        document.createElement("div");

      riga.className =
        "bond-item";

      riga.setAttribute(
        "role",
        "button"
      );

      riga.setAttribute(
        "tabindex",
        "0"
      );


      /* ICONA */

      const icona =
        creaIconaBuono();


      /* INFORMAZIONI */

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


      /* VALORE */

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


      /* ASSEMBLA */

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

    }
  );

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

    console.error(
      "Pagine non trovate."
    );

    return;

  }


  paginaPrincipale.style.display =
    "none";

  paginaDettaglio.style.display =
    "block";


  /* TITOLO */

  const titolo =
    document.getElementById(
      "detailTitolo"
    );

  if (titolo) {

    titolo.textContent =
      "Buono 3×4 con premio";

  }


  /* RIMBORSO NETTO */

  const rimborso =
    document.getElementById(
      "detailRimborso"
    );

  if (rimborso) {

    rimborso.textContent =
      euro(dati.nettoConPremio);

  }


  /* NOMINALE */

  const nominale =
    document.getElementById(
      "detailNominale"
    );

  if (nominale) {

    nominale.textContent =
      euro(buono.nominale);

  }


  /* DATA SOTTOSCRIZIONE */

  const sottoscrizione =
    document.getElementById(
      "detailDataSottoscrizione"
    );

  if (sottoscrizione) {

    sottoscrizione.textContent =
      buono.sottoscritto;

  }


  /* DATA SCADENZA */

  const scadenza =
    document.getElementById(
      "detailDataScadenza"
    );

  if (scadenza) {

    scadenza.textContent =
      buono.scadenza;

  }


  /* LORDO */

  const lordo =
    document.getElementById(
      "detailLordo"
    );

  if (lordo) {

    lordo.textContent =
      euro(dati.lordoConPremio);

  }


  /* RITENUTA */

  const ritenuta =
    document.getElementById(
      "detailRitenuta"
    );

  if (ritenuta) {

    ritenuta.textContent =
      euro(dati.ritenutaTotale);

  }


  /* NETTO */

  const netto =
    document.getElementById(
      "detailNetto"
    );

  if (netto) {

    netto.textContent =
      euro(dati.nettoConPremio);

  }


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


  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

}


/* =========================================================
   FRECCIA INDIETRO
   ========================================================= */

function collegaFrecciaIndietro() {

  const freccia =
    document.querySelector(
      ".detail-back"
    );


  if (!freccia) {

    console.error(
      "Freccia dettaglio non trovata."
    );

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
   AVVIO APP
   ========================================================= */

function avviaApp() {

  aggiornaRiepilogo();

  generaListaBuoni();

  aggiornaIconeOperazioni();

  collegaFrecciaIndietro();

}


/* =========================================================
   AVVIO DOPO IL CARICAMENTO
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    avviaApp
  );

} else {

  avviaApp();

}


/* =========================================================
   FUNZIONI GLOBALI
   ========================================================= */

window.apriDettaglio =
  apriDettaglio;

window.tornaAllaLista =
  tornaAllaLista;
