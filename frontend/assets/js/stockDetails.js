let ticker = localStorage.getItem("ticker")
//let ticker = "AAPL"
let ctx = document.getElementById('stock-chart').getContext('2d');
let time = Date.now()

let newsAPIkey = '0f3baa968294406481578725d354a302'

const rest = {
    method: 'GET',
    url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v11/finance/quoteSummary/'+ticker,
    headers: {
      'x-rapidapi-key': '4f545a084fmsh68cbc4b65e83956p153360jsnc888a2054a67',
      'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com'
    }
  };

  const summary = {params: {modules: 'summaryDetail'}, ...rest}
  const price = {params: {modules: 'price'}, ...rest}
  const chart ={...rest,
    params: {interval: '1d', range: '1y'},
    url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/'+ticker
    }
//   const chart ={
//       method: 'GET',
//       url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart',
//       params: {
//         interval: "1d",
// 	    range: "3m",
//         symbol: ticker,
//         range: '1y',
//         region: 'US',
//         period1: time.toString()
//     },
//   headers: {
//     'x-rapidapi-key': '4f545a084fmsh68cbc4b65e83956p153360jsnc888a2054a67',
//     'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
//   }}

async function getStockData() {
    try{
        const prom1 = axios.request(summary)
        const prom2 = axios.request(price)
        const prom3 = axios.request(chart)
        const response = await Promise.all([prom1,prom2,prom3])
        //console.log(response)
        getStockPrice(response)
        getStockSummary(response)
        getChartData(response)

    } catch(e){
        alert(`Something went wrong, ${e}`)
        console.log(e)
    }
}

function getStockPrice(response){
    const {
        currency,
        exchangeName,
        longName,
        quoteSourceName,
        symbol,
        regularMarketChange,
        regularMarketPrice,
        regularMarketChangePercent,
        regularMarketVolume} = response[1].data.quoteSummary.result[0].price

    document.getElementById("stock-name").innerText = `${longName} (${symbol})`
    document.getElementById("quote-name").innerText = `${exchangeName} - ${quoteSourceName}.Currency in ${currency}`
    document.getElementById("regular-market-price").innerText = `${regularMarketPrice.fmt}`
    document.getElementById("regular-market-change").innerText = `${regularMarketChange.fmt} (${regularMarketChangePercent.fmt})`
    const el = document.getElementById("regular-market-change") 
    regularMarketChange.fmt < 0 ? el.classList.add("text-danger") :  el.classList.add("text-success")
    // add card 4
    document.getElementById("volume").innerText = `${regularMarketVolume.fmt}`
}

function getStockSummary(response){
    const {
        ask,
        bid,
        previousClose,
        open,
        averageVolume,
        marketCap,
        beta,
        trailingPE,
        dividendYield,
        exDividendDate,
        forwardPE,
        dividendRate,
        fiveYearAvgDividendYield,
        bidSize,
        askSize
    } = response[0].data.quoteSummary.result[0].summaryDetail

    document.getElementById("avg-volume").innerText = `${averageVolume.fmt}`
    document.getElementById("bid").innerText = `${bid.fmt}`
    document.getElementById("bid-size").innerText = `${bidSize.fmt}`
    document.getElementById("ask").innerText = `${ask.fmt}`
    document.getElementById("ask-size").innerText = `${askSize.fmt}`


    let arr1 =[]
    let arr2 =[]
    arr1.push(previousClose,open,marketCap,beta,trailingPE)
    arr2.push(dividendRate,dividendYield,exDividendDate,forwardPE,fiveYearAvgDividendYield)
    addCells(arr1,"summary-1")
    addCells(arr2,"summary-2")

    
}

function addCells(arr,tableId) {
    table = document.getElementById(tableId)
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "undefined"){
            arr[i] = new Object ()
            arr[i]['fmt'] = 'N/A'
          }else if(Object.keys(arr[i]).length === 0){
            arr[i]['fmt'] = 'N/A'
          }
        let cell = table.rows[i].cells[1]
        cell.innerText = arr[i]['fmt']
    }
}

function getChartData(response) {
    let timestamp=[]
    let allPrice = response[2].data.chart.result[0].indicators.quote[0].close
    let allVolume = response[2].data.chart.result[0].indicators.quote[0].volume
    let allOpen = response[2].data.chart.result[0].indicators.quote[0].open
    let allHigh = response[2].data.chart.result[0].indicators.quote[0].high
    let allLow = response[2].data.chart.result[0].indicators.quote[0].low
    let allTimestamp = response[2].data.chart.result[0].timestamp
    for (time of allTimestamp){
        timestamp.push(moment.unix(time).format("L"))
    }
    stockChart.data.labels.push(...timestamp)
    stockChart.data.datasets[0].data.push(...allVolume)
    stockChart.data.datasets[1].data.push(...allPrice)
    stockChart.data.datasets[2].data.push(...allOpen)
    stockChart.data.datasets[3].data.push(...allHigh)
    stockChart.data.datasets[4].data.push(...allLow)
    stockChart.options.scales.yAxes[1].ticks.max = Math.max(...allPrice) + 1
    stockChart.options.scales.yAxes[1].ticks.min = Math.min(...allPrice) - 5

    for (let i=0; i<allVolume.length; i++){
        if (allVolume[i]<allVolume[i+1]){
            stockChart.data.datasets[0].backgroundColor[i] = 'rgb(255, 99, 132)'
            stockChart.update();
        } else {
            stockChart.data.datasets[0].backgroundColor[i] = 'rgb(80,220,100)'
            stockChart.update();
        }
    }

    stockChart.update();
}


let stockChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Volume',
                data: [],
                backgroundColor: [],
                // this dataset is drawn below
                order: 2,
                yAxisID : 'left-y-axis'
            }, {
                label: 'Close',
                data: [],
                type: 'line',
                // this dataset is drawn on top
                order: 1,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
                fill: false,
                yAxisID: 'right-y-axis'
            },
            {
                label: 'Open',
                data: [],
                type: 'line',
                hidden: false,
                fill:false,
                borderColor: '#172b4d',
                backgroundColor: '#172b4d',
                // this dataset is drawn below
                order: 2,
                yAxisID : 'right-y-axis'
            },
            {
                label: 'High',
                data: [],
                type: 'line',
                hidden: false,
                fill:false,
                borderColor: '#172b4d',
                backgroundColor: '#172b4d',
                // this dataset is drawn below
                order: 2,
                yAxisID : 'right-y-axis'
            },
            {
                label: 'Low',
                data: [],
                type: 'line',
                hidden: false,
                fill:false,
                borderColor: '#172b4d',
                backgroundColor: '#172b4d',
                // this dataset is drawn below
                order: 2,
                yAxisID : 'right-y-axis'
            }

        ],
            labels: []
        },
        options: {
            tooltips: {
                displayColors: false
            },
            scales: {
                yAxes: [
                    {
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display:false
                    },   
                }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        display:false
                    },
                    ticks: {
                      }
                }]
            },
          },
         
         
     });



getStockData()

