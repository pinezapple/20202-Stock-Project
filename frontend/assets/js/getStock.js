let btnGetDetail = document.getElementById('get-stock-details')
let btnGetNews = document.getElementById('get-stock-news')

btnGetDetail.addEventListener('click',()=>{
    let ticker1 = document.getElementById('ticker-1').value
    if (localStorage.length = 0){
        localStorage.setItem("ticker",ticker1)
    } else {
        localStorage.clear()
        localStorage.setItem("ticker",ticker1)
        //window.location.href='stock-details.html'
    }
    window.location.href='stock-details.html'
})
btnGetNews.addEventListener('click',()=>{
    let ticker2 = document.getElementById('ticker-2').value
    if (localStorage.length = 0){
        localStorage.setItem("ticker",ticker2)
    } else {
        localStorage.clear()
        localStorage.setItem("ticker",ticker2)
        //window.location.href='stock-news.html'
    }
    window.location.href='http://localhost:5500/frontend/stock-news.html'
})