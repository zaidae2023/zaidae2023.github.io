// Image Gallery Slider
document.addEventListener('DOMContentLoaded', function () {
    // Get necessary elements
    const imageGallery = document.getElementById('imageGallery');
    const hero = document.getElementById('hero');
    // Array of hero images
    const heroImages = [
        'hero1.jpg',
        'hero2.jpg',
        'hero3.jpg'
        // Add more image URLs as needed
    ];
    let currentImageIndex = 0;

    // Set interval to change hero image every 3.5 seconds
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        const imageUrl = `url('${heroImages[currentImageIndex]}') center/cover no-repeat`;
        hero.style.background = imageUrl;
    }, 3500); // Change image every 3.5 seconds (adjust as needed)
});

// Navigation toggle
function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Phone number toggle
var phoneNumber = document.getElementById('phoneNumber');

function togglePhoneNumber() {
    phoneNumber.style.display = (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') ? 'block' : 'none';
}

// Hide phone number on mouseout
phoneNumber.addEventListener('mouseout', function () {
    phoneNumber.style.display = 'none';
});

// Car Valuation Calculator
function calculateValuation() {
    // Get input values
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = parseInt(document.getElementById('year').value);
    const mileage = parseInt(document.getElementById('mileage').value);
    const condition = document.getElementById('condition').value;

    // Simplified valuation logic (replace with your own)
    const basePrice = 10000;
    const ageDiscount = (2023 - year) * 500;
    const mileagePenalty = mileage > 100000 ? (mileage - 100000) * 0.1 : 0;
    let conditionMultiplier;

    // Set condition multiplier based on selected condition
    switch (condition) {
        case 'excellent':
            conditionMultiplier = 1.2;
            break;
        case 'good':
            conditionMultiplier = 1.0;
            break;
        case 'fair':
            conditionMultiplier = 0.8;
            break;
        case 'poor':
            conditionMultiplier = 0.5;
            break;
        default:
            conditionMultiplier = 1.0;
    }

    // Calculate valuation
    const valuation = basePrice - ageDiscount - mileagePenalty;
    const finalValuation = valuation * conditionMultiplier;

    // Display the valuation
    document.getElementById('valuation-price').innerHTML = `Your car valuation is $${finalValuation.toFixed(2)}`;
}

// Calendar
document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar-container');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Generate calendar
    function generateCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        // Clear previous calendar
        calendarContainer.innerHTML = '';

        // Add day names
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day;
            calendarContainer.appendChild(dayElement);
        });

        // Add empty days before the first day
        for (let i = 0; i < firstDay.getDay(); i++) {
            const emptyDay = document.createElement('div');
            calendarContainer.appendChild(emptyDay);
        }

        // Add days
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day;
            dayElement.addEventListener('click', () => showEvents(year, month, day));
            calendarContainer.appendChild(dayElement);
        }
    }

    // Show events for a specific day (for demonstration purposes)
    function showEvents(year, month, day) {
        alert(`Events for ${month + 1}/${day}/${year}:\nCar Show at 2:00 PM\nAuction at 4:00 PM`);
    }

    // Generate calendar for the current month
    generateCalendar(currentYear, currentMonth);
});

// Search functionality
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


    