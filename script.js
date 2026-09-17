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


/* =====================================================
   FORMATTAZIONE EURO
   ===================================================== */

function euro(numero) {
  return numero.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " €";
}


/* =====================================================
   CALCOLI BUONO
   ===================================================== */

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


/* =====================================================
   TOTALE BUONI
   ===================================================== */

const totaleBuoni = buoni.reduce(
  (totale, buono) => totale + buono.nominale,
  0
);


/* =====================================================
   RIEPILOGO PAGINA BUONI
   ===================================================== */

const titoloRiepilogo =
  document.getElementById("totaleBuoni");

const valoreNominale =
  document.getElementById("valoreNominale");

const valoreRimborsoLordo =
  document.getElementById("valoreRimborsoLordo");


if (titoloRiepilogo) {
  titoloRiepilogo.textContent = "20 Buoni";
}

if (valoreNominale) {
  valoreNominale.textContent = "17.000,00 €";
}

if (valoreRimborsoLordo) {
  valoreRimborsoLordo.textContent = "17.000,00 €";
}


/* =====================================================
   CREAZIONE ELENCO BUONI
   ===================================================== */

const contenitoreBuoni =
  document.getElementById("buoni");


if (contenitoreBuoni) {

  buoni.forEach((buono, indice) => {

    const elemento = document.createElement("div");

    elemento.className = "buono";

    elemento.onclick = function () {
      apriDettaglio(indice);
    };


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
            x="4"
            y="4"
            width="20"
            height="20"
            rx="3"
            stroke="#0757B8"
            stroke-width="1.6"
          />

          <path
            d="M9 10H19"
            stroke="#0757B8"
            stroke-width="1.6"
            stroke-linecap="round"
          />

          <path
            d="M9 14H19"
            stroke="#0757B8"
            stroke-width="1.6"
            stroke-linecap="round"
          />

          <path
            d="M9 18H15"
            stroke="#0757B8"
            stroke-width="1.6"
            stroke-linecap="round"
          />

        </svg>

      </div>


      <div class="buono-info">

        <div class="data">
          scade il ${buono.scadenza}
        </div>

        <div class="nome">
          Buono 3×4 con premio
        </div>

      </div>


      <div class="buono-valore">

        <div class="buono-valore-label">
          valore rimborso lordo
        </div>

        <div class="valore">
          ${euro(buono.nominale)}
        </div>

      </div>

    `;


    contenitoreBuoni.appendChild(elemento);

  });

}


/* =====================================================
   APRI PAGINA RISPARMIO / BUONI
   ===================================================== */

function apriRisparmio() {

  const paginaHome =
    document.getElementById("paginaHome");

  const paginaPrincipale =
    document.getElementById("paginaPrincipale");

  const paginaDettaglio =
    document.getElementById("paginaDettaglio");


  if (paginaHome) {
    paginaHome.style.display = "none";
  }

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "none";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "block";
  }

  window.scrollTo(0, 0);
}


/* =====================================================
   TORNA ALLA HOME
   ===================================================== */

function tornaAllaHome() {

  const paginaHome =
    document.getElementById("paginaHome");

  const paginaPrincipale =
    document.getElementById("paginaPrincipale");

  const paginaDettaglio =
    document.getElementById("paginaDettaglio");


  if (paginaPrincipale) {
    paginaPrincipale.style.display = "none";
  }

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "none";
  }

  if (paginaHome) {
    paginaHome.style.display = "block";
  }

  window.scrollTo(0, 0);
}


/* =====================================================
   APRI DETTAGLIO BUONO
   ===================================================== */

function apriDettaglio(indice) {

  const buono = buoni[indice];

  if (!buono) {
    return;
  }


  const dati =
    calcolaDati(buono.nominale);


  const paginaHome =
    document.getElementById("paginaHome");

  const paginaPrincipale =
    document.getElementById("paginaPrincipale");

  const paginaDettaglio =
    document.getElementById("paginaDettaglio");


  if (paginaHome) {
    paginaHome.style.display = "none";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "none";
  }

  if (paginaDettaglio) {
    paginaDettaglio.style.display = "block";
  }


  /* TITOLO */

  const detailTitolo =
    document.getElementById("detailTitolo");

  if (detailTitolo) {
    detailTitolo.textContent =
      "Buono 3×4 con premio";
  }


  /* =================================================
     VALORE GRANDE IN ALTO

     DEVE ESSERE IL VALORE NOMINALE ACQUISTATO,
     NON IL VALORE DI RIMBORSO LORDO
     ================================================= */

  const detailValoreRimborso =
    document.getElementById("detailValoreRimborso");

  if (detailValoreRimborso) {
    detailValoreRimborso.textContent =
      euro(buono.nominale);
  }


  const detailValoreRimborsoLabel =
    document.querySelector(".detail-rimborso-label");

  if (detailValoreRimborsoLabel) {
    detailValoreRimborsoLabel.textContent =
      "Valore nominale";
  }


  /* SOTTOSCRITTO */

  const detailSottoscritto =
    document.getElementById("detailSottoscritto");

  if (detailSottoscritto) {
    detailSottoscritto.textContent =
      buono.sottoscritto;
  }


  /* SCADENZA */

  const detailScadenza =
    document.getElementById("detailScadenza");

  if (detailScadenza) {
    detailScadenza.textContent =
      buono.scadenza;
  }


  /* VALORE NOMINALE */

  const detailNominale =
    document.getElementById("detailNominale");

  if (detailNominale) {
    detailNominale.textContent =
      euro(buono.nominale);
  }


  /* VALORE NETTO */

  const detailNetto =
    document.getElementById("detailNetto");

  if (detailNetto) {
    detailNetto.textContent =
      euro(buono.nominale);
  }


  /* LORDO SENZA PREMIO */

  const detailLordoSenzaPremio =
    document.getElementById(
      "detailLordoSenzaPremio"
    );

  if (detailLordoSenzaPremio) {
    detailLordoSenzaPremio.textContent =
      euro(dati.lordoSenzaPremio);
  }


  /* RITENUTA A SCADENZA */

  const detailRitenutaScadenza =
    document.getElementById(
      "detailRitenutaScadenza"
    );

  if (detailRitenutaScadenza) {
    detailRitenutaScadenza.textContent =
      euro(dati.ritenutaSenzaPremio);
  }


  /* NETTO SENZA PREMIO */

  const detailNettoSenzaPremio =
    document.getElementById(
      "detailNettoSenzaPremio"
    );

  if (detailNettoSenzaPremio) {
    detailNettoSenzaPremio.textContent =
      euro(dati.nettoSenzaPremio);
  }


  /* PREMIO LORDO */

  const detailPremioLordo =
    document.getElementById(
      "detailPremioLordo"
    );

  if (detailPremioLordo) {
    detailPremioLordo.textContent =
      euro(dati.premioLordo);
  }


  /* RITENUTA PREMIO */

  const detailRitenutaPremio =
    document.getElementById(
      "detailRitenutaPremio"
    );

  if (detailRitenutaPremio) {
    detailRitenutaPremio.textContent =
      euro(dati.ritenutaPremio);
  }


  /* PREMIO NETTO */

  const detailPremioNetto =
    document.getElementById(
      "detailPremioNetto"
    );

  if (detailPremioNetto) {
    detailPremioNetto.textContent =
      euro(dati.premioNetto);
  }


  /* LORDO CON PREMIO */

  const detailLordoConPremio =
    document.getElementById(
      "detailLordoConPremio"
    );

  if (detailLordoConPremio) {
    detailLordoConPremio.textContent =
      euro(dati.lordoConPremio);
  }


  /* RITENUTA TOTALE */

  const detailRitenutaTotale =
    document.getElementById(
      "detailRitenutaTotale"
    );

  if (detailRitenutaTotale) {
    detailRitenutaTotale.textContent =
      euro(dati.ritenutaTotale);
  }


  /* NETTO CON PREMIO */

  const detailNettoConPremio =
    document.getElementById(
      "detailNettoConPremio"
    );

  if (detailNettoConPremio) {
    detailNettoConPremio.textContent =
      euro(dati.nettoConPremio);
  }


  window.scrollTo(0, 0);
}


/* =====================================================
   TORNA ALLA LISTA BUONI
   ===================================================== */

function tornaAllaLista() {

  const paginaDettaglio =
    document.getElementById("paginaDettaglio");

  const paginaPrincipale =
    document.getElementById("paginaPrincipale");


  if (paginaDettaglio) {
    paginaDettaglio.style.display = "none";
  }

  if (paginaPrincipale) {
    paginaPrincipale.style.display = "block";
  }

  window.scrollTo(0, 0);
}


/* =====================================================
   OPERAZIONI SIMULATE
   ===================================================== */

function operationMessage(nome) {

  alert(
    nome + " - funzione simulata"
  );

}
