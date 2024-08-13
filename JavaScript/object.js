const person={
    FirstName:"Dipali",
    LastName:"Lalu",
    age:20,
    eyeColor:'black',
};
person.hobby="cooking";

//delete value
delete person['eyeColor'];
//assign a person2 in person1. 
const person2={
    FirstName:"rajal",
    LastName:"xyz",
};  
// Object.assign(person,person2);

// Object.entries() returns an array of the key/value pairs in an object.
// console.log(Object.entries(person));

// The fromEntries() method creates an object from a list of key/value pairs.
const fruit=[["apples", 300],["pears", 900],["bananas", 500]];
const p=Object.fromEntries(fruit);
// console.log(p);

// Object.values() returns an array of values from an object.
// console.log(Object.values(person));

// The Object.keys() method returns an array with the keys of an object.
// console.log(Object.keys(person));

//use a for in loop and get a value
let txt="";
for (let x in person) {
    txt+= person[x]+" ";
}
// console.log(txt);

//js object constructor
function Self(first,last,age,eye){
    this.first=first;
    this.last=last;
    this.age=age;
    this.eye=eye;
}
const sister=new Self("rajal","xyz",17,'blue');
console.log(sister);

