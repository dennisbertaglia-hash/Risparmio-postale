/* =========================================================
   BUONI - SCRIPT COMPLETO
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
   FORMATTAZIONE EURO
   ========================================================= */

function euro(valore) {
  return Number(valore).toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " €";
}


/* =========================================================
   CALCOLI DETTAGLIO
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

  const valoreNominale =
    document.getElementById("valoreNominale");

  const valoreRimborsoLordo =
    document.getElementById("valoreRimborsoLordo");

  const totale = buoni.reduce(function (somma, buono) {
    return somma + buono.nominale;
  }, 0);


  if (valoreNominale) {
    valoreNominale.textContent = euro(totale);
  }

  /*
   * IMPORTANTE:
   * nel riepilogo il rimborso lordo visualizzato
   * rimane uguale al valore principale dei Buoni.
   *
   * Quindi:
   * 17.000,00 € -> 17.000,00 €
   */
  if (valoreRimborsoLordo) {
    valoreRimborsoLordo.textContent = euro(totale);
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
      document.createElement("div");

    riga.className = "buono";


    /* =====================================================
       ICONA
       ===================================================== */

    const icona =
      document.createElement("div");

    icona.className = "buono-icon";

    icona.innerHTML = `
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="#eef7ff"
        />

        <rect
          x="14"
          y="12"
          width="20"
          height="25"
          rx="3"
          fill="none"
          stroke="#0759c9"
          stroke-width="2"
        />

        <line
          x1="19"
          y1="19"
          x2="29"
          y2="19"
          stroke="#0759c9"
          stroke-width="2"
          stroke-linecap="round"
        />

        <line
          x1="19"
          y1="24"
          x2="29"
          y2="24"
          stroke="#0759c9"
          stroke-width="2"
          stroke-linecap="round"
        />

        <line
          x1="19"
          y1="29"
          x2="26"
          y2="29"
          stroke="#0759c9"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    `;


    /* =====================================================
       PARTE SINISTRA
       ===================================================== */

    const informazioni =
      document.createElement("div");

    informazioni.className = "buono-info";

    informazioni.innerHTML = `
      <div class="data">
        scade il ${buono.scadenza}
      </div>

      <div class="nome">
        Buono 3×4 con premio
      </div>
    `;


    /* =====================================================
       PARTE DESTRA
       ===================================================== */

    const valore =
      document.createElement("div");

    valore.className = "buono-valore";

    valore.innerHTML = `
      <div class="buono-valore-label">
        valore rimborso lordo
      </div>

      <div class="valore">
        ${euro(buono.nominale)}
      </div>
    `;


    /* =====================================================
       RIGA
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


    /*
     * Accessibilità / comportamento da elemento cliccabile
     */
    riga.setAttribute("role", "button");
    riga.setAttribute("tabindex", "0");

    riga.addEventListener("keydown", function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        apriDettaglio(indice);
      }

    });


    lista.appendChild(riga);

  });

}


/* =========================================================
   APRI DETTAGLIO
   ========================================================= */

function apriDettaglio(indice) {

  const buono = buoni[indice];

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
     VALORE PRINCIPALE
     ===================================================== */

  /*
   * IMPORTANTE:
   * il valore grande in alto rappresenta il valore
   * nominale/sottoscritto del Buono.
   *
   * Quindi un Buono da 500 € mostra:
   * 500,00 €
   *
   * NON il valore calcolato del rimborso.
   */

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
     NETTO SENZA PREMIO
     ===================================================== */

  const netto =
    document.getElementById("detailNetto");

  if (netto) {
    netto.textContent =
      euro(dati.nettoSenzaPremio);
  }


  /* =====================================================
     CALCOLO SENZA PREMIO
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
     TOTALE CON PREMIO
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
