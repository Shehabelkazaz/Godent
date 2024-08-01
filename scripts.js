document.getElementById('studentButton').addEventListener('click', function() {
    window.location.href = 'student.html';
});

document.getElementById('dentistButton').addEventListener('click', function() {
    Window. Location.href = 'allproducts.html';
});
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the links are properly assigned
    document.querySelector('.nav-links a[href="second-year.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'second-year.html';
    });
});
