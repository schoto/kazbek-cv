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
const emoji = document.querySelectorAll('ul li a::after');

emoji.forEach((emojiEl) => {
  emojiEl.addEventListener('mouseenter', () => {
    emojiEl.style.animation = 'rotateEmoji 1s linear infinite'; // Adjust the animation properties as needed
  });

  emojiEl.addEventListener('mouseleave', () => {
    emojiEl.style.animation = 'none';
  });
});
