console.log("2">1);
console.log("1">2);

console.log(null>0);
console.log(null<0);
console.log(null>=0);//true
console.log(null==0);//false
// one thing to note over here is this :- ><>= comaprison operators convert null to 0 but == and === work differently they
// don't consider null as zero.

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
console.log(undefined>=0);

// here in case of undefined the output will always be zero
//so we can say that equality check and conversion operator works differently 

// ==   and ===
// == checks equality if the values are equal and one is in string format other is in number format type conversion will happen 
// automatically if possible , but if === is used it will check the datatype also not only the number got it.....!

console.log("2"==2);//true
console.log("2"===2);//false