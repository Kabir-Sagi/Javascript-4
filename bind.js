var obj1  = {
    n1:10
}

function fnSum(n2,n3) {
    
    var res = this.n1 + n2 + n3
    console.log(res)
}

//   var fn = fnSum.bind(obj1,2,3)
//     fn()

        //  fnSum.bind(obj1,10,10)()

        fnSum.bind(obj1)(5,5)