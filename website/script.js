// Fade in sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  observer.observe(section);
});

// Contact form (same as before)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! (Form submission not connected to backend yet)");
});

const cursor = document.getElementById('custom-cursor');

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

