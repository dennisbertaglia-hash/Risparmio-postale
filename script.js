/* =========================================================
   DATI BUONI
   ========================================================= */

const buoni = [
  {
    nominale: 500,
    acquisto: "16 Settembre 2026",
    scadenza: "16 Settembre 2038"
  },
  {
    nominale: 1500,
    acquisto: "14 Luglio 2026",
    scadenza: "14 Luglio 2038"
  },
  {
    nominale: 1000,
    acquisto: "12 Giugno 2026",
    scadenza: "12 Giugno 2038"
  },
  {
    nominale: 1500,
    acquisto: "16 Aprile 2026",
    scadenza: "16 Aprile 2038"
  },
  {
    nominale: 1500,
    acquisto: "11 Febbraio 2026",
    scadenza: "11 Febbraio 2038"
  },
  {
    nominale: 1200,
    acquisto: "15 Novembre 2025",
    scadenza: "15 Novembre 2037"
  },
  {
    nominale: 800,
    acquisto: "13 Ottobre 2025",
    scadenza: "13 Ottobre 2037"
  },
  {
    nominale: 900,
    acquisto: "11 Ottobre 2025",
    scadenza: "11 Ottobre 2037"
  },
  {
    nominale: 800,
    acquisto: "18 Giugno 2025",
    scadenza: "18 Giugno 2037"
  },
  {
    nominale: 800,
    acquisto: "14 Maggio 2025",
    scadenza: "14 Maggio 2037"
  },
  {
    nominale: 500,
    acquisto: "11 Aprile 2025",
    scadenza: "11 Aprile 2037"
  },
  {
    nominale: 800,
    acquisto: "16 Marzo 2025",
    scadenza: "16 Marzo 2037"
  },
  {
    nominale: 700,
    acquisto: "12 Febbraio 2025",
    scadenza: "12 Febbraio 2037"
  },
  {
    nominale: 500,
    acquisto: "15 Gennaio 2025",
    scadenza: "15 Gennaio 2037"
  },
  {
    nominale: 1000,
    acquisto: "13 Dicembre 2024",
    scadenza: "13 Dicembre 2036"
  },
  {
    nominale: 500,
    acquisto: "11 Novembre 2024",
    scadenza: "11 Novembre 2036"
  },
  {
    nominale: 800,
    acquisto: "10 Ottobre 2024",
    scadenza: "10 Ottobre 2036"
  },
  {
    nominale: 700,
    acquisto: "18 Settembre 2024",
    scadenza: "18 Settembre 2036"
  },
  {
    nominale: 500,
    acquisto: "10 Luglio 2024",
    scadenza: "10 Luglio 2036"
  },
  {
    nominale: 500,
    acquisto: "12 Maggio 2024",
    scadenza: "12 Maggio 2036"
  }
];


/* =========================================================
   FORMATTAZIONE EURO
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

function calcolaBuono(nominale) {

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
   TOTALE
   ========================================================= */

const totaleNominale = buoni.reduce(
  (totale, buono) => totale + buono.nominale,
  0
);


/* =========================================================
   PAGINE
   ========================================================= */

function mostraPagina(idPagina) {

  const pagine = [
    "mainPage",
    "paginaPrincipale",
    "buoniPage",
    "detailPage",
    "paginaDettaglio"
  ];

  pagine.forEach(id => {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.style.display = "none";
    }
  });

  const pagina = document.getElementById(idPagina);

  if (pagina) {
    pagina.style.display = "block";
  }
}


/* =========================================================
   HOME
   ========================================================= */

function tornaAllaHome() {

  const mainPage =
    document.getElementById("mainPage") ||
    document.getElementById("paginaPrincipale");

  const buoniPage =
    document.getElementById("buoniPage");

  const detailPage =
    document.getElementById("detailPage") ||
    document.getElementById("paginaDettaglio");

  if (mainPage) {
    mainPage.style.display = "block";
  }

  if (buoniPage) {
    buoniPage.style.display = "none";
  }

  if (detailPage) {
    detailPage.style.display = "none";
  }

  window.scrollTo(0, 0);
}


/* =========================================================
   APERTURA RISPARMIO
   ========================================================= */

function apriRisparmio() {

  const mainPage =
    document.getElementById("mainPage") ||
    document.getElementById("paginaPrincipale");

  const buoniPage =
    document.getElementById("buoniPage");

  const detailPage =
    document.getElementById("detailPage") ||
    document.getElementById("paginaDettaglio");

  if (mainPage) {
    mainPage.style.display = "none";
  }

  if (detailPage) {
    detailPage.style.display = "none";
  }

  if (buoniPage) {
    buoniPage.style.display = "block";
  }

  window.scrollTo(0, 0);

  aggiornaRiepilogo();
  generaListaBuoni();
}


/* =========================================================
   TORNA ALLA LISTA
   ========================================================= */

function tornaAllaLista() {

  const buoniPage =
    document.getElementById("buoniPage");

  const detailPage =
    document.getElementById("detailPage") ||
    document.getElementById("paginaDettaglio");

  if (detailPage) {
    detailPage.style.display = "none";
  }

  if (buoniPage) {
    buoniPage.style.display = "block";
  }

  window.scrollTo(0, 0);
}


/* =========================================================
   RIEPILOGO
   ========================================================= */

function aggiornaRiepilogo() {

  const numeroBuoni =
    document.getElementById("numeroBuoni");

  const valoreNominale =
    document.getElementById("valoreNominale");

  const valoreRimborsoLordo =
    document.getElementById("valoreRimborsoLordo");

  if (numeroBuoni) {
    numeroBuoni.textContent = buoni.length;
  }

  if (valoreNominale) {
    valoreNominale.textContent =
      euro(totaleNominale);
  }

  if (valoreRimborsoLordo) {

    const totaleLordo = buoni.reduce(
      (totale, buono) => {

        const calcolo =
          calcolaBuono(buono.nominale);

        return totale + calcolo.lordoConPremio;

      },
      0
    );

    valoreRimborsoLordo.textContent =
      euro(totaleLordo);
  }
}


/* =========================================================
   ICONA BUONO
   ========================================================= */

function iconaBuono() {

  return `
    <svg
      viewBox="0 0 40 40"
      width="28"
      height="28"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="5"
        width="26"
        height="30"
        rx="2"
        fill="none"
        stroke="#0759c9"
        stroke-width="1.6"
      />

      <line
        x1="12"
        y1="12"
        x2="28"
        y2="12"
        stroke="#0759c9"
        stroke-width="1.5"
        stroke-linecap="round"
      />

      <line
        x1="12"
        y1="17"
        x2="25"
        y2="17"
        stroke="#0759c9"
        stroke-width="1.5"
        stroke-linecap="round"
      />

      <line
        x1="12"
        y1="22"
        x2="28"
        y2="22"
        stroke="#0759c9"
        stroke-width="1.5"
        stroke-linecap="round"
      />

      <line
        x1="12"
        y1="27"
        x2="22"
        y2="27"
        stroke="#0759c9"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  `;
}


/* =========================================================
   LISTA BUONI
   ========================================================= */

function generaListaBuoni() {

  const lista =
    document.getElementById("listaBuoni") ||
    document.getElementById("buoni");

  if (!lista) {
    return;
  }

  lista.innerHTML = "";

  buoni.forEach((buono, indice) => {

    const calcolo =
      calcolaBuono(buono.nominale);

    const elemento =
      document.createElement("div");

    elemento.className = "bond-item";

    elemento.innerHTML = `

      <button
        type="button"
        class="bond-item-button"
        onclick="apriDettaglio(${indice})"
      >

        <div class="bond-icon">
          ${iconaBuono()}
        </div>

        <div class="bond-info">

          <div class="bond-type">
            Buono fruttifero postale
          </div>

          <div class="bond-date">
            scade il ${buono.scadenza}
          </div>

        </div>

        <div class="bond-value">

          <span class="bond-value-label">
            valore rimborso lordo
          </span>

          <strong>
            ${euro(calcolo.lordoConPremio)}
          </strong>

        </div>

      </button>

    `;

    lista.appendChild(elemento);
  });
}


/* =========================================================
   DETTAGLIO BUONO
   ========================================================= */

function apriDettaglio(indice) {

  const buono = buoni[indice];

  if (!buono) {
    return;
  }

  const calcolo =
    calcolaBuono(buono.nominale);


  const buoniPage =
    document.getElementById("buoniPage");

  const detailPage =
    document.getElementById("detailPage") ||
    document.getElementById("paginaDettaglio");


  if (buoniPage) {
    buoniPage.style.display = "none";
  }

  if (detailPage) {
    detailPage.style.display = "block";
  }


  /* ---------------------------------------------
     VALORE PRINCIPALE
     --------------------------------------------- */

  const valorePrincipale =
    document.getElementById("detailValoreRimborso");

  if (valorePrincipale) {
    valorePrincipale.textContent =
      euro(buono.nominale);
  }


  const etichettaValore =
    document.getElementById("detailValoreLabel");

  if (etichettaValore) {
    etichettaValore.textContent =
      "Valore nominale";
  }


  /* ---------------------------------------------
     DATA ACQUISTO
     --------------------------------------------- */

  const dataAcquisto =
    document.getElementById("detailDataAcquisto");

  if (dataAcquisto) {
    dataAcquisto.textContent =
      buono.acquisto;
  }


  /* ---------------------------------------------
     DATA SCADENZA
     --------------------------------------------- */

  const dataScadenza =
    document.getElementById("detailDataScadenza");

  if (dataScadenza) {
    dataScadenza.textContent =
      buono.scadenza;
  }


  /* ---------------------------------------------
     VALORE NOMINALE
     --------------------------------------------- */

  const dettaglioNominale =
    document.getElementById("detailValoreNominale");

  if (dettaglioNominale) {
    dettaglioNominale.textContent =
      euro(buono.nominale);
  }


  /* ---------------------------------------------
     RIMBORSO LORDO SENZA PREMIO
     --------------------------------------------- */

  const lordoSenzaPremio =
    document.getElementById("detailLordoSenzaPremio");

  if (lordoSenzaPremio) {
    lordoSenzaPremio.textContent =
      euro(calcolo.lordoSenzaPremio);
  }


  /* ---------------------------------------------
     RITENUTA SENZA PREMIO
     --------------------------------------------- */

  const ritenutaSenzaPremio =
    document.getElementById("detailRitenutaSenzaPremio");

  if (ritenutaSenzaPremio) {
    ritenutaSenzaPremio.textContent =
      euro(calcolo.ritenutaSenzaPremio);
  }


  /* ---------------------------------------------
     NETTO SENZA PREMIO
     --------------------------------------------- */

  const nettoSenzaPremio =
    document.getElementById("detailNettoSenzaPremio");

  if (nettoSenzaPremio) {
    nettoSenzaPremio.textContent =
      euro(calcolo.nettoSenzaPremio);
  }


  /* ---------------------------------------------
     PREMIO LORDO
     --------------------------------------------- */

  const premioLordo =
    document.getElementById("detailPremioLordo");

  if (premioLordo) {
    premioLordo.textContent =
      euro(calcolo.premioLordo);
  }


  /* ---------------------------------------------
     RITENUTA PREMIO
     --------------------------------------------- */

  const ritenutaPremio =
    document.getElementById("detailRitenutaPremio");

  if (ritenutaPremio) {
    ritenutaPremio.textContent =
      euro(calcolo.ritenutaPremio);
  }


  /* ---------------------------------------------
     PREMIO NETTO
     --------------------------------------------- */

  const premioNetto =
    document.getElementById("detailPremioNetto");

  if (premioNetto) {
    premioNetto.textContent =
      euro(calcolo.premioNetto);
  }


  /* ---------------------------------------------
     LORDO CON PREMIO
     --------------------------------------------- */

  const lordoConPremio =
    document.getElementById("detailLordoConPremio");

  if (lordoConPremio) {
    lordoConPremio.textContent =
      euro(calcolo.lordoConPremio);
  }


  /* ---------------------------------------------
     RITENUTA TOTALE
     --------------------------------------------- */

  const ritenutaTotale =
    document.getElementById("detailRitenutaTotale");

  if (ritenutaTotale) {
    ritenutaTotale.textContent =
      euro(calcolo.ritenutaTotale);
  }


  /* ---------------------------------------------
     NETTO CON PREMIO
     --------------------------------------------- */

  const nettoConPremio =
    document.getElementById("detailNettoConPremio");

  if (nettoConPremio) {
    nettoConPremio.textContent =
      euro(calcolo.nettoConPremio);
  }


  window.scrollTo(0, 0);
}


/* =========================================================
   OPERAZIONI SIMULATE
   ========================================================= */

function operationMessage(messaggio) {

  alert(messaggio);
}


/* =========================================================
   AVVIO
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    aggiornaRiepilogo();

    generaListaBuoni();

    const detailPage =
      document.getElementById("detailPage") ||
      document.getElementById("paginaDettaglio");

    if (detailPage) {
      detailPage.style.display = "none";
    }

  }
);
