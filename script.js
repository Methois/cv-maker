function generatePDF() {
    const doc = new jsPDF();
    let yPosition = 20;

    // Persoonlijke informatie
    doc.setFontSize(18);
    doc.text('Curriculum Vitae', 10, yPosition);
    yPosition += 20;

    doc.setFontSize(14);
    doc.text('Persoonlijke Gegevens', 10, yPosition);
    yPosition += 10;

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;

    doc.setFontSize(12);
    doc.text(`Naam: ${name}`, 10, yPosition);
    yPosition += 10;
    doc.text(`E-mail: ${email}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Telefoon: ${phone}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Adres: ${address}`, 10, yPosition);
    yPosition += 20;

    // Opleidingen
    doc.setFontSize(14);
    doc.text('Opleidingen', 10, yPosition);
    yPosition += 10;

    const educationEntries = document.querySelectorAll('.education-entry');
    educationEntries.forEach((entry, index) => {
        const school = entry.querySelector('.school').value;
        const degree = entry.querySelector('.degree').value;
        const educationStart = entry.querySelector('.education-start').value;
        const educationEnd = entry.querySelector('.education-end').value;

        doc.setFontSize(12);
        doc.text(`${degree} - ${school}`, 10, yPosition);
        yPosition += 10;
        doc.text(`Start: ${educationStart} - Eind: ${educationEnd}`, 10, yPosition);
        yPosition += 15;
    });

    // Werkervaring
    doc.setFontSize(14);
    doc.text('Werkervaring', 10, yPosition);
    yPosition += 10;

    const experiences = document.querySelectorAll('.experience-entry');
    experiences.forEach((entry, index) => {
        const company = entry.querySelector('.company').value;
        const role = entry.querySelector('.role').value;
        const start = entry.querySelector('.start').value;
        const end = entry.querySelector('.end').value;
        const present = entry.querySelector('.present').checked ? "Heden" : "";

        doc.setFontSize(12);
        doc.text(`${role} bij ${company}`, 10, yPosition);
        yPosition += 10;
        doc.text(`Periode: ${start} - ${end} ${present}`, 10, yPosition);
        yPosition += 15;
    });

    // Vaardigheden
    doc.setFontSize(14);
    doc.text('Vaardigheden', 10, yPosition);
    yPosition += 10;

    const skills = document.querySelector('#skills').value;
    doc.setFontSize(12);
    doc.text(skills, 10, yPosition);

    // Opslaan van het PDF-bestand
    doc.save('professioneel_cv.pdf');
}
