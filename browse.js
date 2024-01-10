// Toggle navigation visibility
function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Toggle phone number visibility
var phoneNumber = document.getElementById('phoneNumber');

function togglePhoneNumber() {
    // Toggle the display property based on the current state
    phoneNumber.style.display = (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') ? 'block' : 'none';
}

// Hide phone number on mouseout
phoneNumber.addEventListener('mouseout', function () {
    phoneNumber.style.display = 'none';
});

// Sample car inventory data (replace this with data from your API)
const carInventoryData = [
    { make: 'Toyota', model: 'Camry', year: 2022, price: 25000 },
    { make: 'Honda', model: 'Accord', year: 2021, price: 23000 },
    { make: 'Ford', model: 'Mustang', year: 2023, price: 35000 },
    // Add more cars as needed
];

// Function to display the car inventory on the page
function displayCarInventory() {
    const carInventoryContainer = document.getElementById('carInventory');
    carInventoryContainer.innerHTML = ''; // Clear previous content

    // Iterate over the car inventory data and create HTML elements for each car
    carInventoryData.forEach(car => {
        const carElement = document.createElement('div');
        carElement.innerHTML = `<h2>${car.make} ${car.model}</h2>
                               <p>Year: ${car.year}</p>
                               <p>Price: $${car.price}</p>`;
        carInventoryContainer.appendChild(carElement);
    });
}

// Load and display the car inventory when the page loads
window.onload = displayCarInventory;

// Sample data with added links
const websiteContent = [
    { id: 1, title: 'Toyota Camry', page: 'toyota', content: '' },
    { id: 2, title: 'Honda Accord', page: 'honda', content: '' },
    { id: 3, title: 'Ford Mustang', page: 'ford', content: '' },
    { id: 4, title: 'Audi A4', page: 'audi', content: '' },
    { id: 5, title: 'Nissan Altima', page: 'nissan', content: '' },
    // Add more pages as needed
];

// Perform search based on user input
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    // Perform a basic search on your content
    const searchResults = websiteContent.filter(page =>
        page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)
    );

    // Display search results on the page
    displaySearchResults(searchResults);
}

// Display search results on the page
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Check if there are no results
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        // Iterate over the search results and create HTML elements for each result
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('search-result');
            // Add a link to the specific page for each car
            resultElement.innerHTML = `<a href="${result.page}.html"><h3>${result.title}</h3></a><p>${result.content}</p>`;
            resultsContainer.appendChild(resultElement);
        });
    }
}
