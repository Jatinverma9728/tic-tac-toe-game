let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll Down - Hide the navbar
    navbar.style.top = "-60px"; // Adjust this based on your navbar height
  } else {
    // Scroll Up - Show the navbar
    navbar.style.top = "0";
  }
  
  lastScrollTop = scrollTop;
});
