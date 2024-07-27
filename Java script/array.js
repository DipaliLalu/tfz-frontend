const arr=['a','b','c'];
// console.log(arr.toString());
// console.log(arr[1]='d');

// console.log(arr.join('-'));
console.log(arr.pop()); //remove element in last
console.log(arr.push('e')); // add element in last
console.log(arr.shift()); //remove the element in beginning
console.log(arr.unshift('f')); //add the element in beginning
delete arr[1];
arr[1]='s';
const arr1=['A','B','C'];
console.log(arr.concat(arr1)); // retuan the new array
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
arrs.forEach((e)=>{
    // console.log(e);
})

for (const iterator of arrs) {
    // console.log(iterator);
}

for (const key in arrs) {
// console.log(key);//return a key of array
//    console.log(arrs[key]);//return a value
}

let a=[1,3,4,2,5];
let a1=a.map((value,index,arr)=>{
    // console.log(value,index,arr);
    return value*index;
});
console.log(a1);
 
let a2=a.filter((value)=>{
    return value;
})
console.log(a2);
 let add=(a,b)=>{
    return a+b
 }
let a3=a.reduce((add));
console.log(a3);
console.log(a);


