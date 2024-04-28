// primitive types of data(passed by value):-
// string,number,boolean,undefined,null,symbol and bigint

// Javascript is a dynamically typed language because here we don't have to declare it's type like int , float

const num=100;
const n=100.3;

const outside=null;
let  inside;//undefined but const inside ko undefind rakhne pe error kyu

const id=Symbol('123');
const newid=Symbol('123');
console.log(id==newid);//false

// Symbol => bhale 

// non primitive datatypes(passed by reference):-
// Array,Objects,Functions

// In JavaScript, when you append n to the end of a number, like 12333545463645n, you're explicitly declaring it as a BigInt.4
// let bigNumber=12345677797969866543
;//output=>12345677797969867000

// const bigNumber=12345677797969866543n;
// console.log(bigNumber);
console.log(typeof bigNumber);//why this works???

//array:-
const heros=["Shaktiman","Nagraj","Doga"];
console.log(heros[0]);
console.log(heros[1]);
console.log(heros[2]);

let myob={
    Name:"Anushka",
    Class:"12th",
    innerobj:{
        newNum:123,
        oldNum:456,
    }
};

console.log(myob.Name);
console.log(myob["Name"]);
console.log(myob.innerobj);
console.log(myob.innerobj.newNum);

const myFunc=function(){
    console.log("hello world");
}

myFunc();//function call in this manner+


console.log(typeof myFunc);//function (although called as object function )

console.log(typeof heros);//object

