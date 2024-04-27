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


//operations:-
console.log(2+"2");
console.log("1"+2);
console.log(1+2+"3");
console.log("1"+2+3);

//tricky conversion(please avoid these types of conversions):-
console.log(+true);
console.log(+"");
console.log(+false);


//ways of writing to be avoided:-
let num1,num2,num3;
num1=num2=num3=2+2;

// post increment operator:-
let yeah=0;
console.log(yeah++);
console.log(yeah);

//pre increment operator:-
let yup=1;
console.log(++yup);
console.log(yup);