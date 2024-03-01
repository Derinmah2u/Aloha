document.addEventListener("DOMContentLoaded", function() {
  var aboutLink = document.querySelector('a[href="#cv-section"]');
  var contactLink = document.querySelector('a[href="#contact-section"]');
  var cvSection = document.getElementById('cv-section');
  var contactSection = document.getElementById('contact-section');
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    cvSection.style.display = 'block';
    contactSection.style.display = 'none';
  });
  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    contactSection.style.display = 'block';
    cvSection.style.display = 'none';
  });
});