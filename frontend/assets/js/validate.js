const btn = document.getElementById("btn");
btn.addEventListener("click", isValid, false);
let url ='http://localhost:3000/stockInput'

function isValid(){

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
            ).then((res) => res.json())
            .then( function (res){
                if (!res.ok) {
                    const message = `An error has occured: ${res.status}`;
                    //alert(message)
                    throw new Error(message);
                  } else {
                    window.location('result.html');
                  }
             }
             
        )
           
            .catch((err)=>{alert("Đã xảy ra lỗi",err); console.log(err)})
           }
        
    
    }