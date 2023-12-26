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

