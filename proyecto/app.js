document.addEventListener('DOMContentLoaded', function() {
    //const contactButton = document.createElement('button');
    //t.getElementById('contact').appendChild(contactButton);

    //contactButton.addEventListener('click', function() {
        //window.location.href = 'mailto:matiasjavierendrek@gmail.com';
    //});

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});