// Function to toggle the visibility of the navigation menu
function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Function to handle the form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Add your form validation logic here if needed

    // Display the submission message
    var submissionMessage = document.getElementById("submission-message");
    submissionMessage.style.display = "block";

    // Display a pop-up message
    alert("Your form has been successfully submitted. Our team will get in touch with you soon.");
}
