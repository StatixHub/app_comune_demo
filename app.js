if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("Service Worker registrato");
            })
            .catch(error => {
                console.error("Errore Service Worker:", error);
            });
    });
}


// ==========================================
// VARIABILE GLOBALE DEI CONTENUTI
// ==========================================

let contenutiGlobali = [];


// ==========================================
// GOOGLE SCRIPT
// ==========================================

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzMkpgvEB4u9xv39Jh-xKmIgTYZuH24qgUE3NN14LF0yTG12aGKm_XjehtP2Ct6ymurbg/exec";


function showScreen(screen) {

    const homeSections = document.querySelectorAll(
        "main > .welcome, main > .quick-section, main > .content-section"
    );

    const serviceScreen =
        document.getElementById("screen-servizi");

    const serviziOnlineScreen =
        document.getElementById("screen-servizi-online");

    const serviziSocialiScreen =
        document.getElementById("screen-servizi-sociali");

    const istruzioneScreen =
        document.getElementById("screen-istruzione");

    const anagrafeScreen =
        document.getElementById("screen-anagrafe");

    const mobilitaServiziScreen =
        document.getElementById("screen-mobilita-servizi");

    const tributiScreen =
        document.getElementById("screen-tributi");

    const ediliziaTerritorioScreen =
        document.getElementById("screen-edilizia-territorio");

    const altriServiziScreen =
        document.getElementById("screen-altri-servizi");

    const viabilitaScreen =
        document.getElementById("screen-viabilita");

    const avvisiImportantiScreen =
        document.getElementById("screen-avvisi-importanti");

    const avvisiScreen =
        document.getElementById("screen-avvisi");

    const cantieriScreen =
        document.getElementById("screen-cantieri");

    const modificheCircolazioneScreen =
        document.getElementById("screen-modifiche-circolazione");


    // ==========================================
    // NASCONDE TUTTE LE SCHERMATE
    // ==========================================

    homeSections.forEach(section => {
        section.style.display = "none";
    });

    const screens = [
        serviceScreen,
        serviziOnlineScreen,
        serviziSocialiScreen,
        istruzioneScreen,
        anagrafeScreen,
        mobilitaServiziScreen,
        tributiScreen,
        ediliziaTerritorioScreen,
        altriServiziScreen,
        viabilitaScreen,
        avvisiImportantiScreen,
        avvisiScreen,
        cantieriScreen,
        modificheCircolazioneScreen
    ];

    screens.forEach(screenElement => {
        if (screenElement) {
            screenElement.style.display = "none";
        }
    });


    // ==========================================
    // HOME
    // ==========================================

    if (screen === "home") {

        homeSections.forEach(section => {
            section.style.display = "";
        });

        return;
    }


    // ==========================================
    // SERVIZI
    // ==========================================

    if (screen === "servizi") {

        if (serviceScreen)
            serviceScreen.style.display = "block";

        return;
    }


    // ==========================================
    // SERVIZI ONLINE
    // ==========================================

    if (screen === "servizi-online") {

        if (serviziOnlineScreen)
            serviziOnlineScreen.style.display = "block";

        return;
    }


    // ==========================================
    // SERVIZI SOCIALI
    // ==========================================

    if (screen === "servizi-sociali") {

        if (serviziSocialiScreen)
            serviziSocialiScreen.style.display = "block";

        return;
    }


    // ==========================================
    // ISTRUZIONE
    // ==========================================

    if (screen === "istruzione") {

        if (istruzioneScreen)
            istruzioneScreen.style.display = "block";

        return;
    }


    // ==========================================
    // ANAGRAFE E STATO CIVILE
    // ==========================================

    if (screen === "anagrafe") {

        if (anagrafeScreen)
            anagrafeScreen.style.display = "block";

        return;
    }


    // ==========================================
    // MOBILITÀ - SERVIZI
    // ==========================================

    if (screen === "mobilita-servizi") {

        if (mobilitaServiziScreen)
            mobilitaServiziScreen.style.display = "block";

        return;
    }


    // ==========================================
    // TRIBUTI
    // ==========================================

    if (screen === "tributi") {

        if (tributiScreen)
            tributiScreen.style.display = "block";

        return;
    }


    // ==========================================
    // EDILIZIA E TERRITORIO
    // ==========================================

    if (screen === "edilizia-territorio") {

        if (ediliziaTerritorioScreen)
            ediliziaTerritorioScreen.style.display = "block";

        return;
    }


    // ==========================================
    // ALTRI SERVIZI
    // ==========================================

    if (screen === "altri-servizi") {

        if (altriServiziScreen)
            altriServiziScreen.style.display = "block";

        return;
    }


    // ==========================================
    // VIABILITÀ
    // ==========================================

    if (screen === "viabilita") {

        if (viabilitaScreen)
            viabilitaScreen.style.display = "block";

        mostraViabilita();

        return;
    }


    // ==========================================
    // AVVISI IMPORTANTI
    // ==========================================

    if (screen === "avvisi-importanti") {

        if (avvisiImportantiScreen)
            avvisiImportantiScreen.style.display = "block";

        mostraTuttiAvvisiImportanti();

        return;
    }


    // ==========================================
    // AVVISI
    // ==========================================

    if (screen === "avvisi") {

        if (avvisiScreen)
            avvisiScreen.style.display = "block";

        mostraAvvisiCompleti();

        return;
    }


    // ==========================================
    // LAVORI E CANTIERI
    // ==========================================

    if (screen === "cantieri") {

        if (cantieriScreen)
            cantieriScreen.style.display = "block";

        mostraCantieri();

        return;
    }


    // ==========================================
    // MODIFICHE ALLA CIRCOLAZIONE
    // ==========================================

    if (screen === "modifiche-circolazione") {

        if (modificheCircolazioneScreen)
            modificheCircolazioneScreen.style.display = "block";

        mostraModificheCircolazione();

        return;
    }
}


// ==========================================
// CONTROLLA SE UN CONTENUTO È ATTIVO
// ==========================================

function avvisoAttivo(dataInizio, dataFine) {

    if (!dataInizio || !dataFine) {
        return false;
    }

    const oggi = new Date();
    oggi.setHours(0, 0, 0, 0);

    const inizio = new Date(dataInizio);
    const fine = new Date(dataFine);

    if (isNaN(inizio.getTime()) || isNaN(fine.getTime())) {
        return false;
    }

    const oggiData = new Date(
        oggi.getFullYear(),
        oggi.getMonth(),
        oggi.getDate()
    );

    const fineData = new Date(
        fine.getFullYear(),
        fine.getMonth(),
        fine.getDate()
    );

    return oggiData <= fineData;
}


// ==========================================
// FORMATTA LE DATE
// ==========================================

function formatData(data) {

    if (!data) {
        return "";
    }

    const dataConvertita = new Date(data);

    if (isNaN(dataConvertita.getTime())) {
        return data;
    }

    const giorno = String(
        dataConvertita.getDate()
    ).padStart(2, "0");

    const mese = String(
        dataConvertita.getMonth() + 1
    ).padStart(2, "0");

    const anno =
        dataConvertita.getFullYear();

    return `${giorno}/${mese}/${anno}`;
}


// ==========================================
// CREA UNA CARD GENERICA
// ==========================================

function creaCardContenuto(item) {

    return `
        <article class="content-card">

            <div class="content-card-title">
                ${item["Titolo"] || ""}
            </div>

            ${item["Zona"] ? `
                <div class="content-zone">
                    ${item["Zona"]}
                </div>
            ` : ""}

            <div class="content-description">
                ${item["Descrizione"] || ""}
            </div>

            <div class="content-date">

                <span>
                    Dal ${formatData(item["Data inizio"])}
                </span>

                <span>
                    al ${formatData(item["Data fine"])}
                </span>

            </div>

            ${item["Link"] ? `
                <a
                    class="content-link"
                    href="${item["Link"]}"
                    target="_blank"
                    rel="noopener"
                >
                    Maggiori informazioni →
                </a>
            ` : ""}

        </article>
    `;
}


// ==========================================
// RICEVE I CONTENUTI
// ==========================================

function riceviContenuti(dati) {

    console.log("Contenuti ricevuti:", dati);

    contenutiGlobali = dati;

    // HOME
    mostraAvvisiImportanti(dati);
    mostraAvvisi(dati);

    // VIABILITÀ
    mostraViabilita();
    mostraCantieri();
    mostraModificheCircolazione();
}


// ==========================================
// AVVISI IMPORTANTI - HOME
// ==========================================

function mostraAvvisiImportanti(dati) {

    const contenitore =
        document.getElementById("urgenti");

    if (!contenitore) {
        return;
    }

    const avvisi = dati.filter(item => {

        return (
            item["Sezione"] === "Avviso importante" &&
            avvisoAttivo(
                item["Data inizio"],
                item["Data fine"]
            )
        );

    });

    if (avvisi.length === 0) {

        contenitore.innerHTML = `
            <div class="empty-message">
                Nessun avviso urgente
            </div>
        `;

        return;
    }

    contenitore.innerHTML =
        avvisi
            .slice(0, 3)
            .map(creaCardContenuto)
            .join("");
}


// ==========================================
// AVVISI IMPORTANTI - TUTTI
// ==========================================

function mostraTuttiAvvisiImportanti() {

    const contenitore =
        document.getElementById(
            "lista-avvisi-importanti"
        );

    if (!contenitore) {
        return;
    }

    const avvisi =
        contenutiGlobali.filter(item => {

            return (
                item["Sezione"] === "Avviso importante" &&
                avvisoAttivo(
                    item["Data inizio"],
                    item["Data fine"]
                )
            );

        });

    if (avvisi.length === 0) {

        contenitore.innerHTML = `
            <div class="empty-message">
                Nessun avviso importante
            </div>
        `;

        return;
    }

    contenitore.innerHTML =
        avvisi
            .map(creaCardContenuto)
            .join("");
}


// ==========================================
// AVVISI NORMALI - HOME
// ==========================================

function mostraAvvisi(dati) {

    const contenitore =
        document.getElementById("lista-avvisi");

    if (!contenitore) {
        return;
    }

    const avvisi = dati.filter(item => {

        return (
            item["Sezione"] === "Avviso" &&
            avvisoAttivo(
                item["Data inizio"],
                item["Data fine"]
            )
        );

    });

    if (avvisi.length === 0) {

        contenitore.innerHTML = `
            <div class="empty-message">
                Nessun avviso
            </div>
        `;

        return;
    }

    contenitore.innerHTML =
        avvisi
            .slice(0, 3)
            .map(creaCardContenuto)
            .join("");
}


// ==========================================
// AVVISI NORMALI - TUTTI
// ==========================================

function mostraAvvisiCompleti() {

    const contenitore =
        document.getElementById("lista-avvisi");

    if (!contenitore) {
        return;
    }

    const avvisi =
        contenutiGlobali.filter(item => {

            return (
                item["Sezione"] === "Avviso" &&
                avvisoAttivo(
                    item["Data inizio"],
                    item["Data fine"]
                )
            );

        });

    if (avvisi.length === 0) {

        contenitore.innerHTML = `
            <div class="empty-message">
                Nessun avviso
            </div>
        `;

        return;
    }

    contenitore.innerHTML =
        avvisi
            .map(creaCardContenuto)
            .join("");
}


// ==========================================
// VIABILITÀ - SCHERMATA PRINCIPALE
// ==========================================

function mostraViabilita() {

    const contenitore =
        document.getElementById("lista-viabilita");

    if (!contenitore) {
        return;
    }

    /*
       La schermata principale Viabilità
       contiene solamente i pulsanti:
       - Lavori e cantieri
       - Modifiche alla circolazione
       - Parcheggi
       - Autobus
       - Treni
       - Navigazione

       I contenuti dei cantieri e delle modifiche
       vengono mostrati nelle rispettive schermate.
    */

    contenitore.innerHTML = "";
}


// ==========================================
// LAVORI E CANTIERI
// ==========================================

function mostraCantieri() {

    const contenitore =
        document.getElementById("lista-cantieri");

    if (!contenitore) {
        return;
    }

    const cantieri =
        contenutiGlobali.filter(item => {

            return (
                item["Sezione"] ===
				"Viabilità - cantiere"

                &&

                avvisoAttivo(
                    item["Data inizio"],
                    item["Data fine"]
                )
            );

        });

    if (cantieri.length === 0) {

        contenitore.innerHTML = `
            <div class="empty-message">
                Nessun lavoro o cantiere
            </div>
        `;

        return;
    }

    contenitore.innerHTML =
        cantieri
            .map(creaCardContenuto)
            .join("");
}


// ==========================================
// MODIFICHE ALLA CIRCOLAZIONE
// ==========================================

function mostraModificheCircolazione() {

    const contenitore =
        document.getElementById(
            "lista-modifiche-circolazione"
        );

    if (!contenitore) {
        return;
    }

    const modifiche =
        contenutiGlobali.filter(item => {

            return (
				item["Sezione"] ===
				"Viabilità - modifica alla circolazione"

                &&

                avvisoAttivo(
                    item["Data inizio"],
                    item["Data fine"]
                )
            );

        });

    if (modifiche.length === 0) {

        contenitore.innerHTML = `
            <div class="empty-message">
                Nessuna modifica alla circolazione
            </div>
        `;

        return;
    }

    contenitore.innerHTML =
        modifiche
            .map(creaCardContenuto)
            .join("");
}


// ==========================================
// CARICA I CONTENUTI
// ==========================================

function caricaContenuti() {

    const script =
        document.createElement("script");

    script.src =
        GOOGLE_SCRIPT_URL +
        "?callback=riceviContenuti";

    script.onerror = function () {

        console.error(
            "Errore nel caricamento dei contenuti"
        );

    };

    document.body.appendChild(script);
}


// ==========================================
// AVVIO
// ==========================================

caricaContenuti();
