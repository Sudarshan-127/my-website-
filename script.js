$(document).ready(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        $(this)[0].reset(); // Reset the form
    });
});
