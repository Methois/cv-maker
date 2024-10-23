// Functie om een vaardigheid toe te voegen, met controle op duplicaten
function addSkill() {
    const skillName = document.querySelector('.add-skill input').value.trim();
    const skillStars = document.querySelector('#skill-stars').value;
    const skillList = document.getElementById('skill-list');

    // Check of de vaardigheid al bestaat
    const existingSkills = Array.from(skillList.getElementsByTagName('span')).map(span => span.textContent);
    if (skillName && !existingSkills.includes(skillName)) {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <span>${skillName}</span>
            <span>${'⭐'.repeat(skillStars)}</span>
            <button onclick="removeSkill(this)">✖</button>
        `;
        skillList.appendChild(skillItem);
    } else {
        alert('Vaardigheid bestaat al of veld is leeg!');
    }
}

// Functie om een vaardigheid te verwijderen
function removeSkill(button) {
    button.parentElement.remove();
}

// Functie om een opleiding toe te voegen
function addEducation() {
    const school = document.querySelector('.add-education input').value.trim();
    const startDate = document.querySelectorAll('.add-education input')[1].value;
    const endDate = document.querySelectorAll('.add-education input')[2].value;
    const current = document.getElementById('current-education').checked;

    if (school && startDate) {
        const educationList = document.getElementById('education-list');
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        educationItem.innerHTML = `
            <span>${school}</span>
            <span>${startDate} - ${current ? 'Huidig' : endDate}</span>
            <button onclick="removeEducation(this)">✖</button>
        `;
        educationList.appendChild(educationItem);
    }
}

// Functie om een opleiding te verwijderen
function removeEducation(button) {
    button.parentElement.remove();
}

// Functie om werkervaring toe te voegen
function addJob() {
    const employer = document.querySelector('.add-job input').value.trim();
    const jobTitle = document.querySelectorAll('.add-job input')[1].value;
    const startDate = document.querySelectorAll('.add-job input')[2].value;
    const endDate = document.querySelectorAll('.add-job input')[3].value;
    const current = document.getElementById('current-job').checked;
    const jobDescription = document.querySelector('.add-job textarea').value.trim();

    if (employer && jobTitle && startDate) {
        const jobList = document.getElementById('job-list');
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `
            <span>${employer} - ${jobTitle}</span>
            <span>${startDate} - ${current ? 'Huidig' : endDate}</span>
            <p>${jobDescription}</p>
            <button onclick="removeJob(this)">✖</button>
        `;
        jobList.appendChild(jobItem);
    }
}

// Functie om werkervaring te verwijderen
function removeJob(button) {
    button.parentElement.remove();
}
