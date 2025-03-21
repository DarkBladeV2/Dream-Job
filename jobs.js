function openModal(jobTitle, jobPay, jobHowToGet) {
    document.getElementById('jobTitle').innerText = jobTitle;
    document.getElementById('jobPay').innerText = `Pay: ${jobPay}`;
    document.getElementById('jobHowToGet').innerText = `How to get this job: ${jobHowToGet}`;
    document.getElementById('jobModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('jobModal').style.display = 'none';
}