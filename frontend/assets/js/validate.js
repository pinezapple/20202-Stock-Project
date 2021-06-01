const btn = document.getElementById("btn");
const form = document.querySelector("#stockInput")
form.addEventListener("submit", (e)=> e.stopPropagation());
btn.addEventListener("submit",(e)=>e.preventDefault())
btn.addEventListener("click", isValid);

let url ='http://25.61.234.199:10001/get/ticket'

function isValid(e){
  //e.preventDefault()
    let startDate = new Date(document.getElementById('startDate').value)
    let endDate = new Date (document.getElementById('endDate').value)
    let endDateMax = new Date()
    endDateMax.setDate(startDate.getDate() + 5)
    // console.log(endDateMax)
    if (endDate >= endDateMax){
        // alert('Date range must not be greater 5')
        Swal.fire({
            // icon: 'error',
            title: 'Oops...',
            text: 'Date range must not be greater 5',
          })
    } else {
      
      e.preventDefault()
        let from = document.getElementById('startDate').value
        let to = document.getElementById('endDate').value
        let name = document.getElementById('stock').value

        fetch(url,
            {
            method: 'POST',
            credentials: "omit",
            headers: {
               'Content-Type': 'application/json',
              //  Authorization: "Bearer " + token,
              },
              body:JSON.stringify({from:from,to:to,name:name})
            }
            )
            .then((res) => {
              if (!res.ok) {
                const message = `An error has occured: ${res.status}`;
                alert('Something went wrong')
                throw new Error(message);
              }         
              return res.json()
            })
            .then((res)=> {
              console.log(res)
              storeData(res)
            })
            
            //.then(storeData(data))
            .then(()=> window.location.href='result.html')
            .catch((err)=>{
              console.log(err)
              alert("An error has occured",err); 
           })
          
           }
    }



function storeData(data) {
  
  let ticker = `${data.ticker}`    
  let labels = data.timestamp
  let actualPrice = data.actual_price
  let priceModel1 = data.price_model_1
  let priceModel2 = data.price_model_2
  if (localStorage.length != 0){
    localStorage.clear()
  } 
  localStorage.setItem("labels",JSON.stringify(labels))
  localStorage.setItem("actualPrice",JSON.stringify(actualPrice))
  localStorage.setItem("priceModel1",JSON.stringify(priceModel1))
  localStorage.setItem("priceModel2",JSON.stringify(priceModel2))
  localStorage.setItem("ticker",ticker)
}