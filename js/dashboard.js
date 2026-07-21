document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-dashboard-chart]')) {
    const ctx = document.getElementById('dashboardChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Crop Health',
            data: [72, 78, 74, 83, 81, 88, 90],
            borderColor: '#2E7D32',
            backgroundColor: 'rgba(46,125,50,0.15)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Soil Moisture',
            data: [55, 58, 62, 60, 64, 66, 68],
            borderColor: '#FFC107',
            backgroundColor: 'rgba(255,193,7,0.15)',
            tension: 0.4,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        scales: { y: { beginAtZero: false } }
      }
    });
  }
});
