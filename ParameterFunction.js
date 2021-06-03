// function paraFn(x,y) {

//    console.log(x,y)
   //    or
//    y();

// }

// paraFn(23,45)
// paraFn("A2N","Academy")

// paraFn(23,function(){
//     console.log("Sagar")
// })

function fn(x){
    // console.log(x) 
    x()
}

fn(function(){
    console.log("A2N Academy")
})

