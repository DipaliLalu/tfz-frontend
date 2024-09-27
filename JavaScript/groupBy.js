const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
const result=Object.groupBy(inventory,({quantity})=>quantity>5?"ok":"restock");
// console.log('result is: ',result); 

function groupByEvenOdd(arr){
    return arr.reduce((acc,num)=>{
      if(num %2==0){
        acc.even.push(num);
      }else{
        acc.odd.push(num);
      }
      return acc;
    },{even:[],odd:[]});
}
// console.log(groupByEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function groupByLength1(arr){
    return arr.reduce((acc,val)=>{
      if(val.length==4){
        acc.four.push(val);
      }else if(val.length==5){
        acc.five.push(val);
      }else{
        acc.six.push(val);
      }
      return acc;
    },{four:[],five:[],six:[]});
}
// console.log(groupByLength(['apple', 'banana', 'apricot', 'blueberry', 'cherry']));

function groupByLength(arr){
  return arr.reduce((acc,val)=>{
    let length=val.length;
    if(!acc[length]){
      acc[length]=[];
    }
    acc[length].push(val);
    return acc;
  },{});
}
console.log(groupByLength(['apple', 'banana', 'kiwi', 'pear', 'plum']));

function groupByAge(arr){
  return arr.reduce((acc,person)=>{
      let age=person.age;
      if(!acc[age]){
        acc[age]=[];
      }
      acc[age].push(person);
      return acc;
  },{})
}
// console.log(groupByAge([
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 20 },
//   { name: 'Bill', age: 25 },
//   { name: 'Lucy', age: 20 }
// ]));

function FizzBuzz(){
    const arr=[];
    for (let i = 1; i <=100; i++) {
         if(i%15==0)arr.push("fizzBuzz")   
        else if(i%3==0)arr.push("fizz")
        else if(i%5==0)arr.push("Buzz")
        else arr.push(i.toString());
    }      
    return arr;
}
// console.log(FizzBuzz());

function sumOfDigit(arr){
    return arr.reduce((acc,number)=>acc+number);    
}
let arr=[1,2,3,4];
console.log(sumOfDigit(arr));

