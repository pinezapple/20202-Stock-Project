const btn = document.getElementById("btn");
const form = document.querySelector("#stockInput")
form.addEventListener("submit", (e)=> e.stopPropagation());
btn.addEventListener("submit",(e)=>e.preventDefault())
btn.addEventListener("click", isValid);

let url ='http://localhost:3000/stock_input'

function isValid(e){
  e.preventDefault()
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
              } else {
                window.location.href = 'result.html'
                // console.log(res.status)
              }
            })
            .catch((err)=>{
              console.log(err)
              alert("An error has occured",err); 
           })
           }
    }


