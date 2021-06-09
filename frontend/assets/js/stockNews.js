let ticker = localStorage.getItem("ticker")
let previousPage = document.getElementById("previous-page")
let nextPage = document.getElementById("next-page")
let currentPage = 1
//let ticker = "AAPL"
let news ={
    method: 'GET',
    url: `https://newsapi.org/v2/everything`,
    params: {
        "qInTitle" : ticker,
        "language" : "en",
        "page" : currentPage,
        "pageSize" : 12 
  },
   headers: {
}}

async function getStockNews() {
    news["page"] = currentPage
    //console.log(news)
    try{
        let prom = axios.request(news)
        let responses = await prom
        //console.log(responses.data.articles)
        getNewsCard(responses.data.articles)
    }
    catch(e){
        alert(`Something went wrong, ${e}`)
        console.log(e)
    }
}

function getNewsCard(articles){
const row = document.getElementById("row-1")
if (articles.length != 0){
    for (let res of articles){
        let div = document.createElement('div')
        div.setAttribute('class','col-sm-3')
        row.append(div)
        let card = document.createElement('div')
        card.setAttribute('class','card')
        div.append(card)
        let img = document.createElement('img')
        img.setAttribute('class','card-img-top')
        img.setAttribute('src',res.urlToImage)
        card.append(img)
        let cardBody = document.createElement('div')
        cardBody.setAttribute('class','card-body')
        card.append(cardBody)
        let headline = document.createElement('h5')
        headline.setAttribute('class','h2 card-title mb-0')
        cardBody.append(headline)
        headline.innerText =` ${res.title}`
        let author = document.createElement('small')
        author.setAttribute('class','text-muted')
        cardBody.append(author)
        let date = moment(res.publishedAt).format("YYYY-MM-DD");
        author.innerText = `by ${res.author} on ${date}`
        let description = document.createElement('p')
        description.setAttribute('class','card-text mt-4')
        cardBody.append(description)
        description.innerText = `${res.description}`
        let btn = document.createElement('a')
        btn.setAttribute('class','btn btn-link px-0')
        btn.innerText = 'View article'
        btn.href = `${res.url}`
        btn.target = '_blank'
        cardBody.append(btn)
     }
} else {
    Swal.fire({
        // icon: 'error',
        title: 'Oops...',
        text: 'We have no more news to show at the moment',
      }).then(()=>{
        window.location.href='index.html'
      })
}
   
 
}

function removeNews() {
    let allNews = document.querySelectorAll(".col-sm-3")
    for ( let news of allNews){
        news.remove()
    }
}

async function getMoreNews(){
    news['page'] = currentPage
    removeNews()
    await getStockNews()
}

function check() {
    previousPage.disabled = currentPage == 1 ? true : false;
}

nextPage.addEventListener("click",()=>{
    currentPage = currentPage + 1
    getMoreNews()
    check()
})

previousPage.addEventListener('click',()=>{
    currentPage = currentPage - 1
    check()
    getMoreNews()
})

getStockNews()
