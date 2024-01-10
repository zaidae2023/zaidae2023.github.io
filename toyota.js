// Function to toggle the visibility of the navigation menu
function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Sample data with added links
const websiteContent = [
    { id: 1, title: 'Toyota Camry', page: 'toyota', content: '' },
    { id: 2, title: 'Honda Accord', page: 'honda', content: '' },
    { id: 3, title: 'Ford Mustang', page: 'ford', content: '' },
    { id: 4, title: 'Audi A4', page: 'audi', content: '' },
    { id: 5, title: 'Nissan Altima', page: 'nissan', content: '' },
    // Add more pages as needed
];

// Function to perform a search based on user input
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    // Perform a basic search on your content
    const searchResults = websiteContent.filter(page =>
        page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)
    );

    // Display search results on the page
    displaySearchResults(searchResults);
}

// Function to display search results on the page
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('search-result');
            // Add a link to the specific page for each car
            resultElement.innerHTML = `<a href="${result.page}.html"><h3>${result.title}</h3></a><p>${result.content}</p>`;
            resultsContainer.appendChild(resultElement);
        });
    }
}
