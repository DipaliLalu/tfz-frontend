// console.log('Destructuring in Js');

// // destructuring in array
// let arr = [1, 2, 3, 4,5,6,7,8,9];
// // let [a, b, c] = arr;
// let [a, b,,,c,...est] = arr;
// console.log('a,b,c,rest:', a, b, c,est);

// // destructuring in object
// let obj = {
//     firstName: 'xyz',
//     lastName: 'abc',
//     age: 20
// }
// let { firstName, lastName } = obj;
// let {lastName:name}=obj
// console.log('firstName and lastName is', firstName, lastName);
// console.log('name is', name);

// // String Destructuring
// let str="helloworld";
// let[a1,a2,a3,,,a4]=str;
// console.log('value of a1,a2,a3,a4:',a1,a2,a3,a4);

let arr=[1,2,3,4,5,6,7];
// let a=10;
let [...arr1]=arr;
console.log(...arr1);


