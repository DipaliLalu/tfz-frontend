console.log('Set Object in Js');
let data = new Set([1, 2, 3, 4, 5, 2, 1, 1]);
console.log('Data is:', data);

data.add(20);
data.add('hello')

data.delete(3)

console.log('Updated data is:', data);

for (const iterator of data) {
    console.log('element : ', iterator);
}

console.log('has() value: ',data.has(2));
console.log('size is:',data.size);
console.log('value is: ',data.values());
console.log('keys:',data.keys());
console.log('entries() :',data.entries());

let d=data[1];
console.log('d is:',d);

let arr=[2,3,4,1,4];
console.log(typeof arr);
console.log('arr is:',arr);

let set=new Set(arr);
console.log('set is:',set);
console.log(typeof set);
console.log(typeof data);

let array=Array.from(set);
console.log('array is:',array);

// data.clear()
// console.log('Data is:', data);

