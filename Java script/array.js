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
console.log(num.splice(1,3,10,11,12));
console.log(num.slice(2,5)); // it is create a new array so it's not effect an original array
console.log(num);

// console.log(arr.length);
// console.log(arr);


