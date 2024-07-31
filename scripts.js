document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
/* JavaScript code to toggle navigation bar */
function toggleNavbar() {
    var navbar = document.getElementsByClassName("navbar")[0];
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }
  
  /* Add event listener to toggle navigation bar */
  window.addEventListener("resize", function() {
    var navbar = document.getElementsByClassName("navbar")[0];
    if (window.innerWidth <= 768) {
      navbar.className = "navbar";
    } else {
      navbar.className = "navbar responsive";
    }
  });
  
  /* Add click event listener to the hamburger icon */
  document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementsByClassName("icon")[0];
    icon.addEventListener("click", toggleNavbar);
  });