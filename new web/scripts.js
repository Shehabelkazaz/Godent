document.getElementById('studentButton').addEventListener('click', function() {
    window.location.href = 'student.html';
});

document.getElementById('dentistButton').addEventListener('click', function() {
    // Redirect to dentist page if you create one
    alert('Redirecting to dentist page.');
});
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the links are properly assigned
    document.querySelector('.nav-links a[href="second-year.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'second-year.html';
    });
});
