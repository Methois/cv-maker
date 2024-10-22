function addSkill() {
    const skillName = document.querySelector('.add-skill input').value;
    const skillStars = document.querySelector('#skill-stars').value;
    if (skillName) {
        const skillList = document.getElementById('skill-list');
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <span>${skillName}</span>
            <span>${'⭐'.repeat(skillStars)}</span>
            <button onclick="removeSkill(this)">✖</button>
        `;
        skillList.appendChild(skillItem);
    }
}

function removeSkill(button) {
    button.parentElement.remove();
}

function addEducation() {
    const school = document.querySelector('.add-education input').value;
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

function removeEducation(button) {
    button.parentElement.remove();
}

function addJob() {
    const employer = document.querySelector('.add-job input').value;
    const jobTitle = document.querySelectorAll('.add-job input')[1].value;
    const startDate = document.querySelectorAll('.add-job input')[2].value;
    const endDate = document.querySelectorAll('.add-job input')[3].value;
    const current = document.getElementById('current-job').checked;
    const jobDescription = document.querySelector('.add-job textarea').value;
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

function removeJob(button) {
    button.parentElement.remove();
}
