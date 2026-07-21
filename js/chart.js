document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('cropChart');
  if (ctx) {
    new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Healthy', 'Monitor', 'Alert'],
        datasets: [{
          data: [68, 22, 10],
          backgroundColor: ['#2E7D32', '#4CAF50', '#FFC107']
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }
});
