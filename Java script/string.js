const s1="Hi my name is Dipali. Name";
const s2='Hi my name is Rajal.';
const s3=`Hi my name is Dipali.`;
const s4=new String('A String object');
// console.log(s1.length);
// console.log(s1.charAt(1)); it is count 1,2 ..(give the position)
// console.log(s1[3]); it is count index ways
const strobj=new String(s3);
// console.log(typeof strobj); // it is return a object type. ( string wrapper in object )
// const s1 = '2+2'; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2.valueOf())); //both are equal valueOf and toString
// console.log(eval(s2.toString())); 
// console.log(`${s2} ${s4}`); // template string
// console.log(s3.bold());
// console.log(s1.concat(s2));
// console.log(s1.endsWith('.')); // it's give a boolean value.
// console.log(s1.includes('Dipali'));
// console.log(s1.indexOf('name'));
// console.log(s1.lastIndexOf('name'));
let reg=/[A-Z]/g;
console.log(s1.match(reg));
let str="this is cat."
let str2="cat"
// console.log(str.trim());
console.log(str.match(str2));

