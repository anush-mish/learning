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

