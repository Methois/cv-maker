function validateForm() {
    let isValid = true;

    // Reset foutmeldingen
    document.getElementById("error-naam").textContent = "";
    document.getElementById("error-achternaam").textContent = "";
    document.getElementById("error-functie").textContent = "";
    document.getElementById("error-telefoon").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-straat").textContent = "";
    document.getElementById("error-huisnummer").textContent = "";
    document.getElementById("error-stad").textContent = "";
    document.getElementById("error-profieltekst").textContent = "";
    document.getElementById("error-vaardigheden").textContent = "";
    document.getElementById("error-opleidingen").textContent = "";
    document.getElementById("error-werkervaring").textContent = "";

    // Valideer naam
    const naam = document.getElementById("naam").value.trim();
    if (naam === "") {
        document.getElementById("error-naam").textContent = "Naam is vereist.";
        isValid = false;
    }

    // Valideer achternaam
    const achternaam = document.getElementById("achternaam").value.trim();
    if (achternaam === "") {
        document.getElementById("error-achternaam").textContent = "Achternaam is vereist.";
        isValid = false;
    }

    // Valideer functie titel
    const functie = document.getElementById("functie-titel").value.trim();
    if (functie === "") {
        document.getElementById("error-functie").textContent = "Functie titel is vereist.";
        isValid = false;
    }

    // Valideer telefoonnummer
    const telefoon = document.getElementById("telefoon").value.trim();
    if (telefoon === "") {
        document.getElementById("error-telefoon").textContent = "Telefoonnummer is vereist.";
        isValid = false;
    }

    // Valideer e-mail
    const email = document.getElementById("email").value.trim();
    if (email === "" || !validateEmail(email)) {
        document.getElementById("error-email").textContent = "Voer een geldige e-mail in.";
        isValid = false;
    }

    // Valideer straatnaam
    const straat = document.getElementById("straat").value.trim();
    if (straat === "") {
        document.getElementById("error-straat").textContent = "Straatnaam is vereist.";
        isValid = false;
    }

    // Valideer huisnummer
    const huisnummer = document.getElementById("huisnummer").value.trim();
    if (huisnummer === "") {
        document.getElementById("error-huisnummer").textContent = "Huisnummer is vereist.";
        isValid = false;
    }

    // Valideer stad
    const stad = document.getElementById("stad").value.trim();
    if (stad === "") {
        document.getElementById("error-stad").textContent = "Stad is vereist.";
        isValid = false;
    }

    // Valideer profiel tekst
    const profieltekst = document.getElementById("profieltekst").value.trim();
    if (profieltekst === "") {
        document.getElementById("error-profieltekst").textContent = "Profieltekst is vereist.";
        isValid = false;
    }

    // Valideer vaardigheden
    const skills = document.getElementById("skill-list").childNodes.length;
    if (skills === 0) {
        document.getElementById("error-vaardigheden").textContent = "Voeg ten minste één vaardigheid toe.";
        isValid = false;
    }

    // Valideer opleidingen
    const educations = document.getElementById("education-list").childNodes.length;
    if (educations === 0) {
        document.getElementById("error-opleidingen").textContent = "Voeg ten minste één opleiding toe.";
        isValid = false;
    }

    // Valideer werkervaring
    const jobs = document.getElementById("job-list").childNodes.length;
    if (jobs === 0) {
        document.getElementById("error-werkervaring").textContent = "Voeg ten minste één werkervaring toe.";
        isValid = false;
    }

    // Als alles goed is, kan je de CV downloaden
    if (isValid) {
        handleDownload(naam, achternaam);
    } else {
        console.log("Formulier is ongeldig.");
    }
}    

// Functie om email validatie te doen
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Functie om vaardigheden toe te voegen
function addSkill() {
    const skill = document.getElementById("vaardigheid").value.trim();
    const stars = document.getElementById("skill-stars").value;
    if (skill === "") {
        document.getElementById("error-vaardigheden").textContent = "Vaardigheid kan niet leeg zijn.";
        return;
    }
    const skillList = document.getElementById("skill-list");
    skillList.innerHTML += `<div>${skill} - ${stars} sterren</div>`;
    document.getElementById("vaardigheid").value = ""; // Reset veld
    document.getElementById("error-vaardigheden").textContent = ""; // Reset foutmelding
}

// Functie om opleidingen toe te voegen
function addEducation() {
    const school = document.getElementById("opleiding-school").value.trim();
    const titel = document.getElementById("opleiding-titel").value.trim();
    const begin = document.getElementById("opleiding-begin").value.trim();
    const eind = document.getElementById("opleiding-eind").value.trim();
    const current = document.getElementById("current-education").checked;

    if (school === "" || titel === "" || (current === false && (begin === "" || eind === ""))) {
        document.getElementById("error-opleidingen").textContent = "Alle velden zijn vereist.";
        return;
    }

    const educationList = document.getElementById("education-list");
    educationList.innerHTML += `<div>${school} - ${titel} (${begin} - ${eind})</div>`;
    document.getElementById("opleiding-school").value = "";
    document.getElementById("opleiding-titel").value = "";
    document.getElementById("opleiding-begin").value = "";
    document.getElementById("opleiding-eind").value = "";
    document.getElementById("error-opleidingen").textContent = ""; // Reset foutmelding
}

// Functie om werkervaring toe te voegen
function addJob() {
    const werkgever = document.getElementById("werkgever").value.trim();
    const functie = document.getElementById("werk-functie").value.trim();
    const startdatum = document.getElementById("werk-startdatum").value.trim();
    const einddatum = document.getElementById("werk-einddatum").value.trim();
    const current = document.getElementById("current-job").checked;
    const beschrijving = document.getElementById("werk-beschrijving").value.trim();

    if (werkgever === "" || functie === "" || (current === false && (startdatum === "" || einddatum === "")) || beschrijving === "") {
        document.getElementById("error-werkervaring").textContent = "Alle velden zijn vereist.";
        return;
    }

    const jobList = document.getElementById("job-list");
    jobList.innerHTML += `<div>${werkgever} - ${functie} (${startdatum} - ${einddatum})<br>${beschrijving}</div>`;
    document.getElementById("werkgever").value = "";
    document.getElementById("werk-functie").value = "";
    document.getElementById("werk-startdatum").value = "";
    document.getElementById("werk-einddatum").value = "";
    document.getElementById("werk-beschrijving").value = "";
    document.getElementById("error-werkervaring").textContent = ""; // Reset foutmelding
}

// Functie om Excel te genereren en gegevens van het formulier op te slaan
function generateExcel() {
    // Haal de waarden van voornaam en achternaam op
    const voornaam = document.getElementById('naam').value;
    const achternaam = document.getElementById('achternaam').value;

    // Maak een nieuw workbook en voeg een worksheet toe
    const workbook = XLSX.utils.book_new();

    // Zet de voornaam in cel A1 en de achternaam in cel B1
    const worksheet = XLSX.utils.aoa_to_sheet([
        ['Voornaam', 'Achternaam'], // Header
        [voornaam, achternaam]      // Waarden in A1 en B1
    ]);

    // Voeg de worksheet toe aan het workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Blad1");

    // Genereer het Excel-bestand en download het
    XLSX.writeFile(workbook, 'bestand.xlsx');
}
