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