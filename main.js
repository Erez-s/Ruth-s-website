// Function to load biography based on language
function loadBio(lang) {
    // Hide all bios
    document.getElementById('bio-en').style.display = 'none';
    document.getElementById('bio-he').style.display = 'none';
    document.getElementById('bio-de').style.display = 'none';

    // Load content for the selected bio
    loadBiographyContent(lang);

    // Show the selected bio
    const selectedBio = document.getElementById(`bio-${lang}`);
    selectedBio.style.display = 'block';

    // Remove 'selected' class from all buttons
    document.getElementById('btn-en').classList.remove('selected');
    document.getElementById('btn-he').classList.remove('selected');
    document.getElementById('btn-de').classList.remove('selected');

    // Add 'selected' class to the currently clicked button
    document.getElementById(`btn-${lang}`).classList.add('selected');

    // Handle RTL for Hebrew and LTR for other languages
    if (lang === 'he') {
        selectedBio.setAttribute('dir', 'rtl');  // Set right-to-left for Hebrew
        selectedBio.style.textAlign = 'right';  // Align text to the right
    } else {
        selectedBio.setAttribute('dir', 'ltr');  // Set left-to-right for English/German
        selectedBio.style.textAlign = 'left';  // Align text to the left
    }
}

// Function to display events
function displayEvents() {
    const container = document.getElementById('events-list'); // Get the <ul> element to hold the event list
    container.innerHTML = ''; // Clear any existing content

    events.events.forEach(event => {
        // Check if the event name starts with "ignore"
        if (!event.name.toLowerCase().startsWith('ignore')) {
            const listItem = `
                <li class="list-group-item">
                    ${event.name} ${event.date}, 
                    <a href="${event.link}" target="_blank" rel="noopener noreferrer">${event.link}</a>
                </li>
            `;
            container.innerHTML += listItem; // Append the event to the <ul>
        }
    });
}

document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    item.addEventListener('click', () => {
        // Collapse the navbar after clicking a link
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});

// Load English bio by default when the page loads
window.onload = function() {
    loadBio('en'); // Load English bio by default
    displayEvents();
};
