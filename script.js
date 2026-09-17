/* =========================================================
   BUONI - SCRIPT
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
   LISTA BUONI
   ========================================================= */

function generaListaBuoni() {

  const lista =
    document.getElementById("listaBuoni");

  if (!lista) {
    return;
  }

  lista.innerHTML = "";

  buoni.forEach(function (buono, indice) {

    const riga =
      document.createElement("button");

    riga.type = "button";

    riga.className =
      "bond-item-button";


    /* =====================================================
       ICONA
       ===================================================== */

    const icona =
      document.createElement("span");

    icona.className =
      "bond-item-icon";

    icona.innerHTML = `
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >

        <rect
          x="7"
          y="12"
          width="34"
          height="24"
          rx="3"
          fill="#ffd400"
        />

        <rect
          x="7"
          y="12"
          width="7"
          height="24"
          fill="#1766d1"
        />

        <text
          x="17"
          y="29"
          font-size="14"
          font-weight="700"
          fill="#1766d1"
        >€</text>

        <rect
          x="25"
          y="26"
          width="11"
          height="2"
          rx="1"
          fill="#ffffff"
        />

        <rect
          x="27"
          y="30"
          width="9"
          height="2"
          rx="1"
          fill="#ffffff"
        />

      </svg>
    `;


    /* =====================================================
       INFORMAZIONI
       ===================================================== */

    const informazioni =
      document.createElement("span");

    informazioni.className =
      "bond-item-info";

    informazioni.innerHTML = `
      <span class="data">
        scade il ${buono.scadenza}
      </span>

      <span class="nome">
        Buono 3×4 con premio
      </span>
    `;


    /* =====================================================
       VALORE
       ===================================================== */

    const valore =
      document.createElement("span");

    valore.className =
      "bond-item-value";

    valore.innerHTML = `
      <span class="label">
        valore rimborso lordo
      </span>

      <span class="valore">
        ${euro(buono.nominale)}
      </span>
    `;


    /* =====================================================
       ASSEMBLA
       ===================================================== */

    riga.appendChild(icona);
    riga.appendChild(informazioni);
    riga.appendChild(valore);


    /* =====================================================
       CLICK
       ===================================================== */

    riga.addEventListener("click", function () {

      apriDettaglio(indice);

    });


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
    calcolaDati(buono.nominale);


  const paginaPrincipale =
    document.getElementById("paginaPrincipale");

  const paginaDettaglio =
    document.getElementById("paginaDettaglio");


  if (paginaPrincipale) {
    paginaPrincipale.style.display = "none";
  }

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "block";
  }


  /* =====================================================
     TITOLO
     ===================================================== */

  const titolo =
    document.getElementById("detailTitolo");

  if (titolo) {
    titolo.textContent =
      "Buono 3×4 con premio";
  }


  /* =====================================================
     VALORE GRANDE
     ===================================================== */

  const valoreRimborso =
    document.getElementById("detailValoreRimborso");

  if (valoreRimborso) {
    valoreRimborso.textContent =
      euro(buono.nominale);
  }


  /* =====================================================
     DATI PRINCIPALI
     ===================================================== */

  const sottoscritto =
    document.getElementById("detailSottoscritto");

  if (sottoscritto) {
    sottoscritto.textContent =
      buono.sottoscritto;
  }


  const scadenza =
    document.getElementById("detailScadenza");

  if (scadenza) {
    scadenza.textContent =
      buono.scadenza;
  }


  const nominale =
    document.getElementById("detailNominale");

  if (nominale) {
    nominale.textContent =
      euro(buono.nominale);
  }


  /* =====================================================
     RITENUTA FISCALE
     ===================================================== */

  const ritenuta =
    document.getElementById("detailRitenuta");

  if (ritenuta) {
    ritenuta.textContent =
      euro(0);
  }


  /* =====================================================
     VALORE NETTO
     ===================================================== */

  const netto =
    document.getElementById("detailNetto");

  if (netto) {
    netto.textContent =
      euro(dati.nettoSenzaPremio);
  }


  /* =====================================================
     SENZA PREMIO
     ===================================================== */

  const lordoSenzaPremio =
    document.getElementById(
      "detailLordoSenzaPremio"
    );

  if (lordoSenzaPremio) {
    lordoSenzaPremio.textContent =
      euro(dati.lordoSenzaPremio);
  }


  const ritenutaScadenza =
    document.getElementById(
      "detailRitenutaScadenza"
    );

  if (ritenutaScadenza) {
    ritenutaScadenza.textContent =
      euro(dati.ritenutaSenzaPremio);
  }


  const nettoSenzaPremio =
    document.getElementById(
      "detailNettoSenzaPremio"
    );

  if (nettoSenzaPremio) {
    nettoSenzaPremio.textContent =
      euro(dati.nettoSenzaPremio);
  }


  /* =====================================================
     PREMIO
     ===================================================== */

  const premioLordo =
    document.getElementById(
      "detailPremioLordo"
    );

  if (premioLordo) {
    premioLordo.textContent =
      euro(dati.premioLordo);
  }


  const ritenutaPremio =
    document.getElementById(
      "detailRitenutaPremio"
    );

  if (ritenutaPremio) {
    ritenutaPremio.textContent =
      euro(dati.ritenutaPremio);
  }


  const premioNetto =
    document.getElementById(
      "detailPremioNetto"
    );

  if (premioNetto) {
    premioNetto.textContent =
      euro(dati.premioNetto);
  }


  /* =====================================================
     CON PREMIO
     ===================================================== */

  const lordoConPremio =
    document.getElementById(
      "detailLordoConPremio"
    );

  if (lordoConPremio) {
    lordoConPremio.textContent =
      euro(dati.lordoConPremio);
  }


  const ritenutaTotale =
    document.getElementById(
      "detailRitenutaTotale"
    );

  if (ritenutaTotale) {
    ritenutaTotale.textContent =
      euro(dati.ritenutaTotale);
  }


  const nettoConPremio =
    document.getElementById(
      "detailNettoConPremio"
    );

  if (nettoConPremio) {
    nettoConPremio.textContent =
      euro(dati.nettoConPremio);
  }


  /* =====================================================
     TORNA IN ALTO
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
    document.getElementById("paginaPrincipale");

  const paginaDettaglio =
    document.getElementById("paginaDettaglio");


  if (paginaDettaglio) {
    paginaDettaglio.style.display = "none";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "block";
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

function operationMessage(messaggio) {

  alert(
    messaggio + "\n\nOperazione simulata."
  );

}


/* =========================================================
   FUNZIONI GLOBALI
   ========================================================= */

window.apriDettaglio =
  apriDettaglio;

window.tornaAllaLista =
  tornaAllaLista;

window.operationMessage =
  operationMessage;
