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

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('CV');

        // Nauwkeurige kolombreedtes instellen
        worksheet.getColumn(1).width = 27; // Kolom A
        worksheet.getColumn(2).width = 720; // Kolom B
        worksheet.getColumn(3).width = 232; // Kolom C

        // Rijhoogtes instellen
        worksheet.getRow(1).height = 20; // Rij 1
        worksheet.getRow(2).height = 10; // Rij 2
        worksheet.getRow(3).height = 140; // Rij 3
        worksheet.getRow(4).height = 10; // Rij 4

        // Zwarte opvulling voor B2, B4, en C4
        const blackFill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF000000' } // Zwarte kleur
        };
        
        worksheet.getCell('B2').fill = blackFill;
        worksheet.getCell('B4').fill = blackFill;
        worksheet.getCell('C4').fill = blackFill;

        // Voor- en achternaam centreren in B3 met lettertype "Aptos Black" en grootte 30
        const naamDisplay = `${voornaam} ${tussenvoegsel ? tussenvoegsel + ' ' : ''}${achternaam}`;
        worksheet.getCell('B3').value = naamDisplay;
        worksheet.getCell('B3').font = {
            name: "Aptos Black",
            size: 30,
            bold: true
        };
        worksheet.getCell('B3').alignment = { horizontal: 'center', vertical: 'center' };

        // Schrijf het bestand
        await workbook.xlsx.writeFile('CV_Generator.xlsx');
        console.log("Bestand gedownload als CV_Generator.xlsx");
    } catch (error) {
        console.error("Er is een fout opgetreden:", error);
        alert("Er is een fout opgetreden bij het genereren van het Excel-bestand. Controleer de console voor meer informatie.");
    }
}
