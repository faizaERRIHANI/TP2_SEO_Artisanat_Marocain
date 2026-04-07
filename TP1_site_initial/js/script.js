// ===== ARTISANAT MAROCAIN - Script principal =====

// 1. Année dynamique dans le footer
document.getElementById('annee').textContent = new Date().getFullYear();

// 2. Lien actif dans la navigation
const liens = document.querySelectorAll('nav a');
liens.forEach(lien => {
  if (lien.href === window.location.href) {
    lien.classList.add('active');
  }
});