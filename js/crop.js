document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-crop-form]');
  const predictionCard = document.querySelector('[data-prediction-card]');
  if (!form || !predictionCard) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const soilType = document.getElementById('soilType').value;
    const season = document.getElementById('season').value;
    const temp = document.getElementById('temperature').value;
    const humidity = document.getElementById('humidity').value;
    const rainfall = document.getElementById('rainfall').value;
    const ph = document.getElementById('ph').value;

    document.getElementById('recommendedCrop').textContent = `${soilType} + ${season} optimized`;
    document.getElementById('confidence').textContent = '92%';
    document.getElementById('yield').textContent = '24.8 tons/ha';
    document.getElementById('fertilizer').textContent = 'Balanced NPK + compost blend';
    predictionCard.classList.remove('d-none');
  });

  document.querySelector('[data-reset]').addEventListener('click', () => {
    form.reset();
    predictionCard.classList.add('d-none');
  });
});
