console.log('Maps in Js');

let obj={
    1:'hello',
    2:'hii',
    true:'hey',
    '':'apple'
}
console.log('object is:',typeof obj[true]);

let data=new Map([
    [1,'hello'],
    [2,'hii'],
    [true,'hey'],
    ['demo','how are u']
])
data.set(3,'apple');
console.log('data is:',data);
console.log('get the value :',data[2]);
console.log('type is',typeof data);
console.log('size od map:',data.size);
console.log('delete element:',data.delete('demo'));
console.log('data is:',data);
console.log('apple is exists or not:',data.has('apple'));
console.log('apple is exists or not:',data.has(true));
console.log('entires():',data.entries());
console.log('keys in maps',data.keys());
console.log('values in maps',data.values());





