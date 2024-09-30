// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Whether animation should happen only once
});

// GSAP animations for hero section
gsap.from("#hero .hero-content", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power3.out",
});

// Additional GSAP animations for project cards
gsap.from(".project-card", {
  scrollTrigger: ".project-card",
  opacity: 0,
  scale: 0.9,
  stagger: 0.2,
  duration: 0.8,
});
