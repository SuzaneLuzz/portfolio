// Smooth scroll para botão "Veja meus projetos"
document.getElementById('btn-projetos').addEventListener('click', () => {
  document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
});
