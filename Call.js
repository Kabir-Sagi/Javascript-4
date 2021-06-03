var obj1 = {
    n1:10
}
var obj2 = {
    n1:100
}

var obj3 = {
    n1:1000
}
function fnSum(n2,n3) {
    
    var result = this.n1 + n2 + n3     //500  300times
    console.log(result)
}

  fnSum.call(obj3,2,3)