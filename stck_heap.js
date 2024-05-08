// Stack (primitive) heap(non-primitive):-

//changes done with the primitive type of data:-
let myName="Anushka";
let anotherName=myName;
console.log(myName);
anotherName="Payal";
console.log(anotherName);
//now here see if we make changes to another name changes will not occur with my name beacuse here a copy of myName was a
// assigned to anotherName therefore changes made to the copy will not appear with the original myName part.


//Changes done with the non primitive type of data:-
let userOne={
    email:"user@google.com",
    upi:"user@ybl",
};
let userTwo=userOne;

//So what will happen here is variable will surely be declared but like userOne and userTwo named but both will have the 
// reference of same input
userTwo.email="anushka@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

//so in the  above example I actually made changes to the userTwo's email but it  do changed for userOne also!!
