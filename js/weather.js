document.addEventListener('DOMContentLoaded', () => {
  const weatherCards = document.querySelectorAll('[data-weather-card]');
  weatherCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 100}ms`;
  });
});
