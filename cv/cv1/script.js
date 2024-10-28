// Voeg een vaardigheid toe
function addSkill() {
    const skillInput = document.getElementById("vaardigheid").value;
    const stars = document.getElementById("skill-stars").value;

    if (skillInput) {
        const skillList = document.getElementById("skill-list");
        const skillItem = document.createElement("div");
        skillItem.textContent = `${skillInput} (${stars} sterren)`;
        skillList.appendChild(skillItem);

        // Reset het invoerveld
        document.getElementById("vaardigheid").value = '';
    } else {
        document.getElementById("error-vaardigheden").textContent = "Vaardigheid is vereist!";
    }
}

// Voeg een opleiding toe
function addEducation() {
    const school = document.getElementById("opleiding-school").value;
    const title = document.getElementById("opleiding-titel").value;
    const begin = document.getElementById("opleiding-begin").value;
    const eind = document.getElementById("opleiding-eind").value;

    if (school && title && begin) {
        const educationList = document.getElementById("education-list");
        const educationItem = document.createElement("div");
        educationItem.textContent = `${school}: ${title} (${begin} - ${eind})`;
        educationList.appendChild(educationItem);

        // Reset de invoervelden
        document.getElementById("opleiding-school").value = '';
        document.getElementById("opleiding-titel").value = '';
        document.getElementById("opleiding-begin").value = '';
        document.getElementById("opleiding-eind").value = '';
    } else {
        document.getElementById("error-opleidingen").textContent = "Alle velden zijn vereist!";
    }
}

async function generateExcel() {
    const voornaam = document.getElementById("naam").value;
    const tussenvoegsel = document.getElementById("tussenvoegsel").value;
    const achternaam = document.getElementById("achternaam").value;

    if (!voornaam || !achternaam) {
        alert("Naam en achternaam zijn vereist!");
        return;
    }

    try {
        console.log("Probeer het bestand te laden...");

        const response = await fetch('template.xlsx');
        if (!response.ok) throw new Error('Netwerkfout bij het ophalen van het bestand.');

        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets['Blad1'];

        // Controleer het werkblad
        console.log("Werkblad:", worksheet);
        
        // Zorg ervoor dat B3 bestaat
        if (!worksheet['B3']) {
            worksheet['B3'] = {}; // Maak B3 aan als deze nog niet bestaat
        }

        // Schrijf 'Hallo' in B3 zonder opmaak
        worksheet['B3'] = { 
            t: 's', 
            v: 'doei' 
        };

        // Log de waarde van B3 na schrijven
        console.log("Waarde in B3 na schrijven:", worksheet['B3']);

        // Update de verwijzing voor het werkblad
        worksheet['!ref'] = 'A1:B3'; // Zorg ervoor dat het bereik correct is

        // Schrijf het bestand
        XLSX.writeFile(workbook, 'CV_Generator.xlsx');
        console.log("Bestand gedownload als CV_Generator.xlsx");
    } catch (error) {
        console.error("Er is een fout opgetreden:", error);
        alert("Er is een fout opgetreden bij het genereren van het Excel-bestand. Controleer de console voor meer informatie.");
    }
}

