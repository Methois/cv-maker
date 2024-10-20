function generatePDF() {
    const { jsPDF } = window.jspdf;

    // Haal de gegevens uit het formulier
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Maak een nieuw jsPDF document
    const doc = new jsPDF();

    // Voeg tekst toe aan het PDF-bestand
    doc.text(`Naam: ${name}`, 10, 10);
    doc.text(`E-mail: ${email}`, 10, 20);
    doc.text(`Opleiding: ${education}`, 10, 30);
    doc.text(`Werkervaring:`, 10, 40);
    doc.text(experience, 10, 50);
    doc.text(`Vaardigheden:`, 10, 80);
    doc.text(skills, 10, 90);

    // Sla het PDF-bestand op en download het
    doc.save(`${name}_CV.pdf`);
}
