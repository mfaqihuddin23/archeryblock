const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');


// const labels = ['Treasury', 'Marketing', 'Private Sale', 'Public Sale', 'Team', 'Liquidity', 'Seed', 'Staking & Farming'];

//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'Tokenomics',
//       backgroundColor: [
//         '#FF8099',
//         '#1ED9F3',
//         '#3BFFDC',
//         '#FFF1A7',
//         '#E498FF',
//         '#AF89FF',
//         '#FAEBFF',
//         '#F1426D'
//     ],
//       borderColor: [
//         '#FF8099',
//         '#1ED9F3',
//         '#3BFFDC',
//         '#FFF1A7',
//         '#E498FF',
//         '#AF89FF',
//         '#FAEBFF',
//         '#F1426D'
//     ],
//       data: [17, 10, 20, 10, 10, 5, 10, 18],
//     }]
//   };

// const config = {
//   type: 'doughnut',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//         position: 'right',
//       },
      
//       // title: {
//       //   // ID of the container to put the legend in
//       //   containerID: 'legend-container',
//       //   display: false,
//       //   text: 'Chart.js Doughnut Chart'
//       // }
//     }
//   },
// };

const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ['Treasury', 'Marketing', 'Private Sale', 'Public Sale', 'Team', 'Liquidity', 'Seed', 'Staking & Farming'],
      datasets: [{//0
          label: 'Tokenomics',
          data: [17, 10, 20, 10, 10, 10, 10, 18],
          backgroundColor: [
            '#FF8099',
            '#1ED9F3',
            '#3BFFDC',
            '#FFF1A7',
            '#E498FF',
            '#AF89FF',
            '#FAEBFF',
            '#F1426D',
          ],
          borderColor: [
            '#FF8099',
            '#1ED9F3',
            '#3BFFDC',
            '#FFF1A7',
            '#E498FF',
            '#AF89FF',
            '#FAEBFF',
            '#F1426D',
          ],
          borderWidth: 1
      },]
  },
  options: {
      plugins: {
          legend: {
              display: false, 
          },
          tooltip: {
              enabled: true,
              // external: externalTooltipHandler,
          }
      },
      
  }
});

const myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
      labels: ['Seed Sale', 'Team', 'Public Sale', 'Private sale', 'Marketing', ],
      datasets: [{//0
          label: 'Seed Sale',
          data: [0, 13, 23, 25, 32, 43],
          backgroundColor: [
              '#42C9F4',
          ],
          borderColor: [
            '#42C9F4',
          ],
          borderWidth: 1
      },{//1
          label: 'Team',
          data: [0, 29, 14, 16, 32, 17],
          backgroundColor: [
              '#FF6D01',
          ],
          borderColor: [
              '#FF6D01',
          ],
          borderWidth: 1
      },{//2
          label: 'Public Sale',
          data: [0, 13, 43, 35, 22, 33],
          backgroundColor: [
              '#47CF6A',
          ],
          borderColor: [
              '#47CF6A',
          ],
          borderWidth: 1
      },{//3
          label: 'Private sale',
          data: [0, 15, 31, 25, 12, 32],
          backgroundColor: [
              '#FBBC04',
          ],
          borderColor: [
              '#FBBC04',
          ],
          borderWidth: 1
      },{//4
          label: 'Marketing',
          data: [0, 39, 23, 15, 32, 13],
          backgroundColor: [
              '#EA4335',
          ],
          borderColor: [
              '#EA4335',
          ],
          borderWidth: 1
      },]
  },
  options: {
      plugins: {
        responsive: true,
        legend: {
          display: true,
          position: 'top', 
        },
        tooltip: {
          enabled: true,
          // external: externalTooltipHandler,
        }
      },
      scales: {
        y: {
            beginAtZero: true
        }
    }
  }
});



const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const value3 = document.getElementById('value3');
const value4 = document.getElementById('value4');
const value5 = document.getElementById('value5');
const value6 = document.getElementById('value6');
const value7 = document.getElementById('value7');
const value8 = document.getElementById('value8');

value1.style.backgroundColor = '#FF8099';
value2.style.backgroundColor = '#1ED9F3';
value3.style.backgroundColor = '#3BFFDC';
value4.style.backgroundColor = '#FFF1A7';
value5.style.backgroundColor = '#E498FF';
value6.style.backgroundColor = '#AF89FF';
value7.style.backgroundColor = '#FAEBFF';
value8.style.backgroundColor = '#F1426D';

const itemvalue1 = document.getElementById('item-value1');
const itemvalue2 = document.getElementById('item-value2');
const itemvalue3 = document.getElementById('item-value3');
const itemvalue4 = document.getElementById('item-value4');
const itemvalue5 = document.getElementById('item-value5');
const itemvalue6 = document.getElementById('item-value6');
const itemvalue7 = document.getElementById('item-value7');
const itemvalue8 = document.getElementById('item-value8');

function toggleData(value){
  console.log(value);
 
}