//Numeric string:-
let score="33";
// const {score}=req.body
console.log(typeof score);
let valueInNumber=Number(score);
console.log(typeof valueInNumber);

//alnum string:-
let b="123b";
console.log(typeof b);
let val=Number(b);
console.log(typeof val);
console.log(val);

// null
let c=null;
console.log(typeof c);
let val1=Number(c);
console.log(typeof val1);
console.log(val1);

// undefined :-
let n=undefined;
console.log(typeof n);
let val2=Number(n);
console.log(typeof val2);
console.log(val2);

//number to boolean:-
let num=1;
let boolNum=Boolean(num);
console.log(boolNum);

let x="";
let boolX=Boolean(x);
console.log(boolX);

let y="abc";
let boolY=Boolean(y);
console.log(boolY);

let z=9;
let boolZ=Boolean(z);
console.log(boolZ);

let someN=32;
let stringNum=String(someN);
console.log(typeof stringNum);


