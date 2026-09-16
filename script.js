/* =========================================
   DATI DEI BUONI
   ========================================= */

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


/* =========================================
   FUNZIONE EURO
   ========================================= */

function euro(numero) {

  return numero.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " €";

}


/* =========================================
   CALCOLO DATI BUONO
   ========================================= */

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


/* =========================================
   TOTALE BUONI
   ========================================= */

const totaleBuoni =
  buoni.reduce(
    (totale, buono) => totale + buono.nominale,
    0
  );


/* =========================================
   PAGINE
   ========================================= */

const paginaHome =
  document.getElementById("paginaHome");

const paginaPrincipale =
  document.getElementById("paginaPrincipale");

const paginaDettaglio =
  document.getElementById("paginaDettaglio");


/* =========================================
   AVVIO APP
   ========================================= */

function mostraHome() {

  if (paginaHome) {
    paginaHome.style.display = "block";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "none";
  }

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "none";
  }

  window.scrollTo(0, 0);

}


mostraHome();


/* =========================================
   APRI RISPARMIO
   ========================================= */

function apriRisparmio() {

  if (paginaHome) {
    paginaHome.style.display = "none";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "block";
  }

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "none";
  }

  window.scrollTo(0, 0);

}


/* =========================================
   TORNA ALLA HOME
   ========================================= */

function tornaAllaHome() {

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "none";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "none";
  }

  if (paginaHome) {
    paginaHome.style.display = "block";
  }

  window.scrollTo(0, 0);

}


/* =========================================
   AGGIORNA RIEPILOGO PRINCIPALE
   ========================================= */

const titoloRiepilogo =
  document.getElementById("totaleBuoni");

const valoreNominale =
  document.getElementById("valoreNominale");

const valoreRimborsoLordo =
  document.getElementById("valoreRimborsoLordo");


if (titoloRiepilogo) {

  titoloRiepilogo.textContent =
    "20 Buoni";

}


if (valoreNominale) {

  valoreNominale.textContent =
    "17.000,00 €";

}


if (valoreRimborsoLordo) {

  valoreRimborsoLordo.textContent =
    "17.000,00 €";

}


/* =========================================
   GENERA ELENCO BUONI
   ========================================= */

const listaBuoni =
  document.getElementById("buoni");


if (listaBuoni) {

  listaBuoni.innerHTML = "";

  buoni.forEach((buono, indice) => {

    const elemento =
      document.createElement("div");

    elemento.className = "buono";


    elemento.innerHTML = `

      <div class="buono-icon">

        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <rect
            x="3"
            y="6"
            width="22"
            height="16"
            rx="2.5"
            stroke="#0757B8"
            stroke-width="2"
          />

          <path
            d="M8 11H20"
            stroke="#0757B8"
            stroke-width="2"
            stroke-linecap="round"
          />

          <path
            d="M14 16H20"
            stroke="#0757B8"
            stroke-width="2"
            stroke-linecap="round"
          />

          <text
            x="5.5"
            y="18"
            font-family="Arial, sans-serif"
            font-size="9"
            font-weight="700"
            fill="#0757B8"
          >€</text>

        </svg>

      </div>


      <div class="buono-info">

        <div class="data">
          ${buono.sottoscritto}
        </div>

        <div class="nome">
          Buono 3×4 con premio
        </div>

      </div>


      <div class="valore">
        ${euro(buono.nominale)}
      </div>

    `;


    elemento.addEventListener(
      "click",
      () => apriDettaglio(indice)
    );


    listaBuoni.appendChild(elemento);

  });

}


/* =========================================
   APRI DETTAGLIO
   ========================================= */

function apriDettaglio(indice) {

  const buono =
    buoni[indice];

  const dati =
    calcolaDati(buono.nominale);


  if (paginaHome) {
    paginaHome.style.display = "none";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "none";
  }

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "block";
  }


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


  /* =========================================
     VALORE GRANDE IN ALTO
     MOSTRA IL NOMINALE DEL BUONO
     ========================================= */

  if (detailValoreRimborso) {

    detailValoreRimborso.textContent =
      euro(buono.nominale);

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


  const detailLordoSenzaPremio =
    document.getElementById("detailLordoSenzaPremio");

  const detailRitenutaScadenza =
    document.getElementById("detailRitenutaScadenza");

  const detailNettoSenzaPremio =
    document.getElementById("detailNettoSenzaPremio");

  const detailPremioLordo =
    document.getElementById("detailPremioLordo");

  const detailRitenutaPremio =
    document.getElementById("detailRitenutaPremio");

  const detailPremioNetto =
    document.getElementById("detailPremioNetto");

  const detailLordoConPremio =
    document.getElementById("detailLordoConPremio");

  const detailRitenutaTotale =
    document.getElementById("detailRitenutaTotale");

  const detailNettoConPremio =
    document.getElementById("detailNettoConPremio");


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


  window.scrollTo(0, 0);

}


/* =========================================
   TORNA ALLA LISTA
   ========================================= */

function tornaAllaLista() {

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "none";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "block";
  }

  if (paginaHome) {
    paginaHome.style.display = "none";
  }

  window.scrollTo(0, 0);

}


/* =========================================
   OPERAZIONI
   ========================================= */

function operationMessage(nome) {

  alert(
    nome + " — operazione simulata."
  );

}
