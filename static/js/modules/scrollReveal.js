export function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('vis');
    }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.rv').forEach(el => observer.observe(el));
}
