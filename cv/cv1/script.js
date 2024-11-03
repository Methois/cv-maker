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

        worksheet.getColumn(1).width = 27; 
        worksheet.getColumn(2).width = 720; 
        worksheet.getColumn(3).width = 232; 

        worksheet.getRow(1).height = 20; 
        worksheet.getRow(2).height = 10; 
        worksheet.getRow(3).height = 140; 
        worksheet.getRow(4).height = 10; 

        const blackFill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF000000' }
        };
        
        worksheet.getCell('B2').fill = blackFill;
        worksheet.getCell('B4').fill = blackFill;
        worksheet.getCell('C4').fill = blackFill;
        const naamDisplay = `${voornaam} ${tussenvoegsel ? tussenvoegsel + ' ' : ''}${achternaam}`;
        worksheet.getCell('B3').value = naamDisplay;
        worksheet.getCell('B3').font = {
            name: "Aptos Black",
            size: 30,
            bold: true
        };
        worksheet.getCell('B3').alignment = { horizontal: 'center', vertical: 'center' };

        await workbook.xlsx.writeFile('CV_Generator.xlsx');
        console.log("Bestand gedownload als CV_Generator.xlsx");
    } catch (error) {
        console.error("Er is een fout opgetreden:", error);
        alert("Er is een fout opgetreden bij het genereren van het Excel-bestand. Controleer de console voor meer informatie.");
    }
}
