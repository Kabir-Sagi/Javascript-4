function fnSetTimeOut() {
    setTimeout(function(){
       console.log("Hello I am SetTimeOut")

    },3000)

}

// fnSetTimeOut()

function fnSetInterval() {
 var interval1 =   setInterval(function(){
         console.log("Hi I am setInterval")
    },2000)
   
}

  function fnSetTimeOut() {
      clearInterval()
  }
  
  setTimeout(function(){
              fnSetTimeOut()
        },6000)

fnSetInterval()