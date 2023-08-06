document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Show/hide the "Back to Top" button
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top-btn');
  if (window.scrollY > 500) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth scrolling to the top when the button is clicked
document.getElementById('back-to-top-btn').addEventListener('click', () => {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
