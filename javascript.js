
/******************************************************************************
Javascript Basic Oppgave 2: Funksjoner og Metoder

Løsninger på oppgave 1–8.
Vi bruker både vanlige funksjoner og pilfunksjoner.
******************************************************************************/

/******************************************************************************
OPPGAVE 1 – Oddetall og partall
******************************************************************************/

// Sjekker om et tall er et partall eller oddetall.
function sjekkTall(tall) {
    if (tall % 2 === 0) {
        return "Partall";
    } else {
        return "Oddetall";
    }
}

// Tester funksjonen.
console.log("Oppgave 1:");
console.log(sjekkTall(4));
console.log(sjekkTall(7));


/******************************************************************************
OPPGAVE 2 – Store bokstaver
******************************************************************************/

// Gjør teksten om til store bokstaver og legger til utropstegn.
const storeBokstaver = (tekst) => {
    return tekst.toUpperCase() + "!";
};

// Tester funksjonen.
console.log("Oppgave 2:");
console.log(storeBokstaver("Dette er kult"));
console.log(storeBokstaver("Jeg lærer Javascript"));


/******************************************************************************
OPPGAVE 3 – Hilsen basert på klokkeslett
******************************************************************************/

// Returnerer en hilsen basert på navn og time.
function lagHilsen(navn, time) {
    if (time === undefined) {
        return "Feil: Du må oppgi en time";
    }

    if (typeof time !== "number" || !Number.isInteger(time) || time < 0 || time > 23) {
        return "Ugyldig tid";
    }

    if (time <= 5) {
        return `God natt ${navn}`;
    } else if (time <= 11) {
        return `God morgen ${navn}`;
    } else if (time <= 17) {
        return `God dag ${navn}`;
    } else {
        return `God kveld ${navn}`;
    }
}

// Tester funksjonen.
console.log("Oppgave 3:");
console.log(lagHilsen("Gumini", 3));
console.log(lagHilsen("Gumini", 9));
console.log(lagHilsen("Gumini", 14));
console.log(lagHilsen("Gumini", 20));
console.log(lagHilsen("Gumini", 25));
console.log(lagHilsen("Gumini"));


/******************************************************************************
OPPGAVE 4 – Fjern første og siste element
******************************************************************************/

// Returnerer en ny array uten første og siste element.
const fjernForsteOgSiste = (liste) => {
    return liste.slice(1, -1);
};

// Tester funksjonen.
console.log("Oppgave 4:");
console.log(fjernForsteOgSiste(["Rød", "Grønn", "Blå", "Gul"]));
console.log(fjernForsteOgSiste(["En", "To", "Tre", "Fire", "Fem", "Seks"]));


/******************************************************************************
OPPGAVE 5 – Stringmetoder
******************************************************************************/

// Erstatter "vanskelig" med "gøy" og fjerner ekstra mellomrom.
function endreTekst(tekst) {
    return tekst.replace("vanskelig", "gøy").trim();
}

// Tester funksjonen.
console.log("Oppgave 5:");
console.log(endreTekst("  Javascript er vanskelig   "));
console.log(endreTekst(" Det er vanskelig å bruke metoder "));
console.log(endreTekst("   vanskelig        "));


/******************************************************************************
OPPGAVE 6 – Arraymetoder
******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

// Steg 1: Fjerner første element fra arrayen.
items.shift();
console.log("Etter steg 1:", items);

// Steg 2: Finner og erstatter Viskelær med Linjal.
const indeks = items.indexOf("Viskelær");
items.splice(indeks, 1, "Linjal");
console.log("Etter steg 2:", items);

// Steg 3: Fjerner Penn og Notatbok og legger til Markeringspenn.
items.splice(0, 2, "Markeringspenn");
console.log("Etter steg 3:", items);

// Steg 4: Kombinerer elementene til én string.
const samletTekst = items.join(" | ");
console.log("Etter steg 4:", samletTekst);

// Ekstra: Lager en array med elementer som inneholder bokstaven e.
const medBokstavenE = items.filter((item) => item.includes("e"));
console.log("Ekstra utfordring:", medBokstavenE);


/******************************************************************************
OPPGAVE 7 – Ekstra utfordring 1
******************************************************************************/

// Fjerner et element hvis det finnes, ellers legger vi det til.
const leggTilEllerFjern = (liste, tekst) => {
    const posisjon = liste.indexOf(tekst);

    if (posisjon !== -1) {
        liste.splice(posisjon, 1);
    } else {
        liste.push(tekst);
    }

    return liste;
};

// Tester funksjonen.
console.log("Oppgave 7:");
console.log(leggTilEllerFjern(["Rød", "Grønn"], "Blå"));
console.log(leggTilEllerFjern(["Rød", "Grønn", "Blå"], "Grønn"));
console.log(leggTilEllerFjern(["En", "To", "Tre"], "Fire"));
console.log(leggTilEllerFjern(["En", "To", "Tre"], "To"));


/******************************************************************************
OPPGAVE 8 – Ekstra utfordring 2
******************************************************************************/

// Behandler verdien basert på datatype.
function kulVerdi(verdi) {
    if (typeof verdi === "string") {
        return `😎${verdi}😎`;
    } else if (typeof verdi === "number") {
        return `😎${String(verdi * 2)}😎`;
    } else if (typeof verdi === "boolean") {
        return verdi ? "😎Ja😎" : "😎Slapp av😎";
    } else {
        return "😎Kun primitive verdier😎";
    }
}

// Tester funksjonen.
console.log("Oppgave 8:");
console.log(kulVerdi("Javascript"));
console.log(kulVerdi(10));
console.log(kulVerdi(true));
console.log(kulVerdi(false));
console.log(kulVerdi(["HTML", "CSS"]));


/******************************************************************************
FERDIG – ALLE OPPGAVENE ER LØST!
******************************************************************************/
