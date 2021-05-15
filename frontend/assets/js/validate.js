const btn = document.getElementById("btn");
btn.addEventListener("click", isValid, false);

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
    } 
    }