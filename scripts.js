// Smooth scroll para botão "Veja meus projetos"
document.getElementById('btn-projetos').addEventListener('click', () => {
  document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
});

// Botão voltar ao topo
const btnTopo = document.getElementById('voltarTopo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) btnTopo.style.display = 'block';
  else btnTopo.style.display = 'none';
});
btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Intersection Observer para animar seções ao entrar na viewport
const observerOptions = {
  threshold: 0.2
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-section').forEach(section => {
  observer.observe(section);
});
