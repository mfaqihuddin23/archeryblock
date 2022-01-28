const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector('ul');

  if (!listContainer) {
    listContainer = document.createElement('ul');
    listContainer.style.display = 'flex';
    listContainer.style.flexDirection = 'row';
    listContainer.style.margin = 0;
    listContainer.style.padding = 0;

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach(item => {
      const li = document.createElement('li');
      li.style.alignItems = 'center';
      li.style.cursor = 'pointer';
      li.style.display = 'flex';
      li.style.flexDirection = 'row';
      li.style.marginLeft = '10px';

      li.onclick = () => {
        const {type} = chart.config;
        if (type === 'pie' || type === 'doughnut') {
          // Pie and doughnut charts only have a single dataset and visibility is per item
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
        }
        chart.update();
      };

      // Color box
      const boxSpan = document.createElement('span');
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderWidth = item.lineWidth + 'px';
      boxSpan.style.display = 'inline-block';
      boxSpan.style.height = '20px';
      boxSpan.style.marginRight = '10px';
      boxSpan.style.width = '20px';

      // Text
      const textContainer = document.createElement('p');
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = 0;
      textContainer.style.padding = 0;
      textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  }
};



const labels = ['Treasury', 'Marketing', 'Private Sale', 'Public Sale', 'Team', 'Liquidity', 'Seed', 'Staking & Farming'];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Tokenomics',
      backgroundColor: [
        '#FF8099',
        '#1ED9F3',
        '#3BFFDC',
        '#FFF1A7',
        '#E498FF',
        '#AF89FF',
        '#FAEBFF',
        '#F1426D'
    ],
      borderColor: [
        '#FF8099',
        '#1ED9F3',
        '#3BFFDC',
        '#FFF1A7',
        '#E498FF',
        '#AF89FF',
        '#FAEBFF',
        '#F1426D'
    ],
      data: [17, 10, 20, 10, 10, 5, 10, 18],
    }]
  };

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right',
      },
      
      // title: {
      //   // ID of the container to put the legend in
      //   containerID: 'legend-container',
      //   display: false,
      //   text: 'Chart.js Doughnut Chart'
      // }
    }
  },
};

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