function fnArrayConcept() {

    var studentInformation = ["Sagar","Zoya","Sneha","Sameer"]
    // console.log(studentInformation)
    //   Add new element in array

     studentInformation.push("Ajay")
      console.log(studentInformation)
      //Remove the Element
      studentInformation.pop()
      console.log(studentInformation)
      //Insert Element at First Position
      studentInformation.unshift("Swati")
      console.log(studentInformation)
      //Remove Element from First position
      studentInformation.shift()
      console.log(studentInformation)
      console.log(studentInformation.length)
}
//   fnArrayConcept()
  function fnArrayFilter() {
      var number = [23,45,67,12,2,5,09,99,100,58]
        
       var number1 = number.filter(function(data,index){
           return data >  50
       })
        console.log(number1)

  }
//   fnArrayFilter()

  function fnForEach() {
      var data = [10,20,30,40,50]
        data.forEach(function(data,index){
              console.log(data + 10)

        })
  }
  fnForEach()
  


   
     
   

