// Function to load biography based on language
function loadBio(lang) {
    // Hide all bios
    document.getElementById('bio-en').style.display = 'none';
    document.getElementById('bio-he').style.display = 'none';
    document.getElementById('bio-de').style.display = 'none';

    // Load content for the selected bio
    loadBiographyContent(lang);

    // Show the selected bio
    document.getElementById(`bio-${lang}`).style.display = 'block';

    // Remove 'selected' class from all buttons
    document.getElementById('btn-en').classList.remove('selected');
    document.getElementById('btn-he').classList.remove('selected');
    document.getElementById('btn-de').classList.remove('selected');

    // Add 'selected' class to the currently clicked button
    document.getElementById(`btn-${lang}`).classList.add('selected');
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

// Load English bio by default when the page loads
window.onload = function() {
    loadBio('en'); // Load English bio by default
    displayEvents();
};
