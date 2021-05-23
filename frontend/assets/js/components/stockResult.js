let resultUrl = 'http://localhost:3000/stock_predicted'
let chart = document.getElementById('chart-stock-1')



let ctx = document.getElementById('chart-stock-1').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Predicted price model 1',
        data: [],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        tension: 0.1

      },
      {
        label: 'Predicted price model 2',
        data: [],
        backgroundColor: 'rgba(255, 206, 86, 188)',
        borderColor: 'rgba(255, 206, 86, 188)',
        fill: false,
        tension: 0.1

      },
      {
        label: 'Actual price',
        data: [],
        tension: 0.1

      }]
    },
    options: {
      scales: {
        yAxes: [{
          gridLines: {
            color: Charts.colors.gray[200],
            zeroLineColor: Charts.colors.gray[200]
          },
          ticks: {

          }
        }]
      },
    
    }
});



function addLabels(chart, labels) {
  chart.data.labels.push(...labels)
  chart.update();
}

function addPrice(chart,arr1,arr2,arr3 ){
  chart.data.datasets[0].data.push(...arr1)
  chart.data.datasets[1].data.push(...arr2)
  chart.data.datasets[2].data.push(...arr3)
  chart.update();
}


async function getData(){
  const res = await fetch (resultUrl,
      {
         method: 'POST',
        credentials: "omit",
        headers: {
           'Content-Type': 'application/json',
           },
          })
          
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      alert('Something went wrong')
      throw new Error(message);
    }
  
  const data = await res.json()

  let ticket = `${data.ticket}`    
  let labels = data.timestamp
  let actualPrice = data.actualprice
  let priceModel1 = data.price_model_1
  let priceModel2 = data.price_model_2
  
  addLabels(myChart, labels)
  addPrice(myChart, priceModel1,priceModel2,actualPrice)
  document.getElementById("stockName").innerHTML = `Ticket: ${ticket} from ${data.timestamp[0]} to ${data.timestamp[data.timestamp.length -1]}`
}

getData().catch((err)=>{alert("An error has occured",err); console.log(err)})



