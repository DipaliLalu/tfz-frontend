let myDate=new Date();
console.log(myDate); 

console.log(myDate.toString()); 
console.log(myDate.toDateString()); 
console.log(myDate.toLocaleString('default',{
    month:"long",
    year:"numeric",
    day:"numeric",
}));
console.log(myDate.toISOString());

// let myCreatedDate=new Date(2023,0,22,5,20,10);
let myCreatedDate=new Date(2023,13,22,13,20,10);
console.log(myCreatedDate.toLocaleString());


//get methods og date
console.log(myDate.getFullYear());
console.log(myDate.getMonth()+1);
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getTime());
console.log(myDate.getDay());

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[myDate.getDay()]);

//set methods of dates;
myDate.setFullYear(2023);
console.log(myDate.getFullYear());

const d = new Date();
// console.log(d.getDate() + 50);
// d.setDate(21);
d.setDate(d.getDate() + 10); // can also be used to add days to a date(for example 50)
console.log(d);

//compare dates
let text='';
const today= new Date();
const someday=new Date();
someday.setFullYear(2025,11,22);
if(someday>today){
    text="Today is before December 22, 2025";
}else{
     text="Today is after December 22, 2025";
}
console.log(text);


