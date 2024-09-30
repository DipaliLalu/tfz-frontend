const arr=['a','b','c'];
// console.log(arr.toString());
// console.log(arr[1]='d');

// console.log(arr.join('-'));
// console.log(arr.pop()); //remove element in last
// console.log(arr.push('e')); // add element in last
// console.log(arr.shift()); //remove the element in beginning
// console.log(arr.unshift('f')); //add the element in beginning
// delete arr[1];
arr[1]='s';
const arr1=['A','B','C'];
// console.log(arr.concat(arr1)); // retuan the new array
let compare=(a,b)=>{
    // return a-b;
    return b-a;
}
let num=[23,60,11,5,4];
// let ans=num.sort(compare);
// console.log(ans);
// console.log(ans.reverse());
// console.log(num.splice(1,3,10,11,12)); //effect a original array
// console.log(num.slice(2,5)); // it is create a new array so it's not effect an original array
// console.log(num.fill(0,2));
// console.log(num);

// console.log(arr.length);
// console.log(arr);

let arrs=Array.from('dipali');
// console.log(arrs)
 
for (let i = 0; i < arrs.length; i++) {
    const element = arrs[i];
    // console.log(element);
}
const xyz=[1,2,3,4,5]
let ab=xyz.forEach((e)=>{
    // console.log(e*e);
    // return e;
});
// console.log("return for each:",ab);

for (const iterator of arrs) {
    // console.log(iterator);
}

for (const key in arrs) {
// console.log(key);//return a key of array
//    console.log(arrs[key]);//return a value
}

let a=[1,3,4,2,5];
let a1=a.map((value,index,a)=>{
    return value*index;
})
// console.log('a1 is',a1); 
let a2=a.filter((value)=>{
    return value;
})
// console.log(a2);
 let add=(a,b)=>{
    return a+b
 }
let a3=a.reduce((add));
// console.log(a3);
// console.log(a);

const array=['apple','banana','mango','oranage','apple'];
console.log(array.indexOf('apple'));
console.log(array.includes('apple'));
console.log(array.lastIndexOf('apple'));
const arrays=[1,2,3,4,5,6]
console.log(arrays.find((value)=>{
    return value>5;
}));
console.log(arrays.findIndex((value)=>{
    return value>5;
}));

// array object
const demo=[
    {name:'xyz',age:10},
    {name:'abc',age:20},
    {name:'bcd',age:15},
];
demo.pop();
demo.push({name:'bbb',age:15});
// console.log(demo);
// console.log(demo[2].age);

const obj={
    0:1,
    1:2,
    2:3
}
let newArrObj=[];
for (const value of Object.values(obj)) {
    // console.log(value);
    newArrObj.push(value);
}
// console.log(newArrObj);
let newObjArr={};
for (const [key,value] of Object.entries(newArrObj)) {
    newObjArr[key]=value;
}
console.log(newObjArr);
