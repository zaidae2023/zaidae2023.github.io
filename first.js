document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.getElementById('imageGallery');
    const hero = document.getElementById('hero');
    const heroImages = [
        'hero1.jpg',
        'hero2.jpg',
        'hero3.jpg'
        // Add more image URLs as needed
    ];
    let currentImageIndex = 0;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        const imageUrl = `url('${heroImages[currentImageIndex]}') center/cover no-repeat`;
        hero.style.background = imageUrl;
    }, 3500); // Change image every 5 seconds (adjust as needed)
});


function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}



var phoneNumber = document.getElementById('phoneNumber');

function togglePhoneNumber() {
    phoneNumber.style.display = (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') ? 'block' : 'none';
}

phoneNumber.addEventListener('mouseout', function () {
    phoneNumber.style.display = 'none';
});





function calculateValuation() {
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

    const valuation = basePrice - ageDiscount - mileagePenalty;
    const finalValuation = valuation * conditionMultiplier;

    document.getElementById('valuation-price').innerHTML = `Your car valuation is $${finalValuation.toFixed(2)}`;
  }






  document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar-container');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

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

        // Add days
        for (let i = 0; i < firstDay.getDay(); i++) {
            const emptyDay = document.createElement('div');
            calendarContainer.appendChild(emptyDay);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day;
            dayElement.addEventListener('click', () => showEvents(year, month, day));
            calendarContainer.appendChild(dayElement);
        }
    }

    function showEvents(year, month, day) {
        // You can implement the logic to fetch and display events for the selected day.
        // For simplicity, let's just show a sample event.
        alert(`Events for ${month + 1}/${day}/${year}:\nCar Show at 2:00 PM\nAuction at 4:00 PM`);
    }

    generateCalendar(currentYear, currentMonth);
});







    // Sample data with added links
    const websiteContent = [
        { id: 1, title: 'Toyota Camry', page: 'toyota', content: '' },
        { id: 2, title: 'Honda Accord', page: 'honda', content: '' },
        { id: 3, title: 'Ford Mustang', page: 'ford', content: '' },
        { id: 4, title: 'Audi A4', page: 'audi', content: '' },
        { id: 5, title: 'Nissan Altima', page: 'nissan', content: '' },
        // Add more pages as needed
    ];

    function performSearch() {
        const query = document.getElementById('searchInput').value.toLowerCase();

        // Perform a basic search on your content
        const searchResults = websiteContent.filter(page =>
            page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)
        );

        // Display search results on the page
        displaySearchResults(searchResults);
    }

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




    $(document).ready(function(){
  
        var mousePos = {};
      
       function getRandomInt(min, max) {
         return Math.round(Math.random() * (max - min + 1)) + min;
       }
        
        $(window).mousemove(function(e) {
          mousePos.x = e.pageX;
          mousePos.y = e.pageY;
        });
        
        $(window).mouseleave(function(e) {
          mousePos.x = -1;
          mousePos.y = -1;
        });
        
        var draw = setInterval(function(){
          if(mousePos.x > 0 && mousePos.y > 0){
            
            var range = 15;
            
            var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
            
            var sizeInt = getRandomInt(10, 30);
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
            
            var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
            
            var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 
      
            var style = left+top+color+size;
            $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
          }
        }, 1);
      });
      