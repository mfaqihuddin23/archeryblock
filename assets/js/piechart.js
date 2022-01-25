const labels = ['abang', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'right',
        labels:{
            boxWidth: 1000,
          },
      },
      
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart'
      }
    }
  },
};


//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );