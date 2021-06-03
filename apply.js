var obj1 = {
    n1:10
}
var obj2 = {
    n1:100
}

function fnSum(n2,n3) {
    console.log( this.n1 + n2 + n3)
}

  fnSum.apply(obj2,[10,10])