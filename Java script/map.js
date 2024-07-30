const array=[2,3,4,1,5];
// console.log(array);
// let a=array.map((x,index,arr)=>{
//     console.log(arr,x,index);
//       return x;
// });
let a=array.map(myFunction);
function myFunction(value,index) {
    return value *2;
  }
console.log('a is : ',a);

const array2=[33,44,55,11,22];
let b=array2.filter((value)=>{
    return value%2==0;
})

console.log('b is : ',b);